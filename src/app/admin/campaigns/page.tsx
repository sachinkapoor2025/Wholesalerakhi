import { AdminShell } from "@/components/admin/AdminShell";
import Link from "next/link";

export default function CampaignsPage() {
  return (
    <AdminShell title="Campaigns">
      <article className="rounded-2xl bg-white p-6 shadow-card">
        <h2 className="font-serif text-2xl">Raksha Bandhan 2026</h2>
        <p className="mt-3 text-ink-muted">
          Suggested public copy: “Raksha Bandhan Collection Is Here”. CTA: “Shop Rakhi Collection”. The destination URL
          must be entered in Banners and should point at the owner’s chosen shopping portal. Do not leave a seasonal
          banner active after the end date.
        </p>
        <p className="mt-3 text-sm text-ink-muted">
          Recommended window: 1 July 2026 through 28 August 2026, with UTM source <code>rb.us</code>, medium{" "}
          <code>seasonal_banner</code>, campaign <code>raksha-bandhan-2026</code>.
        </p>
        <Link href="/admin/banners" className="btn-primary mt-6">
          Create banner
        </Link>
      </article>
    </AdminShell>
  );
}
