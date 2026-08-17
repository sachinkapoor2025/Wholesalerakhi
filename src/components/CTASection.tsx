import Link from "next/link";

export function CTASection({
  title = "Looking for Rakhi in Bulk?",
  copy = "Tell us your quantity, preferred Rakhi styles and destination country and our wholesale team can help you with the next steps.",
  href = "/request-wholesale-quote",
  label = "Request Wholesale Quote",
}: {
  title?: string;
  copy?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-maroon">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center">
        <h2 className="font-serif text-3xl text-white md:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-white/80">{copy}</p>
        <Link href={href} className="btn-secondary mt-8 border-white/30 bg-white text-maroon hover:bg-cream">
          {label}
        </Link>
      </div>
    </section>
  );
}
