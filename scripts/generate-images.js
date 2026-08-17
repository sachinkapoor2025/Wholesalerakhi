const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const dir = path.join(root, "public/images");
fs.mkdirSync(dir, { recursive: true });
fs.mkdirSync(path.join(root, "public/icons"), { recursive: true });
fs.mkdirSync(path.join(root, "src/app"), { recursive: true });

const files = {
  "designer-rakhi-wholesale.svg": ["#7B1E2D", "#C4A35A", "#9A2B3C"],
  "traditional-rakhi-wholesale.svg": ["#C45C26", "#F2D38A", "#7B1E2D"],
  "kundan-rakhi-bulk.svg": ["#7B1E2D", "#E6D3A3", "#C4A35A"],
  "beaded-rakhi-wholesale.svg": ["#5C1622", "#9A2B3C", "#C4A35A"],
  "pearl-rakhi-wholesale.svg": ["#7B1E2D", "#F7F1E6", "#E6D3A3"],
  "gemstone-rakhi-wholesale.svg": ["#5C1622", "#3F6B4A", "#C4A35A"],
  "bracelet-rakhi-wholesale.svg": ["#2C1810", "#C4A35A", "#7B1E2D"],
  "kids-rakhi-wholesale.svg": ["#C45C26", "#E8B84A", "#3D7EA6"],
  "premium-rakhi-india.svg": ["#5C1622", "#C4A35A", "#E6D3A3"],
  "lumba-rakhi-wholesale.svg": ["#7B1E2D", "#C4A35A", "#F2D38A"],
  "bhaiya-bhabhi-rakhi-wholesale.svg": ["#7B1E2D", "#C4A35A", "#9A2B3C"],
  "mauli-rakhi-wholesale.svg": ["#D85A1A", "#F4C56A", "#F7E7C1"],
  "cartoon-rakhi-wholesale.svg": ["#3D7EA6", "#E8B84A", "#7B1E2D"],
  "wooden-rakhi-wholesale.svg": ["#8A5A2B", "#C48A3A", "#F2D38A"],
  "silver-rakhi-wholesale.svg": ["#6B7280", "#E5E7EB", "#C4A35A"],
  "god-rakhi-wholesale.svg": ["#7B1E2D", "#F2D38A", "#C4A35A"],
};

function svg(thread, center, bead) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" role="img" aria-hidden="true">
  <rect width="800" height="600" fill="#FAF7F2"/>
  <rect x="40" y="40" width="720" height="520" rx="28" fill="#F3EBE0"/>
  <path d="M80 310c120-40 240-40 320-8s210 28 320-12" stroke="${thread}" stroke-width="18" fill="none" stroke-linecap="round"/>
  <path d="M80 338c120-28 240-28 320 4s210 24 320-8" stroke="${bead}" stroke-width="8" fill="none" stroke-linecap="round"/>
  <circle cx="400" cy="300" r="92" fill="${center}" stroke="${thread}" stroke-width="10"/>
  <circle cx="400" cy="300" r="28" fill="${thread}"/>
  <circle cx="318" cy="300" r="16" fill="${bead}"/>
  <circle cx="482" cy="300" r="16" fill="${bead}"/>
</svg>`;
}

for (const [name, colors] of Object.entries(files)) {
  fs.writeFileSync(path.join(dir, name), svg(...colors));
}

fs.writeFileSync(
  path.join(dir, "og-wholesale-rakhi.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#7B1E2D"/>
  <text x="80" y="250" fill="#E6D3A3" font-size="42" font-family="Georgia, serif">RB.us</text>
  <text x="80" y="340" fill="#FAF7F2" font-size="64" font-family="Georgia, serif">Wholesale Rakhi</text>
  <text x="80" y="410" fill="#E6D3A3" font-size="32" font-family="Georgia, serif">from India for Buyers Worldwide</text>
</svg>`,
);

fs.writeFileSync(
  path.join(dir, "raksha-bandhan-campaign.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600">
  <rect width="1200" height="600" fill="#5C1622"/>
  <text x="80" y="280" fill="#E6D3A3" font-size="48" font-family="Georgia, serif">Raksha Bandhan Collection Is Here</text>
  <text x="80" y="360" fill="#FAF7F2" font-size="28" font-family="Georgia, serif">Seasonal wholesale campaign banner</text>
</svg>`,
);

fs.writeFileSync(
  path.join(root, "public/icons/logo.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <circle cx="32" cy="32" r="32" fill="#7B1E2D"/>
  <text x="32" y="40" text-anchor="middle" fill="#E6D3A3" font-size="18" font-family="Georgia, serif">WR</text>
</svg>`,
);

fs.writeFileSync(
  path.join(root, "src/app/icon.svg"),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="16" fill="#7B1E2D"/>
  <text x="16" y="21" text-anchor="middle" fill="#E6D3A3" font-size="10" font-family="Georgia, serif">WR</text>
</svg>`,
);

console.log("Wrote original Rakhi SVG assets");
