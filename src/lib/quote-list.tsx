"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { QuoteItem } from "@/types";

const STORAGE_KEY = "wr-quote-list";

type QuoteListContextValue = {
  items: QuoteItem[];
  addItem: (item: QuoteItem) => void;
  removeItem: (sku: string) => void;
  clear: () => void;
};

const QuoteListContext = createContext<QuoteListContextValue | null>(null);

export function QuoteListProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setItems(JSON.parse(raw) as QuoteItem[]);
    } catch {
      setItems([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const value = useMemo<QuoteListContextValue>(
    () => ({
      items,
      addItem: (item) =>
        setItems((current) => (current.some((entry) => entry.sku === item.sku) ? current : [...current, item])),
      removeItem: (sku) => setItems((current) => current.filter((item) => item.sku !== sku)),
      clear: () => setItems([]),
    }),
    [items],
  );

  return <QuoteListContext.Provider value={value}>{children}</QuoteListContext.Provider>;
}

export function useQuoteList() {
  const context = useContext(QuoteListContext);
  if (!context) {
    return {
      items: [] as QuoteItem[],
      addItem: () => undefined,
      removeItem: () => undefined,
      clear: () => undefined,
    };
  }
  return context;
}
