import Image from "next/image";
import type { Product } from "@/content";
import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

type ProductSectionsProps = {
  product: Product;
};

export const ProductSections = ({ product }: ProductSectionsProps) => {
  return (
    <>
      {product.sections.map((section, index) => (
        <Section key={`${product.slug}-${index}`} className="section-block bg-(--ink) text-white">
          <Container className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{section.title}</h2>
              <p className="mt-5 text-lg text-white/70">{section.description}</p>
              {section.bullets && section.bullets.length > 0 ? (
                <ul className="mt-6 space-y-3 text-white/70">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-(--brand-1)" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            {section.image ? (
              <div className="rounded-2xl border border-white/10 bg-(--surface) p-5 shadow shadow-black/40">
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  className="w-full"
                  sizes="(min-width: 1024px) 520px, 92vw"
                />
              </div>
            ) : null}
          </Container>
        </Section>
      ))}
    </>
  );
};
