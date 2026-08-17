export const analyticsEvents = {
  wholesale_quote_started: "wholesale_quote_started",
  wholesale_quote_submitted: "wholesale_quote_submitted",
  catalogue_clicked: "catalogue_clicked",
  whatsapp_clicked: "whatsapp_clicked",
  phone_clicked: "phone_clicked",
  seasonal_banner_clicked: "seasonal_banner_clicked",
  external_shop_clicked: "external_shop_clicked",
} as const;

export type AnalyticsEvent = keyof typeof analyticsEvents;

export function gaId(): string | undefined {
  return process.env.NEXT_PUBLIC_GA_ID || undefined;
}

export function gtmId(): string | undefined {
  return process.env.NEXT_PUBLIC_GTM_ID || undefined;
}
