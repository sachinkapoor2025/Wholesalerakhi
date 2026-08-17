import Link from "next/link";
import { Breadcrumbs, type Crumb } from "@/components/Breadcrumbs";
import { ContentBlocks, TableOfContents, AuthorUpdatedDate } from "@/components/ContentBlocks";
import { FAQSection } from "@/components/FAQSection";
import { InternalLinkSection } from "@/components/InternalLinkSection";
import { CTASection } from "@/components/CTASection";
import { Container } from "@/components/Section";
import type { ContentPage } from "@/types";

export function ContentPageView({
  page,
  crumbs,
  published,
  modified,
}: {
  page: ContentPage;
  crumbs: Crumb[];
  published?: string;
  modified?: string;
}) {
  return (
    <>
      <article>
        <Container className="py-10 md:py-14">
          <Breadcrumbs items={crumbs} />
          <h1 className="mt-6 max-w-4xl font-serif text-4xl text-ink md:text-5xl">{page.h1}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-ink-muted">{page.intro}</p>
          <AuthorUpdatedDate published={published} modified={modified ?? page.updated} />
          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div>
              <ContentBlocks blocks={page.blocks} />
              <FAQSection faqs={page.faqs} />
              <InternalLinkSection links={page.related} />
              <p className="mt-8">
                <Link href="/request-wholesale-quote" className="btn-primary">
                  Request Wholesale Quote
                </Link>
              </p>
            </div>
            <div className="hidden lg:block">
              <TableOfContents blocks={page.blocks} />
            </div>
          </div>
        </Container>
      </article>
      <CTASection />
    </>
  );
}
