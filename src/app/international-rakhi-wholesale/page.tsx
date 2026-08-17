import { notFound } from "next/navigation";
import { getCorePage } from "@/content/pages/core";
import { countryGuides, hubFaqs } from "@/content/countries";
import { ContentPageView } from "@/components/ContentPageView";
import { CountryCard } from "@/components/home/MoreHome";
import { Container } from "@/components/Section";
import { FAQSection } from "@/components/FAQSection";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  const page = getCorePage("international-rakhi-wholesale");
  return pageMetadata(
    page?.seo ?? {
      title: "International Rakhi Wholesale from India | Bulk Rakhi Supply Worldwide",
      description: "International wholesale guidance for sourcing Rakhi from India.",
      path: "/international-rakhi-wholesale",
    },
  );
}

export default function InternationalHub() {
  const page = getCorePage("international-rakhi-wholesale");
  if (!page) notFound();
  const merged = { ...page, faqs: page.faqs.length ? page.faqs : hubFaqs };
  return (
    <>
      <ContentPageView page={merged} crumbs={[{ name: "International Buyers", path: "/international-rakhi-wholesale" }]} />
      <Container className="-mt-8 pb-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countryGuides.map((country) => (
            <CountryCard
              key={country.slug}
              href={`/international-rakhi-wholesale/${country.slug}`}
              name={country.name}
              summary={country.summary}
            />
          ))}
        </div>
        {!page.faqs.length ? <FAQSection faqs={hubFaqs} /> : null}
      </Container>
    </>
  );
}
