"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { exampleRakshaBandhan2026Banner } from "@/lib/banners";
import type { SeasonalBanner } from "@/types";

const empty = {
  title: "",
  subtitle: "",
  imageUrl: "",
  buttonText: "Shop Rakhi Collection",
  targetUrl: "",
  startDate: "",
  endDate: "",
  priority: 1,
  isActive: false,
  campaignName: "",
  utmSource: "rb.us",
  utmMedium: "seasonal_banner",
  utmCampaign: "",
};

export default function AdminBannersPage() {
  const [banners, setBanners] = useState<SeasonalBanner[]>([]);
  const [form, setForm] = useState(empty);
  const [message, setMessage] = useState("");

  async function load() {
    const response = await fetch("/api/admin/banners");
    if (!response.ok) return;
    const body = await response.json();
    setBanners(body.banners || []);
  }

  useEffect(() => {
    void load();
  }, []);

  async function save(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/banners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    if (!response.ok) {
      setMessage("Could not save banner.");
      return;
    }
    setMessage("Banner saved. It will appear on the site only while active and within its date range.");
    setForm(empty);
    void load();
  }

  return (
    <AdminShell title="Seasonal banners">
      <form onSubmit={save} className="mb-10 grid gap-4 rounded-2xl bg-white p-6 shadow-card md:grid-cols-2">
        <input placeholder="Title" className="rounded border px-3 py-2" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        <input placeholder="Campaign name" className="rounded border px-3 py-2" value={form.campaignName} onChange={(e) => setForm({ ...form, campaignName: e.target.value })} />
        <input placeholder="Subtitle" className="rounded border px-3 py-2 md:col-span-2" value={form.subtitle} onChange={(e) => setForm({ ...form, subtitle: e.target.value })} />
        <input placeholder="Image URL" className="rounded border px-3 py-2" value={form.imageUrl} onChange={(e) => setForm({ ...form, imageUrl: e.target.value })} />
        <input placeholder="Button text" className="rounded border px-3 py-2" value={form.buttonText} onChange={(e) => setForm({ ...form, buttonText: e.target.value })} />
        <input placeholder="External shop URL" className="rounded border px-3 py-2 md:col-span-2" value={form.targetUrl} onChange={(e) => setForm({ ...form, targetUrl: e.target.value })} />
        <label className="text-sm">
          Start
          <input type="datetime-local" className="mt-1 w-full rounded border px-3 py-2" value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} required />
        </label>
        <label className="text-sm">
          End
          <input type="datetime-local" className="mt-1 w-full rounded border px-3 py-2" value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} required />
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
          Active
        </label>
        <input type="number" className="rounded border px-3 py-2" value={form.priority} onChange={(e) => setForm({ ...form, priority: Number(e.target.value) })} />
        <div className="md:col-span-2 flex gap-3">
          <button className="btn-primary" type="submit">
            Save banner
          </button>
          <button
            type="button"
            className="btn-secondary"
            onClick={() =>
              setForm({
                ...empty,
                ...exampleRakshaBandhan2026Banner,
                startDate: "2026-07-01T00:00",
                endDate: "2026-08-28T23:59",
                isActive: false,
              })
            }
          >
            Load Raksha Bandhan 2026 example
          </button>
        </div>
        {message ? <p className="md:col-span-2 text-sm text-ink-muted">{message}</p> : null}
      </form>
      <div className="space-y-3">
        {banners.length ? (
          banners.map((banner) => (
            <article key={banner.bannerId} className="rounded-2xl bg-white p-5 shadow-card">
              <h2 className="font-serif text-xl">{banner.title}</h2>
              <p className="text-sm text-ink-muted">
                {banner.campaignName} · {banner.startDate} → {banner.endDate} · priority {banner.priority} ·{" "}
                {banner.isActive ? "active flag on" : "inactive"}
              </p>
              <p className="mt-2 text-sm">{banner.targetUrl || "No external URL yet"}</p>
            </article>
          ))
        ) : (
          <p className="text-ink-muted">No banners saved.</p>
        )}
      </div>
    </AdminShell>
  );
}
