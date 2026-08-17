import { notFound } from "next/navigation";
import Link from "next/link";
import { getRakhiType, getRelatedRakhiTypes, rakhiTypes } from "@/content/rakhi-types";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { RelatedCategories } from "@/components/CategoryCard";
import { CTASection } from "@/components/CTASection";
import { InternalLinkSection } from "@/components/InternalLinkSection";
import { Container } from "@/components/Section";
import { RakhiIllustration } from "@/components/RakhiIllustration";
import { JsonLd } from "@/components/JsonLd";
import { imageObjectJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";
import { ContentBlocks } from "@/components/ContentBlocks";

export function generateStaticParams() {
  return rakhiTypes.map((type) => ({ slug: type.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getRakhiType(slug);
  if (!type) return {};
  return pageMetadata(type.seo);
}

export default async function RakhiTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const type = getRakhiType(slug);
  if (!type) notFound();
  const related = getRelatedRakhiTypes(slug);

  return (
    <>
      <article>
        <Container className="py-10 md:py-14">
          <JsonLd data={imageObjectJsonLd(type.image, type.imageAlt)} />
          <Breadcrumbs items={[{ name: "Rakhi Types", path: "/rakhi-types" }, { name: type.name, path: type.seo.path }]} />
          <div className="mt-8 grid items-start gap-10 md:grid-cols-[200px_minmax(0,1fr)]">
            <div className="flex justify-center rounded-3xl bg-cream-dark p-6">
              <RakhiIllustration slug={type.slug} className="h-40 w-40" />
            </div>
            <div>
              <h1 className="font-serif text-4xl text-ink md:text-5xl">{type.h1}</h1>
              <p className="mt-4 text-lg leading-8 text-ink-muted">{type.definition}</p>
            </div>
          </div>
          {type.history ? (
            <section className="mt-12">
              <h2 className="font-serif text-2xl text-ink">Background</h2>
              <p className="mt-3 leading-7 text-ink-muted">{type.history}</p>
            </section>
          ) : null}
          <SectionList title="Design characteristics" items={type.characteristics} />
          <SectionList title="Materials" items={type.materials} />
          <SectionList title="Who commonly buys it" items={type.whoBuys} />
          <SectionList title="Wholesale considerations" items={type.wholesaleNotes} />
          <SectionList title="Retailer suitability" items={type.retailerNotes} />
          <SectionList title="International buyer considerations" items={type.internationalNotes} />
          <SectionList title="Packaging considerations" items={type.packagingNotes} />
          {type.blocks?.length ? <div className="mt-10"><ContentBlocks blocks={type.blocks} /></div> : null}
          <FAQSection faqs={type.faqs} />
          <RelatedCategories slugs={related.map((item) => item.slug)} />
          <InternalLinkSection
            links={[
              { href: "/wholesale-rakhi", label: "Wholesale Rakhi" },
              { href: "/bulk-rakhi", label: "Bulk Rakhi" },
              { href: "/international-rakhi-wholesale", label: "International wholesale" },
              { href: "/request-wholesale-quote", label: "Request Wholesale Quote" },
            ]}
          />
          <p className="mt-8">
            <Link href="/request-wholesale-quote" className="btn-primary">
              Request Wholesale Quote
            </Link>
          </p>
        </Container>
      </article>
      <CTASection />
    </>
  );
}

function SectionList({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-muted">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
