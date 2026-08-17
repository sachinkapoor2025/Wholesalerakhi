"use client";

import { useMemo, useState } from "react";
import { buyerTypes, quantityRanges } from "@/data/site";
import { rakhiTypeOptions } from "@/data/categories";
import { trackEvent } from "@/components/TrackedLink";
import { useQuoteList } from "@/lib/quote-list";

const initial = {
  name: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  buyerType: "Retailer",
  estimatedQuantity: "",
  rakhiType: "",
  interestedCategories: [] as string[],
  customPackaging: false,
  customRakhi: false,
  targetDeliveryCountry: "",
  message: "",
  website: "",
};

export function QuoteForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const started = useMemo(() => ({ current: false }), []);
  const quoteList = useQuoteList();

  function markStarted() {
    if (!started.current) {
      started.current = true;
      trackEvent("wholesale_quote_started");
    }
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setError("");
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, quoteItems: quoteList.items }),
      });
      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error || "Could not send your enquiry. Please try again.");
      }
      trackEvent("wholesale_quote_submitted", { buyerType: form.buyerType, country: form.country });
      setStatus("success");
      setForm(initial);
      quoteList.clear();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  function toggleCategory(name: string) {
    setForm((current) => ({
      ...current,
      interestedCategories: current.interestedCategories.includes(name)
        ? current.interestedCategories.filter((item) => item !== name)
        : [...current.interestedCategories, name],
    }));
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-maroon/10 bg-white p-8 shadow-card">
        <h2 className="font-serif text-2xl text-maroon">Enquiry received</h2>
        <p className="mt-3 text-ink-muted">
          Thank you. The wholesale team will review your requirement and respond using the email you provided.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocus={markStarted} className="rounded-2xl border border-maroon/10 bg-white p-6 shadow-card md:p-8">
      {quoteList.items.length ? (
        <div className="mb-6 rounded-xl bg-cream p-4">
          <p className="text-sm font-semibold text-ink">Catalogue items on this enquiry</p>
          <ul className="mt-2 space-y-1 text-sm text-ink-muted">
            {quoteList.items.map((item) => (
              <li key={item.sku} className="flex justify-between gap-3">
                <span>{item.name}</span>
                <button type="button" className="text-maroon hover:underline" onClick={() => quoteList.removeItem(item.sku)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <div className="grid gap-4 md:grid-cols-2">
        <Field label="Name" required>
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </Field>
        <Field label="Company name">
          <input value={form.companyName} onChange={(e) => setForm({ ...form, companyName: e.target.value })} />
        </Field>
        <Field label="Email" required>
          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </Field>
        <Field label="Phone / WhatsApp">
          <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </Field>
        <Field label="Country" required>
          <input required value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} />
        </Field>
        <Field label="Buyer type">
          <select value={form.buyerType} onChange={(e) => setForm({ ...form, buyerType: e.target.value })}>
            {buyerTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </Field>
        <Field label="Estimated quantity">
          <select value={form.estimatedQuantity} onChange={(e) => setForm({ ...form, estimatedQuantity: e.target.value })}>
            <option value="">Select a range</option>
            {quantityRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </Field>
        <Field label="Rakhi type">
          <input value={form.rakhiType} onChange={(e) => setForm({ ...form, rakhiType: e.target.value })} />
        </Field>
        <Field label="Target delivery country">
          <input
            value={form.targetDeliveryCountry}
            onChange={(e) => setForm({ ...form, targetDeliveryCountry: e.target.value })}
          />
        </Field>
        <label className="hidden">
          Website
          <input value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <fieldset className="mt-6">
        <legend className="mb-3 text-sm font-semibold text-ink">Interested categories</legend>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
          {rakhiTypeOptions.map((name) => (
            <label key={name} className="flex items-center gap-2 text-sm text-ink-muted">
              <input
                type="checkbox"
                checked={form.interestedCategories.includes(name)}
                onChange={() => toggleCategory(name)}
              />
              {name}
            </label>
          ))}
        </div>
      </fieldset>
      <div className="mt-4 flex flex-wrap gap-6 text-sm">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.customPackaging}
            onChange={(e) => setForm({ ...form, customPackaging: e.target.checked })}
          />
          Custom packaging
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.customRakhi}
            onChange={(e) => setForm({ ...form, customRakhi: e.target.checked })}
          />
          Custom Rakhi
        </label>
      </div>
      <Field label="Message" className="mt-4">
        <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
      </Field>
      <p className="mt-3 text-xs text-ink-muted">
        Quantity ranges are enquiry categories only. They are not minimum order quantities.
      </p>
      {status === "error" ? <p className="mt-3 text-sm text-maroon">{error}</p> : null}
      <button type="submit" className="btn-primary mt-6" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit wholesale enquiry"}
      </button>
    </form>
  );
}

function Field({
  label,
  required,
  children,
  className = "",
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block text-sm font-medium text-ink ${className}`}>
      {label}
      {required ? " *" : ""}
      <span className="mt-1 block [&_input]:w-full [&_input]:rounded-lg [&_input]:border [&_input]:border-maroon/20 [&_input]:bg-cream [&_input]:px-3 [&_input]:py-2 [&_select]:w-full [&_select]:rounded-lg [&_select]:border [&_select]:border-maroon/20 [&_select]:bg-cream [&_select]:px-3 [&_select]:py-2 [&_textarea]:w-full [&_textarea]:rounded-lg [&_textarea]:border [&_textarea]:border-maroon/20 [&_textarea]:bg-cream [&_textarea]:px-3 [&_textarea]:py-2">
        {children}
      </span>
    </label>
  );
}
