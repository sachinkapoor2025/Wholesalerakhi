const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, PutCommand } = require("@aws-sdk/lib-dynamodb");
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const { randomUUID } = require("crypto");

const STATUSES = ["NEW", "CONTACTED", "QUOTE_SENT", "NEGOTIATING", "CONVERTED", "CLOSED"];
const BUYER_TYPES = [
  "Retailer",
  "Distributor",
  "Importer",
  "Reseller",
  "Online Seller",
  "Gift Shop",
  "Indian Grocery Store",
  "Corporate Buyer",
  "Community Organization",
  "Other",
];

const db = DynamoDBDocumentClient.from(new DynamoDBClient({}));
const ses = new SESClient({});
const hits = new Map();

function rateLimit(key) {
  const now = Date.now();
  const recent = (hits.get(key) || []).filter((ts) => now - ts < 60 * 60 * 1000);
  if (recent.length >= 5) {
    hits.set(key, recent);
    return false;
  }
  recent.push(now);
  hits.set(key, recent);
  return true;
}

function validEmail(value) {
  return typeof value === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

exports.handler = async (event) => {
  const headers = { "content-type": "application/json", "access-control-allow-origin": process.env.ALLOWED_ORIGIN || "*" };
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers };
  if (event.httpMethod !== "POST") return { statusCode: 405, headers, body: JSON.stringify({ error: "Method not allowed" }) };

  const ip = event.requestContext?.identity?.sourceIp || "unknown";
  if (!rateLimit(ip)) return { statusCode: 429, headers, body: JSON.stringify({ error: "Too many requests" }) };

  let body;
  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid JSON" }) };
  }
  if (body.website) return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  if (!body.name || !validEmail(body.email) || !body.country || !BUYER_TYPES.includes(body.buyerType)) {
    return { statusCode: 400, headers, body: JSON.stringify({ error: "Invalid lead" }) };
  }

  const lead = {
    leadId: randomUUID(),
    createdAt: new Date().toISOString(),
    name: String(body.name).slice(0, 120),
    companyName: body.companyName ? String(body.companyName).slice(0, 160) : undefined,
    email: String(body.email).toLowerCase(),
    phone: body.phone ? String(body.phone).slice(0, 40) : undefined,
    country: String(body.country).slice(0, 80),
    buyerType: body.buyerType,
    estimatedQuantity: body.estimatedQuantity || undefined,
    rakhiType: body.rakhiType || undefined,
    interestedCategories: Array.isArray(body.interestedCategories) ? body.interestedCategories.slice(0, 16) : [],
    customPackaging: Boolean(body.customPackaging),
    customRakhi: Boolean(body.customRakhi),
    targetDeliveryCountry: body.targetDeliveryCountry || undefined,
    message: body.message ? String(body.message).slice(0, 2000) : undefined,
    status: STATUSES[0],
  };

  await db.send(new PutCommand({ TableName: process.env.LEADS_TABLE, Item: lead }));

  if (process.env.SES_FROM_EMAIL && process.env.SES_NOTIFY_EMAIL) {
    await ses.send(
      new SendEmailCommand({
        Source: process.env.SES_FROM_EMAIL,
        Destination: { ToAddresses: [process.env.SES_NOTIFY_EMAIL] },
        Message: {
          Subject: { Data: `New wholesale lead: ${lead.name}` },
          Body: { Text: { Data: `${lead.name} ${lead.email} ${lead.country} ${lead.buyerType}` } },
        },
      }),
    );
  }

  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, id: lead.leadId }) };
};
