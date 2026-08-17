import { Breadcrumbs } from "@/components/Breadcrumbs";
import { QuoteForm } from "@/components/QuoteForm";
import { Container } from "@/components/Section";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Request a Wholesale Rakhi Quote | Bulk Enquiry from India",
  description:
    "Request a wholesale Rakhi quote. Tell us your quantity range, preferred styles, buyer type and destination country.",
  path: "/request-wholesale-quote",
  keywords: "wholesale rakhi quote, bulk rakhi enquiry, buy rakhi wholesale",
});

export default function QuotePage() {
  return (
    <Container className="py-10 md:py-14">
      <Breadcrumbs items={[{ name: "Request Wholesale Quote", path: "/request-wholesale-quote" }]} />
      <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Request a wholesale quote</h1>
      <p className="mt-4 max-w-3xl text-lg text-ink-muted">
        Share quantity range, preferred Rakhi styles and destination country. Quantity bands are enquiry categories
        only — they are not published minimum order quantities.
      </p>
      <div className="mt-10 max-w-3xl">
        <QuoteForm />
      </div>
    </Container>
  );
}
