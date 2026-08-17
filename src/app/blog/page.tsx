import Link from "next/link";
import { blogCategories, blogPosts, latestBlogPosts } from "@/content/blog";
import { ArticleCard } from "@/components/home/MoreHome";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import type { BlogCategory } from "@/types";

export const metadata = pageMetadata({
  title: "Rakhi Knowledge Centre | Wholesale Guides and Festival Information",
  description:
    "Guides on wholesale Rakhi, Rakhi types, Raksha Bandhan, international sourcing, packaging and bulk buying from India.",
  path: "/blog",
  keywords: "rakhi wholesale guide, types of rakhi, raksha bandhan, import rakhi from india",
});

export default async function BlogIndex({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const selected = blogCategories.includes(category as BlogCategory) ? (category as BlogCategory) : undefined;
  const posts = selected ? blogPosts.filter((post) => post.category === selected) : latestBlogPosts();

  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ name: "Knowledge Centre", path: "/blog" }]} />
        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Knowledge Centre</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">
          Practical wholesale guides, Rakhi type explainers, Raksha Bandhan context and international sourcing notes
          for buyers working with India.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          <Link href="/blog" className={`rounded-full px-4 py-2 text-sm ${!selected ? "bg-maroon text-white" : "bg-white text-maroon"}`}>
            All
          </Link>
          {blogCategories.map((item) => (
            <Link
              key={item}
              href={`/blog?category=${encodeURIComponent(item)}`}
              className={`rounded-full px-4 py-2 text-sm ${selected === item ? "bg-maroon text-white" : "bg-white text-maroon"}`}
            >
              {item}
            </Link>
          ))}
        </div>
        {posts.length ? (
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <ArticleCard
                key={post.slug}
                href={`/blog/${post.slug}`}
                title={post.title}
                description={post.description}
                category={post.category}
              />
            ))}
          </div>
        ) : (
          <p className="mt-10 text-ink-muted">No articles in this category yet.</p>
        )}
      </Container>
      <CTASection />
    </>
  );
}
