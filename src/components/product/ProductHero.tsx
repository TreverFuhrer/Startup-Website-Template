import Image from "next/image";
import type { Product } from "@/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

type ProductHeroProps = {
  product: Product;
};

export const ProductHero = ({ product }: ProductHeroProps) => {
  const primaryShot = product.screenshots[0];

  return (
    <Section className="section-block bg-(--ink) text-white">
      <Container className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Product</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{product.name}</h1>
          <p className="mt-5 text-xl text-white/70">{product.tagline}</p>
          <a
            href={product.primaryCta.href}
            className="mt-8 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black"
          >
            {product.primaryCta.label}
          </a>
        </div>
        {primaryShot ? (
          <div className="rounded-2xl border border-white/10 bg-(--surface) p-5 shadow shadow-black/40">
            <Image
              src={primaryShot.src}
              alt={primaryShot.alt}
              className="w-full"
              sizes="(min-width: 1024px) 520px, 92vw"
            />
          </div>
        ) : null}
      </Container>
    </Section>
  );
};
