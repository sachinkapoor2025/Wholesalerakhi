export function RakhiIllustration({ slug, className = "" }: { slug: string; className?: string }) {
  const palette: Record<string, { thread: string; center: string; bead: string }> = {
    "designer-rakhi": { thread: "#7B1E2D", center: "#C4A35A", bead: "#9A2B3C" },
    "traditional-rakhi": { thread: "#C45C26", center: "#F2D38A", bead: "#7B1E2D" },
    "kundan-rakhi": { thread: "#7B1E2D", center: "#E6D3A3", bead: "#C4A35A" },
    "beaded-rakhi": { thread: "#5C1622", center: "#9A2B3C", bead: "#C4A35A" },
    "pearl-rakhi": { thread: "#7B1E2D", center: "#F7F1E6", bead: "#E6D3A3" },
    "gemstone-rakhi": { thread: "#5C1622", center: "#3F6B4A", bead: "#C4A35A" },
    "bracelet-rakhi": { thread: "#2C1810", center: "#C4A35A", bead: "#7B1E2D" },
    "kids-rakhi": { thread: "#C45C26", center: "#E8B84A", bead: "#3D7EA6" },
    "premium-rakhi": { thread: "#5C1622", center: "#C4A35A", bead: "#E6D3A3" },
    "lumba-rakhi": { thread: "#7B1E2D", center: "#C4A35A", bead: "#F2D38A" },
    "bhaiya-bhabhi-rakhi": { thread: "#7B1E2D", center: "#C4A35A", bead: "#9A2B3C" },
    "mauli-rakhi": { thread: "#D85A1A", center: "#F4C56A", bead: "#F7E7C1" },
    "cartoon-rakhi": { thread: "#3D7EA6", center: "#E8B84A", bead: "#7B1E2D" },
    "wooden-rakhi": { thread: "#8A5A2B", center: "#C48A3A", bead: "#F2D38A" },
    "silver-rakhi": { thread: "#6B7280", center: "#E5E7EB", bead: "#C4A35A" },
    "god-rakhi": { thread: "#7B1E2D", center: "#F2D38A", bead: "#C4A35A" },
  };
  const colors = palette[slug] ?? palette["designer-rakhi"];

  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden>
      <circle cx="80" cy="80" r="70" fill="#FAF7F2" />
      <path d="M18 82c20-8 40-8 62-2 22 6 42 6 62-2" stroke={colors.thread} strokeWidth="6" strokeLinecap="round" />
      <path d="M18 90c20-6 40-6 62 0 22 6 42 6 62 0" stroke={colors.bead} strokeWidth="3" strokeLinecap="round" />
      <circle cx="80" cy="78" r="22" fill={colors.center} stroke={colors.thread} strokeWidth="3" />
      <circle cx="80" cy="78" r="8" fill={colors.thread} />
      <circle cx="58" cy="78" r="5" fill={colors.bead} />
      <circle cx="102" cy="78" r="5" fill={colors.bead} />
    </svg>
  );
}
