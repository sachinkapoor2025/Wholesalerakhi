# Wholesale Rakhi (RB.us) — V1 Implementation Plan

## Goal

Build an SEO-first, production-ready Next.js website that positions **Wholesale Rakhi** as an authority for bulk/wholesale Rakhi sourcing from India. V1 generates wholesale leads, educates international buyers, and supports seasonal campaign banners that can link to external shopping sites. No cart, checkout, or payments.

## Architecture

| Layer | Choice | Why |
| --- | --- | --- |
| Frontend | Next.js 15 App Router, TypeScript, Tailwind CSS | SSG/SSR for SEO; Amplify Hosting compatible |
| Content | Local TypeScript content modules | Fast, crawlable pages; no DynamoDB for articles in V1 |
| Dynamic data | DynamoDB + Lambda | Leads, seasonal banners, campaigns |
| Admin auth | Amazon Cognito JWT | No hard-coded passwords |
| Hosting | AWS Amplify Hosting | Git-based Next.js SSR/SSG |
| CI | GitHub Actions | Lint, typecheck, test, build |

## Content model

Business copy lives in `src/content/` and `src/data/`. UI components do not hard-code claims.

Unverified claims (years in business, manufacturer/exporter ownership, contact details, catalogue URL, testimonials) stay behind feature flags and are omitted from production until the owner confirms them.

## Page strategy

- Core wholesale/service pages: unique intent pages, not keyword clones.
- Rakhi type hub + 16 type pages: educational + wholesale guidance.
- International hub + 8 country pages: unique sourcing context, not doorway pages.
- Buyer-persona pages: retailer, distributor, importer, reseller, corporate.
- Knowledge Centre: 25 original articles across 8 categories.
- RFQ + contact: one lead form, stored in DynamoDB.

## Conversion

Primary: Request Wholesale Quote  
Seasonal: campaign banner → admin-configured external shop URL  
No prices, MOQ, or invented business facts.

## Future ecommerce

Category/product TypeScript models exist as forward-compatible types only. Checkout is not implemented. RB.us remains the authority/lead-generation property.
