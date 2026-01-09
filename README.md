# Startup Landing Template

A plug-and-play SaaS landing page with a data-driven homepage and product pages. Edit `src/content/*` and deploy.

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Edit content (no component edits)

- `src/content/site.ts` - brand, nav, socials, navbar config
- `src/content/company.ts` - homepage section order + hero/CTA copy
- `src/content/products.ts` - products + product page blocks
- `src/content/pricing.ts` - pricing plans
- `src/content/faq.ts` - homepage FAQs
- `src/content/logos.ts` - logo list for the marquee
- `public/og/default.png` - default social image (set per product via `ogImage`)

Content is validated at build time. If something is missing, the build/dev server will throw a clear error.

## Add a product

1. Add images to `src/assets/images` and (optionally) `public/og/<slug>.png`.
2. Add a product entry in `src/content/products.ts` with a unique `slug` and `ogImage`.
3. Fill in `page` blocks and set `page.order` to the blocks you want to render.
4. (Optional) Add a nav link in `src/content/site.ts` to `/product/<slug>`.

The hero primary CTA uses the first product in the array, so reorder if needed.

## Deploy to Vercel

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to your production domain.
4. Deploy (build command: `npm run build`).

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run typecheck`
- `npm run format`

## License

MIT License
