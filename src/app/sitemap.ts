import type { MetadataRoute } from "next";
import { blogPosts } from "@/content/blog";
import { countryGuides } from "@/content/countries";
import { rakhiTypes } from "@/content/rakhi-types";
import { staticContentSlugs } from "@/lib/pages";
import { canonical } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const paths = [
    "/",
    "/blog",
    "/rakhi-types",
    "/international-rakhi-wholesale",
    "/contact",
    "/request-wholesale-quote",
    "/rakhi-catalog",
    "/catalog",
    "/shop",
    "/rakhi-gifts",
    ...staticContentSlugs().map((slug) => `/${slug}`),
    ...rakhiTypes.map((type) => `/rakhi-types/${type.slug}`),
    ...countryGuides.map((country) => `/international-rakhi-wholesale/${country.slug}`),
    ...blogPosts.map((post) => `/blog/${post.slug}`),
  ];
  return [...new Set(paths)].map((path) => ({
    url: canonical(path),
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.includes("/request-wholesale-quote") ? 0.9 : 0.7,
  }));
}
