"use client";

import { useQuoteList } from "@/lib/quote-list";
import { trackEvent } from "@/components/TrackedLink";
import type { CatalogProduct } from "@/types";

export function AddToQuoteButton({ product }: { product: CatalogProduct }) {
  const { addItem, items } = useQuoteList();
  const added = items.some((item) => item.sku === product.sku);
  return (
    <button
      type="button"
      className="btn-primary"
      onClick={() => {
        addItem({ sku: product.sku, slug: product.slug, name: product.name });
        trackEvent("catalogue_clicked", { sku: product.sku });
      }}
    >
      {added ? "Added to quote list" : "Add to wholesale quote"}
    </button>
  );
}
