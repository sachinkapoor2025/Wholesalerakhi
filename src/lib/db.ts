import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, GetCommand, PutCommand, QueryCommand, ScanCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import { v4 as uuid } from "uuid";
import { selectLiveBanners } from "@/lib/banners";
import { isAwsConfigured } from "@/lib/env";
import type { LeadStatus, SeasonalBanner, WholesaleLead } from "@/types";

const region = process.env.AWS_REGION || "us-east-1";
const leadsTable = process.env.LEADS_TABLE || "WholesaleLeads";
const bannersTable = process.env.BANNERS_TABLE || "SeasonalBanners";

let doc: DynamoDBDocumentClient | null = null;
let ses: SESClient | null = null;

function client() {
  if (!isAwsConfigured()) return null;
  if (!doc) {
    doc = DynamoDBDocumentClient.from(new DynamoDBClient({ region }), {
      marshallOptions: { removeUndefinedValues: true },
    });
  }
  return doc;
}

function mailer() {
  if (!process.env.SES_FROM_EMAIL || !process.env.SES_NOTIFY_EMAIL) return null;
  if (!ses) ses = new SESClient({ region });
  return ses;
}

export async function createLead(input: Omit<WholesaleLead, "leadId" | "createdAt" | "status">): Promise<WholesaleLead> {
  const lead: WholesaleLead = {
    ...input,
    leadId: uuid(),
    createdAt: new Date().toISOString(),
    status: "NEW",
  };
  const db = client();
  if (db) {
    await db.send(new PutCommand({ TableName: leadsTable, Item: lead }));
    await notifyLead(lead);
  } else if (process.env.NODE_ENV !== "production") {
    memoryLeads.unshift(lead);
  } else {
    throw new Error("Lead storage is not configured.");
  }
  return lead;
}

export async function listLeads(): Promise<WholesaleLead[]> {
  const db = client();
  if (!db) return memoryLeads;
  const result = await db.send(new ScanCommand({ TableName: leadsTable }));
  return ((result.Items ?? []) as WholesaleLead[]).sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function updateLeadStatus(leadId: string, status: LeadStatus): Promise<void> {
  const db = client();
  if (!db) {
    const lead = memoryLeads.find((item) => item.leadId === leadId);
    if (lead) lead.status = status;
    return;
  }
  await db.send(
    new UpdateCommand({
      TableName: leadsTable,
      Key: { leadId },
      UpdateExpression: "SET #status = :status",
      ExpressionAttributeNames: { "#status": "status" },
      ExpressionAttributeValues: { ":status": status },
    }),
  );
}

export async function getActiveBanners(): Promise<SeasonalBanner[]> {
  const all = await listBanners();
  return selectLiveBanners(all);
}

export async function listBanners(): Promise<SeasonalBanner[]> {
  const db = client();
  if (!db) return memoryBanners;
  const result = await db.send(new ScanCommand({ TableName: bannersTable }));
  return (result.Items ?? []) as SeasonalBanner[];
}

export async function getBanner(bannerId: string): Promise<SeasonalBanner | undefined> {
  const db = client();
  if (!db) return memoryBanners.find((item) => item.bannerId === bannerId);
  const result = await db.send(new GetCommand({ TableName: bannersTable, Key: { bannerId } }));
  return result.Item as SeasonalBanner | undefined;
}

export async function upsertBanner(banner: SeasonalBanner): Promise<SeasonalBanner> {
  const db = client();
  const next = { ...banner, updatedAt: new Date().toISOString() };
  if (!next.bannerId) next.bannerId = uuid();
  if (!next.createdAt) next.createdAt = next.updatedAt;
  if (db) {
    await db.send(new PutCommand({ TableName: bannersTable, Item: next }));
  } else {
    const index = memoryBanners.findIndex((item) => item.bannerId === next.bannerId);
    if (index >= 0) memoryBanners[index] = next;
    else memoryBanners.unshift(next);
  }
  return next;
}

async function notifyLead(lead: WholesaleLead) {
  const mail = mailer();
  if (!mail) return;
  await mail.send(
    new SendEmailCommand({
      Source: process.env.SES_FROM_EMAIL,
      Destination: { ToAddresses: [process.env.SES_NOTIFY_EMAIL as string] },
      Message: {
        Subject: { Data: `New wholesale lead: ${lead.name}` },
        Body: {
          Text: {
            Data: [
              `Name: ${lead.name}`,
              `Email: ${lead.email}`,
              `Company: ${lead.companyName || "-"}`,
              `Country: ${lead.country}`,
              `Buyer type: ${lead.buyerType}`,
              `Quantity: ${lead.estimatedQuantity || "-"}`,
              `Message: ${lead.message || "-"}`,
              lead.quoteItems?.length
                ? `Catalogue items: ${lead.quoteItems.map((item) => item.name).join(", ")}`
                : "",
            ].join("\n"),
          },
        },
      },
    }),
  );
}

const memoryLeads: WholesaleLead[] = [];
const memoryBanners: SeasonalBanner[] = [];

export async function queryLeadsByEmail(_email: string) {
  const db = client();
  if (!db) return [];
  return db.send(
    new QueryCommand({
      TableName: leadsTable,
      IndexName: "email-index",
      KeyConditionExpression: "email = :email",
      ExpressionAttributeValues: { ":email": _email },
    }),
  );
}
