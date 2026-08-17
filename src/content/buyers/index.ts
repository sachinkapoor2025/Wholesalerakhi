import type { BuyerPersona, ContentBlock, FaqItem } from "@/types";

const quote: { href: string; label: string } = {
  href: "/request-wholesale-quote",
  label: "Request a wholesale quote",
};

const retailerFaqs: FaqItem[] = [
  {
    question: "What should a first-season retail Rakhi mix look like?",
    answer:
      "Most shops do well with traditional designs as the familiar core, a visible designer or premium slice, kids styles, and at least one pair option. Depths should match how customers actually walk the aisle, not a complete type list from a website hub.",
  },
  {
    question: "How do I avoid leftover stock after Raksha Bandhan?",
    answer:
      "Keep the first quantity in a planning range you can sell through, deepen winners if there is time for a second inbound, and avoid exclusive private-label packs until the mix is proven. Festival leftovers are harder to tell as everyday jewellery.",
  },
  {
    question: "Should retail Rakhi arrive in display-ready inners?",
    answer:
      "If your staff hang or counter-display pieces, say so in the brief. Warehouse-only bundles save packing complexity but cost time on the shop floor. There is no single correct inner; it depends on how you merchandise.",
  },
  {
    question: "When should a retailer send a wholesale brief?",
    answer:
      "Work backwards from the local festival week, typically in August, and add time for confirmation, inbound and merchandising. International retailers need a wider window than shops that can restock locally.",
  },
];

const distributorFaqs: FaqItem[] = [
  {
    question: "How is a distributor mix different from a single-shop order?",
    answer:
      "Distributors need breadth that several retailers can pick from, carton logic that can be split, and names for design groups that sales teams can repeat. A shop can live with three families; a distributor often needs a structured range with clear pair and kids lines.",
  },
  {
    question: "What should I specify about cartons?",
    answer:
      "Describe whether you need mixed master cartons, family-sorted inners, or both. Say how your resellers will order from you so packing does not fight your price list structure. Exact carton yields are agreed in a quote, not published here.",
  },
  {
    question: "Do distributors need samples of every SKU?",
    answer:
      "Usually not. Sample the families you will photograph for a sell-sheet, then lock bulk against a written specification. Sampling every decorative variant consumes time in peak season.",
  },
  {
    question: "How do I brief for several countries from one warehouse?",
    answer:
      "Name the warehouse country and the markets you will re-export or resell into. Packing and label language may need to satisfy the strictest destination you actually serve. Classification remains each importer’s responsibility.",
  },
];

const importerFaqs: FaqItem[] = [
  {
    question: "What belongs in an importer’s first Rakhi brief?",
    answer:
      "Destination country, who the importer of record will be, a quantity range, type mix, packing for the intended mode, and the week goods must be available to your customers. Document needs should be listed, not assumed from this website.",
  },
  {
    question: "Will this site provide export licences on the page?",
    answer:
      "No. Licences and registrations are not published as badges here. Request the documents your broker needs during the quote process from the party that will actually export.",
  },
  {
    question: "Air or sea — how should an importer decide?",
    answer:
      "Decide from the festival calendar and carton volume, not from a rate table on this site. Sea needs earlier planning and stronger moisture talk; air and courier are often discussed when the week is close. Rates are shipment-specific.",
  },
  {
    question: "How do I reduce customs description problems?",
    answer:
      "Keep invoice language aligned with what is in the carton, avoid vague “gift items” if you can name festive wrist threads, and let your broker confirm classification. This site does not invent HS codes.",
  },
];

const resellerFaqs: FaqItem[] = [
  {
    question: "I am not a large importer. Can I still buy wholesale Rakhi?",
    answer:
      "Describe yourself as a reseller, give an honest quantity range, and name a short mix. Whether a given range is practical depends on packing and season; that is a quote conversation, not a published minimum on this page.",
  },
  {
    question: "What designs move for general resale?",
    answer:
      "Familiar traditional motifs, kids designs, and a pair option cover many informal and stall-like channels. Add a small designer slice if your customers gift rather than only fulfil a ritual minimum.",
  },
  {
    question: "Should resellers private-label on the first try?",
    answer:
      "Usually no. Unbranded or lightly labelled packs are easier to divert if sell-through is uneven. Add a hang-tag later if your channel needs a name.",
  },
  {
    question: "How do I avoid over-ordering one colour?",
    answer:
      "Brief in families and ask for a mixed inner rather than a single hero colour unless you already know demand. Colour-only orders are a common reseller leftover pattern.",
  },
];

const onlineFaqs: FaqItem[] = [
  {
    question: "What makes a Rakhi listing-friendly?",
    answer:
      "A clear type name, a photographable motif, a pack size you can repeat in the title, and materials language that does not over-claim gemstone or metal content. Customers who cannot touch the piece rely on those four.",
  },
  {
    question: "Should I buy every type for the marketplace?",
    answer:
      "No. Photograph a focused set well, then expand. Thin listings across many families with weak images underperform a short, sharp range.",
  },
  {
    question: "How should online sellers think about packing?",
    answer:
      "Inners should survive your own outbound parcel, not only the inbound wholesale carton. Ask for protection against crush and colour transfer, and avoid oversized gift boxes unless you sell a premium kit.",
  },
  {
    question: "When do I need samples for photography?",
    answer:
      "If last year’s images cannot be reused, sample the hero SKUs. Do not launch a catalogue of stock photos that may not match bulk finishing.",
  },
];

const giftShopFaqs: FaqItem[] = [
  {
    question: "How is a gift-shop mix different from grocery Rakhi?",
    answer:
      "Gift shops usually hold fewer pieces, lean designer or premium, and care about presentation. Grocery needs faster traditional and kids lines. Using a grocery mix in a gift counter often looks crowded and under-explained.",
  },
  {
    question: "Do gift shops need pairs?",
    answer:
      "A small lumba or bhaiya-bhabhi option helps customers who shop for a household, but it does not have to dominate. Keep pairs packed so they can be explained in one glance.",
  },
  {
    question: "What QC matters more in a gift setting?",
    answer:
      "Motif security, colour-bleed risk on pale garments, and inner presentation. A loose stone is more visible when the piece is given as a present than when it is a hook in a grocery aisle.",
  },
  {
    question: "Is custom branding common for gift retail?",
    answer:
      "Shop-name hang-tags are more common than logo-on-motif. Custom motifs are worth it only if you have time and a story; otherwise buy a tight premium mix and pack it well.",
  },
];

const groceryFaqs: FaqItem[] = [
  {
    question: "What sells in an Indian grocery during Rakhi week?",
    answer:
      "Traditional designs, kids and cartoon-style pieces, mauli-style threads, and accessible pairs are the usual fast movers. A small designer hook can sit near the counter, but it should not starve the core mix of depth.",
  },
  {
    question: "How should grocery staff be able to pick?",
    answer:
      "Family-sorted inners or clearly marked bundles reduce time at the back door. If everything arrives as one mixed poly bag, peak week becomes a sorting project.",
  },
  {
    question: "Should grocery stores order premium silver-look lines first?",
    answer:
      "Only if you already know that customer. Many grocery Rakhi shoppers are fulfilling a festival need quickly. Premium depth is easier after the core is covered.",
  },
  {
    question: "What about sweets and Rakhi together?",
    answer:
      "This site supplies information on Rakhi, not mithai. If you merchandise them together, still brief Rakhi packing separately so sugar and humidity from food aisles are not treated as the product’s problem alone.",
  },
];

const corporateBuyerFaqs: FaqItem[] = [
  {
    question: "Who should own the corporate Rakhi decision?",
    answer:
      "One named owner — often HR, internal comms or office administration — should consolidate headcount, branding and delivery windows. Multiple managers ordering different mixes create packing and leftover problems.",
  },
  {
    question: "Logo on the Rakhi or on the card?",
    answer:
      "A branded card or pouch is usually faster and more legible at small motif sizes. Logo-on-piece is a custom path with colour-matching limits. Choose based on visibility needs and approval time, not on a catalogue promise.",
  },
  {
    question: "How do multi-office deliveries work in a brief?",
    answer:
      "Give site names, quantities as ranges per site, and the earliest and latest in-hands dates. Say whether leftovers can move between offices. Do not assume a single ship-to will be split for you without asking.",
  },
  {
    question: "What if leadership approves late?",
    answer:
      "Late artwork or headcount cuts options, especially before Raksha Bandhan. Brief a fallback uniform design that can proceed if the logo path slips, and say that in the quote request.",
  },
];

const communityFaqs: FaqItem[] = [
  {
    question: "How should a temple committee or association brief quantity?",
    answer:
      "Use a range based on last year’s attendance plus a modest buffer if your event is growing. Count kids separately if you will give a different piece. Avoid inflating the number to “look wholesale”.",
  },
  {
    question: "Do community orders need designer Rakhi?",
    answer:
      "Usually a simple traditional and kids mix is easier to distribute and explain. Designer pieces can sit in a small VIP or auction set if that is part of the event, not as the entire bag.",
  },
  {
    question: "What packing helps volunteers?",
    answer:
      "Countable bundles, pairs packed together, and labels that do not require product knowledge. Volunteers should not have to decode SKU poetry at the hall door.",
  },
  {
    question: "Can we add the organisation’s name?",
    answer:
      "A card or pouch print is often enough. Motif customisation needs artwork time. Say whether branding is required this year or can wait so the festival date is not at risk.",
  },
];

const retailerBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "shop-reality",
    text: "Retail is a shelf, a staff story and a dated week",
  },
  {
    type: "p",
    text: "A retailer does not buy Rakhi as an abstract assortment. Pieces must hang, sit in a counter or live in a clip strip, and staff must explain traditional versus kids versus pairs in a few seconds. The festival week, typically in August, then ends the selling window for most of the range.",
  },
  {
    type: "h2",
    id: "build-the-mix",
    text: "Build a mix your aisle can explain",
  },
  {
    type: "ul",
    items: [
      "Traditional designs as the recognisable core",
      "Kids and cartoon-style pieces at reachable height",
      "One pair family (lumba or bhaiya-bhabhi) with a clear pack",
      "A smaller designer or premium slice near the till if that is your customer",
    ],
  },
  {
    type: "h3",
    id: "display-packing",
    text: "Display packing versus back-room unpacking",
  },
  {
    type: "p",
    text: "If you need hook-ready headers or individual pouches, write that in the brief. If you have a stockroom team that can sort, mixed bundles may be acceptable. Do not discover the packing style when the carton opens two days before the festival.",
  },
  {
    type: "h2",
    id: "depth-not-width",
    text: "Depth beats width in year one",
  },
  {
    type: "p",
    text: "A shop that tries every type with two pieces of each looks unfinished. Choose fewer families and give them enough depth for a weekend rush. Use quantity ranges on the quote form rather than asking this site for a published minimum.",
  },
  {
    type: "ol",
    items: [
      "Walk last year’s leftover notes, if you have them.",
      "Name three to five families for this season.",
      "Set an in-hands week before local Raksha Bandhan.",
      "State inner packing you can actually merchandise from.",
    ],
  },
  {
    type: "callout",
    text: "Retail success is sell-through, not owning the longest type list. Catalogue images, when shared after enquiry, should be judged against your shelf, not against a wish list.",
  },
  {
    type: "p",
    text: "Send a retailer brief through the wholesale quote form. Mention grocery versus gift positioning if your shop sits between those worlds.",
  },
];

const distributorBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "breadth-with-structure",
    text: "Breadth with a structure your resellers can order",
  },
  {
    type: "p",
    text: "Distributors sit between Indian festive supply and many small shops. The job is not to collect every motif; it is to hold a range that a sales conversation can repeat: traditional, designer, kids, pairs, perhaps a premium hook. Names and carton logic matter as much as decoration.",
  },
  {
    type: "h2",
    id: "carton-planning",
    text: "Carton planning",
  },
  {
    type: "ul",
    items: [
      "Whether masters are mixed or family-sorted",
      "Inner counts that match how you sell to shops",
      "Pair sets packed as sets so they are not split in error",
      "Marks a warehouse picker can read without opening every inner",
    ],
  },
  {
    type: "h3",
    id: "reseller-friendly-ranges",
    text: "Reseller-friendly ranges",
  },
  {
    type: "p",
    text: "A distributor’s smallest trade pack still has to make sense for a grocery or stall. If your customers cannot buy a coherent mini-mix, they will cherry-pick and leave you with the slow colours. Brief the intended trade-pack story, even if exact yields are agreed later.",
  },
  {
    type: "h2",
    id: "calendar-and-cash",
    text: "Calendar and concentration risk",
  },
  {
    type: "p",
    text: "Rakhi is a peaked category. Holding too much of one decorative family ties up a season. Use planning ranges, keep a path to deepen winners, and do not treat unverified “design counts” on websites as a stocking plan.",
  },
  {
    type: "ol",
    items: [
      "Map the shop types you actually serve.",
      "Assign family weights to that map.",
      "Describe carton and inner logic.",
      "Name warehouse country and any onward markets.",
    ],
  },
  {
    type: "callout",
    text: "Distributor briefs that only say “assorted Rakhi, as much as possible” produce cartons nobody can sell from. Structure is the product.",
  },
  {
    type: "p",
    text: "Use the quote form as a distributor. Link to shipping and packaging pages in your internal SOP if your team handles import as well as domestic wholesale.",
  },
];

const importerBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "importer-job",
    text: "The importer’s job is goods plus a file",
  },
  {
    type: "p",
    text: "Importers buy Rakhi as a seasonal article and as a customs file. Mix, moisture packing, invoice language and who is importer of record all belong in the first brief. This site will not fill that file with invented licences or HS codes.",
  },
  {
    type: "h2",
    id: "destination-planning",
    text: "Destination-country planning",
  },
  {
    type: "ul",
    items: [
      "Country of arrival, not only where you are emailing from",
      "Whether goods go to a retailer DC, a 3PL or several shops",
      "Local Raksha Bandhan week, commonly in August (28 August 2026 is often cited)",
      "Mode family you are prepared to use if the calendar slips",
    ],
  },
  {
    type: "h3",
    id: "documents",
    text: "Documents to discuss, not to scrape off a homepage",
  },
  {
    type: "p",
    text: "Commercial invoice, packing list and transport document are the usual core. Additional statements depend on the destination. Ask for what your broker listed. Do not treat the absence of certificate scans on Wholesale Rakhi as a substitute for that request.",
  },
  {
    type: "h2",
    id: "packing-for-inbound",
    text: "Packing for inbound, not only for the shop",
  },
  {
    type: "p",
    text: "Longer dwell and humidity change the inner/outer conversation. Read the packaging and shipping pages, then write moisture and crush notes into the quote. Photograph-ready pouches that fail in a container are still a quality failure.",
  },
  {
    type: "ol",
    items: [
      "Lock mix percentages against the channels you supply.",
      "State mode and in-hands week.",
      "List document needs.",
      "Ask how substitutions will be approved before packing.",
    ],
  },
  {
    type: "callout",
    text: "Country guides on this site are planning context. Your broker remains the authority on classification and clearance.",
  },
  {
    type: "p",
    text: "Submit the importer brief on the wholesale quote form and name the destination even if you operate regionally.",
  },
];

const resellerBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "flexible-not-vague",
    text: "Flexible quantities still need a named mix",
  },
  {
    type: "p",
    text: "Resellers often need less depth than a distributor and less merchandising theatre than a gift shop. The risk is vagueness: “some Rakhi for the season” produces a carton you cannot explain. Give a quantity range and two to four design groups.",
  },
  {
    type: "h2",
    id: "popular-groups",
    text: "Popular design groups for resale",
  },
  {
    type: "ul",
    items: [
      "Traditional motifs customers recognise without a speech",
      "Kids designs for family baskets",
      "A pair option if you sell to households, not only to individuals",
      "A small designer handful if you also do gifts",
    ],
  },
  {
    type: "h3",
    id: "how-you-sell",
    text: "How you sell should change packing",
  },
  {
    type: "p",
    text: "Stall, pop-up, social commerce and supply to a few shops all unpack differently. Say which you are. Individual poly may help social sellers; countable bundles help anyone restocking a table each morning.",
  },
  {
    type: "h2",
    id: "do-not-over-commit",
    text: "Do not over-commit on colour or branding",
  },
  {
    type: "p",
    text: "Single-colour bulk and first-run private label are common reseller traps. Mixed inners and generic packing keep leftover risk lower until you know what your circle actually ties.",
  },
  {
    type: "ol",
    items: [
      "Pick a quantity band you can finance and store.",
      "Name the families, not only “assorted”.",
      "Skip custom unless you already have a repeat buyer for it.",
      "Give the week you need the goods.",
    ],
  },
  {
    type: "callout",
    text: "There is no public MOQ on this site. Describe a real range; practicality is tested in the quote, not in a banner number.",
  },
  {
    type: "p",
    text: "Open the wholesale quote form as a reseller. If you also sell online, read that buyer guide for photography notes and keep one brief so the mix is not split across two stories.",
  },
];

const onlineBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "listings-are-the-shelf",
    text: "Listings are your shelf",
  },
  {
    type: "p",
    text: "Online sellers cannot rely on a customer touching thread or seeing a pair in a tray. Motif clarity, honest materials language and pack-size titles do the merchandising. Wholesale buying should start from what you can photograph and ship, not from a factory tour you were never promised.",
  },
  {
    type: "h2",
    id: "photographable-designs",
    text: "Photographable designs",
  },
  {
    type: "ul",
    items: [
      "Centres that read at thumbnail size",
      "Colourways you can keep consistent in bulk",
      "Kids designs that are distinct from adult traditional lines",
      "Pairs shown as pairs, not as two unrelated crops",
    ],
  },
  {
    type: "h3",
    id: "pack-sizes",
    text: "Pack sizes",
  },
  {
    type: "p",
    text: "Decide whether you sell singles, small household packs or larger family packs before you brief inbound inners. Changing pack size after photography wastes the season. Quantity ranges on the inbound brief should map to how many listings you will actually run.",
  },
  {
    type: "h2",
    id: "claims-and-returns",
    text: "Claims and returns",
  },
  {
    type: "p",
    text: "Do not write “pure silver” or “natural gemstone” unless you can support it. Type names on this site are merchandising language. Colour bleed and loose stones drive returns; put those QC points in the wholesale brief.",
  },
  {
    type: "ol",
    items: [
      "Choose a short hero set for images.",
      "Sample those SKUs if last year’s photos cannot be reused.",
      "Brief inbound packing that survives your outbound parcel.",
      "Keep listing copy aligned with the specification you approved.",
    ],
  },
  {
    type: "callout",
    text: "Marketplace calendars still obey Raksha Bandhan. Launch images late and you are selling into a silent week.",
  },
  {
    type: "p",
    text: "Request a wholesale quote as an online seller and attach notes on pack size and photography. Catalogue files, when available after enquiry, should be treated as a starting set, not as listing copy.",
  },
];

const giftShopBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "presentation-first",
    text: "Presentation is part of the product",
  },
  {
    type: "p",
    text: "Gift shops sell a moment as well as a thread. Customers compare finish, colour and how the piece sits in a pouch or on a card. A grocery-style mixed poly dump fights that expectation even if the motifs are pretty.",
  },
  {
    type: "h2",
    id: "premium-leaning-mix",
    text: "A premium-leaning, short mix",
  },
  {
    type: "ul",
    items: [
      "Designer and selected kundan-look or pearl families",
      "A restrained traditional option for customers who want familiarity with better finish",
      "Kids only if families shop you for gifting, not as an afterthought dump",
      "Pairs packed so the relationship is obvious",
    ],
  },
  {
    type: "h3",
    id: "inner-presentation",
    text: "Inner presentation",
  },
  {
    type: "p",
    text: "Ask for inners you can place in a tray or wrap without rework. If you need a shop hang-tag, that is a private-label conversation — often worth delaying until the mix is proven, so you are not left with branded empty boxes.",
  },
  {
    type: "h2",
    id: "qc-for-gifting",
    text: "QC for gifting",
  },
  {
    type: "p",
    text: "Stone security, thread ends and colour transfer onto pale clothing matter more when the Rakhi is opened as a present. Write those reject points down. Do not rely on a lifestyle photograph as the quality standard.",
  },
  {
    type: "ol",
    items: [
      "Limit families so the counter tells a story.",
      "Specify inner format.",
      "Set an in-hands date that allows merchandising, not only receiving.",
      "Decide branding separately from the product mix.",
    ],
  },
  {
    type: "callout",
    text: "Gift retail is not a reason to invent metal purity or antique craft stories. Keep pack copy informational and modest.",
  },
  {
    type: "p",
    text: "Send the gift-shop brief on the quote form. If you also run an online gift shop, keep pack size and photography notes in the same message.",
  },
];

const groceryBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "peak-aisle",
    text: "Grocery Rakhi is a peak-aisle product",
  },
  {
    type: "p",
    text: "Indian grocery stores sell Rakhi next to food runs and festival groceries. Shoppers are often efficient: traditional look, kids piece, maybe a pair, then sweets or puja items. Your wholesale brief should privilege those fast movers and packing that staff can put out quickly.",
  },
  {
    type: "h2",
    id: "fast-movers",
    text: "Fast-moving groups",
  },
  {
    type: "ul",
    items: [
      "Traditional and mauli-style threads",
      "Kids and cartoon-style designs",
      "Accessible lumba or bhaiya-bhabhi pairs",
      "A thin designer hook only if your till area supports it",
    ],
  },
  {
    type: "h3",
    id: "back-door-time",
    text: "Back-door time is scarce",
  },
  {
    type: "p",
    text: "Peak week coincides with other festive inbound. Family-sorted bundles and clear outer marks beat a single mixed sack. If you have more than one till or a second store, say whether cartons should be split-ready.",
  },
  {
    type: "h2",
    id: "value-mix-honesty",
    text: "Value mix without pretending it is premium",
  },
  {
    type: "p",
    text: "Grocery customers can recognise over-promised “gemstone” language. Keep merchandising honest, put QC on thread finishing so cheap-looking fray does not hit the hook, and do not starve traditional depth to chase a catalogue’s prettiest page.",
  },
  {
    type: "ol",
    items: [
      "Estimate last year’s sell-through by family if you can.",
      "Weight the range toward traditional and kids.",
      "Ask for countable inners.",
      "Set in-hands before the local festival week, typically August.",
    ],
  },
  {
    type: "callout",
    text: "Quantity bands such as 100–500 or 500–1,000 are planning tools for a store or a small group of stores. They are not a published MOQ.",
  },
  {
    type: "p",
    text: "Submit the grocery brief via the wholesale quote form. If you also wholesale to nearby shops, use the distributor guide so carton logic is not written as a single-store story.",
  },
];

const corporateBuyerBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "decision-makers",
    text: "Decision makers and a single brief",
  },
  {
    type: "p",
    text: "Corporate Rakhi programmes stall when HR wants a logo, facilities wants one delivery date, and a regional manager adds kids designs in a side message. Name one owner. That person collects headcount ranges, branding rules and site windows before anyone talks assortment.",
  },
  {
    type: "h2",
    id: "branding-choice",
    text: "Branding: piece, pouch or card",
  },
  {
    type: "ul",
    items: [
      "Card or pouch — usually the clearest logo at programme scale",
      "Hang-tag — lighter than a box, still a private-label path",
      "Logo on the motif — custom, colour-limited, needs artwork time",
      "No brand mark — fastest if the culture story is the festival itself",
    ],
  },
  {
    type: "h3",
    id: "delivery-windows",
    text: "Delivery windows, not a single vague “before Rakhi”",
  },
  {
    type: "p",
    text: "Give earliest and latest in-hands dates per site. Offices closed on the festival day, security docks and remote locations all change the window. For 2026, 28 August is commonly cited for Raksha Bandhan; still confirm the date your employees observe.",
  },
  {
    type: "h2",
    id: "uniform-programme",
    text: "Uniformity is a programme asset",
  },
  {
    type: "p",
    text: "One or two designs plus an optional kids piece photographs as an initiative. A retailer-style mixed carton looks like leftover stock in a tote bag. If leadership wants “premium”, specify finish and packing, not an endless type list.",
  },
  {
    type: "ol",
    items: [
      "Appoint one decision owner.",
      "Freeze branding surface and artwork deadline.",
      "Collect site-level quantity ranges and dock constraints.",
      "Name a fallback unbranded uniform design if approvals slip.",
    ],
  },
  {
    type: "callout",
    text: "This buyer guide overlaps the corporate Rakhi topic page but stays with procurement language: owners, marks and windows. No client testimonials are listed.",
  },
  {
    type: "p",
    text: "File the brief as a corporate buyer on the quote form. Attach logo files only if the branding path is approved, so sample time is not spent on a mark that will change.",
  },
];

const communityBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "events-and-committees",
    text: "Events, committees and volunteer hands",
  },
  {
    type: "p",
    text: "Community organisations — temple committees, associations, student groups, neighbourhood societies — buy Rakhi to distribute on a dated gathering. The product must be easy to count, easy to explain, and robust enough for a hall table, not only a jewellery counter.",
  },
  {
    type: "h2",
    id: "simple-mix",
    text: "A simple mix that volunteers can give out",
  },
  {
    type: "ul",
    items: [
      "Traditional designs as the default adult piece",
      "Kids designs in a separately counted bundle",
      "Pairs only if your event specifically serves couples or bhabhi gifts",
      "Avoid a long designer menu unless you have a separate stall with staff who can explain it",
    ],
  },
  {
    type: "h3",
    id: "packing-for-the-hall",
    text: "Packing for the hall",
  },
  {
    type: "p",
    text: "Ask for countable bundles and labels in plain language. Volunteers should be able to hand a kids piece without opening a mixed decorative sack. If you need an organisation card in the bag, that is a packaging note, not a reason to delay the whole order on motif customisation.",
  },
  {
    type: "h2",
    id: "quantity-honesty",
    text: "Quantity honesty",
  },
  {
    type: "p",
    text: "Use last year’s attendance, RSVP lists or a conservative range. Leftover community Rakhi is awkward to store and harder to present as new the following year if colours shift. Planning ranges on the form are enough; do not invent a minimum to “sound serious”.",
  },
  {
    type: "ol",
    items: [
      "Fix the event date against the local Raksha Bandhan week.",
      "Split adult and kids counts.",
      "Decide if branding is a card this year or not at all.",
      "Give one delivery address and a person who will receive the carton.",
    ],
  },
  {
    type: "callout",
    text: "Community buying is still wholesale in process — brief, mix, packing, calendar — even when the spirit of the day is seva and celebration rather than retail margin.",
  },
  {
    type: "p",
    text: "Send the organisation brief through the wholesale quote form. If a company is funding the event, still keep one product owner so the mix does not split between HR aesthetics and volunteer practicality.",
  },
];

export const buyerGuides: BuyerPersona[] = [
  {
    slug: "retailers",
    name: "Retailers",
    summary:
      "Store-ready Rakhi mixes, display packing and seasonal depth for shops that must sell through before the festival week.",
    href: "/wholesale-rakhi-for-retailers",
    seo: {
      title: "Wholesale Rakhi for Retailers | Mix, Display and Timing",
      description:
        "How retailers plan a Rakhi aisle: traditional core, kids and pairs, display packing, and quantity ranges that can sell through before Raksha Bandhan.",
      path: "/wholesale-rakhi-for-retailers",
      keywords: "wholesale rakhi for retailers, rakhi for shops, store rakhi assortment",
    },
    h1: "Wholesale Rakhi for retailers",
    intro:
      "Retail buyers need a mix staff can explain, packing that matches the shelf, and enough depth for the festival rush without a year of leftovers. This guide translates shop-floor questions into a wholesale brief.",
    blocks: retailerBlocks,
    faqs: retailerFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "Wholesale overview" },
      { href: "/rakhi-types", label: "Type hub" },
      { href: "/wholesale-rakhi-for-indian-grocery-stores", label: "Grocery stores" },
      { href: "/wholesale-rakhi-for-gift-shops", label: "Gift shops" },
    ],
  },
  {
    slug: "distributors",
    name: "Distributors",
    summary:
      "Assortment breadth, carton planning and reseller-friendly ranges for businesses that supply several shops.",
    href: "/wholesale-rakhi-for-distributors",
    seo: {
      title: "Wholesale Rakhi for Distributors | Cartons and Ranges",
      description:
        "Distributor guidance for Rakhi from India: structured type breadth, master-carton logic, reseller-friendly packs and a peaked seasonal calendar.",
      path: "/wholesale-rakhi-for-distributors",
      keywords: "rakhi distributors, wholesale rakhi cartons, rakhi for resellers supply",
    },
    h1: "Wholesale Rakhi for distributors",
    intro:
      "Distributors turn an Indian festive assortment into something many shops can order from. Success is structured families, carton logic and a mix that does not strand slow colours in your warehouse after Raksha Bandhan.",
    blocks: distributorBlocks,
    faqs: distributorFaqs,
    related: [
      quote,
      { href: "/bulk-rakhi", label: "Bulk planning" },
      { href: "/rakhi-packaging", label: "Packaging" },
      { href: "/wholesale-rakhi-for-importers", label: "Importers" },
      { href: "/wholesale-rakhi-for-resellers", label: "Resellers" },
    ],
  },
  {
    slug: "importers",
    name: "Importers",
    summary:
      "Documentation, packing and destination-country planning for buyers who bring Rakhi into another customs territory.",
    href: "/wholesale-rakhi-for-importers",
    seo: {
      title: "Wholesale Rakhi for Importers | Documents and Destination",
      description:
        "Importer-focused Rakhi sourcing: destination planning, documents buyers discuss, inbound packing and classification notes without invented licences.",
      path: "/wholesale-rakhi-for-importers",
      keywords: "import rakhi, rakhi importers, wholesale rakhi documentation",
    },
    h1: "Wholesale Rakhi for importers",
    intro:
      "Importers brief a product mix and a clearance file at the same time. Name the destination, the in-hands week, packing for the mode, and the documents your broker actually listed. This site does not publish fake licences.",
    blocks: importerBlocks,
    faqs: importerFaqs,
    related: [
      quote,
      { href: "/rakhi-exporter", label: "Export process language" },
      { href: "/rakhi-shipping-export", label: "Shipping modes" },
      { href: "/international-rakhi-wholesale", label: "International hub" },
      { href: "/rakhi-packaging", label: "Packing" },
    ],
  },
  {
    slug: "resellers",
    name: "Resellers",
    summary:
      "Flexible quantity ranges and popular design groups for resellers who need a coherent mix without distributor-scale breadth.",
    href: "/wholesale-rakhi-for-resellers",
    seo: {
      title: "Wholesale Rakhi for Resellers | Mix and Quantity Ranges",
      description:
        "Reseller guidance for buying Rakhi in wholesale-style ranges: named design groups, packing that matches how you sell, and first-season caution on branding.",
      path: "/wholesale-rakhi-for-resellers",
      keywords: "rakhi resellers, wholesale rakhi small lots, resell rakhi",
    },
    h1: "Wholesale Rakhi for resellers",
    intro:
      "Resellers need a mix they can explain and a quantity range they can store. Flexibility is not the same as a vague “assorted” brief. Name families, skip unnecessary branding, and let a quote test what is practical this season.",
    blocks: resellerBlocks,
    faqs: resellerFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "What wholesale means" },
      { href: "/wholesale-rakhi-for-distributors", label: "Distributors" },
      { href: "/wholesale-rakhi-for-online-sellers", label: "Online sellers" },
      { href: "/rakhi-types", label: "Types" },
    ],
  },
  {
    slug: "online-sellers",
    name: "Online Sellers",
    summary:
      "Photographable designs, repeatable pack sizes and listing-friendly categories for marketplace and web Rakhi sellers.",
    href: "/wholesale-rakhi-for-online-sellers",
    seo: {
      title: "Wholesale Rakhi for Online Sellers | Photos and Pack Sizes",
      description:
        "How online sellers should wholesale-buy Rakhi: thumbnail-clear motifs, honest materials copy, pack sizes that match listings, and inbound packing that survives parcels.",
      path: "/wholesale-rakhi-for-online-sellers",
      keywords: "rakhi for amazon sellers, online wholesale rakhi, rakhi for ecommerce",
    },
    h1: "Wholesale Rakhi for online sellers",
    intro:
      "On a marketplace, the image and the pack size are the shop. Buy a focused, photographable set, keep materials claims modest, and brief inbound packing that survives your own outbound parcel — then work backwards from the festival listing deadline.",
    blocks: onlineBlocks,
    faqs: onlineFaqs,
    related: [
      quote,
      { href: "/rakhi-quality", label: "Quality and materials honesty" },
      { href: "/rakhi-types", label: "Category names" },
      { href: "/rakhi-packaging", label: "Packing" },
      { href: "/wholesale-rakhi-for-resellers", label: "Resellers" },
    ],
  },
  {
    slug: "gift-shops",
    name: "Gift Shops",
    summary:
      "Premium-leaning Rakhi with presentation-led inners for gift counters rather than grocery hooks.",
    href: "/wholesale-rakhi-for-gift-shops",
    seo: {
      title: "Wholesale Rakhi for Gift Shops | Premium Mix and Presentation",
      description:
        "Gift-shop Rakhi buying: a short premium-leaning mix, tray-ready inners, gifting QC, and modest copy instead of invented craft or metal claims.",
      path: "/wholesale-rakhi-for-gift-shops",
      keywords: "rakhi for gift shops, premium wholesale rakhi, designer rakhi retail",
    },
    h1: "Wholesale Rakhi for gift shops",
    intro:
      "Gift shops need fewer SKUs, better presentation and QC that survives being opened as a present. Brief a short designer-leaning mix and the inner format you will actually display, not a grocery-style dump of every type.",
    blocks: giftShopBlocks,
    faqs: giftShopFaqs,
    related: [
      quote,
      { href: "/rakhi-types", label: "Designer and premium families" },
      { href: "/rakhi-quality", label: "Gifting QC" },
      { href: "/private-label-rakhi", label: "Shop tags" },
      { href: "/wholesale-rakhi-for-retailers", label: "General retail" },
    ],
  },
  {
    slug: "indian-grocery-stores",
    name: "Indian Grocery Stores",
    summary:
      "Fast-moving traditional, kids and value pair mixes with packing grocery staff can put out during peak week.",
    href: "/wholesale-rakhi-for-indian-grocery-stores",
    seo: {
      title: "Wholesale Rakhi for Indian Grocery Stores",
      description:
        "Grocery-store Rakhi planning: traditional and kids fast movers, countable inners, honest value mix, and inbound timing before the August festival week.",
      path: "/wholesale-rakhi-for-indian-grocery-stores",
      keywords: "rakhi for indian grocery, ethnic store rakhi wholesale, grocery rakhi mix",
    },
    h1: "Wholesale Rakhi for Indian grocery stores",
    intro:
      "Grocery Rakhi sits in a peak food aisle. Privilege traditional, kids and accessible pairs, ask for countable packing, and time inbound before the local Raksha Bandhan week. Leave thin premium experiments until the core is covered.",
    blocks: groceryBlocks,
    faqs: groceryFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi-for-retailers", label: "Retailers" },
      { href: "/rakhi-types", label: "Traditional and kids types" },
      { href: "/bulk-rakhi", label: "Quantity ranges" },
      { href: "/raksha-bandhan", label: "Festival week" },
    ],
  },
  {
    slug: "corporate-buyers",
    name: "Corporate Buyers",
    summary:
      "Decision-maker, branding and delivery-window guidance for companies buying uniform Rakhi programmes.",
    href: "/corporate-rakhi-orders",
    seo: {
      title: "Corporate Rakhi Orders | Buyers, Branding and Windows",
      description:
        "For corporate decision makers: one programme owner, logo-on-card versus motif, multi-site delivery windows, and a uniform mix that still lands before Raksha Bandhan.",
      path: "/corporate-rakhi-orders",
      keywords: "corporate rakhi orders, company rakhi gifting, HR rakhi wholesale",
    },
    h1: "Corporate Rakhi orders for decision makers",
    intro:
      "Companies buy Rakhi as a programme, not as a shop. This buyer guide focuses on who decides, where the brand mark sits, and how delivery windows work across sites. It complements the corporate topic page with procurement language rather than repeating the same essay.",
    blocks: corporateBuyerBlocks,
    faqs: corporateBuyerFaqs,
    related: [
      quote,
      { href: "/corporate-rakhi", label: "Corporate Rakhi topic page" },
      { href: "/custom-rakhi", label: "Custom motifs" },
      { href: "/private-label-rakhi", label: "Branded packing" },
      { href: "/wholesale-rakhi-for-community-organizations", label: "Community events" },
    ],
  },
  {
    slug: "community-organizations",
    name: "Community Organizations",
    summary:
      "Event and committee quantities with simple packing volunteers can count and distribute on the day.",
    href: "/wholesale-rakhi-for-community-organizations",
    seo: {
      title: "Wholesale Rakhi for Community Organizations",
      description:
        "Temple committees, associations and event organisers: simple traditional and kids mixes, countable bundles, honest quantity ranges and optional card branding.",
      path: "/wholesale-rakhi-for-community-organizations",
      keywords: "rakhi for temples, community rakhi wholesale, association rakhi orders",
    },
    h1: "Wholesale Rakhi for community organisations",
    intro:
      "Community orders succeed when the mix is simple, the bundles are countable, and one person owns the delivery address. This guide is for committees and associations that will hand Rakhi out at a dated gathering, not for building a retail type museum.",
    blocks: communityBlocks,
    faqs: communityFaqs,
    related: [
      quote,
      { href: "/corporate-rakhi-orders", label: "Corporate programmes" },
      { href: "/raksha-bandhan", label: "Festival meaning and date" },
      { href: "/rakhi-packaging", label: "Countable packing" },
      { href: "/how-to-order-wholesale-rakhi", label: "How to order" },
    ],
  },
];

export function getBuyerGuide(slug: string): BuyerPersona | undefined {
  return buyerGuides.find((guide) => guide.slug === slug);
}
