import type { ContentBlock } from "@/types";
import { slugifyHeading } from "@/lib/seo";

export function ContentBlocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-page">
      {blocks.map((block, index) => {
        if (block.type === "p") return <p key={index}>{block.text}</p>;
        if (block.type === "h2") {
          const id = block.id || slugifyHeading(block.text);
          return (
            <h2 key={index} id={id}>
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          const id = block.id || slugifyHeading(block.text);
          return (
            <h3 key={index} id={id}>
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol key={index}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index} className="rounded-xl border border-gold/40 bg-cream-dark px-4 py-3 text-ink">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export function TableOfContents({ blocks }: { blocks: ContentBlock[] }) {
  const headings = blocks.filter((block) => block.type === "h2");
  if (headings.length < 3) return null;
  return (
    <nav aria-label="On this page" className="mb-10 rounded-2xl bg-white p-5 shadow-card">
      <p className="text-sm font-semibold uppercase tracking-wide text-gold-dark">On this page</p>
      <ol className="mt-3 space-y-2 text-sm">
        {headings.map((heading) => {
          if (heading.type !== "h2") return null;
          const id = heading.id || slugifyHeading(heading.text);
          return (
            <li key={id}>
              <a href={`#${id}`} className="text-maroon hover:underline">
                {heading.text}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function AuthorUpdatedDate({ published, modified }: { published?: string; modified?: string }) {
  if (!published && !modified) return null;
  return (
    <p className="mt-3 text-sm text-ink-muted">
      {published ? `Published ${formatDate(published)}` : null}
      {published && modified ? " · " : null}
      {modified ? `Updated ${formatDate(modified)}` : null}
    </p>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}
