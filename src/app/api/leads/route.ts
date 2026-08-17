import { NextResponse } from "next/server";
import { allowSubmission, leadInputSchema, sanitizeLead } from "@/lib/leads";
import { createLead } from "@/lib/db";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && !origin.includes(host) && !origin.endsWith("rb.us")) {
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (!allowSubmission(ip)) {
    return NextResponse.json({ error: "Too many enquiries from this network. Please try later." }, { status: 429 });
  }

  const body = await request.json().catch(() => null);
  const parsed = leadInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Please check the required fields and try again." }, { status: 400 });
  }
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  try {
    const lead = await createLead(sanitizeLead(parsed.data));
    return NextResponse.json({ ok: true, id: lead.leadId });
  } catch {
    return NextResponse.json({ error: "The enquiry could not be saved. Please try again." }, { status: 500 });
  }
}
