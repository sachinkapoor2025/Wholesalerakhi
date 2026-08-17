import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";

export default function AdminHome() {
  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-4 md:grid-cols-3">
        <Link href="/admin/leads" className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-serif text-xl">Leads</h2>
          <p className="mt-2 text-sm text-ink-muted">Wholesale enquiries and quote-list SKUs.</p>
        </Link>
        <Link href="/admin/products" className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-serif text-xl">Products</h2>
          <p className="mt-2 text-sm text-ink-muted">Publish real catalogue designs. No public prices.</p>
        </Link>
        <Link href="/admin/banners" className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-serif text-xl">Banners</h2>
          <p className="mt-2 text-sm text-ink-muted">Dated campaigns with external shop URLs.</p>
        </Link>
        <Link href="/admin/campaigns" className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-serif text-xl">Campaigns</h2>
          <p className="mt-2 text-sm text-ink-muted">Raksha Bandhan and seasonal notes.</p>
        </Link>
        <Link href="/admin/settings" className="rounded-2xl bg-white p-6 shadow-card">
          <h2 className="font-serif text-xl">Settings</h2>
          <p className="mt-2 text-sm text-ink-muted">Confirmed contact and catalogue URLs.</p>
        </Link>
      </div>
    </AdminShell>
  );
}
