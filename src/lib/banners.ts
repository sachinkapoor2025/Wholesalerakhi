import type { SeasonalBanner } from "@/types";

export function isBannerLive(banner: SeasonalBanner, now = new Date()): boolean {
  if (!banner.isActive) return false;
  const start = new Date(banner.startDate);
  const end = new Date(banner.endDate);
  if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) return false;
  return now >= start && now <= end;
}

export function selectLiveBanners(banners: SeasonalBanner[], now = new Date()): SeasonalBanner[] {
  return banners.filter((banner) => isBannerLive(banner, now)).sort((a, b) => b.priority - a.priority);
}

export function withUtm(url: string, banner: SeasonalBanner): string {
  try {
    const parsed = new URL(url);
    if (banner.utmSource) parsed.searchParams.set("utm_source", banner.utmSource);
    if (banner.utmMedium) parsed.searchParams.set("utm_medium", banner.utmMedium);
    if (banner.utmCampaign) parsed.searchParams.set("utm_campaign", banner.utmCampaign);
    return parsed.toString();
  } catch {
    return url;
  }
}

export const exampleRakshaBandhan2026Banner: Omit<SeasonalBanner, "bannerId" | "createdAt" | "updatedAt"> = {
  title: "Raksha Bandhan Collection Is Here",
  subtitle: "Explore the seasonal Rakhi collection for Raksha Bandhan 2026.",
  imageUrl: "/images/raksha-bandhan-campaign.svg",
  buttonText: "Shop Rakhi Collection",
  targetUrl: "",
  startDate: "2026-07-01T00:00:00.000Z",
  endDate: "2026-08-28T23:59:59.000Z",
  priority: 10,
  isActive: false,
  campaignName: "Raksha Bandhan 2026",
  utmSource: "rb.us",
  utmMedium: "seasonal_banner",
  utmCampaign: "raksha-bandhan-2026",
};
