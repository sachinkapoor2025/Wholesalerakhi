import { notFound } from "next/navigation";
import { countryGuides, getCountryGuide } from "@/content/countries";
import { ContentPageView } from "@/components/ContentPageView";
import { pageMetadata } from "@/lib/seo";
import type { ContentPage } from "@/types";

export function generateStaticParams() {
  return countryGuides.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountryGuide(slug);
  if (!country) return {};
  return pageMetadata(country.seo);
}

export default async function CountryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const country = getCountryGuide(slug);
  if (!country) notFound();
  const page: ContentPage = {
    slug: country.slug,
    seo: country.seo,
    h1: country.h1,
    intro: country.intro,
    blocks: country.blocks,
    faqs: country.faqs,
    related: country.related,
  };
  return (
    <ContentPageView
      page={page}
      crumbs={[
        { name: "International Buyers", path: "/international-rakhi-wholesale" },
        { name: country.name, path: country.seo.path },
      ]}
    />
  );
}
