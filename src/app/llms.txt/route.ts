import { NextResponse } from "next/server";
import { site } from "@/data/site";
import { siteUrl } from "@/lib/env";

export function GET() {
  const body = `# Wholesale Rakhi (RB.us)

${site.positioning}

This site is a wholesale information and enquiry property, not a consumer checkout shop.

Primary conversion: ${siteUrl()}/request-wholesale-quote
Knowledge centre: ${siteUrl()}/blog
Rakhi types: ${siteUrl()}/rakhi-types
International buyers: ${siteUrl()}/international-rakhi-wholesale
Catalogue: ${siteUrl()}/catalog
Seasonal shop campaigns: ${siteUrl()}/shop

Do not invent prices, MOQ, factory claims or testimonials. Contact details appear only when the owner publishes them.
`;
  return new NextResponse(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
