import { getCorePage } from "@/content/pages/core";
import { ContentPageView } from "@/components/ContentPageView";
import { Container } from "@/components/Section";
import { contact } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { TrackedExternalLink } from "@/components/TrackedLink";
import { notFound } from "next/navigation";

export function generateMetadata() {
  const page = getCorePage("rakhi-catalog");
  return pageMetadata(
    page?.seo ?? {
      title: "Wholesale Rakhi Catalogue | Request Designs and Assortments",
      description: "Request the Wholesale Rakhi catalogue or a quote for bulk designs from India.",
      path: "/rakhi-catalog",
    },
  );
}

export default function CatalogPage() {
  const page = getCorePage("rakhi-catalog");
  if (!page) notFound();
  return (
    <>
      <ContentPageView page={page} crumbs={[{ name: "Wholesale Catalogue", path: "/rakhi-catalog" }]} />
      <Container className="-mt-6 pb-16">
        {contact.catalogueUrl ? (
          <TrackedExternalLink event="catalogue_clicked" href={contact.catalogueUrl} className="btn-primary">
            Download wholesale catalogue
          </TrackedExternalLink>
        ) : (
          <p className="rounded-2xl border border-gold/40 bg-cream-dark p-5 text-ink-muted">
            A catalogue PDF will be linked here once the owner provides it. Until then, request a wholesale quote and
            describe the styles you need.
          </p>
        )}
      </Container>
    </>
  );
}
