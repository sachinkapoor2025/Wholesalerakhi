# Product versions — Wholesale Rakhi (RB.us)

RB.us stays the **authority + wholesale lead** property. Consumer checkout is a future separate portal, not a later “mode” of this site.

## V1 — Authority and leads (shipped)

- SEO pages, Knowledge Centre, Rakhi types, country and buyer guides
- Wholesale quote form → DynamoDB leads
- Seasonal banners with dated visibility
- Cognito-protected admin for leads/banners
- No cart, checkout, prices, fake products or invented business facts

## V2 — Wholesale catalogue (shipped)

- `/catalog` for owner-published SKUs only (empty until admin adds real designs)
- Product pages with **price on request**
- Quote list (RFQ basket) that attaches SKUs to the wholesale enquiry
- Admin product CRUD
- No public prices, inventory counts or checkout

## V3 — Campaign and portal layer (shipped)

- `/shop` lists **live** external shopping campaigns only
- `/rakhi-gifts` bulk gift-programme guide (not a consumer gift shop)
- Campaign banners already power homepage + shop CTAs
- Admin settings for confirmed catalogue/contact URLs
- `/llms.txt` for assistants

## V4+ — Not on RB.us

These remain separate future properties:

- Consumer Rakhi shop with cart and payment
- Dedicated international shopfronts
- Corporate gift storefront
- Last-mile Rakhi delivery marketplace

Do not fold those checkouts into rb.us.
