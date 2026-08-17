import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { getSettings, saveSettings } from "@/lib/catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const settings = await getSettings();
  return NextResponse.json({ settings });
}

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await request.json().catch(() => null);
  const settings = await saveSettings(body || {});
  return NextResponse.json({ settings });
}
