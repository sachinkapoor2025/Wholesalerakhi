import Link from "next/link";
import { listProducts } from "@/lib/catalog";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import { RakhiIllustration } from "@/components/RakhiIllustration";

export const dynamic = "force-dynamic";

export const metadata = pageMetadata({
  title: "Wholesale Rakhi Catalogue | Designs on Request",
  description:
    "Browse the Wholesale Rakhi catalogue when designs are published. Request a quote for bulk styles from India — prices are provided after enquiry, not as a public shop.",
  path: "/catalog",
});

export default async function CatalogPage() {
  const products = await listProducts(true);

  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ name: "Catalogue", path: "/catalog" }]} />
        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Wholesale Rakhi catalogue</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">
          This is a wholesale catalogue, not a consumer shop. Designs appear here only after they are added by the
          wholesale team. There are no public prices or checkout on RB.us.
        </p>
        {products.length ? (
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <Link key={product.sku} href={`/catalog/${product.slug}`} className="rounded-2xl bg-white p-5 shadow-card">
                <div className="flex h-36 items-center justify-center rounded-xl bg-cream-dark">
                  <RakhiIllustration slug={product.categorySlug} className="h-24 w-24" />
                </div>
                <h2 className="mt-4 font-serif text-xl text-maroon">{product.name}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-ink-muted">{product.description}</p>
                <p className="mt-3 text-xs uppercase tracking-wide text-gold-dark">Price on request</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-maroon/10 bg-white p-8">
            <p className="text-ink-muted">
              No catalogue SKUs are published yet. Use the quote form to describe styles, quantity range and destination,
              or request the PDF catalogue when it is available.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/request-wholesale-quote" className="btn-primary">
                Request Wholesale Quote
              </Link>
              <Link href="/rakhi-catalog" className="btn-secondary">
                Catalogue information
              </Link>
            </div>
          </div>
        )}
      </Container>
      <CTASection />
    </>
  );
}
