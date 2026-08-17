import { notFound } from "next/navigation";
import { getCorePage } from "@/content/pages/core";
import { rakhiTypes } from "@/content/rakhi-types";
import { CategoryCard } from "@/components/CategoryCard";
import { ContentPageView } from "@/components/ContentPageView";
import { Container } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export function generateMetadata() {
  const page = getCorePage("rakhi-types");
  return pageMetadata(page?.seo ?? { title: "Rakhi Types", description: "Types of Rakhi", path: "/rakhi-types" });
}

export default function RakhiTypesHub() {
  const page = getCorePage("rakhi-types");
  if (!page) notFound();
  return (
    <>
      <ContentPageView page={page} crumbs={[{ name: "Rakhi Types", path: "/rakhi-types" }]} />
      <Container className="-mt-8 pb-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {rakhiTypes.map((type) => (
            <CategoryCard
              key={type.slug}
              href={`/rakhi-types/${type.slug}`}
              name={type.name}
              summary={type.summary}
              slug={type.slug}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
