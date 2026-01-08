# Startup Landing Template

A modern startup landing page template with a main hero, an about section, an app showcase, pricing, FAQs, and a conversion CTA. Built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

---

## Highlights
- App Router layout with reusable sections
- Tailwind CSS + CSS variables for fast theme swaps
- Framer Motion for smooth interactions
- Fully responsive layout
- MIT licensed for personal and commercial use

---

## Tech Stack
- Framework: Next.js
- UI: React
- Language: TypeScript
- Styling: Tailwind CSS
- Animations: Framer Motion

---

## Getting Started

### Prerequisites
- Node.js (v18 or later)
- npm, yarn, or pnpm

### Installation
```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```

### Development
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### Build
```bash
npm run build
npm run start
```

---

## Customization Guide (fast)

Search for the placeholder labels like `Title`, `Subtitle`, and `Primary CTA` to replace copy quickly.

### Update section copy
- `src/components/Hero.tsx`: main headline, subhead, hero CTA
- `src/components/Features.tsx`: about section headline + body
- `src/components/ProductShowcase.tsx`: app section headline + body + screenshot
- `src/components/FAQs.tsx`: FAQ questions and answers
- `src/components/pricing.tsx`: pricing card titles, prices, and features
- `src/components/CallToAction.tsx`: final CTA text and email placeholder
- `src/components/Footer.tsx`: company name + social links

### Update visuals
- `src/app/globals.css`: edit CSS variables under `:root` for a new theme
- `src/components/bentogrid.tsx`: change logos and chart data
- `src/assets/images/`: swap any local images

### Section order
Edit the layout in `src/app/page.tsx`.

---

## License
MIT License

Based on an MIT-licensed template originally created by Mudunuri Bhaskara Karthikeya Varma.
Modified and maintained by Trever Fuhrer.
