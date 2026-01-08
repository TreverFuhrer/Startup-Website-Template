# Architecture

## Repo snapshot (top level)
- docs/
- src/
- public/ (empty)
- package.json
- next.config.mjs
- postcss.config.mjs
- tailwind.config.js
- tsconfig.json
- eslint.config.mjs

## Router type
- Next.js App Router (entry at `src/app/page.tsx`, layout at `src/app/layout.tsx`).

## Tailwind + PostCSS
- Tailwind config: `tailwind.config.js`
- PostCSS config: `postcss.config.mjs` (uses `@tailwindcss/postcss`)

## Homepage sections (source of truth)
All homepage sections are composed in `src/app/page.tsx` and are hardcoded React components:
- Banner: `src/components/Banner.tsx`
- Navbar: `src/components/Navbar.tsx`
- Hero: `src/components/Hero.tsx`
- Logo ticker: `src/components/LogoTicker.tsx`
- About/Features: `src/components/Features.tsx` (uses `src/components/bentogrid.tsx`)
- App showcase: `src/components/ProductShowcase.tsx`
- FAQs: `src/components/FAQs.tsx`
- Pricing: `src/components/Pricingdemo.tsx` + `src/components/pricing.tsx`
- CTA/Subscription: `src/components/CallToAction.tsx`
- Footer: `src/components/Footer.tsx`

## Framer Motion usage
- `src/components/Hero.tsx`
- `src/components/bentogrid.tsx`
- `src/components/ProductShowcase.tsx`
- `src/components/FAQs.tsx`
- `src/components/CallToAction.tsx`

## Assets
- Local assets live in `src/assets/`
  - Icons: `src/assets/icons/`
  - Images: `src/assets/images/`
- `public/` exists but is currently empty.

## SEO setup
- Metadata defined in `src/app/layout.tsx` (`title`, `description`).
- Favicon: `src/app/favicon.ico`
- No `next/head` usage (App Router uses layout metadata).

## Routes
- `/` from `src/app/page.tsx`
- No other routes defined.

## Content sources
- All content is currently hardcoded in components (no CMS/config layer).

## Risks & unknowns
- No Open Graph/Twitter image metadata set.
- No sitemap or robots.txt configured.
- No formatter script configured (formatting tool not present in deps).
