import { notFound } from "next/navigation";
import Link from "next/link";
import { getProduct } from "@/lib/catalog";
import { AddToQuoteButton } from "@/components/AddToQuoteButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { RakhiIllustration } from "@/components/RakhiIllustration";
import { pageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product || !product.published) return {};
  return pageMetadata({
    title: `${product.name} | Wholesale Rakhi Catalogue`,
    description: product.description.slice(0, 160) || `Wholesale enquiry for ${product.name}. Price on request.`,
    path: `/catalog/${product.slug}`,
  });
}

export default async function CatalogProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  if (!product || !product.published) notFound();

  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs
          items={[
            { name: "Catalogue", path: "/catalog" },
            { name: product.name, path: `/catalog/${product.slug}` },
          ]}
        />
        <div className="mt-8 grid gap-10 md:grid-cols-[240px_minmax(0,1fr)]">
          <div className="flex items-center justify-center rounded-3xl bg-cream-dark p-6">
            <RakhiIllustration slug={product.categorySlug} className="h-40 w-40" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-gold-dark">{product.sku} · Price on request</p>
            <h1 className="mt-3 font-serif text-4xl text-ink">{product.name}</h1>
            <p className="mt-4 text-lg leading-8 text-ink-muted">{product.description}</p>
            {product.wholesaleNotes ? <p className="mt-4 text-ink-muted">{product.wholesaleNotes}</p> : null}
            <div className="mt-8 flex flex-wrap gap-3">
              <AddToQuoteButton product={product} />
              <Link href="/request-wholesale-quote" className="btn-secondary">
                Request Wholesale Quote
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <CTASection />
    </>
  );
}
