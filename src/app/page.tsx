import Link from "next/link";
import { TrustStats } from "@/components/TrustStats";
import { ExpertiseGrid } from "@/components/home/HomeSections";
import { HomeCategoryGrid } from "@/components/CategoryCard";
import {
  GlobalBuyers,
  KnowledgePreview,
  OrderingProcess,
  WhoWeServe,
  WhyIndiaSection,
} from "@/components/home/MoreHome";
import { SeasonalBanner } from "@/components/SeasonalBanner";
import { CTASection } from "@/components/CTASection";
import { RakhiIllustration } from "@/components/RakhiIllustration";
import { getActiveBanners } from "@/lib/db";
import { site } from "@/data/site";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 3600;

export const metadata = pageMetadata({
  title: "Wholesale Rakhi from India for Buyers Worldwide | Wholesale Rakhi",
  description: site.description,
  path: "/",
  keywords: "wholesale rakhi, rakhi wholesale India, bulk rakhi, rakhi supplier, rakhi manufacturer, buy rakhi wholesale",
});

export default async function HomePage() {
  const banners = await getActiveBanners().catch(() => []);
  const banner = banners[0];

  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-gold-dark">{site.domain}</p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-6xl">{site.positioning}</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">
              Source traditional, designer and premium Rakhis in bulk from India. Explore Rakhi categories, wholesale
              sourcing information, international buying guidance and bulk order opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/request-wholesale-quote" className="btn-primary">
                Request Wholesale Quote
              </Link>
              <Link href="/blog" className="btn-secondary">
                Explore Rakhi Knowledge
              </Link>
            </div>
          </div>
          <div className="relative flex min-h-72 items-center justify-center rounded-[2rem] bg-gradient-to-br from-maroon to-maroon-dark">
            <RakhiIllustration slug="premium-rakhi" className="h-64 w-64" />
            <p className="sr-only">Premium Rakhi illustration for wholesale buyers</p>
          </div>
        </div>
      </section>
      {banner ? <SeasonalBanner banner={banner} /> : null}
      <TrustStats />
      <ExpertiseGrid />
      <HomeCategoryGrid />
      <WhyIndiaSection />
      <WhoWeServe />
      <OrderingProcess />
      <GlobalBuyers />
      <KnowledgePreview />
      <CTASection />
    </>
  );
}
