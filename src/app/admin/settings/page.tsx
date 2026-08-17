"use client";

import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminSettingsPage() {
  const [form, setForm] = useState({
    catalogueUrl: "",
    contactEmail: "",
    contactPhone: "",
    whatsappNumber: "",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    void fetch("/api/admin/settings")
      .then((response) => (response.ok ? response.json() : null))
      .then((body) => {
        if (body?.settings) setForm({ ...form, ...body.settings });
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function save(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    setMessage(response.ok ? "Settings saved." : "Could not save settings.");
  }

  return (
    <AdminShell title="Site settings">
      <form onSubmit={save} className="grid max-w-xl gap-4 rounded-2xl bg-white p-6 shadow-card">
        <p className="text-sm text-ink-muted">
          Only enter contact and catalogue details the owner has confirmed. Empty fields stay hidden on the public site
          when environment variables are also empty.
        </p>
        <input placeholder="Catalogue PDF URL" className="rounded border px-3 py-2" value={form.catalogueUrl} onChange={(e) => setForm({ ...form, catalogueUrl: e.target.value })} />
        <input placeholder="Contact email" className="rounded border px-3 py-2" value={form.contactEmail} onChange={(e) => setForm({ ...form, contactEmail: e.target.value })} />
        <input placeholder="Phone" className="rounded border px-3 py-2" value={form.contactPhone} onChange={(e) => setForm({ ...form, contactPhone: e.target.value })} />
        <input placeholder="WhatsApp number" className="rounded border px-3 py-2" value={form.whatsappNumber} onChange={(e) => setForm({ ...form, whatsappNumber: e.target.value })} />
        <button className="btn-primary" type="submit">
          Save settings
        </button>
        {message ? <p className="text-sm text-ink-muted">{message}</p> : null}
      </form>
    </AdminShell>
  );
}
