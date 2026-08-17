import { getBuyerGuide, buyerGuides } from "@/content/buyers";
import { getCorePage, corePages } from "@/content/pages/core";
import type { ContentPage } from "@/types";

const reservedSlugs = new Set([
  "rakhi-types",
  "international-rakhi-wholesale",
  "blog",
  "contact",
  "request-wholesale-quote",
  "rakhi-catalog",
  "admin",
  "api",
]);

export function buyerToPage(slug: string): ContentPage | undefined {
  const buyer = buyerGuides.find((item) => item.href === `/${slug}`) ?? getBuyerGuide(slug);
  if (!buyer) return undefined;
  return {
    slug: buyer.href.replace(/^\//, ""),
    seo: buyer.seo,
    h1: buyer.h1,
    intro: buyer.intro,
    blocks: buyer.blocks,
    faqs: buyer.faqs,
    related: buyer.related,
  };
}

export function getPublicPage(slug: string): ContentPage | undefined {
  return getCorePage(slug) ?? buyerToPage(slug);
}

export function staticContentSlugs(): string[] {
  const core = corePages.map((page) => page.slug).filter((slug) => !reservedSlugs.has(slug));
  const buyers = buyerGuides.map((item) => item.href.replace(/^\//, ""));
  return [...new Set([...core, ...buyers])];
}

export function crumbFor(page: ContentPage): { name: string; path: string }[] {
  return [{ name: page.h1, path: page.seo.path }];
}
