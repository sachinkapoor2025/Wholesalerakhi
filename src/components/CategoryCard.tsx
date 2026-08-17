import Link from "next/link";
import { rakhiCategories, homepageCategorySlugs } from "@/data/categories";
import { RakhiIllustration } from "@/components/RakhiIllustration";

export function CategoryCard({
  href,
  name,
  summary,
  slug,
}: {
  href: string;
  name: string;
  summary?: string;
  slug: string;
}) {
  return (
    <Link href={href} className="group overflow-hidden rounded-2xl border border-maroon/10 bg-white shadow-card">
      <div className="flex h-40 items-center justify-center bg-cream-dark">
        <RakhiIllustration slug={slug} className="h-28 w-28" />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg text-maroon group-hover:underline">{name}</h3>
        {summary ? <p className="mt-1 text-sm text-ink-muted">{summary}</p> : null}
      </div>
    </Link>
  );
}

export function RelatedCategories({ slugs }: { slugs: string[] }) {
  const items = rakhiCategories.filter((item) => slugs.includes(item.slug));
  if (!items.length) return null;
  return (
    <div className="mt-12">
      <h2 className="section-title mb-6">Related Rakhi types</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <CategoryCard key={item.slug} href={`/rakhi-types/${item.slug}`} name={item.name} slug={item.slug} />
        ))}
      </div>
    </div>
  );
}

export function HomeCategoryGrid() {
  const items = rakhiCategories.filter((item) =>
    homepageCategorySlugs.includes(item.slug as (typeof homepageCategorySlugs)[number]),
  );
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="section-title">Rakhi categories</h2>
            <p className="mt-3 max-w-2xl text-ink-muted">
              Browse informational guides for the styles wholesale buyers request most often.
            </p>
          </div>
          <Link href="/rakhi-types" className="hidden text-sm font-semibold text-maroon hover:underline sm:inline">
            All Rakhi types
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <CategoryCard key={item.slug} href={`/rakhi-types/${item.slug}`} name={item.name} slug={item.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
