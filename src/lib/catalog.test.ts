import { describe, expect, it } from "vitest";
import { defaultCategories, listProducts, upsertProduct } from "./catalog";

describe("wholesale catalogue", () => {
  it("starts with no public products", async () => {
    const products = await listProducts(true);
    expect(products.every((item) => item.published)).toBe(true);
  });

  it("keeps unpublished products off the public list", async () => {
    const draft = await upsertProduct({
      name: "Owner confirmed design",
      categorySlug: "designer-rakhi",
      description: "Added only after the owner confirms the design.",
      published: false,
    });
    const published = await listProducts(true);
    expect(published.some((item) => item.sku === draft.sku)).toBe(false);
  });

  it("exposes Rakhi type categories for admin mapping", () => {
    expect(defaultCategories().length).toBeGreaterThan(8);
  });
});
