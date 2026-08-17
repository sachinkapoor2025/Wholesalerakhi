import Link from "next/link";
import { site } from "@/data/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`group inline-flex items-center gap-3 ${className}`} aria-label={`${site.name} home`}>
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-maroon text-sm font-semibold text-gold-light">
        WR
      </span>
      <span className="leading-tight">
        <span className="block font-serif text-lg font-semibold text-maroon">{site.name}</span>
        <span className="block text-[11px] uppercase tracking-[0.16em] text-gold-dark">{site.domain}</span>
      </span>
    </Link>
  );
}
