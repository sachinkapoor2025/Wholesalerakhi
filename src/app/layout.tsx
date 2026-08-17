import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { JsonLd } from "@/components/JsonLd";
import { AnalyticsScripts, GtmNoscript } from "@/components/AnalyticsScripts";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/jsonld";
import { site } from "@/data/site";
import { canonical, pageMetadata } from "@/lib/seo";
import "./globals.css";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(canonical("/")),
  ...pageMetadata({
    title: "Wholesale Rakhi from India for Buyers Worldwide | Wholesale Rakhi",
    description: site.description,
    path: "/",
    keywords: "wholesale rakhi, rakhi wholesale, bulk rakhi, rakhi supplier India, rakhi from India",
  }),
  title: {
    default: "Wholesale Rakhi from India for Buyers Worldwide | Wholesale Rakhi",
    template: "%s",
  },
  icons: { icon: "/icons/logo.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${serif.variable} ${sans.variable} flex min-h-screen flex-col font-sans antialiased`}>
        <AnalyticsScripts />
        <GtmNoscript />
        <JsonLd data={[organizationJsonLd(), webSiteJsonLd()]} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
