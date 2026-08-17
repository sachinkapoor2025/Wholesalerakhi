import { TrackedExternalLink } from "@/components/TrackedLink";
import { withUtm } from "@/lib/banners";
import type { SeasonalBanner } from "@/types";

export function SeasonalBanner({ banner }: { banner: SeasonalBanner }) {
  const href = withUtm(banner.targetUrl, banner);
  return (
    <section className="bg-maroon">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 md:grid-cols-2">
        <div
          className="min-h-48 rounded-2xl bg-maroon-light/40 bg-cover bg-center"
          style={banner.imageUrl ? { backgroundImage: `url(${banner.imageUrl})` } : undefined}
          role="img"
          aria-label={banner.title}
        />
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-gold-light">{banner.campaignName}</p>
          <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">{banner.title}</h2>
          <p className="mt-3 text-white/80">{banner.subtitle}</p>
          {banner.targetUrl ? (
            <TrackedExternalLink
              href={href}
              event="seasonal_banner_clicked"
              params={{ campaign: banner.campaignName }}
              className="btn-secondary mt-6 border-white/30 bg-white text-maroon"
            >
              {banner.buttonText}
            </TrackedExternalLink>
          ) : null}
        </div>
      </div>
    </section>
  );
}
