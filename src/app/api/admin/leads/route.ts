import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { listLeads, updateLeadStatus } from "@/lib/db";
import { LEAD_STATUSES } from "@/lib/leads";

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const leads = await listLeads();
  return NextResponse.json({ leads });
}

export async function PATCH(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null);
  if (!body?.leadId || !LEAD_STATUSES.includes(body.status)) {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }
  await updateLeadStatus(body.leadId, body.status);
  return NextResponse.json({ ok: true });
}
