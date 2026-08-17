export function JsonLd({ data }: { data: unknown | unknown[] }) {
  const payload = (Array.isArray(data) ? data : [data]).filter(Boolean);
  if (!payload.length) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload.length === 1 ? payload[0] : payload),
      }}
    />
  );
}
