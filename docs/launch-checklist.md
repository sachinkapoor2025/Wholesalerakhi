# Launch checklist — Wholesale Rakhi

## Owner confirmations (do not publish until confirmed)

- [ ] Years of experience (27+ is currently unpublished)
- [ ] Manufacturer / exporter / factory ownership claims
- [ ] Design counts, countries served, buyer counts
- [ ] Contact email, phone, WhatsApp, business location
- [ ] Catalogue PDF/URL
- [ ] Social profile URLs
- [ ] Seasonal shop URL for Raksha Bandhan campaigns

## Technical

- [ ] `NEXT_PUBLIC_SITE_URL=https://rb.us`
- [ ] Amplify connected to GitHub `main`
- [ ] `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` pass in CI
- [ ] DynamoDB tables created (`WholesaleLeads`, `SeasonalBanners`)
- [ ] Amplify IAM role can access DynamoDB (and SES if used)
- [ ] Cognito user pool created; first admin user invited
- [ ] `/admin` requires login and is noindex
- [ ] `/robots.txt` disallows `/admin` and `/api`
- [ ] `/sitemap.xml` lists public pages only
- [ ] Quote form validation, honeypot, rate limit and error state work
- [ ] Empty banner state hides the homepage campaign block
- [ ] Expired banners disappear
- [ ] External banner links use `target="_blank"` and `rel="noopener noreferrer"`
- [ ] GA4 / GTM / Search Console IDs added only when issued

## Content / UX

- [ ] No placeholder copy in production
- [ ] No prices, MOQ, testimonials or fake certifications
- [ ] Unique title, description, canonical and H1 on every public page
- [ ] Mobile, tablet and desktop layout review
- [ ] Keyboard focus states on nav, buttons and form
- [ ] 404 and error pages render without stack traces

## After DNS

- [ ] Point RB.us to Amplify
- [ ] Submit sitemap in Search Console
- [ ] Spot-check a wholesale page, a type page, a country page, an article and the quote form
- [ ] Catalogue products added only after owner confirmation (no fake SKUs)
- [ ] Seasonal `/shop` URLs configured for live campaigns only
