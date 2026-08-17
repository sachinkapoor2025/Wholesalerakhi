import type { Metadata } from "next";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/env";

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

export function canonical(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const normalized = p === "/" ? "" : p.replace(/\/$/, "");
  return `${siteUrl()}${normalized}`;
}

export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  noIndex?: boolean;
}): Metadata {
  const url = canonical(opts.path);
  const image = opts.ogImage ?? site.ogImage;
  const ogTitle = opts.ogTitle ?? opts.title;
  const ogDescription = opts.ogDescription ?? opts.description;

  return {
    title: opts.title,
    description: opts.description,
    keywords: opts.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url,
      siteName: site.name,
      locale: "en_US",
      type: "website",
      images: [{ url: canonical(image), alt: site.name, width: OG_WIDTH, height: OG_HEIGHT }],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      images: [canonical(image)],
    },
    robots: opts.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  };
}

export function articleMetadata(opts: {
  title: string;
  description: string;
  path: string;
  published: string;
  modified: string;
  keywords?: string;
}): Metadata {
  const base = pageMetadata(opts);
  return {
    ...base,
    openGraph: {
      ...base.openGraph,
      type: "article",
      publishedTime: opts.published,
      modifiedTime: opts.modified,
    },
  };
}

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}
