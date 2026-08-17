"use client";

import { usePathname } from "next/navigation";
import { QuoteListProvider } from "@/lib/quote-list";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  return (
    <QuoteListProvider>
      {isAdmin ? null : <Header />}
      <main className="flex-1">{children}</main>
      {isAdmin ? null : <Footer />}
    </QuoteListProvider>
  );
}
