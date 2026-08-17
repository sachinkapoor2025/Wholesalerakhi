import { ArticleCard } from "@/components/home/MoreHome";
import { latestBlogPosts } from "@/content/blog";

export function RelatedArticles({ slugs }: { slugs?: string[] }) {
  const posts = slugs?.length
    ? latestBlogPosts().filter((post) => slugs.includes(post.slug))
    : latestBlogPosts(3);
  if (!posts.length) return null;
  return (
    <div className="mt-12">
      <h2 className="section-title mb-6">Related articles</h2>
      <div className="grid gap-4 md:grid-cols-3">
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
    </div>
  );
}
