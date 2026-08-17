"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export function AdminShell({ title, children }: { title: string; children: React.ReactNode }) {
  const router = useRouter();
  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin/login");
  }
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-widest text-gold-dark">Wholesale Rakhi</p>
          <h1 className="font-serif text-3xl text-ink">{title}</h1>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm">
          <Link href="/admin/dashboard" className="text-maroon hover:underline">
            Dashboard
          </Link>
          <Link href="/admin/leads" className="text-maroon hover:underline">
            Leads
          </Link>
          <Link href="/admin/products" className="text-maroon hover:underline">
            Products
          </Link>
          <Link href="/admin/banners" className="text-maroon hover:underline">
            Banners
          </Link>
          <Link href="/admin/campaigns" className="text-maroon hover:underline">
            Campaigns
          </Link>
          <Link href="/admin/settings" className="text-maroon hover:underline">
            Settings
          </Link>
          <button type="button" onClick={logout} className="text-ink-muted hover:text-maroon">
            Sign out
          </button>
        </nav>
      </div>
      {children}
    </div>
  );
}
