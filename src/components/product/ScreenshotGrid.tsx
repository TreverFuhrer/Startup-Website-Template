import Image from "next/image";
import type { ProductPageScreenshots } from "@/content";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";

type ScreenshotGridProps = {
  block: ProductPageScreenshots;
};

export const ScreenshotGrid = ({ block }: ScreenshotGridProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{block.title}</h2>
          <p className="mt-5 text-lg text-white/70">{block.description}</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item, index) => (
            <div key={`${item.alt}-${index}`} className="rounded-2xl border border-white/10 bg-(--surface) p-5 shadow shadow-black/40">
              <Image src={item.src} alt={item.alt} className="w-full" sizes="(min-width: 1024px) 320px, 80vw" />
              {item.caption ? (
                <p className="mt-4 text-sm font-medium text-white/70">{item.caption}</p>
              ) : null}
            </div>
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
