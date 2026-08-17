import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/ContentPageView";
import { pageMetadata } from "@/lib/seo";
import { getPublicPage, staticContentSlugs } from "@/lib/pages";

export function generateStaticParams() {
  return staticContentSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const page = getPublicPage(slug);
    if (!page) return {};
    return pageMetadata(page.seo);
  });
}

export default async function CmsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getPublicPage(slug);
  if (!page) notFound();
  return <ContentPageView page={page} crumbs={[{ name: page.h1, path: page.seo.path }]} />;
}
