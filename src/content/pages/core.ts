import type { ContentBlock, ContentPage, FaqItem } from "@/types";

const quote: { href: string; label: string } = {
  href: "/request-wholesale-quote",
  label: "Request a wholesale quote",
};

const aboutFaqs: FaqItem[] = [
  {
    question: "What is Wholesale Rakhi?",
    answer:
      "Wholesale Rakhi is an information resource and wholesale enquiry portal for buyers who want to source Rakhi from India. The site explains categories, briefing, packing and export considerations, then routes serious interest through a quote request rather than a public price list.",
  },
  {
    question: "Do you manufacture Rakhi in your own factory?",
    answer:
      "This site does not claim factory, manufacturer or exporter ownership. Rakhi production in India is typically organised through specialised workshops and craft networks. Operational details that the business later confirms will be published only when they can be stated accurately.",
  },
  {
    question: "How many years has the business been in the Rakhi trade?",
    answer:
      "The owner has indicated long industry experience. A specific tenure is not published here until the business confirms the figure it wants on the public site. Buyers who need that detail for vendor onboarding can ask during the enquiry.",
  },
  {
    question: "Who is this site for?",
    answer:
      "It is written for retailers, distributors, importers, resellers, online sellers, gift shops, Indian grocery stores, corporate buyers and community organisations that plan Rakhi in bulk rather than as a single-piece gift purchase.",
  },
];

const wholesaleFaqs: FaqItem[] = [
  {
    question: "What does wholesale Rakhi usually include?",
    answer:
      "Wholesale supply typically means buying an assortment of Rakhi designs in quantity for resale, distribution, gifting programmes or community events. It is not the same as picking a few pieces at a festival stall. Mix, packing and destination should be stated in the brief.",
  },
  {
    question: "Who typically buys Rakhi at wholesale?",
    answer:
      "Common buyers include grocery and ethnic retailers, gift shops, online sellers, distributors serving several stores, importers, corporate HR or facilities teams, and community or temple committees. Each group needs a different mix and packing style.",
  },
  {
    question: "What should a first wholesale brief contain?",
    answer:
      "Share destination country, buyer type, preferred styles, an estimated quantity range, any need for pairs or kids designs, packing notes and the week you hope goods will arrive. Exact prices and minimums are not listed here; they belong in a quote conversation.",
  },
  {
    question: "Should I order one style or a mixed carton?",
    answer:
      "Most resale buyers use a mixed assortment so a shelf or listing can cover traditional, designer, kids and pair sets. Corporate and community orders more often want a smaller number of uniform designs. State which pattern you need.",
  },
];

const manufacturerFaqs: FaqItem[] = [
  {
    question: "How is Rakhi typically made in India?",
    answer:
      "Production is usually a sequence of motif making or sourcing, thread or cord preparation, embellishment, assembly, finishing and packing. Work may be split across specialised units rather than a single all-in-one line. Buyers should ask how samples relate to bulk finishing.",
  },
  {
    question: "What questions should I ask any Rakhi maker or sourcing partner?",
    answer:
      "Ask how colour and stone attachment are controlled, whether kids designs avoid loosely attached small parts, how pairs are matched, what packing is used for humidity, and how substitutions are handled if a component is delayed.",
  },
  {
    question: "Does this page mean Wholesale Rakhi owns a factory?",
    answer:
      "No. The page is educational. Indian festive craft is discussed as industry context so buyers can brief more clearly. Ownership of manufacturing facilities is not claimed here.",
  },
  {
    question: "Why do bulk pieces sometimes look different from a sample?",
    answer:
      "Thread dye lots, bead batches and hand finishing can shift slightly between runs. A good brief specifies which details must match the sample and which small variations are acceptable, then asks how the supplier will flag substitutions.",
  },
];

const wholesalerFaqs: FaqItem[] = [
  {
    question: "How is a Rakhi wholesaler different from a retailer?",
    answer:
      "A retailer sells to the person who will tie or gift the Rakhi. A wholesaler supplies those retailers or other trade buyers in quantity, usually with mixed cartons, simpler inner packing and a seasonal calendar rather than a walk-in gift counter.",
  },
  {
    question: "How is a wholesaler different from a manufacturer?",
    answer:
      "A manufacturer’s role is making or assembling the product. A wholesaler’s role is assortment, availability and trade supply. In the Indian Rakhi trade those roles can sit in different businesses or overlap; buyers should ask which role their counterpart actually performs.",
  },
  {
    question: "When should I talk to a wholesaler instead of buying retail packs?",
    answer:
      "When you need consistent designs across a shelf, several stores, an online catalogue or an event, and when packing, labelling and arrival week matter as much as the motif. Retail packs are rarely specified for that kind of planning.",
  },
  {
    question: "Can one partner cover wholesale, custom and export talk?",
    answer:
      "Some trade counterparts can discuss all three; others only hold ready stock. Your enquiry should state whether you need stock-like assortment, custom work, or export-oriented packing so the conversation starts in the right place.",
  },
];

const supplierFaqs: FaqItem[] = [
  {
    question: "How should I evaluate a Rakhi supplier?",
    answer:
      "Look at how clearly they restate your brief, whether they distinguish sample from bulk, how they describe finishing and packing, and whether they ask about destination and arrival week. Vague enthusiasm is a weaker signal than a structured reply.",
  },
  {
    question: "Should I always request samples before bulk?",
    answer:
      "Samples help when you are new to a design family, need photography, or must match a brand colour. For a repeat mix you already know, a confirmed specification and packing note may be enough. Say which path you want in the enquiry.",
  },
  {
    question: "What communication habits reduce wholesale mistakes?",
    answer:
      "Use written lists of styles, quantity ranges, pair counts, kids versus adult designs, inner packing and labelling. Confirm substitutions in writing. Avoid relying on a single chat photo as the only specification.",
  },
  {
    question: "What is a reasonable way to describe quantity without a published MOQ?",
    answer:
      "Give a range that reflects how you actually sell or gift — for example tens, hundreds or thousands — and say whether that is one design or a mixed assortment. Minimums, if any, belong in a quote, not in a public claim on this site.",
  },
];

const exporterFaqs: FaqItem[] = [
  {
    question: "What does Rakhi export usually involve conceptually?",
    answer:
      "Export is the movement of goods from India to another customs territory. Buyers and sellers typically discuss commercial documents, packing lists, who arranges freight, and how the destination will clear the shipment. This page does not publish licences or claim exporter status.",
  },
  {
    question: "Which documents do international Rakhi buyers often discuss?",
    answer:
      "Conversations commonly include a commercial invoice, packing list, and an air waybill or bill of lading. Destination paperwork varies. Indian export eligibility and licences are matters for the exporting party to confirm; they are not listed as credentials here.",
  },
  {
    question: "Do you publish export licences or IEC details?",
    answer:
      "No. Licence numbers, certifications and similar credentials are omitted until the business confirms what may be shown. Buyers who require documents for their import file should request them during the quote process.",
  },
  {
    question: "Who usually decides air versus sea for Rakhi?",
    answer:
      "The decision is a trade-off among calendar, carton volume and destination practice. Festival peaks often push buyers toward faster modes; earlier planning can open slower options. Actual mode is agreed per order, not prescribed as a rate card here.",
  },
];

const bulkFaqs: FaqItem[] = [
  {
    question: "How should I plan bulk Rakhi quantities?",
    answer:
      "Plan in ranges that match how you sell or distribute — for example 50–100, 100–500, 500–1,000, 1,000–5,000 or larger bands — and split the range across design groups. Those bands are planning tools, not published minimum order quantities.",
  },
  {
    question: "Why does assortment matter as much as headcount?",
    answer:
      "A thousand pieces of one motif can stall on a shelf, while a smaller mixed set can sell through. Grocery, gift and online channels each need a different spread of traditional, designer, kids and pair designs.",
  },
  {
    question: "What quality checks belong in a bulk plan?",
    answer:
      "Agree visual points before dispatch: thread finishing, motif security, colour consistency, pair matching and packing intactness. Bulk is where small defects multiply, so the check list should be written, not assumed.",
  },
  {
    question: "When should bulk orders be placed relative to Raksha Bandhan?",
    answer:
      "Work backwards from the festival week in your market, then add time for confirmation, preparation, packing and transit. International buyers usually need a wider window than domestic ones. Timelines vary by mix and season.",
  },
];

const customFaqs: FaqItem[] = [
  {
    question: "When is a custom Rakhi worth it?",
    answer:
      "Custom work is most useful when a standard assortment cannot meet a brand colour, logo, mascot or exclusive motif, and when you can allow extra time for artwork and sample agreement. It is less useful when you only need a common festive mix quickly.",
  },
  {
    question: "What artwork should I send?",
    answer:
      "Provide a clear logo or motif file, intended colours, size notes and where the design should sit on the Rakhi. State whether the piece is for adults, children or pairs. Low-resolution social images are a weak starting point.",
  },
  {
    question: "Why is colour matching imperfect on Rakhi?",
    answer:
      "Thread, beads, foil, stones and printed elements take colour differently. Screen previews and paper printouts rarely match textile or metal findings exactly. Agree a physical or photo-approved sample and note which elements must be closest.",
  },
  {
    question: "Can every design be customised in the first season?",
    answer:
      "Not always. Fine kundan-style work, metal findings or licensed cartoon looks may be constrained by components and approvals. A first conversation should separate what is feasible this season from what belongs in a later development.",
  },
];

const privateLabelFaqs: FaqItem[] = [
  {
    question: "What does private-label Rakhi usually cover?",
    answer:
      "It typically means your brand name, hang-tag, pouch or box appears on goods that are otherwise produced in the same craft system as unbranded wholesale Rakhi. The value is shelf identity, not a different festival ritual.",
  },
  {
    question: "Should I private-label on the first order?",
    answer:
      "Many buyers run a first season on a generic or lightly labelled pack to test sell-through, then add branding once the mix is proven. First-run private label concentrates risk in artwork, packing and leftover branded stock.",
  },
  {
    question: "What packaging decisions matter for a brand?",
    answer:
      "Decide hang-tag versus pouch versus box, language on the label, barcode if you use one, and whether inner packs must be shelf-ready. Moisture protection still comes first for thread and adhesives.",
  },
  {
    question: "Do you publish brand-name case studies?",
    answer:
      "No customer testimonials or invented brand stories are listed here. If you have packaging constraints, describe them in the quote request so they can be reviewed against what is practical for the season.",
  },
];

const corporateFaqs: FaqItem[] = [
  {
    question: "Who usually owns a corporate Rakhi order?",
    answer:
      "HR, internal communications, facilities or a diversity-and-inclusion lead often sponsors the programme. Community-facing companies may involve CSR or office administration. One person should consolidate sizes, branding and the delivery window.",
  },
  {
    question: "Should corporate Rakhi be uniform?",
    answer:
      "Uniform designs photograph well and feel like a programme. Some organisations still split a premium staff set from a simpler community set. State whether everyone receives the same piece or a small menu of options.",
  },
  {
    question: "How early should companies brief a wholesale counterpart?",
    answer:
      "Treat Raksha Bandhan as a dated event, typically in August, and brief far enough ahead for approval cycles, any custom tag, packing and delivery to multiple offices. Internal sign-off often takes longer than buyers expect.",
  },
  {
    question: "Can we add a company logo to every Rakhi?",
    answer:
      "Possibly, depending on motif size and method. Logo-on-Rakhi is a custom path; a branded card or pouch is often faster. Share artwork and say which surface must carry the mark.",
  },
];

const catalogFaqs: FaqItem[] = [
  {
    question: "Is there a public PDF catalogue to download?",
    answer:
      "A catalogue is shared after a wholesale enquiry when one is available for that season. This site does not host a placeholder PDF or claim a file that has not been issued. Request a quote and note that you need assortment images or a list.",
  },
  {
    question: "Why is the catalogue not on this page?",
    answer:
      "Seasonal Rakhi ranges change, and a static public file can mislead buyers about availability. Sharing after the brief also keeps the conversation aligned to destination, quantity range and packing.",
  },
  {
    question: "What should I send if I cannot wait for a full catalogue?",
    answer:
      "Describe the design families you already sell or want — traditional, designer, kids, lumba pairs, premium — plus quantity range and destination. A targeted reply is often more useful than a generic lookbook.",
  },
  {
    question: "Will the catalogue include prices?",
    answer:
      "Public pages on this site do not list prices. Any pricing belongs in a quote discussion after the requirement is understood. Do not assume a catalogue, if shared, is a live offer for every destination.",
  },
];

const orderFaqs: FaqItem[] = [
  {
    question: "How many steps are there in a typical wholesale order?",
    answer:
      "This site describes eight conceptual steps: requirement, category selection, catalogue or quote follow-up, confirmation, preparation, quality check, packing and dispatch. Real orders may combine or repeat steps.",
  },
  {
    question: "Are timelines guaranteed?",
    answer:
      "No. Preparation and transit vary with design mix, custom work, peak season and the agreed freight path. Treat published process language as a map, not a calendar commitment.",
  },
  {
    question: "What if I only need a small trial quantity?",
    answer:
      "Say so in the brief using a quantity range. Whether a trial is practical depends on the assortment and packing you need; that is a quote conversation, not a published minimum.",
  },
  {
    question: "Where do I start?",
    answer:
      "Use the wholesale quote form with destination, buyer type, styles and a quantity range. That is the primary path. Contact details are shown only if the business has published them.",
  },
];

const internationalFaqs: FaqItem[] = [
  {
    question: "Which markets does this hub cover?",
    answer:
      "The international section is organised around buyer destinations commonly discussed for Indian Rakhi — including the USA, UK, Canada, Australia, UAE, New Zealand, Singapore and wider Europe — each with its own sourcing notes rather than duplicated doorway text.",
  },
  {
    question: "Is wholesale Rakhi only for the Indian diaspora?",
    answer:
      "Diaspora retail and community demand is the core seasonal driver in many countries, but gift shops, online sellers and corporate programmes also buy. Assortment should follow who actually shops in that market.",
  },
  {
    question: "Do import rules appear on country pages as legal advice?",
    answer:
      "No. Country pages discuss planning context. Classification, duties and restrictions must be confirmed with the buyer’s customs broker or freight partner for that shipment.",
  },
  {
    question: "How do I enquire from outside India?",
    answer:
      "Use the same wholesale quote form and name the destination country, the week you need goods, and whether you are an importer, retailer or another buyer type. International packing notes belong in that brief.",
  },
];

const shippingFaqs: FaqItem[] = [
  {
    question: "Which shipping modes are typically discussed for Rakhi?",
    answer:
      "Buyers and sellers conceptually discuss courier, air freight and sea freight. Choice depends on calendar, volume and destination practice. This page does not publish rates, transit-day promises or carrier contracts.",
  },
  {
    question: "Why does packing matter as much as the mode?",
    answer:
      "Rakhi combines thread, adhesives, stones and sometimes metal findings. Compression, humidity and rough handling can spoil a well-chosen design. Inner protection and outer carton strength should be agreed with the mode in mind.",
  },
  {
    question: "What is different in peak festival season?",
    answer:
      "Capacity at workshops, packers and freight lanes tightens in the weeks before Raksha Bandhan. Late changes to mix or packing are harder to absorb. Earlier confirmation is the practical response, not a published surcharge table.",
  },
  {
    question: "Can you quote a shipping rate on this page?",
    answer:
      "No. Rates depend on weight, volume, destination, mode and the week of handover. Ask for a quote path after the goods specification is clear enough to estimate a shipment.",
  },
];

const packagingFaqs: FaqItem[] = [
  {
    question: "What is the difference between inner and outer packing?",
    answer:
      "Inner packing protects each piece or small bundle — pouches, boards, tissue or individual poly as agreed. Outer packing is the carton that travels. Both layers need to match the journey, not only the shop display.",
  },
  {
    question: "How should moisture be considered?",
    answer:
      "Thread and adhesives can suffer in humid holds or long sea transits. Buyers often discuss poly inner packs, carton liners and avoiding over-compression. The right combination depends on destination and mode, not a single universal kit.",
  },
  {
    question: "What labelling do wholesale buyers usually need?",
    answer:
      "Trade cartons typically need contents description, quantity and handling marks as agreed. Retail-ready inner labels, language and barcodes are extra decisions. Do not assume a domestic Indian pack layout will satisfy a foreign shelf.",
  },
  {
    question: "Can packaging be custom on a first order?",
    answer:
      "It can be discussed, but custom boxes and printed pouches add artwork time and leftover-pack risk. Many first orders use protective standard inners with a simple outer mark, then brand packing in a later run.",
  },
];

const qualityFaqs: FaqItem[] = [
  {
    question: "What visual checks matter most on wholesale Rakhi?",
    answer:
      "Look at motif centring, thread end finishing, security of stones or beads, sharpness of metal findings, pair matching and whether colour has bled onto thread or backing. Agree which points are reject reasons before bulk is packed.",
  },
  {
    question: "Why does thread quality show up after transit?",
    answer:
      "Loose ends, weak knots and poorly sealed tips fray in handling. A piece that looked acceptable on a table can fail after carton movement. Thread finishing should be part of the written specification.",
  },
  {
    question: "How do I reduce colour-bleed risk?",
    answer:
      "Ask whether dyes on thread or fabric elements are stable in humidity, avoid storing samples against pale garments, and request that dark and light designs are not packed in a way that transfers colour. Test a sample if the channel is premium or gift-led.",
  },
  {
    question: "Are stones and beads always the same material as the photo?",
    answer:
      "Not necessarily. Many festive pieces use acrylic, glass or foil-backed stones. If you need a particular look or a no-loose-parts standard for children, state it. Do not assume gemstone names on a style label mean mined stone.",
  },
];

const typesFaqs: FaqItem[] = [
  {
    question: "How should I choose a Rakhi type mix?",
    answer:
      "Start from who will buy in your channel. Grocery often needs traditional, kids and value pairs; gift shops lean designer and premium; corporate programmes may want a short uniform list. Use the type hub to name families, then brief quantity ranges against those names.",
  },
  {
    question: "Do I need every type in the first order?",
    answer:
      "Usually not. A focused mix that you can photograph, display and replenish is stronger than a thin spread across every family. Add types in a later drop if sell-through supports it.",
  },
  {
    question: "What is the difference between lumba and bhaiya-bhabhi sets?",
    answer:
      "Both are pair-oriented. Lumba Rakhi is commonly associated with a sister-in-law set; bhaiya-bhabhi listings often package a brother’s Rakhi with a companion piece. Confirm how you want pairs counted and packed so cartons match your shelf language.",
  },
  {
    question: "Where can I read about each type in more depth?",
    answer:
      "Open the individual type pages from this hub for characteristics, materials and wholesale notes. Use those names in your quote request so the assortment conversation stays specific.",
  },
];

const festivalFaqs: FaqItem[] = [
  {
    question: "When is Raksha Bandhan?",
    answer:
      "The festival is typically observed in August on Shravan Purnima of the Hindu lunar calendar, so the Gregorian date moves each year. For 2026, 28 August is commonly cited; buyers should still confirm the date used in their local community calendars.",
  },
  {
    question: "What is the meaning of Raksha Bandhan in brief?",
    answer:
      "It is widely observed as a celebration of the bond between brothers and sisters, expressed by tying a Rakhi and exchanging blessings and often gifts. Practices vary by family, region and community. This site does not speak as a religious authority.",
  },
  {
    question: "Why does the date matter for wholesale planning?",
    answer:
      "Demand concentrates before the festival week. Retailers, grocers and community groups need goods on shelves or at venues ahead of that week, so production, packing and transit must be planned backwards from it.",
  },
  {
    question: "Is Rakhi used only on Raksha Bandhan?",
    answer:
      "The core seasonal peak is Raksha Bandhan. Some buyers also use Rakhi-style bands for related family gifting or community events. If your use is outside the main festival, say so in the brief so mix and timing can be discussed honestly.",
  },
];

const historyFaqs: FaqItem[] = [
  {
    question: "Is there a single proven origin story for Rakhi?",
    answer:
      "No. Popular tellings include legendary court and epic episodes. These are part of cultural memory and later retelling. They should be read as tradition, not as documented commercial history or as claims this business can verify.",
  },
  {
    question: "How old is the festival in the form buyers see today?",
    answer:
      "Thread-tying and protective-cord practices have long roots in South Asian custom, while the modern decorated Rakhi as a traded festive article reflects later craft, print and market history. Wholesale buyers are dealing with a living product, not a museum replica.",
  },
  {
    question: "Why does history matter for merchandising?",
    answer:
      "Customers often want a short, respectful story on a tag or listing. Keeping legendary references clearly labelled as tradition avoids over-claiming and fits an informational tone for international shelves.",
  },
  {
    question: "Does Wholesale Rakhi claim a historic factory lineage?",
    answer:
      "No. Historical notes on this site are cultural context for the product category. They are not a company origin myth, certification or proof of ownership of any workshop.",
  },
];

const rakhiFaqItems: FaqItem[] = [
  {
    question: "How do I start a wholesale Rakhi enquiry from this site?",
    answer:
      "Use the request-quote form as the primary path. Include destination country, buyer type, preferred Rakhi families, an estimated quantity range, packing notes and the week you hope goods will arrive. Public pages do not list prices.",
  },
  {
    question: "Do you publish minimum order quantities or prices?",
    answer:
      "No. Quantity is discussed as planning ranges so you can describe real demand. Any minimum that applies to a specific mix belongs in a quote, where packing and destination are known. Invented public MOQs would mislead buyers.",
  },
  {
    question: "Are you a manufacturer, exporter or factory owner?",
    answer:
      "This site does not claim manufacturer, exporter or factory ownership. It is an information and wholesale enquiry portal for Rakhi from India. Indian craft organisation is described so buyers can ask better questions of whoever fulfils the order.",
  },
  {
    question: "Will I receive a catalogue immediately?",
    answer:
      "A seasonal catalogue or assortment list is shared after enquiry when one is available. There is no dummy PDF on the site. If you already know the types you need, list them in the form to speed the reply.",
  },
  {
    question: "Can I order custom or private-label Rakhi?",
    answer:
      "Both can be discussed. Custom motifs and colour matching need artwork and extra time. Private-label tags and boxes add packing decisions and leftover-stock risk on a first run. Describe the brand surface you care about and whether this is a trial season.",
  },
  {
    question: "How should international buyers think about shipping?",
    answer:
      "Discuss mode conceptually — courier, air or sea — together with packing for humidity and compression. Peak weeks before Raksha Bandhan are busier. Rates and transit days are not published here; they depend on the actual shipment.",
  },
  {
    question: "What quality points should I put in a brief?",
    answer:
      "Name thread finishing, stone or bead security, colour-bleed tolerance, pair matching and any child-safety packing notes. Ask how substitutions will be approved. Visual QC is the practical language of this category.",
  },
  {
    question: "Which Rakhi types should a new retailer stock?",
    answer:
      "A practical first mix often combines traditional designs, a designer or premium slice, kids styles and a pair option such as lumba or bhaiya-bhabhi sets. Adjust the weights to your aisle: grocery is usually more traditional; gift shops can lean premium.",
  },
  {
    question: "When is Raksha Bandhan in 2026 and why does it matter?",
    answer:
      "The festival typically falls in August. For 2026, 28 August is commonly cited, based on the lunar calendar used for Shravan Purnima. Wholesale calendars should still be checked against local community dates and your inbound transit time.",
  },
  {
    question: "How can I contact the team besides the form?",
    answer:
      "The form is the primary enquiry method. Email or phone will be displayed only if the business publishes them. Do not assume a number or address that is not shown on the contact page.",
  },
];

const contactFaqs: FaqItem[] = [
  {
    question: "What is the best way to contact Wholesale Rakhi?",
    answer:
      "The wholesale quote form is the primary channel. It captures destination, buyer type and product notes in one place so the brief does not fragment across informal messages.",
  },
  {
    question: "Why might email or phone be missing?",
    answer:
      "Contact details are shown only when the business has provided them for public use. Until then, the form remains the reliable path and avoids publishing numbers that have not been confirmed.",
  },
  {
    question: "What should I include so the enquiry is usable?",
    answer:
      "Name, email, country, buyer type, quantity range, Rakhi families of interest and any custom or packing notes. A delivery-country field matters when the billing location and the destination differ.",
  },
  {
    question: "Do you accept walk-in or marketplace checkout on this site?",
    answer:
      "This site is an information and lead-generation property. It does not run a cart or checkout. Seasonal shopping campaigns, if any, are configured separately and are not a substitute for a wholesale brief.",
  },
];

const aboutBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "what-this-site-is",
    text: "An information and wholesale enquiry portal",
  },
  {
    type: "p",
    text: "Wholesale Rakhi exists so buyers can understand how Rakhi is specified, mixed, packed and moved from India before they send a commercial brief. The public pages are educational. Serious interest is collected through a quote request, not through a catalogue checkout or a published price list.",
  },
  {
    type: "p",
    text: "The positioning is simple: Wholesale Rakhi from India for Buyers Worldwide. That line describes the audience and the product category. It is not a claim that this website owns factories, export licences or a particular workshop.",
  },
  {
    type: "h2",
    id: "experience-and-what-we-confirm",
    text: "Industry experience — what is confirmed, what is not",
  },
  {
    type: "p",
    text: "The owner has indicated long experience in the Rakhi trade. A specific number of years is not published on this site until the business confirms the figure it wants used in public. Buyers who need tenure for onboarding questionnaires can raise it in the enquiry so the answer is given in writing for that relationship.",
  },
  {
    type: "callout",
    text: "Unverified operational claims — including factory ownership, exporter status, certifications and testimonials — are omitted on purpose. Accuracy for trade buyers matters more than filling a homepage with numbers.",
  },
  {
    type: "h2",
    id: "how-indian-craft-fits",
    text: "Indian craftsmanship as industry context",
  },
  {
    type: "p",
    text: "Rakhi sold into world markets is generally produced in India’s festive-craft economy: motif making, threading, embellishment, assembly and packing, often across specialised hands rather than a single anonymous production line. That context helps buyers write better specifications. It is not presented as this company’s private factory story.",
  },
  {
    type: "h2",
    id: "who-we-write-for",
    text: "Who the content is written for",
  },
  {
    type: "ul",
    items: [
      "Retailers and Indian grocery stores building a seasonal aisle",
      "Distributors and importers planning cartons and documents",
      "Online sellers and gift shops that need photographable ranges",
      "Corporate and community buyers with a dated gifting window",
    ],
  },
  {
    type: "h2",
    id: "how-to-work-with-the-site",
    text: "How to use the site",
  },
  {
    type: "ol",
    items: [
      "Read the wholesale, type, quality and packing guides that match your channel.",
      "Note destination, quantity range and mix in your own planning sheet.",
      "Submit a wholesale quote request with those details.",
      "Continue the conversation on catalogue access, samples and confirmation if the brief is a fit.",
    ],
  },
  {
    type: "p",
    text: "If you are comparing roles — manufacturer, wholesaler, supplier, exporter — use those educational pages to clarify what you need from a counterpart. Then bring that language into the form so the enquiry is unambiguous.",
  },
];

const wholesaleBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "what-wholesale-means",
    text: "What wholesale Rakhi means in practice",
  },
  {
    type: "p",
    text: "Wholesale Rakhi is the trade of festive wrist threads in quantity, specified as an assortment rather than as a single gift piece. Buyers are usually restocking a shop, a warehouse, a marketplace catalogue or an event, and they care about mix, packing consistency and arrival week as much as motif style.",
  },
  {
    type: "p",
    text: "It is distinct from festival-eve retail. A wholesale brief names design families, approximate depths, pair counts and how cartons should be marked. Prices and minimums are not listed on this page; they belong in a quote once the brief is clear.",
  },
  {
    type: "h2",
    id: "who-buys",
    text: "Who typically buys",
  },
  {
    type: "ul",
    items: [
      "Grocery and ethnic retailers who need fast-moving traditional and kids designs",
      "Gift shops that want a smaller, more presentable premium slice",
      "Distributors feeding several stores with carton-friendly mixes",
      "Importers aligning packing and documents to a destination",
      "Online sellers who need listing-friendly photos and pack sizes",
      "Corporate and community organisers with a dated delivery window",
    ],
  },
  {
    type: "h2",
    id: "how-to-brief",
    text: "How to brief a supplier",
  },
  {
    type: "ol",
    items: [
      "State destination country and buyer type.",
      "Name Rakhi families rather than only “assorted”.",
      "Give a quantity range and whether it is mixed or uniform.",
      "Note kids versus adult, and how pairs should be counted.",
      "Describe inner packing, labels and any photography needs.",
      "Give the week goods should be in your hands, not only an order date.",
    ],
  },
  {
    type: "h3",
    id: "category-mix",
    text: "Category mix that usually works",
  },
  {
    type: "p",
    text: "A resale mix often combines traditional designs for familiarity, designer or kundan-look pieces for a higher shelf, kids and cartoon-style pieces for younger buyers, and lumba or bhaiya-bhabhi pairs. Corporate orders usually invert that logic: fewer SKUs, more uniformity. Say which pattern you are using.",
  },
  {
    type: "callout",
    text: "If you do not yet know depths per type, send a range for the whole order and a percentage split. That is more useful than waiting for a public catalogue that may only be shared after enquiry.",
  },
  {
    type: "h2",
    id: "next-step",
    text: "Next step",
  },
  {
    type: "p",
    text: "When the mix is roughly clear, request a wholesale quote. Mention whether you also need export-oriented packing or a later custom or private-label conversation so those threads are not mixed up with a stock-style assortment.",
  },
];

const manufacturerBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "how-making-works",
    text: "How Rakhi manufacturing is typically organised in India",
  },
  {
    type: "p",
    text: "Festive Rakhi production is usually a chain of small, specialised steps: preparing or buying motifs, cutting or dyeing thread and cords, setting stones or beads, assembling the band, finishing ends, and packing. Some of that work sits in workshops; some is distributed through craft networks. Buyers should treat “made in India” as a system, not as a single factory tour on a brochure.",
  },
  {
    type: "p",
    text: "This page is educational. It does not state that Wholesale Rakhi owns a manufacturing plant or employs a named production line. Understanding the steps still helps you ask questions that protect bulk quality.",
  },
  {
    type: "h2",
    id: "steps-buyers-should-know",
    text: "Production steps buyers should recognise",
  },
  {
    type: "ol",
    items: [
      "Motif and component readiness — stones, beads, metal findings, printed or fabric centres.",
      "Thread and cord preparation — colour, thickness, stretch and end finishing.",
      "Embellishment and setting — adhesive, wire or stitch depending on the design family.",
      "Assembly — joining motif to band so the piece sits flat on a wrist.",
      "Finishing — trimming, knotting, securing tails, checking pairs.",
      "Packing — inner protection and outer cartons suitable for the journey.",
    ],
  },
  {
    type: "h2",
    id: "questions-to-ask",
    text: "Questions buyers should ask",
  },
  {
    type: "ul",
    items: [
      "How will bulk finishing compare to the sample, and who approves substitutions?",
      "How are dye lots and stone batches controlled across a large mix?",
      "What is the approach to kids designs and loosely attached parts?",
      "How are bhaiya-bhabhi or lumba pairs matched and packed?",
      "What humidity protection is used if goods travel by sea or sit in a warm warehouse?",
    ],
  },
  {
    type: "h3",
    id: "hand-and-batch-variation",
    text: "Hand work and batch variation",
  },
  {
    type: "p",
    text: "Many Rakhi families involve hand placement of stones or motifs. Slight variation is normal; uncontrolled variation is not. A useful brief says which measurements and colours are critical and which decorative details may move a little.",
  },
  {
    type: "callout",
    text: "If a counterpart cannot explain how sample approval connects to bulk packing, treat that as a process gap — regardless of how attractive a product photograph looks.",
  },
  {
    type: "h2",
    id: "use-this-page",
    text: "How to use this page in an enquiry",
  },
  {
    type: "p",
    text: "Copy the questions that matter to your channel into the quote form. You are not asking this site to pose as a factory; you are showing that you understand how Indian Rakhi is actually put together.",
  },
];

const wholesalerBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "three-roles",
    text: "Wholesaler, retailer and manufacturer — different jobs",
  },
  {
    type: "p",
    text: "Trade conversations mix these words. Using them precisely reduces disappointment. A retailer sells to the person who will tie or gift the Rakhi. A wholesaler supplies trade buyers in quantity and cares about assortment and carton logic. A manufacturer’s job is making or assembling the piece. In India’s Rakhi economy one business may perform more than one role — but you should still ask which role you are speaking to.",
  },
  {
    type: "h3",
    id: "retailer-role",
    text: "The retailer",
  },
  {
    type: "p",
    text: "Retailers need designs that make sense on a hook, in a glass counter or next to groceries. They care about price architecture in their own shop, not about a public wholesale list, and about whether kids, traditional and pair sets are easy to explain to staff.",
  },
  {
    type: "h3",
    id: "wholesaler-role",
    text: "The wholesaler",
  },
  {
    type: "p",
    text: "Wholesalers think in mixes and depths. They may hold or arrange an assortment so several shops can buy without each one designing a carton from scratch. Their useful questions are about sell-through patterns, not about a single household’s favourite colour.",
  },
  {
    type: "h3",
    id: "manufacturer-role",
    text: "The manufacturer",
  },
  {
    type: "p",
    text: "Makers think in components, finishing time and how a sample becomes a packed bulk lot. They are the right audience for artwork, colour-critical custom work and questions about adhesives or thread ends. This site describes that role; it does not claim it.",
  },
  {
    type: "callout",
    text: "If you need export documents, ask who the exporting party will be. “Wholesaler” and “exporter” are not automatic synonyms, and this page does not assign those titles to Wholesale Rakhi.",
  },
  {
    type: "h2",
    id: "choosing-a-conversation",
    text: "Which conversation you should start",
  },
  {
    type: "ul",
    items: [
      "Need a shop mix and carton plan → wholesale assortment brief",
      "Need a logo motif or exclusive colour → custom / manufacturing-process questions",
      "Need destination packing and invoice talk → export-oriented brief",
      "Need a few gift-ready pieces for a display test → say it is a trial range, not a full season",
    ],
  },
  {
    type: "p",
    text: "Start with the wholesale quote form and name the role you expect from the counterpart. Clear language at the start prevents a retail-style reply to a distributor-scale brief.",
  },
];

const supplierBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "evaluation",
    text: "How to evaluate a Rakhi supplier",
  },
  {
    type: "p",
    text: "A capable counterpart restates your destination, mix and packing notes before talking about next steps. They distinguish what is in a current seasonal range from what would be a custom development. They ask about arrival week. They do not fill silence with unverifiable claims.",
  },
  {
    type: "ul",
    items: [
      "Written restatement of styles, ranges and packing",
      "Clear sample-versus-bulk language",
      "Questions about kids, pairs and labelling",
      "Willingness to flag substitutions before packing",
      "No pressure to accept a public price or a fake catalogue PDF",
    ],
  },
  {
    type: "h2",
    id: "sample-vs-bulk",
    text: "Sample versus bulk",
  },
  {
    type: "p",
    text: "Samples are for look, photography, colour and finishing. Bulk is for repeatability and packing. If you approve a sample, write down the points that must not change. If you skip samples because you already know a mix, write the specification even more carefully so bulk is not improvised from chat photos.",
  },
  {
    type: "h3",
    id: "when-samples-help",
    text: "When samples are worth the time",
  },
  {
    type: "p",
    text: "New importers, brand-colour programmes, premium gift shops and online sellers who need hero images usually benefit. Grocery buyers repeating last year’s traditional mix may not. State your path so time is not spent on the wrong artefact.",
  },
  {
    type: "h2",
    id: "communication",
    text: "Communication that keeps bulk honest",
  },
  {
    type: "ol",
    items: [
      "Keep one written brief as the source of truth.",
      "Number design groups instead of relying on “the red one”.",
      "Confirm pair counts as pairs, not as loose pieces, if that is how you sell.",
      "Record packing and label language in the same document as the mix.",
      "Ask for a packing-list style confirmation before dispatch talk.",
    ],
  },
  {
    type: "callout",
    text: "Quantity should be described as a range that matches your channel. Treat any minimum as something to be agreed in a quote, not as a number invented for this page.",
  },
  {
    type: "p",
    text: "When you are ready, send the brief through the wholesale quote form. Attach artwork only if custom or private label is actually in scope for this season.",
  },
];

const exporterBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "export-conceptually",
    text: "Rakhi export as a process, not a badge",
  },
  {
    type: "p",
    text: "Sending Rakhi from India to another country is a goods movement with commercial documents, packing that survives the mode, and a destination that will classify and clear the shipment. This page explains the conversation buyers usually have. It does not display licences, IEC numbers or a claim that Wholesale Rakhi is the exporting entity.",
  },
  {
    type: "h2",
    id: "documents-often-discussed",
    text: "Documents buyers often discuss",
  },
  {
    type: "ul",
    items: [
      "Commercial invoice describing the goods and transaction",
      "Packing list with carton counts and contents",
      "Air waybill or bill of lading depending on mode",
      "Any destination-specific statements the importer’s broker requests",
    ],
  },
  {
    type: "p",
    text: "Indian export eligibility, registrations and licences sit with the party that actually exports. Ask for what your import file needs during the quote process. Do not treat the absence of scanned certificates on this website as a substitute for that file, and do not treat decorative “certified exporter” language as evidence.",
  },
  {
    type: "h3",
    id: "classification",
    text: "Classification and duties",
  },
  {
    type: "p",
    text: "Tariff headings for festive articles vary by destination interpretation. This site does not invent HS codes. Importers should confirm classification with their broker using a real product description, materials and photos from the agreed assortment.",
  },
  {
    type: "h2",
    id: "planning-the-lane",
    text: "Planning the lane",
  },
  {
    type: "p",
    text: "Mode, Incoterms-style responsibility splits and who books freight are commercial choices. Festival peaks compress options. International country pages on this site add destination context; they are not customs advice.",
  },
  {
    type: "ol",
    items: [
      "Lock mix and packing notes early enough for peak season.",
      "Decide who is importer of record in the destination.",
      "Align carton marks with what the warehouse will actually scan or count.",
      "Keep a copy of invoice and packing list with the physical goods story.",
    ],
  },
  {
    type: "callout",
    text: "No shipping rates, licence numbers or testimonials appear here. If your compliance team needs documents, request them as part of the wholesale enquiry.",
  },
  {
    type: "p",
    text: "Name the destination country on the quote form so export-oriented packing and document talk can be separated from a purely domestic-style brief.",
  },
];

const bulkBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "plan-in-ranges",
    text: "Plan bulk in ranges, not in a published MOQ",
  },
  {
    type: "p",
    text: "Buyers often think in bands such as 50–100, 100–500, 500–1,000, 1,000–5,000, 5,000–10,000 or larger. Use those bands to describe real demand. They are planning ranges, not minimum order quantities claimed by this site. A quote can then test whether a given mix is practical at the range you named.",
  },
  {
    type: "h2",
    id: "assortment-before-headcount",
    text: "Assortment before headcount",
  },
  {
    type: "p",
    text: "Bulk mistakes usually come from ordering a tall stack of one motif. Split the range across traditional, designer, kids and pair families according to your channel. Grocery may weight traditional and kids more heavily; gift and online channels may hold a larger premium slice.",
  },
  {
    type: "ul",
    items: [
      "Name the families and a percentage or depth per family",
      "Count pairs as pairs if that is how you merchandise",
      "Keep a small buffer in the range for last-minute community demand if that is your pattern",
      "Do not inflate the range to “sound wholesale”; accuracy helps packing",
    ],
  },
  {
    type: "h2",
    id: "qc-in-bulk",
    text: "Quality control at bulk scale",
  },
  {
    type: "p",
    text: "Defects that are rare on a sample become visible across hundreds of pieces. Agree visual reject points: loose stones, unfinished thread, colour transfer, mismatched pairs, crushed inner packs. Ask how a lot will be checked before outer cartons are closed.",
  },
  {
    type: "h3",
    id: "calendar",
    text: "Calendar",
  },
  {
    type: "p",
    text: "Work backwards from Raksha Bandhan in your market, typically an August week. Add confirmation, preparation, packing and transit. International bulk usually needs a wider window than a local restock. Timelines vary; this page does not promise a production number of days.",
  },
  {
    type: "callout",
    text: "If your quantity sits at the low end of a band, say whether you need mixed inners or a uniform corporate pack. Packing style changes what is practical even when the headcount looks similar.",
  },
  {
    type: "h2",
    id: "submit-the-range",
    text: "Submit the range",
  },
  {
    type: "p",
    text: "Put the quantity band, mix and destination on the wholesale quote form. That is the honest start to a bulk conversation without a fictional minimum printed on the website.",
  },
];

const customBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "when-custom-is-worth-it",
    text: "When custom Rakhi is worth the extra process",
  },
  {
    type: "p",
    text: "Custom work earns its time when a standard seasonal mix cannot carry a brand colour, a logo, a mascot, an exclusive motif or a tightly specified pair set. It is weaker when you only need familiar festive designs in a hurry. Peak weeks before Raksha Bandhan leave less room for artwork iteration.",
  },
  {
    type: "h2",
    id: "artwork",
    text: "Artwork that suppliers can actually use",
  },
  {
    type: "ul",
    items: [
      "A clean logo or motif file, not a compressed social-media screenshot",
      "Intended colours described in words plus a reference, with a note that thread and stone will not match a screen exactly",
      "Size of the motif relative to the band",
      "Whether the piece is for children, adults or pairs",
      "Surfaces that must stay unprinted (for example a traditional centre)",
    ],
  },
  {
    type: "h3",
    id: "colour-matching",
    text: "Colour matching caveats",
  },
  {
    type: "p",
    text: "Dyed thread, coated beads, foil stones, printed fabric and metal findings each take colour differently. A “navy” on a brand guideline may become a nearby blue on cord. Agree which element is colour-critical — often the motif, not every millimetre of thread — and approve a sample when the programme is visible to employees or customers.",
  },
  {
    type: "h2",
    id: "what-is-harder",
    text: "What is usually harder this season",
  },
  {
    type: "p",
    text: "Licensed cartoon characters, very small metal work, and exact pantone matching across mixed materials are common friction points. A first message should separate “must have this year” from “develop for next year”.",
  },
  {
    type: "ol",
    items: [
      "Share artwork and the commercial reason for custom (brand, event, exclusive retail).",
      "Agree which details may vary.",
      "Approve a sample or a tightly written substitute if timing is short.",
      "Only then talk bulk range and packing.",
    ],
  },
  {
    type: "callout",
    text: "Custom is not claimed as an in-house factory service on this page. It is a buying path you can request so the enquiry is routed with the right questions.",
  },
  {
    type: "p",
    text: "Use the quote form and tick or mention custom Rakhi so the brief is not treated as a standard assortment restock.",
  },
];

const privateLabelBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "what-private-label-covers",
    text: "What private-label Rakhi usually means",
  },
  {
    type: "p",
    text: "Private label puts your name on hang-tags, pouches, headers or boxes while the festive product still comes from the same kind of Indian craft process used for unbranded wholesale. Shoppers see your brand; operations still need honest QC, moisture protection and a dated festival calendar.",
  },
  {
    type: "h2",
    id: "branding-surfaces",
    text: "Branding surfaces to decide early",
  },
  {
    type: "ul",
    items: [
      "Hang-tag or sticker on the band",
      "Printed pouch or header card",
      "Inner box versus outer carton marks only",
      "Language, care notes and any barcode you already use",
      "Whether the Rakhi motif itself must carry a logo",
    ],
  },
  {
    type: "h2",
    id: "first-run-caution",
    text: "First-run caution",
  },
  {
    type: "p",
    text: "Branded packing that does not sell still occupies budget and storage, and it is harder to divert than a generic festive pouch. Many importers and retailers trial a mix in a plain or lightly labelled pack, then add private label once depths are proven. If you must brand in year one, keep SKU count short.",
  },
  {
    type: "h3",
    id: "packaging-and-moisture",
    text: "Packaging still has a technical job",
  },
  {
    type: "p",
    text: "A beautiful box that traps humidity or crushes stones is a quality failure. Private-label design should follow the same inner/outer and moisture logic as unbranded export packing, then add print.",
  },
  {
    type: "callout",
    text: "This site does not publish brand testimonials or invented case studies. Bring your packaging constraints in the quote; they will be reviewed as practical limits, not as marketing claims.",
  },
  {
    type: "h2",
    id: "brief-checklist",
    text: "Brief checklist",
  },
  {
    type: "ol",
    items: [
      "Confirm the mix would work even without the brand marks.",
      "Choose the smallest branding surface that meets the channel.",
      "Supply print-ready artwork and legal lines you must include.",
      "State leftover-pack risk you are willing to take.",
    ],
  },
  {
    type: "p",
    text: "Request a wholesale quote and mention private label so catalogue-style assortment talk is not confused with a branded packaging project.",
  },
];

const corporateBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "hr-and-community",
    text: "HR, offices and community gifting",
  },
  {
    type: "p",
    text: "Companies and institutions often buy Rakhi as a culture or community gesture: staff kits, family days, temple-adjacent outreach, or gifts for partner organisations. The buyer is rarely a festive-goods specialist, so the brief must translate programme goals into design count, uniformity and a delivery window.",
  },
  {
    type: "h2",
    id: "uniformity",
    text: "Uniformity versus a small menu",
  },
  {
    type: "p",
    text: "One or two designs photograph as a programme and simplify packing. A small menu (for example adult traditional plus kids) can still look coherent if cards and pouches match. Large unfocused assortments feel like leftover retail stock in a corporate bag.",
  },
  {
    type: "ul",
    items: [
      "Who receives the Rakhi — employees, families, community guests",
      "Whether pairs are required",
      "Whether a logo sits on the piece, the card or neither",
      "How many delivery addresses share the same window",
    ],
  },
  {
    type: "h2",
    id: "timelines",
    text: "Timelines that bite corporate teams",
  },
  {
    type: "p",
    text: "Internal artwork approval, purchase-order cycles and multi-site delivery often take longer than the craft lead time. Raksha Bandhan is typically in August; for 2026, 28 August is commonly cited. Count backwards through your own sign-off, not only through packing.",
  },
  {
    type: "h3",
    id: "what-to-send",
    text: "What to send in the first message",
  },
  {
    type: "ol",
    items: [
      "Headcount as a range and number of sites",
      "Need for kids designs or pairs",
      "Branding surface if any",
      "In-hands date per location",
      "Whether leftovers can be used the following year or must be avoided",
    ],
  },
  {
    type: "callout",
    text: "Corporate pages on this site are informational. They do not quote per-piece gifts or claim past company clients.",
  },
  {
    type: "p",
    text: "Use the quote form as a corporate buyer and, if helpful, read the corporate buyer guide for decision-maker language. Keep one owner for the brief so sites do not order conflicting mixes.",
  },
];

const catalogBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "after-enquiry",
    text: "Catalogue access after a wholesale enquiry",
  },
  {
    type: "p",
    text: "When a seasonal assortment list or image set is available, it is shared in response to a serious brief — destination, buyer type and a quantity range. This page does not embed a downloadable PDF, a drive link placeholder or last year’s file presented as current stock.",
  },
  {
    type: "callout",
    text: "If you see a “download catalogue” button elsewhere on the internet with invented prices, treat it as unrelated to this site. Our path is enquiry first, documents second.",
  },
  {
    type: "h2",
    id: "why-not-public",
    text: "Why a live public catalogue is not hosted here",
  },
  {
    type: "ul",
    items: [
      "Rakhi ranges are seasonal and can change before the festival week",
      "A file without destination and packing context is easy to misread as an offer",
      "Buyers are better served by a mix that matches their channel",
      "Unverified files create support noise and disappointment",
    ],
  },
  {
    type: "h2",
    id: "what-you-can-do-now",
    text: "What you can do before a file exists",
  },
  {
    type: "p",
    text: "Use the Rakhi types hub to name families. Sketch a percentage mix. Read quality and packing notes so your enquiry already contains reject points and inner-pack preferences. That work makes any later catalogue or photo set easier to interpret.",
  },
  {
    type: "h3",
    id: "if-you-already-know-the-mix",
    text: "If you already know the mix",
  },
  {
    type: "p",
    text: "Skip the wait for a lookbook. List types, a quantity band and packing notes on the quote form. Targeted confirmation is often faster than circulating a generic seasonal PDF.",
  },
  {
    type: "ol",
    items: [
      "Open the wholesale quote form.",
      "State that you need catalogue or assortment images if they are available.",
      "Include destination and buyer type.",
      "Continue only on documents that match the brief you sent.",
    ],
  },
  {
    type: "p",
    text: "Request a wholesale quote — that is the call to action for catalogue access on this site.",
  },
];

const orderBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "eight-steps",
    text: "An eight-step wholesale path",
  },
  {
    type: "p",
    text: "The sequence below is how this site describes a typical wholesale Rakhi order. Steps can overlap. Timelines vary with mix, custom work, peak season and the agreed dispatch path. Nothing here is a service-level promise.",
  },
  {
    type: "ol",
    items: [
      "Tell us your requirement — destination, buyer type, styles and a quantity range.",
      "Select Rakhi categories — traditional, designer, kids, lumba, premium or a stated mix.",
      "Receive catalogue or quote follow-up — when a list or images are available, or questions that sharpen the brief.",
      "Confirm designs and quantity — lock assortment, packing notes and any custom or private-label requests.",
      "Production or preparation — selected designs are prepared to the confirmed specification.",
      "Quality check — visual checks on finishing, threading, attachments and packing consistency.",
      "Packaging — inner protection, outer cartons and labelling as agreed for the destination.",
      "Dispatch — handover to the agreed freight or courier path.",
    ],
  },
  {
    type: "h2",
    id: "timelines-vary",
    text: "Timelines vary — plan the calendar anyway",
  },
  {
    type: "p",
    text: "Festival demand clusters before Raksha Bandhan, typically in August. International buyers should add transit and clearance buffers. Custom artwork adds a sample loop. A brief that arrives in the final stretch may still be discussed, but options narrow.",
  },
  {
    type: "h3",
    id: "what-you-control",
    text: "What you control in the first two steps",
  },
  {
    type: "ul",
    items: [
      "A complete destination and in-hands week",
      "Named design families instead of “anything festive”",
      "Honest quantity ranges",
      "Whether samples, catalogue images or a written spec will drive approval",
    ],
  },
  {
    type: "callout",
    text: "Dispatch mode and commercial terms are agreed per order. This page does not publish rates or a fixed number of production days.",
  },
  {
    type: "h2",
    id: "start-step-one",
    text: "Start at step one",
  },
  {
    type: "p",
    text: "The quote form is step one in writing. Use it even if you are still refining percentages; a range and a channel type are enough to begin.",
  },
];

const internationalBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "why-a-hub",
    text: "A hub for destination-aware wholesale",
  },
  {
    type: "p",
    text: "Rakhi demand outside India is real but not identical everywhere. Diaspora grocery, temple committees, gift retail and online marketplaces weight types differently, and inbound calendars collide with local weekends and school holidays. This hub introduces that planning idea; country pages carry the local notes.",
  },
  {
    type: "h2",
    id: "country-guides",
    text: "Country guides this site is built to support",
  },
  {
    type: "ul",
    items: [
      "USA — retailers, grocers and online sellers",
      "United Kingdom — British Indian retail, gift and community demand",
      "Canada — city-level seasonal planning",
      "Australia — lead times and packing for a long inbound path",
      "UAE — Gulf retail and bulk community supply",
      "New Zealand — smaller-market mix discipline",
      "Singapore — compact, often premium-leaning assortments",
      "Europe — importer and South Asian retail notes across borders",
    ],
  },
  {
    type: "p",
    text: "Open the matching country page from the international section of the site when you need destination context. Do not treat those pages as customs rulings or as proof of past shipments to that market.",
  },
  {
    type: "h3",
    id: "shared-rules",
    text: "Rules that apply in every destination",
  },
  {
    type: "ol",
    items: [
      "Name the country on the quote form even if you are browsing from elsewhere.",
      "Work backwards from the local Raksha Bandhan week.",
      "Specify packing for the mode you expect, not only for shop display.",
      "Confirm classification and clearance with your own broker.",
    ],
  },
  {
    type: "callout",
    text: "International content is written so pages are not doorway duplicates. Each country guide should add local buying context; this hub stays at the planning layer.",
  },
  {
    type: "h2",
    id: "start-here",
    text: "Start here, then go local",
  },
  {
    type: "p",
    text: "Read shipping, packing and quality notes next if you are an importer. Retail-only buyers may prefer the retailer or grocery buyer guides, then a country page. Either path ends at a wholesale quote with the destination filled in.",
  },
];

const shippingBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "modes",
    text: "Modes, discussed conceptually",
  },
  {
    type: "p",
    text: "Rakhi leaves India by courier, air freight or sea freight depending on calendar, volume and how the destination usually receives seasonal goods. This page does not publish rates, dimensional-weight tables or guaranteed transit days. Those figures change with lane and week and belong in a shipment-specific discussion.",
  },
  {
    type: "ul",
    items: [
      "Courier — often discussed for smaller, time-sensitive cartons",
      "Air freight — a common middle path when volume grows but the festival week is close",
      "Sea freight — more plausible when planning is early and cartons are dense enough to justify the calendar",
    ],
  },
  {
    type: "h2",
    id: "packing-for-the-mode",
    text: "Packing for the mode",
  },
  {
    type: "p",
    text: "Thread, adhesives and set stones dislike compression and humidity. Inner packs should stop rubbing; outer cartons should survive stacking. Sea and long warehouse dwells raise moisture questions; air and courier still require crush resistance. Agree packing with the mode, not as an afterthought.",
  },
  {
    type: "h3",
    id: "peak-season",
    text: "Peak season",
  },
  {
    type: "p",
    text: "The weeks before Raksha Bandhan tighten craft capacity and freight space. Late mix changes are expensive in time even when nobody publishes a peak surcharge on this site. Confirm earlier than feels necessary if the in-hands week is immovable.",
  },
  {
    type: "ol",
    items: [
      "Fix the in-hands week in the destination.",
      "Choose a mode family that can still work if there is a short delay.",
      "Match inner/outer packing to that mode.",
      "Keep invoice and packing-list descriptions aligned with what is in the carton.",
    ],
  },
  {
    type: "callout",
    text: "Wholesale Rakhi does not list shipping prices here. Ask for a quote path once weight, volume and destination can be estimated from a real mix.",
  },
  {
    type: "p",
    text: "Importers should also read the exporter-education page for document language and the packaging page for moisture detail, then submit the destination on the quote form.",
  },
];

const packagingBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "inner-and-outer",
    text: "Inner and outer packing",
  },
  {
    type: "p",
    text: "Inner packing is what touches the Rakhi: pouch, board, tissue, individual poly or a small bundle wrap. Outer packing is the carton that is lifted, stacked and scanned. Retail beauty belongs on the inner story; survival belongs on both.",
  },
  {
    type: "ul",
    items: [
      "Inners should stop motifs rubbing and threads tangling",
      "Outers should hold shape when stacked",
      "Void fill should not crush stones",
      "Bundle counts inside a carton should match how the warehouse will pick",
    ],
  },
  {
    type: "h2",
    id: "moisture",
    text: "Moisture",
  },
  {
    type: "p",
    text: "Humidity affects dyed thread, some adhesives and metal findings. Buyers shipping longer distances often discuss sealed inners, carton liners and avoiding damp storage on arrival. There is no single packing recipe published here because mode and climate differ.",
  },
  {
    type: "h2",
    id: "labelling",
    text: "Labelling",
  },
  {
    type: "p",
    text: "Trade labels on outers typically identify contents, quantity and handling. Inner labels may need language for the destination, a barcode, or a simple “traditional / kids / pair” mark so shop staff do not open every pouch. Do not assume an India-domestic mark is enough for a foreign grocery chain.",
  },
  {
    type: "h3",
    id: "private-label-packs",
    text: "When packing is also branding",
  },
  {
    type: "p",
    text: "Printed pouches and boxes still need the same moisture and crush logic. If branding is new this season, keep structure simple so print lead time does not endanger the festival week.",
  },
  {
    type: "callout",
    text: "Packing specifications belong in the quote brief. Photos of a pretty pouch without carton notes are incomplete for wholesale.",
  },
  {
    type: "ol",
    items: [
      "Describe inner format you can actually shelf or photograph.",
      "Describe outer carton marks your warehouse needs.",
      "State the likely mode so moisture talk is in context.",
      "Mention private-label print only if it is in scope.",
    ],
  },
  {
    type: "p",
    text: "Continue with a wholesale quote that includes packing notes, or read quality points so inners are not hiding finishing problems.",
  },
];

const qualityBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "visual-qc",
    text: "Visual QC points that belong in a wholesale brief",
  },
  {
    type: "p",
    text: "Rakhi quality is judged by eye and touch more than by laboratory certificates. Write reject reasons before bulk is packed so “looks festive” is not the only standard.",
  },
  {
    type: "ul",
    items: [
      "Motif centred and securely attached",
      "Thread or cord ends finished so they do not unravel in transit",
      "Stones, beads or kundan-look elements not loose",
      "No sharp or burred metal findings on bracelet-style pieces",
      "Pairs matched for lumba or bhaiya-bhabhi sets",
      "Inner packs intact and not dye-stained",
    ],
  },
  {
    type: "h2",
    id: "thread",
    text: "Thread",
  },
  {
    type: "p",
    text: "Unfinished tails, weak knots and brittle cord show up after handling. Specify whether you need a particular thickness or a soft versus structured band. Ask how ends are sealed or tied on the designs you chose.",
  },
  {
    type: "h2",
    id: "stones",
    text: "Stones and embellishments",
  },
  {
    type: "p",
    text: "Festive pieces often use glass, acrylic or foil-backed stones rather than mined gems. If a listing says “gemstone”, ask what that means for your market’s advertising rules. For kids designs, ask about small parts that can detach.",
  },
  {
    type: "h3",
    id: "colour-bleed",
    text: "Colour bleed",
  },
  {
    type: "p",
    text: "Dark dyes on thread or fabric centres can mark pale garments or neighbouring pieces in a humid carton. Request that high-contrast colours are packed to reduce transfer, and test a sample against a light cloth if you sell a premium gift story.",
  },
  {
    type: "callout",
    text: "This site does not publish lab certifications or test-report numbers. Quality language here is practical visual control for trade buyers.",
  },
  {
    type: "ol",
    items: [
      "List the QC points that would cause a shop return in your channel.",
      "Say how pairs and kids lines should be sampled.",
      "Ask how substitutions are approved.",
      "Put those notes on the quote form.",
    ],
  },
  {
    type: "p",
    text: "Pair this page with packaging notes so finishing is not undone in the carton.",
  },
];

const typesBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "how-to-use-the-hub",
    text: "How to use this types hub",
  },
  {
    type: "p",
    text: "Rakhi is merchandised in families: traditional, designer, kundan-look, beaded, pearl, gemstone-look, bracelet, kids, cartoon, wooden, silver-look, god motifs, premium, lumba and bhaiya-bhabhi pairs, and mauli-style threads. This hub explains how to choose a mix. Individual type pages go deeper on characteristics and wholesale notes.",
  },
  {
    type: "h2",
    id: "choose-from-the-channel",
    text: "Choose from the channel, not from a wish list",
  },
  {
    type: "ul",
    items: [
      "Grocery: traditional, kids, mauli-style, accessible pairs",
      "Gift shops: designer, pearl, premium, selected kundan-look",
      "Online: photographable designer and kids, clear pack sizes",
      "Corporate: short uniform list, optional kids add-on",
      "Community events: simple traditional and kids, easy counting",
    ],
  },
  {
    type: "h3",
    id: "pairs",
    text: "Pairs need their own line in the brief",
  },
  {
    type: "p",
    text: "Lumba and bhaiya-bhabhi sets are sold and packed as relationships, not as two random SKUs. State how you count them and whether they must sit together in the inner pack.",
  },
  {
    type: "h2",
    id: "first-mix",
    text: "A disciplined first mix",
  },
  {
    type: "p",
    text: "New buyers rarely need every family. Pick three to five that your staff can explain, photograph those, and leave room in the quantity range to deepen winners rather than adding obscure types at the last minute.",
  },
  {
    type: "ol",
    items: [
      "List the families you will actually display.",
      "Assign a percentage or depth to each.",
      "Read the matching type pages for materials caveats (especially “gemstone” and “silver”).",
      "Carry those names into the quote form.",
    ],
  },
  {
    type: "callout",
    text: "Type names on this site are merchandising language. They are not certificates of metal content or stone origin.",
  },
  {
    type: "p",
    text: "When the mix is named, request a wholesale quote. Catalogue images, if available, are easier to use once families are already chosen.",
  },
];

const festivalBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "meaning",
    text: "Meaning, in plain language",
  },
  {
    type: "p",
    text: "Raksha Bandhan is widely observed as a festival of the bond between brothers and sisters. A Rakhi is tied, often with rice, tilak and sweets in family settings, and blessings and gifts may be exchanged. Households, regions and communities differ in who ties, who receives and how public the day is. This site describes common practice so wholesale calendars make sense; it does not issue religious rulings.",
  },
  {
    type: "h2",
    id: "date",
    text: "Date — typically August",
  },
  {
    type: "p",
    text: "The observance follows Shravan Purnima on the Hindu lunar calendar, so the Gregorian date shifts. It typically falls in August. For 2026, 28 August is commonly cited. Buyers should still confirm the date used by the communities they serve, including where local announcements differ from a generic web result.",
  },
  {
    type: "h3",
    id: "rituals-without-authority",
    text: "Rituals without claiming authority",
  },
  {
    type: "p",
    text: "Commonly described elements include the Rakhi thread, aarti or a simple prayer in some homes, sweets and a gift. Some families include bhabhi or extended kin through lumba-style sets. None of these notes replace guidance from a family’s own tradition or a community organisation.",
  },
  {
    type: "h2",
    id: "why-buyers-care",
    text: "Why wholesale buyers care",
  },
  {
    type: "ul",
    items: [
      "Shelves and listings must be live before the festival week, not on the morning of",
      "Community events cluster on the weekend nearest the date",
      "Corporate programmes need an in-office window that respects that week",
      "Late inbound freight cannot be sold as “on time for the tying day”",
    ],
  },
  {
    type: "callout",
    text: "Use the commonly cited 2026 date for planning conversations, then verify locally. Do not print a date on packaging as doctrine.",
  },
  {
    type: "ol",
    items: [
      "Confirm the local festival date with your community or retail calendar.",
      "Set an in-hands week earlier than that date.",
      "Choose a mix that matches who shops with you.",
      "Send the brief through the wholesale quote form.",
    ],
  },
  {
    type: "p",
    text: "For cultural background beyond the buying calendar, read the history page. For assortment, return to Rakhi types.",
  },
];

const historyBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "overview",
    text: "A cultural overview for trade readers",
  },
  {
    type: "p",
    text: "Rakhi sits in a long South Asian practice of tying thread as a sign of protection, kinship and blessing. Over time, decorated bands became a distinct festive article sold ahead of Raksha Bandhan. Wholesale buyers meet that living product: craft plus seasonality, not an archaeological replica.",
  },
  {
    type: "h2",
    id: "legendary-references",
    text: "Legendary references — tradition, not proven fact",
  },
  {
    type: "p",
    text: "Popular retellings associate Rakhi with episodes from epic literature and later courtly stories of a thread sent or tied as a claim of protection. These tellings matter because customers recognise them; they are not documentary proof of a single origin, and they are not claims this business can historically certify.",
  },
  {
    type: "ul",
    items: [
      "Treat legend as story language for a respectful tag, if you use story at all",
      "Do not present a legend as a dated factory origin",
      "Do not invent royal commissions or antique workshops for marketing",
    ],
  },
  {
    type: "h3",
    id: "modern-trade",
    text: "The modern traded Rakhi",
  },
  {
    type: "p",
    text: "Printed motifs, kundan-look settings, cartoon centres and export packing are features of later markets. Indian craft networks adapted as diaspora retail and domestic festival shopping grew. That industry context explains why type mix and QC language matter today.",
  },
  {
    type: "h2",
    id: "merchandising-tone",
    text: "Merchandising tone",
  },
  {
    type: "p",
    text: "International shelves do well with a short, modest explanation of the festival and the product. Over-claiming history, metal purity or temple endorsement creates returns and distrust. Keep copy informational.",
  },
  {
    type: "callout",
    text: "Historical notes on this page are cultural context. They are not a company lineage, a certification, or evidence of manufacturer or factory ownership.",
  },
  {
    type: "ol",
    items: [
      "If you need pack copy, keep legendary references labelled as tradition.",
      "Point customers to the festival date as locally observed.",
      "Let product quality and mix do the commercial work.",
    ],
  },
  {
    type: "p",
    text: "For the buying calendar, use the Raksha Bandhan page. For a live enquiry, request a wholesale quote.",
  },
];

const faqPageBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "how-to-use-these-faqs",
    text: "How to use these frequently asked questions",
  },
  {
    type: "p",
    text: "The ten questions below are the core wholesale FAQ for this site. They cover enquiry, pricing silence, manufacturing claims, catalogue access, custom work, shipping, quality, type mix, the 2026 festival date commonly cited, and contact. Longer topic pages remain the place for process detail.",
  },
  {
    type: "callout",
    text: "Answers here are informational. They do not create prices, minimums, licences or testimonials.",
  },
  {
    type: "h2",
    id: "before-you-enquire",
    text: "Before you enquire",
  },
  {
    type: "p",
    text: "Have a destination, a buyer type, a quantity range and a short list of Rakhi families. If you are corporate or community, add the in-hands week and whether branding is required. That preparation makes every FAQ below operational rather than theoretical.",
  },
  {
    type: "h3",
    id: "related-reading",
    text: "Related reading if a short answer is not enough",
  },
  {
    type: "ul",
    items: [
      "Roles and briefing — wholesale, wholesaler, supplier pages",
      "India production context — manufacturer education page",
      "Documents and modes — exporter and shipping pages",
      "Product — types, quality, packaging",
    ],
  },
  {
    type: "h2",
    id: "the-questions",
    text: "The questions",
  },
  {
    type: "p",
    text: "Read the FAQ list on this page in full before sending a one-line message. If your question is destination-specific, continue to the international hub after these answers.",
  },
  {
    type: "ol",
    items: [
      "Start with how to enquire and what not to expect on public pages.",
      "Check the manufacturing-claim and catalogue answers so the relationship starts honestly.",
      "Use quality, types and shipping answers to complete the brief.",
      "Submit the wholesale quote form.",
    ],
  },
  {
    type: "p",
    text: "The structured FAQ entries follow this introduction. They are written to be cited in search results and in buyer onboarding packs without adding unverified business facts.",
  },
];

const contactBlocks: ContentBlock[] = [
  {
    type: "h2",
    id: "primary-path",
    text: "The form is the primary path",
  },
  {
    type: "p",
    text: "Wholesale enquiries should go through the quote form so destination, buyer type, quantity range and product notes arrive together. Informal one-line messages omit the details needed to reply in a useful way.",
  },
  {
    type: "callout",
    text: "Email, phone and messaging numbers appear on this site only if the business has provided them for public display. If those fields are empty, use the form. Do not rely on contact details copied from other websites.",
  },
  {
    type: "h2",
    id: "what-to-include",
    text: "What to include",
  },
  {
    type: "ul",
    items: [
      "Your name and company name if you have one",
      "Email, and phone only if you want a call-back when a number is in use",
      "Country and, if different, the country where goods must arrive",
      "Buyer type and Rakhi families of interest",
      "Estimated quantity range",
      "Custom, private-label or packing notes",
    ],
  },
  {
    type: "h3",
    id: "after-you-send",
    text: "After you send",
  },
  {
    type: "p",
    text: "The team reviews the brief and follows up with questions, catalogue information if available, or a quote discussion. Timelines vary with season. This page does not publish a guaranteed response clock.",
  },
  {
    type: "h2",
    id: "what-this-page-is-not",
    text: "What this page is not",
  },
  {
    type: "p",
    text: "It is not a store locator, a factory visiting hour list, or a checkout. It is the human-readable companion to the wholesale form.",
  },
  {
    type: "ol",
    items: [
      "Read any topic pages you need so the brief is complete.",
      "Open the quote form from the link on this page.",
      "Submit once with the planning ranges you actually intend.",
    ],
  },
  {
    type: "p",
    text: "If you already know the mix, you do not need to wait on a public catalogue. Send the enquiry.",
  },
];

export const corePages: ContentPage[] = [
  {
    slug: "about-us",
    seo: {
      title: "About Wholesale Rakhi | India for Buyers Worldwide",
      description:
        "Wholesale Rakhi is an information and enquiry portal for sourcing Rakhi from India. Learn how worldwide buyers brief requirements and request a wholesale quote.",
      path: "/about-us",
      keywords: "about wholesale rakhi, rakhi from India, wholesale enquiry portal",
    },
    h1: "About Wholesale Rakhi",
    intro:
      "Wholesale Rakhi is an information resource and wholesale enquiry portal for buyers who want to source Rakhi from India. The public site explains categories, briefing, quality and export-minded packing; commercial next steps begin with a quote request. Positioning: Wholesale Rakhi from India for Buyers Worldwide.",
    blocks: aboutBlocks,
    faqs: aboutFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "Wholesale Rakhi guide" },
      { href: "/how-to-order-wholesale-rakhi", label: "How to order" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "wholesale-rakhi",
    seo: {
      title: "Wholesale Rakhi from India | Buying Guide for Trade",
      description:
        "What wholesale Rakhi means, who buys it, how to brief a counterpart, and how to plan a category mix for shops, importers and community programmes.",
      path: "/wholesale-rakhi",
      keywords: "wholesale rakhi, bulk rakhi buying, rakhi from India",
    },
    h1: "Wholesale Rakhi from India",
    intro:
      "Wholesale Rakhi is the trade of festive bands in quantity, specified as a mix for resale, distribution, gifting programmes or community supply. This guide explains who buys, how to brief, and how category mix differs by channel — without a public price list.",
    blocks: wholesaleBlocks,
    faqs: wholesaleFaqs,
    related: [
      quote,
      { href: "/rakhi-types", label: "Rakhi types hub" },
      { href: "/bulk-rakhi", label: "Planning bulk quantities" },
      { href: "/how-to-order-wholesale-rakhi", label: "How to order" },
    ],
  },
  {
    slug: "rakhi-manufacturer",
    seo: {
      title: "Rakhi Manufacturing in India | Questions Buyers Should Ask",
      description:
        "How Rakhi is typically made in India, from motif to packing, and the process questions wholesale buyers should ask. Educational context, not a factory claim.",
      path: "/rakhi-manufacturer",
      keywords: "rakhi manufacturer, rakhi making in India, wholesale rakhi production",
    },
    h1: "Understanding Rakhi manufacturing in India",
    intro:
      "Indian Rakhi production is usually a chain of specialised craft steps rather than a single anonymous line. This page explains that system so buyers can ask better questions. It does not claim that Wholesale Rakhi owns a factory or manufacturing plant.",
    blocks: manufacturerBlocks,
    faqs: manufacturerFaqs,
    related: [
      quote,
      { href: "/rakhi-quality", label: "Rakhi quality checks" },
      { href: "/rakhi-supplier", label: "Evaluating suppliers" },
      { href: "/custom-rakhi", label: "Custom Rakhi" },
    ],
  },
  {
    slug: "rakhi-wholesaler",
    seo: {
      title: "Rakhi Wholesaler vs Retailer vs Manufacturer",
      description:
        "How wholesaler, retailer and manufacturer roles differ in the Rakhi trade, and which conversation you should start for assortment, making or shop supply.",
      path: "/rakhi-wholesaler",
      keywords: "rakhi wholesaler, rakhi retailer, rakhi manufacturer roles",
    },
    h1: "Rakhi wholesaler, retailer and manufacturer roles",
    intro:
      "These three words are often used interchangeably in festive trade. They describe different jobs: shop selling, assortment supply, and making. Use this page to name the role you need before you send a wholesale brief.",
    blocks: wholesalerBlocks,
    faqs: wholesalerFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "Wholesale Rakhi" },
      { href: "/rakhi-supplier", label: "Rakhi supplier guide" },
      { href: "/rakhi-exporter", label: "Export process notes" },
    ],
  },
  {
    slug: "rakhi-supplier",
    seo: {
      title: "Rakhi Supplier Evaluation | Samples, Bulk and Communication",
      description:
        "How to evaluate a Rakhi supplier, when samples help versus a written bulk spec, and the communication habits that keep wholesale orders accurate.",
      path: "/rakhi-supplier",
      keywords: "rakhi supplier, wholesale rakhi samples, bulk rakhi briefing",
    },
    h1: "How to evaluate a Rakhi supplier",
    intro:
      "A useful counterpart restates your mix, packing and destination, and separates sample approval from bulk packing. This page is a buyer’s checklist for that conversation — not a claim about exclusive supply contracts.",
    blocks: supplierBlocks,
    faqs: supplierFaqs,
    related: [
      quote,
      { href: "/rakhi-wholesaler", label: "Trade roles" },
      { href: "/bulk-rakhi", label: "Bulk planning" },
      { href: "/rakhi-quality", label: "Quality points" },
    ],
  },
  {
    slug: "rakhi-exporter",
    seo: {
      title: "Rakhi Export from India | Documents Buyers Discuss",
      description:
        "How Rakhi export is discussed conceptually: commercial documents, packing lists and destination clearance. No invented licences or exporter ownership claims.",
      path: "/rakhi-exporter",
      keywords: "rakhi exporter, rakhi export documents, import rakhi from India",
    },
    h1: "Rakhi export — process language for buyers",
    intro:
      "Moving Rakhi from India to another customs territory is a documents-and-packing conversation as much as a product one. This page lists what importers commonly discuss. It does not publish licences or state that this site is the exporting party.",
    blocks: exporterBlocks,
    faqs: exporterFaqs,
    related: [
      quote,
      { href: "/rakhi-shipping-export", label: "Shipping modes" },
      { href: "/international-rakhi-wholesale", label: "International hub" },
      { href: "/rakhi-packaging", label: "Packaging" },
    ],
  },
  {
    slug: "bulk-rakhi",
    seo: {
      title: "Bulk Rakhi Orders | Quantity Ranges, Mix and QC",
      description:
        "Plan bulk Rakhi with quantity ranges rather than a published MOQ, split the assortment by channel, and agree visual quality checks before packing.",
      path: "/bulk-rakhi",
      keywords: "bulk rakhi, bulk rakhi orders, rakhi quantity planning",
    },
    h1: "Planning bulk Rakhi quantities",
    intro:
      "Bulk buying works when headcount, assortment and QC are planned together. Use quantity bands as a description of demand, not as a minimum printed by this website. Then split the band across the types your channel can actually sell or gift.",
    blocks: bulkBlocks,
    faqs: bulkFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "Wholesale overview" },
      { href: "/rakhi-quality", label: "Quality checks" },
      { href: "/rakhi-types", label: "Type mix" },
    ],
  },
  {
    slug: "custom-rakhi",
    seo: {
      title: "Custom Rakhi Wholesale | Artwork and Colour Matching",
      description:
        "When custom Rakhi is worth it for wholesale programmes, what artwork to send, and why thread, stones and screens never match colour perfectly.",
      path: "/custom-rakhi",
      keywords: "custom rakhi, custom rakhi wholesale, branded rakhi artwork",
    },
    h1: "Custom Rakhi for wholesale programmes",
    intro:
      "Custom makes sense when a standard mix cannot carry a logo, exclusive motif or brand colour — and when you can allow time for artwork and caveats about colour matching. It is a buying path to request, not a claim of an in-house design factory.",
    blocks: customBlocks,
    faqs: customFaqs,
    related: [
      quote,
      { href: "/private-label-rakhi", label: "Private label" },
      { href: "/corporate-rakhi", label: "Corporate orders" },
      { href: "/rakhi-manufacturer", label: "How making works" },
    ],
  },
  {
    slug: "private-label-rakhi",
    seo: {
      title: "Private Label Rakhi | Branding, Packing and First-Run Risk",
      description:
        "How retailers and importers approach private-label Rakhi: branding surfaces, packing that still protects the product, and why first runs deserve caution.",
      path: "/private-label-rakhi",
      keywords: "private label rakhi, branded rakhi packaging, wholesale rakhi branding",
    },
    h1: "Private-label Rakhi for trade buyers",
    intro:
      "Private label puts your name on tags, pouches or boxes while the festive product still needs the same QC and moisture protection as unbranded wholesale. First-run branding concentrates leftover-stock risk — plan the mix first, marks second.",
    blocks: privateLabelBlocks,
    faqs: privateLabelFaqs,
    related: [
      quote,
      { href: "/custom-rakhi", label: "Custom Rakhi" },
      { href: "/rakhi-packaging", label: "Packaging" },
      { href: "/rakhi-catalog", label: "Catalogue after enquiry" },
    ],
  },
  {
    slug: "corporate-rakhi",
    seo: {
      title: "Corporate Rakhi Orders | HR, Uniformity and Timelines",
      description:
        "How companies and institutions plan bulk Rakhi for staff and community gifting: decision owners, uniform designs, branding surfaces and delivery windows.",
      path: "/corporate-rakhi",
      keywords: "corporate rakhi, company rakhi gifting, HR rakhi orders",
    },
    h1: "Corporate Rakhi for workplaces and institutions",
    intro:
      "Corporate and institutional Rakhi programmes succeed when one owner translates culture goals into a short design list, a branding decision and a dated delivery window. This page is for that planning conversation, not a list of past clients.",
    blocks: corporateBlocks,
    faqs: corporateFaqs,
    related: [
      quote,
      { href: "/corporate-rakhi-orders", label: "Corporate buyer guide" },
      { href: "/custom-rakhi", label: "Custom options" },
      { href: "/raksha-bandhan", label: "Festival calendar" },
    ],
  },
  {
    slug: "rakhi-catalog",
    seo: {
      title: "Rakhi Catalogue | Shared After Wholesale Enquiry",
      description:
        "Seasonal Rakhi catalogues or assortment lists are shared after a wholesale enquiry when available. No placeholder PDF. Request a quote to start.",
      path: "/rakhi-catalog",
      keywords: "rakhi catalogue, wholesale rakhi catalog, rakhi assortment list",
    },
    h1: "Rakhi catalogue — available after enquiry",
    intro:
      "If a seasonal catalogue or assortment image set exists, it is shared after you send a wholesale brief. This page does not host a dummy PDF or treat an old file as live stock. The call to action is a quote request.",
    blocks: catalogBlocks,
    faqs: catalogFaqs,
    related: [
      quote,
      { href: "/rakhi-types", label: "Name your types first" },
      { href: "/how-to-order-wholesale-rakhi", label: "Order process" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    slug: "how-to-order-wholesale-rakhi",
    seo: {
      title: "How to Order Wholesale Rakhi | Eight-Step Process",
      description:
        "Eight conceptual steps from requirement to dispatch for wholesale Rakhi from India. Mix, packing and season all affect timing — timelines vary.",
      path: "/how-to-order-wholesale-rakhi",
      keywords: "how to order wholesale rakhi, bulk rakhi process, rakhi quote steps",
    },
    h1: "How to order wholesale Rakhi",
    intro:
      "A typical path runs from a written requirement through category choice, catalogue or quote follow-up, confirmation, preparation, visual QC, packing and dispatch. Use the steps as a map. Timelines vary; they are not guaranteed on this page.",
    blocks: orderBlocks,
    faqs: orderFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "What wholesale means" },
      { href: "/rakhi-catalog", label: "Catalogue policy" },
      { href: "/rakhi-shipping-export", label: "Dispatch modes" },
    ],
  },
  {
    slug: "international-rakhi-wholesale",
    seo: {
      title: "International Rakhi Wholesale | Destination Hub",
      description:
        "Plan wholesale Rakhi from India for overseas buyers. This hub introduces destination-aware sourcing and points to country guides for local context.",
      path: "/international-rakhi-wholesale",
      keywords: "international rakhi wholesale, import rakhi, rakhi for overseas buyers",
    },
    h1: "International wholesale Rakhi from India",
    intro:
      "Overseas demand for Rakhi is shaped by diaspora retail, community calendars and inbound freight time. This hub sets the planning rules and points conceptually to country pages for the USA, UK, Canada, Australia, UAE, New Zealand, Singapore and Europe.",
    blocks: internationalBlocks,
    faqs: internationalFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi-usa", label: "USA sourcing notes" },
      { href: "/wholesale-rakhi-uk", label: "UK sourcing notes" },
      { href: "/rakhi-shipping-export", label: "Shipping and export" },
      { href: "/wholesale-rakhi-for-importers", label: "Importer buyer guide" },
    ],
  },
  {
    slug: "rakhi-shipping-export",
    seo: {
      title: "Rakhi Shipping and Export | Modes, Packing, Peak Season",
      description:
        "Courier, air and sea as conceptual choices for Rakhi from India, plus packing and peak-season notes. No shipping rates or transit guarantees.",
      path: "/rakhi-shipping-export",
      keywords: "rakhi shipping, rakhi export packing, peak season rakhi freight",
    },
    h1: "Shipping and export considerations for Rakhi",
    intro:
      "Mode, packing and festival peak interact. Discuss courier, air or sea as families of choice, match inner and outer packing to the journey, and confirm earlier than feels comfortable. Rates are not published here.",
    blocks: shippingBlocks,
    faqs: shippingFaqs,
    related: [
      quote,
      { href: "/rakhi-exporter", label: "Export documents" },
      { href: "/rakhi-packaging", label: "Inner and outer packing" },
      { href: "/international-rakhi-wholesale", label: "International hub" },
    ],
  },
  {
    slug: "rakhi-packaging",
    seo: {
      title: "Rakhi Packaging | Inner, Outer, Moisture and Labels",
      description:
        "How wholesale Rakhi packing splits inner protection and outer cartons, why moisture matters in transit, and what labelling trade buyers usually need.",
      path: "/rakhi-packaging",
      keywords: "rakhi packaging, wholesale rakhi packing, export rakhi cartons",
    },
    h1: "Rakhi packaging for wholesale and export-minded supply",
    intro:
      "Good packing protects thread, stones and adhesives, then tells the warehouse what is inside. Inner format, outer carton, moisture and labels should be written into the brief — especially when the journey is international.",
    blocks: packagingBlocks,
    faqs: packagingFaqs,
    related: [
      quote,
      { href: "/rakhi-quality", label: "Quality checks" },
      { href: "/private-label-rakhi", label: "Branded packing" },
      { href: "/rakhi-shipping-export", label: "Modes and peak season" },
    ],
  },
  {
    slug: "rakhi-quality",
    seo: {
      title: "Rakhi Quality Checks | Thread, Stones and Colour Bleed",
      description:
        "Visual QC points for wholesale Rakhi: thread finishing, stone security, pair matching and colour bleed. Practical checks, not invented lab certificates.",
      path: "/rakhi-quality",
      keywords: "rakhi quality, wholesale rakhi QC, rakhi colour bleed",
    },
    h1: "Rakhi quality — visual checks for wholesale buyers",
    intro:
      "Trade quality in this category is mostly visual: finishing, attachment, matching and colour behaviour in humidity. Write reject points into the brief so bulk packing is not judged only by a festive photograph.",
    blocks: qualityBlocks,
    faqs: qualityFaqs,
    related: [
      quote,
      { href: "/rakhi-packaging", label: "Packaging" },
      { href: "/bulk-rakhi", label: "Bulk planning" },
      { href: "/rakhi-types", label: "Types and materials caveats" },
    ],
  },
  {
    slug: "rakhi-types",
    seo: {
      title: "Rakhi Types | How to Choose a Wholesale Mix",
      description:
        "A hub to Rakhi types for wholesale buyers: traditional, designer, kids, pairs and more. Choose a mix from your channel, then brief by family name.",
      path: "/rakhi-types",
      keywords: "rakhi types, wholesale rakhi categories, designer traditional kids rakhi",
    },
    h1: "Rakhi types for wholesale assortment planning",
    intro:
      "Type names are how buyers and counterparts stay specific. This hub explains how to choose a mix for grocery, gift, online, corporate and community channels, then points you to deeper type pages and a quote request.",
    blocks: typesBlocks,
    faqs: typesFaqs,
    related: [
      quote,
      { href: "/wholesale-rakhi", label: "Wholesale guide" },
      { href: "/raksha-bandhan", label: "Festival context" },
      { href: "/rakhi-catalog", label: "Catalogue after enquiry" },
    ],
  },
  {
    slug: "raksha-bandhan",
    seo: {
      title: "Raksha Bandhan | Meaning, Date and Wholesale Timing",
      description:
        "Raksha Bandhan meaning in plain language, why the date typically falls in August, and the 2026 date commonly cited around 28 August — for planning, not doctrine.",
      path: "/raksha-bandhan",
      keywords: "raksha bandhan, raksha bandhan 2026, rakhi festival date",
    },
    h1: "Raksha Bandhan — festival context for buyers",
    intro:
      "Raksha Bandhan is widely observed as a celebration of the brother–sister bond, typically in August on the lunar calendar. For 2026, 28 August is commonly cited. This page explains meaning and timing for wholesale calendars without speaking as a religious authority.",
    blocks: festivalBlocks,
    faqs: festivalFaqs,
    related: [
      quote,
      { href: "/rakhi-history", label: "History and tradition" },
      { href: "/rakhi-types", label: "What to stock" },
      { href: "/corporate-rakhi", label: "Workplace programmes" },
    ],
  },
  {
    slug: "rakhi-history",
    seo: {
      title: "Rakhi History and Tradition | Cultural Overview for Buyers",
      description:
        "Historical and cultural overview of Rakhi for trade readers. Legendary origin stories are presented as tradition, not proven fact or company lineage.",
      path: "/rakhi-history",
      keywords: "rakhi history, rakhi origin story, raksha bandhan tradition",
    },
    h1: "Rakhi history and cultural background",
    intro:
      "Rakhi as a traded festive article grew from older thread-tying customs into the decorated bands shops sell today. Legendary court and epic stories are part of how people talk about the festival. They are tradition, not proven commercial history, and not a factory origin story for this site.",
    blocks: historyBlocks,
    faqs: historyFaqs,
    related: [
      quote,
      { href: "/raksha-bandhan", label: "Festival meaning and date" },
      { href: "/about-us", label: "About this site" },
      { href: "/rakhi-types", label: "Modern type mix" },
    ],
  },
  {
    slug: "rakhi-faq",
    seo: {
      title: "Wholesale Rakhi FAQ | Enquiry, Mix, Export and Timing",
      description:
        "Substantial FAQs on wholesale Rakhi from India: how to enquire, why prices are not listed, catalogue access, quality, types, shipping and the 2026 festival date.",
      path: "/rakhi-faq",
      keywords: "wholesale rakhi faq, bulk rakhi questions, rakhi import questions",
    },
    h1: "Wholesale Rakhi frequently asked questions",
    intro:
      "Ten practical questions wholesale buyers ask before they send a brief. Use them to set expectations on prices, catalogues, manufacturing claims and timing, then continue to the topic pages or the quote form.",
    blocks: faqPageBlocks,
    faqs: rakhiFaqItems,
    related: [
      quote,
      { href: "/how-to-order-wholesale-rakhi", label: "Order steps" },
      { href: "/contact", label: "Contact" },
      { href: "/international-rakhi-wholesale", label: "International buyers" },
    ],
  },
  {
    slug: "contact",
    seo: {
      title: "Contact Wholesale Rakhi | Enquire for Bulk Supply",
      description:
        "Contact Wholesale Rakhi through the wholesale quote form. Email and phone are shown only if the business publishes them. The form is the primary enquiry path.",
      path: "/contact",
      keywords: "contact wholesale rakhi, rakhi wholesale enquiry, bulk rakhi contact",
    },
    h1: "Contact Wholesale Rakhi",
    intro:
      "The reliable way to enquire is the wholesale quote form. Public email and phone are displayed only when the business has provided them. Until then, treat the form as the primary — and complete — contact path.",
    blocks: contactBlocks,
    faqs: contactFaqs,
    related: [
      quote,
      { href: "/how-to-order-wholesale-rakhi", label: "How ordering works" },
      { href: "/about-us", label: "About Wholesale Rakhi" },
      { href: "/rakhi-faq", label: "FAQ" },
    ],
  },
];

export function getCorePage(slug: string): ContentPage | undefined {
  return corePages.find((page) => page.slug === slug);
}
