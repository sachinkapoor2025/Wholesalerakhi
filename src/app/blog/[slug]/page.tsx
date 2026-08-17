import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/content/blog";
import { ContentPageView } from "@/components/ContentPageView";
import { JsonLd } from "@/components/JsonLd";
import { articleJsonLd } from "@/lib/jsonld";
import { articleMetadata } from "@/lib/seo";
import type { ContentPage } from "@/types";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return articleMetadata({
    title: post.seo.title,
    description: post.seo.description,
    path: post.seo.path,
    published: post.datePublished,
    modified: post.dateModified,
    keywords: post.tags.join(", "),
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const page: ContentPage = {
    slug: post.slug,
    seo: post.seo,
    h1: post.title,
    intro: post.intro,
    blocks: post.blocks,
    faqs: post.faqs,
    related: post.related,
  };
  return (
    <>
      <JsonLd data={articleJsonLd(post)} />
      <ContentPageView
        page={page}
        crumbs={[{ name: "Knowledge Centre", path: "/blog" }, { name: post.title, path: post.seo.path }]}
        published={post.datePublished}
        modified={post.dateModified}
      />
    </>
  );
}
