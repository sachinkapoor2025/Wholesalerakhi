"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/Logo";
import { primaryNav } from "@/data/site";
import { useQuoteList } from "@/lib/quote-list";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useQuoteList();

  return (
    <header className="sticky top-0 z-50 border-b border-maroon/10 bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {primaryNav.map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                  active ? "bg-maroon text-white" : "text-ink-muted hover:bg-white hover:text-maroon"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/catalog" className="hidden text-sm font-medium text-ink-muted hover:text-maroon sm:inline">
            Catalogue
          </Link>
          {items.length ? (
            <Link href="/request-wholesale-quote" className="hidden text-sm font-medium text-maroon sm:inline">
              Quote list ({items.length})
            </Link>
          ) : null}
          <Link href="/request-wholesale-quote" className="btn-primary hidden px-4 py-2 sm:inline-flex">
            Request Wholesale Quote
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-maroon/20 text-maroon lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              {open ? (
                <path strokeLinecap="round" strokeWidth={2} d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" strokeWidth={2} d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {open ? (
        <div id="mobile-nav" className="border-t border-maroon/10 bg-cream px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/catalog" className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white" onClick={() => setOpen(false)}>
              Catalogue
            </Link>
            <Link href="/shop" className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-white" onClick={() => setOpen(false)}>
              Seasonal shop
            </Link>
            <Link href="/request-wholesale-quote" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Request Wholesale Quote
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
