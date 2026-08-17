import type { BlogCategory, BlogPost } from "@/types";
import { postsA } from "./posts-a";
import { postsB } from "./posts-b";
import { postsC } from "./posts-c";

export const blogPosts: BlogPost[] = [...postsA, ...postsB, ...postsC];

export const blogCategories: BlogCategory[] = [
  "Wholesale Guides",
  "Rakhi Types",
  "Raksha Bandhan",
  "International Sourcing",
  "Rakhi Business",
  "Rakhi Packaging",
  "Rakhi Export",
  "Buying Guides",
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getBlogPostsByCategory(category: BlogCategory): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function latestBlogPosts(limit?: number): BlogPost[] {
  const sorted = [...blogPosts].sort((a, b) => {
    if (a.datePublished === b.datePublished) {
      return b.slug.localeCompare(a.slug);
    }
    return b.datePublished.localeCompare(a.datePublished);
  });
  return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}
