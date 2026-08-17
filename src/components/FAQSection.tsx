import { JsonLd } from "@/components/JsonLd";
import { faqJsonLd } from "@/lib/jsonld";
import type { FaqItem } from "@/types";

export function FAQSection({ faqs, title = "Frequently asked questions" }: { faqs: FaqItem[]; title?: string }) {
  if (!faqs.length) return null;
  return (
    <div className="mt-12">
      <JsonLd data={faqJsonLd(faqs)} />
      <h2 className="section-title mb-6">{title}</h2>
      <div className="divide-y divide-maroon/10 rounded-2xl border border-maroon/10 bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 py-4">
            <summary className="cursor-pointer list-none font-semibold text-ink marker:content-none">
              <span className="flex items-center justify-between gap-4">
                {faq.question}
                <span className="text-gold group-open:rotate-45">+</span>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-6 text-ink-muted">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
