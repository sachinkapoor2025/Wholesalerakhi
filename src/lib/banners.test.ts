import { describe, expect, it } from "vitest";
import { exampleRakshaBandhan2026Banner, isBannerLive, selectLiveBanners, withUtm } from "./banners";
import type { SeasonalBanner } from "@/types";

function banner(overrides: Partial<SeasonalBanner>): SeasonalBanner {
  return {
    bannerId: "1",
    createdAt: "2026-01-01",
    updatedAt: "2026-01-01",
    ...exampleRakshaBandhan2026Banner,
    targetUrl: "https://shop.example.com/rakhi",
    isActive: true,
    ...overrides,
  };
}

describe("seasonal banners", () => {
  it("hides inactive banners", () => {
    expect(isBannerLive(banner({ isActive: false }), new Date("2026-08-01"))).toBe(false);
  });

  it("hides expired banners", () => {
    expect(isBannerLive(banner({}), new Date("2026-09-01"))).toBe(false);
  });

  it("shows live banners and sorts by priority", () => {
    const live = selectLiveBanners(
      [banner({ bannerId: "a", priority: 1 }), banner({ bannerId: "b", priority: 9 })],
      new Date("2026-08-10"),
    );
    expect(live.map((item) => item.bannerId)).toEqual(["b", "a"]);
  });

  it("appends UTM parameters to external URLs", () => {
    const url = withUtm("https://shop.example.com/rakhi", banner({}));
    expect(url).toContain("utm_campaign=raksha-bandhan-2026");
  });
});
