export const rakhiCategories = [
  { slug: "designer-rakhi", name: "Designer Rakhi", image: "/images/designer-rakhi-wholesale.svg" },
  { slug: "traditional-rakhi", name: "Traditional Rakhi", image: "/images/traditional-rakhi-wholesale.svg" },
  { slug: "kundan-rakhi", name: "Kundan Rakhi", image: "/images/kundan-rakhi-bulk.svg" },
  { slug: "beaded-rakhi", name: "Beaded Rakhi", image: "/images/beaded-rakhi-wholesale.svg" },
  { slug: "pearl-rakhi", name: "Pearl Rakhi", image: "/images/pearl-rakhi-wholesale.svg" },
  { slug: "gemstone-rakhi", name: "Gemstone Rakhi", image: "/images/gemstone-rakhi-wholesale.svg" },
  { slug: "bracelet-rakhi", name: "Bracelet Rakhi", image: "/images/bracelet-rakhi-wholesale.svg" },
  { slug: "kids-rakhi", name: "Kids Rakhi", image: "/images/kids-rakhi-wholesale.svg" },
  { slug: "premium-rakhi", name: "Premium Rakhi", image: "/images/premium-rakhi-india.svg" },
  { slug: "lumba-rakhi", name: "Lumba Rakhi", image: "/images/lumba-rakhi-wholesale.svg" },
  { slug: "bhaiya-bhabhi-rakhi", name: "Bhaiya Bhabhi Rakhi", image: "/images/bhaiya-bhabhi-rakhi-wholesale.svg" },
  { slug: "mauli-rakhi", name: "Mauli Rakhi", image: "/images/mauli-rakhi-wholesale.svg" },
  { slug: "cartoon-rakhi", name: "Cartoon Rakhi", image: "/images/cartoon-rakhi-wholesale.svg" },
  { slug: "wooden-rakhi", name: "Wooden Rakhi", image: "/images/wooden-rakhi-wholesale.svg" },
  { slug: "silver-rakhi", name: "Silver Rakhi", image: "/images/silver-rakhi-wholesale.svg" },
  { slug: "god-rakhi", name: "God Rakhi", image: "/images/god-rakhi-wholesale.svg" },
] as const;

export const rakhiTypeOptions = rakhiCategories.map((item) => item.name);

export const homepageCategorySlugs = [
  "designer-rakhi",
  "traditional-rakhi",
  "kundan-rakhi",
  "beaded-rakhi",
  "pearl-rakhi",
  "gemstone-rakhi",
  "bracelet-rakhi",
  "kids-rakhi",
  "premium-rakhi",
  "lumba-rakhi",
  "bhaiya-bhabhi-rakhi",
  "mauli-rakhi",
] as const;

export const countries = [
  { slug: "usa", name: "USA", summary: "Import and wholesale considerations for US retailers, grocers and online sellers." },
  { slug: "uk", name: "UK", summary: "Sourcing Rakhi from India for British Indian retail, gift and community demand." },
  { slug: "canada", name: "Canada", summary: "Seasonal wholesale planning for Canadian cities with strong Raksha Bandhan demand." },
  { slug: "australia", name: "Australia", summary: "Lead times, packing and assortment notes for Australian wholesale buyers." },
  { slug: "uae", name: "UAE", summary: "Bulk Rakhi supply notes for Dubai, Abu Dhabi and wider Gulf retail." },
  { slug: "new-zealand", name: "New Zealand", summary: "Smaller-market wholesale planning with careful mix and shipping windows." },
  { slug: "singapore", name: "Singapore", summary: "Compact, premium-leaning assortments for Singapore retail and community buyers." },
  { slug: "europe", name: "Europe", summary: "Cross-border sourcing notes for European importers and South Asian retailers." },
] as const;

export const buyerPersonas = [
  { slug: "retailers", name: "Retailers", href: "/wholesale-rakhi-for-retailers", summary: "Store-ready mixes, display packing and seasonal depth." },
  { slug: "distributors", name: "Distributors", href: "/wholesale-rakhi-for-distributors", summary: "Assortment breadth, carton planning and reseller-friendly ranges." },
  { slug: "importers", name: "Importers", href: "/wholesale-rakhi-for-importers", summary: "Documentation, packing and destination-country planning." },
  { slug: "resellers", name: "Resellers", href: "/wholesale-rakhi-for-resellers", summary: "Flexible quantities and popular design groups for resale." },
  { slug: "online-sellers", name: "Online Sellers", href: "/wholesale-rakhi-for-online-sellers", summary: "Photographable designs, pack sizes and listing-friendly categories." },
  { slug: "gift-shops", name: "Gift Shops", href: "/wholesale-rakhi-for-gift-shops", summary: "Premium and gift-oriented Rakhi with presentation in mind." },
  { slug: "indian-grocery-stores", name: "Indian Grocery Stores", href: "/wholesale-rakhi-for-indian-grocery-stores", summary: "Fast-moving traditional, kids and value mixes for grocery retail." },
  { slug: "corporate-buyers", name: "Corporate Buyers", href: "/corporate-rakhi-orders", summary: "Uniform bulk orders for companies and institutions." },
  { slug: "community-organizations", name: "Community Organizations", href: "/wholesale-rakhi-for-community-organizations", summary: "Event and temple-committee quantities with simple packing." },
] as const;
