import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact, site } from "@/data/site";
import { TrackedExternalLink } from "@/components/TrackedLink";

const footerColumns = [
  {
    title: "Wholesale Rakhi",
    links: [
      { href: "/wholesale-rakhi", label: "Wholesale Rakhi" },
      { href: "/bulk-rakhi", label: "Bulk Rakhi" },
      { href: "/rakhi-supplier", label: "Rakhi Supplier" },
      { href: "/rakhi-wholesaler", label: "Rakhi Wholesaler" },
      { href: "/custom-rakhi", label: "Custom Rakhi" },
      { href: "/private-label-rakhi", label: "Private Label" },
      { href: "/catalog", label: "Wholesale Catalogue" },
      { href: "/shop", label: "Seasonal Shop" },
    ],
  },
  {
    title: "Rakhi Information",
    links: [
      { href: "/rakhi-types", label: "Rakhi Types" },
      { href: "/raksha-bandhan", label: "Raksha Bandhan" },
      { href: "/rakhi-history", label: "Rakhi History" },
      { href: "/rakhi-packaging", label: "Packaging" },
      { href: "/rakhi-quality", label: "Quality" },
      { href: "/rakhi-faq", label: "FAQ" },
    ],
  },
  {
    title: "International Buyers",
    links: [
      { href: "/international-rakhi-wholesale", label: "International Wholesale" },
      { href: "/international-rakhi-wholesale/usa", label: "USA" },
      { href: "/international-rakhi-wholesale/uk", label: "UK" },
      { href: "/international-rakhi-wholesale/canada", label: "Canada" },
      { href: "/international-rakhi-wholesale/australia", label: "Australia" },
      { href: "/rakhi-shipping-export", label: "Shipping & Export" },
    ],
  },
  {
    title: "Knowledge Centre",
    links: [
      { href: "/blog", label: "All Guides" },
      { href: "/blog/what-is-rakhi-wholesale", label: "What Is Rakhi Wholesale?" },
      { href: "/blog/how-to-buy-rakhi-wholesale-from-india", label: "Buy Wholesale from India" },
      { href: "/how-to-order-wholesale-rakhi", label: "How to Order" },
      { href: "/rakhi-catalog", label: "Catalogue" },
      { href: "/rakhi-gifts", label: "Gift programmes" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto bg-maroon text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-6">
        <div className="md:col-span-2">
          <Logo className="[&_span]:!text-gold-light [&_.block.font-serif]:!text-white" />
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">{site.positioning}</p>
          <p className="mt-2 text-sm text-gold-light">{site.supportingLine}</p>
          <div className="mt-5 space-y-2 text-sm text-white/85">
            {contact.email ? (
              <p>
                <a className="hover:underline" href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            ) : null}
            {contact.phone ? (
              <p>
                <TrackedExternalLink href={`tel:${contact.phone}`} event="phone_clicked" className="hover:underline">
                  {contact.phone}
                </TrackedExternalLink>
              </p>
            ) : null}
            {contact.whatsapp ? (
              <p>
                <TrackedExternalLink
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  event="whatsapp_clicked"
                  className="hover:underline"
                >
                  WhatsApp
                </TrackedExternalLink>
              </p>
            ) : null}
          </div>
        </div>
        {footerColumns.map((column) => (
          <div key={column.title}>
            <p className="mb-3 text-sm font-semibold text-gold-light">{column.title}</p>
            <ul className="space-y-2 text-sm text-white/80">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. {site.domain}
          </p>
          <div className="flex gap-4">
            <Link href="/about-us" className="hover:text-white">
              About
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
            <Link href="/request-wholesale-quote" className="hover:text-white">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
