import { z } from "zod";
import { buyerTypes, quantityRanges } from "@/data/site";
import { rakhiTypeOptions } from "@/data/categories";

export const LEAD_STATUSES = [
  "NEW",
  "CONTACTED",
  "QUOTE_SENT",
  "NEGOTIATING",
  "CONVERTED",
  "CLOSED",
] as const;

export const leadInputSchema = z.object({
  name: z.string().trim().min(2).max(120),
  companyName: z.string().trim().max(160).optional().or(z.literal("")),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  country: z.string().trim().min(2).max(80),
  buyerType: z.enum(buyerTypes),
  estimatedQuantity: z.enum(quantityRanges).optional().or(z.literal("")),
  rakhiType: z.string().trim().max(80).optional().or(z.literal("")),
  interestedCategories: z.array(z.string().trim().max(80)).max(16).default([]),
  customPackaging: z.boolean().optional(),
  customRakhi: z.boolean().optional(),
  targetDeliveryCountry: z.string().trim().max(80).optional().or(z.literal("")),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  website: z.string().max(0).optional(),
  quoteItems: z
    .array(
      z.object({
        sku: z.string().trim().min(1).max(80),
        slug: z.string().trim().min(1).max(120),
        name: z.string().trim().min(1).max(160),
        quantityNote: z.string().trim().max(80).optional(),
      }),
    )
    .max(50)
    .optional()
    .default([]),
});

export type LeadInput = z.infer<typeof leadInputSchema>;

export function sanitizeLead(input: LeadInput) {
  const categories = input.interestedCategories.filter((item) =>
    rakhiTypeOptions.some((option) => option === item || option.toLowerCase() === item.toLowerCase()),
  );
  return {
    name: input.name,
    companyName: input.companyName || undefined,
    email: input.email.toLowerCase(),
    phone: input.phone || undefined,
    country: input.country,
    buyerType: input.buyerType,
    estimatedQuantity: input.estimatedQuantity || undefined,
    rakhiType: input.rakhiType || undefined,
    interestedCategories: categories,
    customPackaging: Boolean(input.customPackaging),
    customRakhi: Boolean(input.customRakhi),
    targetDeliveryCountry: input.targetDeliveryCountry || undefined,
    message: input.message || undefined,
    quoteItems: input.quoteItems || [],
  };
}

const submissions = new Map<string, number[]>();

export function allowSubmission(key: string, limit = 5, windowMs = 60 * 60 * 1000): boolean {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter((ts) => now - ts < windowMs);
  if (recent.length >= limit) {
    submissions.set(key, recent);
    return false;
  }
  recent.push(now);
  submissions.set(key, recent);
  return true;
}
