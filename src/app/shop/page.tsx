import Link from "next/link";
import { getActiveBanners } from "@/lib/db";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { TrackedExternalLink } from "@/components/TrackedLink";
import { withUtm } from "@/lib/banners";
import { pageMetadata } from "@/lib/seo";

export const revalidate = 300;

export const metadata = pageMetadata({
  title: "Shop Rakhi Collections | Seasonal Campaigns on RB.us",
  description:
    "RB.us is the wholesale authority site. During active campaigns, shop CTAs can open an external Rakhi collection. There is no checkout on this domain.",
  path: "/shop",
});

export default async function ShopPortalPage() {
  const banners = (await getActiveBanners().catch(() => [])).filter((banner) => Boolean(banner.targetUrl));

  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ name: "Seasonal shop", path: "/shop" }]} />
        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Seasonal Rakhi collections</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">
          Wholesale Rakhi on RB.us remains an information and enquiry property. When a campaign is live, you can open
          the owner’s chosen shopping portal in a new tab. Expired campaigns disappear automatically.
        </p>
        {banners.length ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {banners.map((banner) => (
              <article key={banner.bannerId} className="rounded-2xl bg-white p-6 shadow-card">
                <p className="text-xs uppercase tracking-wide text-gold-dark">{banner.campaignName}</p>
                <h2 className="mt-2 font-serif text-2xl text-maroon">{banner.title}</h2>
                <p className="mt-2 text-sm text-ink-muted">{banner.subtitle}</p>
                <TrackedExternalLink
                  href={withUtm(banner.targetUrl, banner)}
                  event="external_shop_clicked"
                  params={{ campaign: banner.campaignName }}
                  className="btn-primary mt-5"
                >
                  {banner.buttonText || "Shop Rakhi Collection"}
                </TrackedExternalLink>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-maroon/10 bg-white p-8">
            <p className="text-ink-muted">
              No external shop campaign is active right now. For bulk buying, request a wholesale quote instead of
              waiting for a seasonal consumer collection.
            </p>
            <Link href="/request-wholesale-quote" className="btn-primary mt-6">
              Request Wholesale Quote
            </Link>
          </div>
        )}
      </Container>
      <CTASection title="Buying for a shop or import programme?" />
    </>
  );
}
