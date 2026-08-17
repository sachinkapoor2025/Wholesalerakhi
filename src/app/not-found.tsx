import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-gold-dark">404</p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-4 text-ink-muted">The page you requested is not available. Try the wholesale hub or knowledge centre.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">
          Home
        </Link>
        <Link href="/blog" className="btn-secondary">
          Knowledge Centre
        </Link>
      </div>
    </div>
  );
}
