# Wholesale Rakhi (RB.us)

SEO-first Next.js website for **Wholesale Rakhi from India for Buyers Worldwide**.

V1–V3 are shipped on this domain. RB.us does **not** include a shopping cart or payment gateway. Seasonal banners and `/shop` can link to an external collection URL configured in admin.

See [docs/versions.md](docs/versions.md).

## Local development

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Next.js development server |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |
| `npm test` | Vitest |
| `npm run build` | Production build |

## Environment variables

See `.env.example`. Never commit secrets.

Public variables (`NEXT_PUBLIC_*`) are safe to expose. AWS keys, Cognito server IDs used for verification, SES addresses and table names stay server-side.

Leave contact, WhatsApp, GA/GTM and catalogue URL empty until the owner confirms them. Empty values are omitted from the UI.

## Content

- Core pages: `src/content/pages/core.ts`
- Rakhi types: `src/content/rakhi-types/index.ts`
- Country guides: `src/content/countries/index.ts`
- Buyer personas: `src/content/buyers/index.ts`
- Blog: `src/content/blog/`

To add a Rakhi type, append a `RakhiType` object and it will appear on `/rakhi-types`. To add an article, export a `BlogPost` from the blog modules and it will appear in the Knowledge Centre and sitemap.

Business claims (years of experience, manufacturer/exporter ownership, design counts) are gated in `src/data/site.ts` via `verifiedClaims`. Do not publish unverified numbers.

## AWS architecture

Primary runtime: **Amplify Hosting** for Next.js SSR/SSG. Route handlers write leads and banners using IAM + DynamoDB.

Optional: deploy `amplify/backend/template.yaml` with AWS SAM for API Gateway + Lambda (`lambda/leads`, `lambda/banners`), Cognito admin pool, and DynamoDB tables `WholesaleLeads` and `SeasonalBanners`.

See [docs/aws-architecture.md](docs/aws-architecture.md).

## Amplify deployment

1. Connect this GitHub repository to AWS Amplify Hosting.
2. Amplify uses `amplify.yml` (Next.js SSR, not static export).
3. Set environment variables from `.env.example`.
4. Attach an IAM role that can read/write the DynamoDB tables and send SES mail.

## GitHub Actions

`.github/workflows/ci.yml` runs lint, typecheck, tests and production build. The job fails if any step fails. Do not store AWS secrets in source.

## Admin

`/admin` is noindex and cookie-gated with Amazon Cognito JWTs. Create admin users in the Cognito user pool (admin-created only). Configure:

- `NEXT_PUBLIC_COGNITO_USER_POOL_ID`
- `NEXT_PUBLIC_COGNITO_CLIENT_ID`
- `NEXT_PUBLIC_COGNITO_REGION`
- `COGNITO_USER_POOL_ID`
- `COGNITO_REGION`

## Seasonal campaigns

Create banners in `/admin/banners`. A banner renders on the homepage only when `isActive` is true and the current date is between `startDate` and `endDate`. Multiple live banners sort by `priority`. External URLs open in a new tab.

## SEO

See [docs/seo-strategy.md](docs/seo-strategy.md). Sitemap: `/sitemap.xml`. Robots: `/robots.txt` (disallows `/admin` and `/api`).

## Launch

Follow [docs/launch-checklist.md](docs/launch-checklist.md) before pointing RB.us at production.
