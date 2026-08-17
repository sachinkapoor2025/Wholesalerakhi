import { NextResponse } from "next/server";
import { getActiveBanners } from "@/lib/db";

export const revalidate = 300;

export async function GET() {
  const banners = await getActiveBanners().catch(() => []);
  return NextResponse.json({ banners });
}
