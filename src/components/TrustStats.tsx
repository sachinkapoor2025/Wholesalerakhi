import Link from "next/link";
import { trustStats, verifiedClaims } from "@/data/site";

export function TrustStats() {
  const visible = trustStats.filter((stat) => stat.verified && stat.value);
  const headline = verifiedClaims.yearsOfExperience
    ? "27+ Years of Rakhi Experience"
    : "Rakhi Wholesale Expertise from India";

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-dark">Trust</p>
        <h2 className="section-title mt-2">{headline}</h2>
        <p className="mt-4 max-w-3xl text-ink-muted">
          Wholesale Rakhi is built as a professional sourcing and information resource for international buyers.
          Specific business statistics are published only after the owner confirms them.
        </p>
        {visible.length ? (
          <dl className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {visible.map((stat) => (
              <div key={stat.id} className="rounded-2xl border border-maroon/10 bg-cream p-5">
                <dt className="text-sm text-ink-muted">{stat.label}</dt>
                <dd className="mt-2 font-serif text-3xl text-maroon">{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {["Wholesale guidance", "Bulk order support", "International buyer education"].map((item) => (
              <div key={item} className="rounded-2xl border border-maroon/10 bg-cream p-5 font-medium text-ink">
                {item}
              </div>
            ))}
          </div>
        )}
        <p className="mt-6 text-sm">
          <Link href="/about-us" className="text-maroon hover:underline">
            Read about Wholesale Rakhi
          </Link>
        </p>
      </div>
    </section>
  );
}
