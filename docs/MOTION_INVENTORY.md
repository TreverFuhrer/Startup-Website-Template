# Motion Inventory

Legend: A = reveal, B = scroll-linked, C = carousel/marquee/loop, D = hover/interactive

- `src/components/Hero.tsx` — Hero — A — section reveal via MotionSection/MotionItem; D — draggable decorative icons; preserve.
- `src/components/LogoTicker.tsx` — LogoTicker — A — heading reveal; preserve.
- `src/components/socialproof/LogosMarquee.tsx` — LogosMarquee — C — continuous logo marquee (duplicate list, translateX 0 to -50%); must preserve exactly; reduced motion uses static grid.
- `src/components/ProductShowcase.tsx` — ProductShowcase — A — heading/copy reveal; preserve.
- `src/components/product/AppScreenshotScrollEffect.tsx` — AppScreenshotScrollEffect — B — scroll-linked screenshot tilt + opacity (tinted/angled to flat); must preserve exactly; reduced motion uses static flat image.
- `src/components/CallToAction.tsx` — CallToAction — B — scroll-linked parallax on decorative CTA images; preserve.
- `src/components/FAQs.tsx` — FAQs — A — section reveal; D — accordion open/close with AnimatePresence; preserve.
- `src/components/Features.tsx` — Features — A — section reveal; preserve.
- `src/components/bentogrid.tsx` — BentoDemo/BentoBox1/LogoBeam/AWSIcon — C — ambient beam + shimmer loops; B — chart line draw when in view; D — hover glow card effect; preserve.
- `src/components/animatedgradienttext.tsx` — AnimatedGradientText — C — background gradient animation; D — hover shadow; preserve.
- `src/components/animatedtext.tsx` — AnimatedGradientTextDemo — C — gradient animation; D — chevron hover translate; preserve.
- `src/app/globals.css` + `tailwind.config.js` — CSS keyframes (`logo-marquee`, `gradient`) supporting marquee and gradient animations; preserve.
