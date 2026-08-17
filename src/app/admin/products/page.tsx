"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { rakhiCategories } from "@/data/categories";
import type { CatalogProduct } from "@/types";

const empty = {
  name: "",
  categorySlug: "designer-rakhi",
  description: "",
  wholesaleNotes: "",
  published: false,
};

export default function AdminProductsPage() {
  const [products, setProducts] = useState<CatalogProduct[]>([]);
  const [form, setForm] = useState(empty);
  const [message, setMessage] = useState("");

  async function load() {
    const response = await fetch("/api/admin/products");
    if (!response.ok) return;
    const body = await response.json();
    setProducts(body.products || []);
  }

  useEffect(() => {
    void load();
  }, []);

  async function save(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!response.ok) {
      setMessage("Could not save product.");
      return;
    }
    setForm(empty);
    setMessage("Saved. Unpublished items stay off the public catalogue.");
    void load();
  }

  return (
    <AdminShell title="Catalogue products">
      <p className="mb-6 max-w-3xl text-sm text-ink-muted">
        Add real wholesale designs only. Do not invent SKUs. Public pages never show a price — every item is price on
        request. Leave published off until the owner confirms the design is available to quote.
      </p>
      <form onSubmit={save} className="mb-10 grid gap-4 rounded-2xl bg-white p-6 shadow-card md:grid-cols-2">
        <input required placeholder="Name" className="rounded border px-3 py-2" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <select className="rounded border px-3 py-2" value={form.categorySlug} onChange={(e) => setForm({ ...form, categorySlug: e.target.value })}>
          {rakhiCategories.map((item) => (
            <option key={item.slug} value={item.slug}>
              {item.name}
            </option>
          ))}
        </select>
        <textarea placeholder="Description" className="rounded border px-3 py-2 md:col-span-2" rows={3} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <textarea placeholder="Wholesale notes" className="rounded border px-3 py-2 md:col-span-2" rows={2} value={form.wholesaleNotes} onChange={(e) => setForm({ ...form, wholesaleNotes: e.target.value })} />
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.published} onChange={(e) => setForm({ ...form, published: e.target.checked })} />
          Published on /catalog
        </label>
        <button className="btn-primary" type="submit">
          Save product
        </button>
        {message ? <p className="md:col-span-2 text-sm text-ink-muted">{message}</p> : null}
      </form>
      {!products.length ? (
        <p className="rounded-2xl bg-white p-8 text-ink-muted">No catalogue products yet.</p>
      ) : (
        <div className="space-y-3">
          {products.map((product) => (
            <article key={product.sku} className="rounded-2xl bg-white p-5 shadow-card">
              <h2 className="font-serif text-xl">{product.name}</h2>
              <p className="text-sm text-ink-muted">
                {product.sku} · {product.categorySlug} · {product.published ? "published" : "draft"}
              </p>
            </article>
          ))}
        </div>
      )}
    </AdminShell>
  );
}
