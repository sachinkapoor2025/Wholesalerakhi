# AWS architecture — Wholesale Rakhi

## Overview

```
Browser (RB.us)
  → Amplify Hosting / CloudFront
      → Next.js App Router (SSG/SSR pages)
      → Next.js Route Handlers
          → DynamoDB (WholesaleLeads, SeasonalBanners)
          → optional Amazon SES
  → optional API Gateway + Lambda (same tables)
Admin
  → Cognito User Pool
  → httpOnly JWT cookie
  → protected /admin routes
```

## Why this split

Informational pages are local content (TypeScript modules). They stay fast, cacheable and independent of DynamoDB. DynamoDB is used only for operational data: leads, banners and campaign settings.

Ecommerce checkout is intentionally absent. Product/category TypeScript types exist for a later portal, not for RB.us cart flows.

## Services

| Service | Role |
| --- | --- |
| Next.js on Amplify Hosting | SEO pages, admin UI, BFF APIs |
| CloudFront | CDN in front of Amplify |
| DynamoDB | `WholesaleLeads`, `SeasonalBanners` (on-demand) |
| Lambda + API Gateway | Optional public lead POST and banner GET |
| S3 | Future catalogue PDFs and campaign images |
| SES | Optional new-lead notification |
| Cognito | Admin authentication |
| GitHub Actions | CI (lint, typecheck, test, build) |

## Data flow — wholesale enquiry

1. Buyer submits `/request-wholesale-quote`.
2. Browser POSTs `/api/leads` (no AWS keys in the client).
3. Server validates with Zod, honeypot, origin check and per-IP rate limit.
4. Item is written to `WholesaleLeads` with `status = NEW`.
5. If SES env vars are set, ops receives an email.

## Data flow — seasonal banner

1. Admin saves a banner with dates, CTA and external URL.
2. Homepage fetches live banners server-side.
3. A banner is shown only when `isActive` and `startDate ≤ now ≤ endDate`.
4. Click tracking uses `seasonal_banner_clicked` / `external_shop_clicked`.

## IAM

Amplify compute role needs:

- `dynamodb:PutItem`, `GetItem`, `UpdateItem`, `Scan`, `Query` on the two tables
- `ses:SendEmail` if notifications are enabled

Never embed access keys in frontend code or `NEXT_PUBLIC_*` variables.

## SAM deploy (optional)

```bash
cd amplify/backend
sam build
sam deploy --guided
```

Then copy API URL, user pool id and client id into Amplify environment variables.
