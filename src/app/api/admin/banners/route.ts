import { NextResponse } from "next/server";
import { getAdminSession } from "@/lib/auth";
import { listBanners, upsertBanner } from "@/lib/db";
import type { SeasonalBanner } from "@/types";

export async function GET() {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const banners = await listBanners();
  return NextResponse.json({ banners });
}

export async function POST(request: Request) {
  if (!(await getAdminSession())) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = (await request.json().catch(() => null)) as Partial<SeasonalBanner> | null;
  if (!body?.title || !body.startDate || !body.endDate) {
    return NextResponse.json({ error: "Title, start date and end date are required." }, { status: 400 });
  }
  const now = new Date().toISOString();
  const banner = await upsertBanner({
    bannerId: body.bannerId || "",
    title: body.title,
    subtitle: body.subtitle || "",
    imageUrl: body.imageUrl || "",
    buttonText: body.buttonText || "Shop Rakhi Collection",
    targetUrl: body.targetUrl || "",
    startDate: body.startDate,
    endDate: body.endDate,
    priority: Number(body.priority || 0),
    isActive: Boolean(body.isActive),
    campaignName: body.campaignName || body.title,
    utmSource: body.utmSource || "rb.us",
    utmMedium: body.utmMedium || "seasonal_banner",
    utmCampaign: body.utmCampaign,
    createdAt: body.createdAt || now,
    updatedAt: now,
  });
  return NextResponse.json({ banner });
}
