import Link from "next/link";
import type { RelatedLink } from "@/types";

export function InternalLinkSection({
  title = "Related reading",
  links,
}: {
  title?: string;
  links: RelatedLink[];
}) {
  if (!links.length) return null;
  return (
    <aside className="mt-12 rounded-2xl border border-maroon/10 bg-white p-6">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-maroon hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
