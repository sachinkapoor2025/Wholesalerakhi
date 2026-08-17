import { getCorePage } from "@/content/pages/core";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContentBlocks } from "@/components/ContentBlocks";
import { QuoteForm } from "@/components/QuoteForm";
import { FAQSection } from "@/components/FAQSection";
import { Container } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { contact } from "@/data/site";
import { pageMetadata } from "@/lib/seo";
import { TrackedExternalLink } from "@/components/TrackedLink";

export const metadata = pageMetadata({
  title: "Contact Wholesale Rakhi | Request a Bulk Enquiry",
  description:
    "Contact Wholesale Rakhi to discuss bulk and wholesale Rakhi requirements from India. Share quantity range, styles and destination country.",
  path: "/contact",
});

export default function ContactPage() {
  const page = getCorePage("contact");
  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ name: "Contact", path: "/contact" }]} />
        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">{page?.h1 ?? "Contact Wholesale Rakhi"}</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">
          {page?.intro ??
            "Use the wholesale enquiry form for the fastest response. Phone, WhatsApp and email appear here only when the business owner publishes them."}
        </p>
        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <QuoteForm />
          <aside className="h-fit rounded-2xl border border-maroon/10 bg-white p-5">
            <h2 className="font-serif text-xl text-ink">Direct contact</h2>
            {contact.email || contact.phone || contact.whatsapp ? (
              <ul className="mt-4 space-y-3 text-sm">
                {contact.email ? (
                  <li>
                    Email:{" "}
                    <a className="text-maroon hover:underline" href={`mailto:${contact.email}`}>
                      {contact.email}
                    </a>
                  </li>
                ) : null}
                {contact.phone ? (
                  <li>
                    Phone:{" "}
                    <TrackedExternalLink event="phone_clicked" href={`tel:${contact.phone}`} className="text-maroon hover:underline">
                      {contact.phone}
                    </TrackedExternalLink>
                  </li>
                ) : null}
                {contact.whatsapp ? (
                  <li>
                    WhatsApp:{" "}
                    <TrackedExternalLink
                      event="whatsapp_clicked"
                      href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                      className="text-maroon hover:underline"
                    >
                      Message on WhatsApp
                    </TrackedExternalLink>
                  </li>
                ) : null}
              </ul>
            ) : (
              <p className="mt-3 text-sm text-ink-muted">
                Direct phone, WhatsApp and email will be published after the owner confirms the details. Until then,
                please use the enquiry form.
              </p>
            )}
          </aside>
        </div>
        {page ? (
          <div className="mt-12">
            <ContentBlocks blocks={page.blocks} />
            <FAQSection faqs={page.faqs} />
          </div>
        ) : null}
      </Container>
      <CTASection title="Prefer a structured brief?" copy="The quote form captures quantity range, buyer type and destination in one place." />
    </>
  );
}
