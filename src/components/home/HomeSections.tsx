import Link from "next/link";
import { expertiseCards } from "@/data/site";
import { verifiedClaims } from "@/data/site";

export function ExpertiseGrid() {
  const cards = expertiseCards.filter((card) => {
    if (card.claimKey === "manufacturer") return true;
    if (card.claimKey === "exporter") return true;
    return true;
  });

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="section-title">Wholesale expertise</h2>
        <p className="mt-4 max-w-3xl text-ink-muted">
          Explore the core topics international buyers use when sourcing Rakhi from India. Manufacturer and export
          pages explain the market — they are not ownership claims unless independently confirmed.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="rounded-2xl border border-maroon/10 bg-white p-5 shadow-card transition hover:-translate-y-0.5"
            >
              <h3 className="font-serif text-xl text-maroon">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{card.description}</p>
              {card.claimKey && !verifiedClaims[card.claimKey === "manufacturer" ? "manufacturerOwnership" : "exporterOwnership"] ? (
                <p className="mt-3 text-xs uppercase tracking-wide text-gold-dark">Sourcing guide</p>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
