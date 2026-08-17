import Link from "next/link";
import { buyerPersonas, countries } from "@/data/categories";
import { orderProcess } from "@/data/site";
import { latestBlogPosts } from "@/content/blog";

export function WhyIndiaSection() {
  const points = [
    {
      title: "Indian Rakhi craftsmanship",
      text: "Rakhi making in India draws on thread work, bead setting, zari, kundan-style detailing and regional decorative traditions. Buyers source a wide visual range from one origin market.",
    },
    {
      title: "Variety of designs",
      text: "Wholesale programmes usually mix traditional threads, kids motifs, designer stones, lumba sets and a smaller premium layer rather than a single look.",
    },
    {
      title: "Wholesale sourcing",
      text: "Clear briefs — destination, quantity range, style mix and packing notes — help suppliers respond with a usable assortment instead of a generic catalogue dump.",
    },
    {
      title: "Bulk procurement",
      text: "Bulk orders are planned around festival timing. Peak demand sits ahead of Raksha Bandhan, typically in August, so specifications should be locked early.",
    },
    {
      title: "Customization",
      text: "Colour stories, card inserts and private-label packing are common requests. Custom work needs extra lead time and should start with a limited first run.",
    },
    {
      title: "Packaging",
      text: "International orders need inner protection, moisture awareness and carton marks that match the buyer’s receiving process. Presentation packs differ from grocery counter packs.",
    },
    {
      title: "International considerations",
      text: "Import rules, labelling and freight mode vary by destination. Wholesale Rakhi publishes guidance, not duty rates or transit guarantees — buyers should confirm with their broker.",
    },
  ];

  return (
    <section className="bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="section-title">Why buy wholesale Rakhi from India?</h2>
        <p className="mt-4 max-w-3xl text-ink-muted">
          India is the cultural home of Rakhi and the primary production market for festival threads sold worldwide.
          These points explain the sourcing logic — they are not unverified company claims.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {points.map((point) => (
            <article key={point.title} className="rounded-2xl bg-white p-6 shadow-card">
              <h3 className="font-serif text-xl text-maroon">{point.title}</h3>
              <p className="mt-2 text-sm leading-6 text-ink-muted">{point.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhoWeServe() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="section-title">Who we serve</h2>
        <p className="mt-4 max-w-3xl text-ink-muted">
          Wholesale Rakhi content is written for B2B buyers who need festival inventory, not last-minute single-piece gifts.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buyerPersonas.map((persona) => (
            <Link key={persona.slug} href={persona.href} className="rounded-2xl border border-maroon/10 p-5 hover:bg-cream">
              <h3 className="font-serif text-xl text-maroon">{persona.name}</h3>
              <p className="mt-2 text-sm text-ink-muted">{persona.summary}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OrderingProcess() {
  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="section-title">Wholesale ordering process</h2>
        <p className="mt-4 max-w-3xl text-ink-muted">
          A typical path from first enquiry to dispatch. Actual process and timelines may vary by design mix, packing
          and destination.
        </p>
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {orderProcess.map((step) => (
            <li key={step.step} className="flex gap-4 rounded-2xl bg-white p-5 shadow-card">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-maroon font-serif text-white">
                {step.step}
              </span>
              <div>
                <h3 className="font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-ink-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mt-6 text-sm">
          <Link href="/how-to-order-wholesale-rakhi" className="text-maroon hover:underline">
            Read the full wholesale ordering guide
          </Link>
        </p>
      </div>
    </section>
  );
}

export function CountryCard({ href, name, summary }: { href: string; name: string; summary: string }) {
  return (
    <Link href={href} className="rounded-2xl border border-maroon/10 bg-white p-5 hover:shadow-card">
      <h3 className="font-serif text-xl text-maroon">{name}</h3>
      <p className="mt-2 text-sm text-ink-muted">{summary}</p>
    </Link>
  );
}

export function GlobalBuyers() {
  const worldwide = {
    slug: "worldwide",
    name: "Worldwide",
    summary: "General international wholesale guidance for destinations not listed separately.",
  };
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <h2 className="section-title">Global buyers</h2>
        <p className="mt-4 max-w-3xl text-ink-muted">
          Country guides explain sourcing context. They are not duplicate doorway pages and do not publish invented
          duty rates or transit times.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country) => (
            <CountryCard
              key={country.slug}
              href={`/international-rakhi-wholesale/${country.slug}`}
              name={country.name}
              summary={country.summary}
            />
          ))}
          <CountryCard href="/international-rakhi-wholesale" name={worldwide.name} summary={worldwide.summary} />
        </div>
      </div>
    </section>
  );
}

export function KnowledgePreview() {
  const posts = latestBlogPosts(6);
  return (
    <section className="bg-cream-dark">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Knowledge Centre</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Wholesale guides, Rakhi type explainers, Raksha Bandhan context and international sourcing articles.
            </p>
          </div>
          <Link href="/blog" className="hidden text-sm font-semibold text-maroon hover:underline sm:inline">
            View all articles
          </Link>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <ArticleCard
              key={post.slug}
              href={`/blog/${post.slug}`}
              title={post.title}
              description={post.description}
              category={post.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ArticleCard({
  href,
  title,
  description,
  category,
}: {
  href: string;
  title: string;
  description: string;
  category?: string;
}) {
  return (
    <Link href={href} className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-card">
      {category ? <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{category}</p> : null}
      <h3 className="mt-2 font-serif text-xl text-ink">{title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-muted">{description}</p>
      <span className="mt-4 text-sm font-semibold text-maroon">Read guide</span>
    </Link>
  );
}
