import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Section";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Rakhi Gifts in Bulk | Wholesale Gift Programmes from India",
  description:
    "Plan Rakhi gift programmes for shops, companies and community groups. Wholesale Rakhi explains assortment and packing — there is no consumer gift checkout on RB.us.",
  path: "/rakhi-gifts",
});

export default function GiftsPortalPage() {
  return (
    <>
      <Container className="py-10 md:py-14">
        <Breadcrumbs items={[{ name: "Rakhi gifts", path: "/rakhi-gifts" }]} />
        <h1 className="mt-6 font-serif text-4xl text-ink md:text-5xl">Rakhi gift programmes in bulk</h1>
        <p className="mt-4 max-w-3xl text-lg text-ink-muted">
          Gift shops, corporates and associations often buy Rakhi as a seasonal gift, not as a single-piece consumer
          order. This page is for those programmes. Individual gift checkout belongs on a future consumer portal, not
          on RB.us.
        </p>
        <div className="prose-page mt-10 max-w-3xl">
          <h2>What a gift-led wholesale mix usually includes</h2>
          <p>
            Gift counters tend to need a smaller, more presentable mix than a grocery aisle: designer and premium looks,
            a lumba or bhaiya-bhabhi pair option, and packing that can sit beside sweets or dry fruit. Kids motifs may
            still matter if the shop serves families.
          </p>
          <h2>How this differs from grocery wholesale</h2>
          <ul>
            <li>Fewer SKUs, more finishing consistency</li>
            <li>Presentation pouches or cards instead of loose counter handfuls</li>
            <li>Earlier lock-in so gift wrapping and inserts can be prepared</li>
          </ul>
          <h2>Related wholesale paths</h2>
          <ul>
            <li>
              <Link href="/wholesale-rakhi-for-gift-shops">Gift shops</Link>
            </li>
            <li>
              <Link href="/corporate-rakhi-orders">Corporate orders</Link>
            </li>
            <li>
              <Link href="/private-label-rakhi">Private label packing</Link>
            </li>
          </ul>
        </div>
        <FAQSection
          faqs={[
            {
              question: "Can I buy one Rakhi gift on this website?",
              answer:
                "No. RB.us is built for wholesale enquiry and education. Seasonal consumer collections, when they exist, are linked from campaign banners to an external shop.",
            },
            {
              question: "How should a gift shop brief a wholesale order?",
              answer:
                "Share destination, a quantity range, whether packing should be gift-ready, and which look families you want — designer, traditional, kids or pairs. Do not treat quantity bands as official MOQs.",
            },
          ]}
        />
      </Container>
      <CTASection title="Planning a Rakhi gift programme?" />
    </>
  );
}
