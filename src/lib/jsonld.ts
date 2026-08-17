import { contact, site, verifiedClaims } from "@/data/site";
import { canonical } from "@/lib/seo";
import type { BlogPost, FaqItem } from "@/types";

export function organizationJsonLd() {
  const org: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: canonical("/"),
    logo: canonical(site.logoSrc),
    description: site.description,
  };
  if (contact.email) org.email = contact.email;
  if (contact.phone) org.telephone = contact.phone;
  return org;
}

export function webSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.name,
    url: canonical("/"),
    description: site.description,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: site.name,
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function faqJsonLd(faqs: FaqItem[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleJsonLd(post: BlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    author: {
      "@type": "Organization",
      name: site.name,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      logo: {
        "@type": "ImageObject",
        url: canonical(site.logoSrc),
      },
    },
    image: canonical(site.ogImage),
    mainEntityOfPage: canonical(post.seo.path),
  };
}

export function imageObjectJsonLd(url: string, caption: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageObject",
    contentUrl: canonical(url),
    caption,
    creditText: site.name,
  };
}

export { verifiedClaims };
