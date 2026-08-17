import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, DeleteCommand, GetCommand, PutCommand, ScanCommand } from "@aws-sdk/lib-dynamodb";
import { v4 as uuid } from "uuid";
import type { CatalogCategory, CatalogProduct, SiteSettings } from "@/types";
import { rakhiCategories } from "@/data/categories";

const region = process.env.AWS_REGION || "us-east-1";
const productsTable = process.env.PRODUCTS_TABLE || "WholesaleProducts";
const categoriesTable = process.env.CATEGORIES_TABLE || "WholesaleCategories";
const settingsTable = process.env.SETTINGS_TABLE || "WholesaleSettings";

let doc: DynamoDBDocumentClient | null = null;

function catalogEnabled() {
  return Boolean(process.env.PRODUCTS_TABLE && process.env.AWS_REGION);
}

function client() {
  if (!catalogEnabled()) return null;
  if (!doc) {
    doc = DynamoDBDocumentClient.from(new DynamoDBClient({ region }), {
      marshallOptions: { removeUndefinedValues: true },
    });
  }
  return doc;
}

const memoryProducts: CatalogProduct[] = [];
const memoryCategories: CatalogCategory[] = rakhiCategories.map((item, index) => ({
  slug: item.slug,
  name: item.name,
  description: `Wholesale information and catalogue entries for ${item.name}.`,
  published: true,
  sortOrder: index,
}));
let memorySettings: SiteSettings = { updatedAt: new Date().toISOString() };

export function defaultCategories(): CatalogCategory[] {
  return memoryCategories;
}

export async function listProducts(publishedOnly = false): Promise<CatalogProduct[]> {
  const db = client();
  const items = db
    ? (((await db.send(new ScanCommand({ TableName: productsTable }))).Items ?? []) as CatalogProduct[])
    : memoryProducts;
  const sorted = [...items].sort((a, b) => a.name.localeCompare(b.name));
  return publishedOnly ? sorted.filter((item) => item.published) : sorted;
}

export async function getProduct(slug: string): Promise<CatalogProduct | undefined> {
  const products = await listProducts();
  return products.find((item) => item.slug === slug);
}

export async function upsertProduct(input: Partial<CatalogProduct> & { name: string; categorySlug: string }): Promise<CatalogProduct> {
  const now = new Date().toISOString();
  const slug =
    input.slug ||
    input.name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
  const product: CatalogProduct = {
    sku: input.sku || `WR-${uuid().slice(0, 8).toUpperCase()}`,
    slug,
    name: input.name,
    categorySlug: input.categorySlug,
    description: input.description || "",
    wholesaleNotes: input.wholesaleNotes,
    images: input.images || [],
    published: Boolean(input.published),
    priceOnRequest: true,
    createdAt: input.createdAt || now,
    updatedAt: now,
  };
  const db = client();
  if (db) await db.send(new PutCommand({ TableName: productsTable, Item: product }));
  else {
    const index = memoryProducts.findIndex((item) => item.sku === product.sku);
    if (index >= 0) memoryProducts[index] = product;
    else memoryProducts.unshift(product);
  }
  return product;
}

export async function deleteProduct(sku: string): Promise<void> {
  const db = client();
  if (db) await db.send(new DeleteCommand({ TableName: productsTable, Key: { sku } }));
  else {
    const index = memoryProducts.findIndex((item) => item.sku === sku);
    if (index >= 0) memoryProducts.splice(index, 1);
  }
}

export async function listCategories(): Promise<CatalogCategory[]> {
  const db = client();
  if (!db) return memoryCategories.filter((item) => item.published);
  const result = await db.send(new ScanCommand({ TableName: categoriesTable }));
  const items = (result.Items ?? []) as CatalogCategory[];
  return (items.length ? items : memoryCategories).filter((item) => item.published).sort((a, b) => a.sortOrder - b.sortOrder);
}

export async function upsertCategory(category: CatalogCategory): Promise<CatalogCategory> {
  const db = client();
  if (db) await db.send(new PutCommand({ TableName: categoriesTable, Item: category }));
  const index = memoryCategories.findIndex((item) => item.slug === category.slug);
  if (index >= 0) memoryCategories[index] = category;
  else memoryCategories.push(category);
  return category;
}

export async function getSettings(): Promise<SiteSettings> {
  const db = client();
  if (!db) return memorySettings;
  const result = await db.send(new GetCommand({ TableName: settingsTable, Key: { id: "SITE" } }));
  return (result.Item as SiteSettings | undefined) ?? memorySettings;
}

export async function saveSettings(settings: Partial<SiteSettings>): Promise<SiteSettings> {
  const next: SiteSettings = { ...memorySettings, ...settings, updatedAt: new Date().toISOString() };
  memorySettings = next;
  const db = client();
  if (db) await db.send(new PutCommand({ TableName: settingsTable, Item: { id: "SITE", ...next } }));
  return next;
}
