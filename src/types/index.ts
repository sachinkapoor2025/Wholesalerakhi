export type FaqItem = {
  question: string;
  answer: string;
};

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; id?: string; text: string }
  | { type: "h3"; id?: string; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "callout"; text: string };

export type RelatedLink = {
  href: string;
  label: string;
};

export type SeoMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
  ogImage?: string;
};

export type ContentPage = {
  slug: string;
  seo: SeoMeta;
  h1: string;
  intro: string;
  lede?: string;
  blocks: ContentBlock[];
  faqs: FaqItem[];
  related: RelatedLink[];
  updated?: string;
};

export type BlogCategory =
  | "Wholesale Guides"
  | "Rakhi Types"
  | "Raksha Bandhan"
  | "International Sourcing"
  | "Rakhi Business"
  | "Rakhi Packaging"
  | "Rakhi Export"
  | "Buying Guides";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  datePublished: string;
  dateModified: string;
  tags: string[];
  seo: SeoMeta;
  intro: string;
  blocks: ContentBlock[];
  faqs: FaqItem[];
  related: RelatedLink[];
};

export type RakhiType = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  image: string;
  imageAlt: string;
  seo: SeoMeta;
  h1: string;
  definition: string;
  history?: string;
  characteristics: string[];
  materials: string[];
  whoBuys: string[];
  wholesaleNotes: string[];
  retailerNotes: string[];
  internationalNotes: string[];
  packagingNotes: string[];
  relatedSlugs: string[];
  faqs: FaqItem[];
  blocks?: ContentBlock[];
};

export type CountryGuide = {
  slug: string;
  name: string;
  regionLabel: string;
  summary: string;
  seo: SeoMeta;
  h1: string;
  intro: string;
  blocks: ContentBlock[];
  faqs: FaqItem[];
  related: RelatedLink[];
};

export type BuyerPersona = {
  slug: string;
  name: string;
  summary: string;
  href: string;
  seo: SeoMeta;
  h1: string;
  intro: string;
  blocks: ContentBlock[];
  faqs: FaqItem[];
  related: RelatedLink[];
};

export type ExpertiseCard = {
  title: string;
  href: string;
  description: string;
  claimKey?: "manufacturer" | "exporter";
};

export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export type LeadStatus =
  | "NEW"
  | "CONTACTED"
  | "QUOTE_SENT"
  | "NEGOTIATING"
  | "CONVERTED"
  | "CLOSED";

export type WholesaleLead = {
  leadId: string;
  createdAt: string;
  name: string;
  companyName?: string;
  email: string;
  phone?: string;
  country: string;
  buyerType: string;
  estimatedQuantity?: string;
  rakhiType?: string;
  interestedCategories: string[];
  customPackaging?: boolean;
  customRakhi?: boolean;
  targetDeliveryCountry?: string;
  message?: string;
  quoteItems?: QuoteItem[];
  status: LeadStatus;
};

export type QuoteItem = {
  sku: string;
  slug: string;
  name: string;
  quantityNote?: string;
};

export type CatalogProduct = {
  sku: string;
  slug: string;
  name: string;
  categorySlug: string;
  description: string;
  wholesaleNotes?: string;
  images: string[];
  published: boolean;
  priceOnRequest: true;
  createdAt: string;
  updatedAt: string;
};

export type CatalogCategory = {
  slug: string;
  name: string;
  description: string;
  published: boolean;
  sortOrder: number;
};

export type SiteSettings = {
  catalogueUrl?: string;
  contactEmail?: string;
  contactPhone?: string;
  whatsappNumber?: string;
  updatedAt: string;
};

export type SeasonalBanner = {
  bannerId: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  buttonText: string;
  targetUrl: string;
  startDate: string;
  endDate: string;
  priority: number;
  isActive: boolean;
  campaignName: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  createdAt: string;
  updatedAt: string;
};

export type ShoppingCampaign = SeasonalBanner & {
  portal?: "shop" | "gifts" | "corporate" | "international" | "wholesale";
};

export type NavItem = {
  href: string;
  label: string;
};

export type TrustStat = {
  id: "years" | "designs" | "countries" | "buyers";
  label: string;
  value: string | null;
  verified: boolean;
};

/** Reserved for a future consumer-shop portal — not implemented on RB.us. */
export type FutureCheckout = {
  variant?: { sku: string; productSku: string; name: string; attributes: Record<string, string> };
  price?: { sku: string; currency: string; amount: number };
  inventory?: { sku: string; quantity: number };
  order?: { orderId: string; customerId: string; status: string };
  customer?: { customerId: string; email: string };
};
