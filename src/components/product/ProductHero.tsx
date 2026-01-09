import Image from "next/image";
import type { ProductPageHero } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";

type ProductHeroProps = {
  block: ProductPageHero;
};

export const ProductHero = ({ block }: ProductHeroProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">{block.eyebrow}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{block.title}</h1>
          <p className="mt-5 text-xl text-white/70">{block.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={block.primaryCta.href}
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
            >
              {block.primaryCta.label}
            </a>
            {block.secondaryCta ? (
              <a
                href={block.secondaryCta.href}
                className="text-white/70 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
              >
                {block.secondaryCta.label}
              </a>
            ) : null}
          </div>
        </div>
        {block.image ? (
          <div className="rounded-2xl border border-white/10 bg-(--surface) p-5 shadow shadow-black/40">
            <Image
              src={block.image.src}
              alt={block.image.alt}
              className="w-full"
              sizes="(min-width: 1024px) 520px, 92vw"
            />
          </div>
        ) : null}
      </Container>
    </MotionSection>
  );
};
