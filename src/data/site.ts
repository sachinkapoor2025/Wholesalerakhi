import type { ExpertiseCard, NavItem, ProcessStep, TrustStat } from "@/types";

export const site = {
  name: "Wholesale Rakhi",
  legalName: "Wholesale Rakhi",
  domain: "RB.us",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://rb.us",
  positioning: "Wholesale Rakhi from India for Buyers Worldwide",
  supportingLine: "Wholesale • Bulk Supply • Custom Rakhi",
  description:
    "Source traditional, designer and premium Rakhis in bulk from India. Explore Rakhi categories, wholesale sourcing information, international buying guidance and bulk order opportunities.",
  locale: "en",
  ogImage: "/images/og-wholesale-rakhi.svg",
  logoSrc: "/icons/logo.svg",
} as const;

/**
 * Owner-verified claims. Keep these false until the business owner confirms.
 * Unverified values are never rendered on the public site.
 */
export const verifiedClaims = {
  yearsOfExperience: false,
  manufacturerOwnership: false,
  exporterOwnership: false,
  factoryOwnership: false,
  catalogueAvailable: Boolean(process.env.NEXT_PUBLIC_CATALOGUE_URL),
} as const;

export const trustStats: TrustStat[] = [
  {
    id: "years",
    label: "Years of Experience",
    value: verifiedClaims.yearsOfExperience ? "27+" : null,
    verified: verifiedClaims.yearsOfExperience,
  },
  { id: "designs", label: "Rakhi Designs", value: null, verified: false },
  { id: "countries", label: "Countries Served", value: null, verified: false },
  { id: "buyers", label: "Wholesale Buyers", value: null, verified: false },
];

export const primaryNav: NavItem[] = [
  { href: "/wholesale-rakhi", label: "Wholesale Rakhi" },
  { href: "/rakhi-types", label: "Rakhi Types" },
  { href: "/about-us", label: "About" },
  { href: "/international-rakhi-wholesale", label: "International Buyers" },
  { href: "/blog", label: "Knowledge Centre" },
  { href: "/contact", label: "Contact" },
];

export const expertiseCards: ExpertiseCard[] = [
  {
    title: "Wholesale Rakhi",
    href: "/wholesale-rakhi",
    description: "Guidance for buying Rakhi in wholesale quantities from India for resale, distribution or community supply.",
  },
  {
    title: "Bulk Rakhi Supply",
    href: "/bulk-rakhi",
    description: "How bulk Rakhi orders are typically planned, specified and prepared for domestic and overseas buyers.",
  },
  {
    title: "Rakhi Manufacturer",
    href: "/rakhi-manufacturer",
    description: "What buyers should understand about Rakhi manufacturing in India before sourcing at scale.",
    claimKey: "manufacturer",
  },
  {
    title: "Rakhi Supplier",
    href: "/rakhi-supplier",
    description: "How to evaluate a Rakhi supplier and structure a wholesale enquiry with clear product requirements.",
  },
  {
    title: "Rakhi Export",
    href: "/rakhi-exporter",
    description: "Export-oriented considerations for sending Rakhi from India to international wholesale buyers.",
    claimKey: "exporter",
  },
  {
    title: "Custom Rakhi",
    href: "/custom-rakhi",
    description: "When custom designs, colours or branding make sense for wholesale and private-label programmes.",
  },
  {
    title: "Private Label Rakhi",
    href: "/private-label-rakhi",
    description: "How retailers and importers approach private-label Rakhi ranges without over-committing on first orders.",
  },
  {
    title: "Corporate Rakhi Orders",
    href: "/corporate-rakhi",
    description: "Bulk Rakhi for companies, associations and community groups, with packaging and timing considerations.",
  },
];

export const orderProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Tell Us Your Requirement",
    description: "Share destination country, buyer type, preferred styles and an estimated quantity range.",
  },
  {
    step: 2,
    title: "Select Rakhi Categories",
    description: "Narrow the mix — designer, traditional, kids, lumba, premium or mixed assortments.",
  },
  {
    step: 3,
    title: "Receive Catalogue / Quote",
    description: "The wholesale team reviews the brief and responds with next-step information or a quote request follow-up.",
  },
  {
    step: 4,
    title: "Confirm Designs and Quantity",
    description: "Lock the assortment, packing notes and any custom or private-label requests.",
  },
  {
    step: 5,
    title: "Production / Preparation",
    description: "Selected designs are prepared according to the confirmed specification. Timelines vary by mix and season.",
  },
  {
    step: 6,
    title: "Quality Check",
    description: "Visual checks on finishing, threading, attachments and packing consistency before dispatch.",
  },
  {
    step: 7,
    title: "Packaging",
    description: "Export-minded packing, inner protection and labelling as agreed for the destination.",
  },
  {
    step: 8,
    title: "Dispatch",
    description: "Goods are handed to the agreed freight or courier path. Actual process and timelines may vary.",
  },
];

export const buyerTypes = [
  "Retailer",
  "Distributor",
  "Importer",
  "Reseller",
  "Online Seller",
  "Gift Shop",
  "Indian Grocery Store",
  "Corporate Buyer",
  "Community Organization",
  "Other",
] as const;

export const quantityRanges = [
  "50–100",
  "100–500",
  "500–1,000",
  "1,000–5,000",
  "5,000–10,000",
  "10,000+",
] as const;

export const contact = {
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
  catalogueUrl: process.env.NEXT_PUBLIC_CATALOGUE_URL || "",
};

export const defaultOgAlt = "Wholesale Rakhi from India for buyers worldwide";
