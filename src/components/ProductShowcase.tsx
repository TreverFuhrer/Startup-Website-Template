"use client"
import appScreen from "../assets/images/app-screen.png";
import Image from 'next/image';
import Link from "next/link";
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { AppScreenshotScrollEffect } from "./product/AppScreenshotScrollEffect";
import { products } from "@/content";
type ProductShowcaseProps = {
  id?: string;
};

export const ProductShowcase = ({ id = "app" }: ProductShowcaseProps) => {
  const featuredProduct = products[0];
  const featuredScreenshot = featuredProduct?.page.screenshots.items[0];
  const ctaLabel = featuredProduct?.primaryCta.label ?? "View product";
  const ctaHref = featuredProduct?.primaryCta.href ?? (featuredProduct ? `/product/${featuredProduct.slug}` : "#");

  return (
    <MotionSection id={id} variant="staggerChildren" className="section-block bg-(--ink) text-white bg-linear-to-b from-(--ink) to-[#0b3a3a]">
      <Container>
        {/* App section headline. */}
        <MotionItem>
          <h2 className="text-center text-5xl font-bold tracking-tighter">{featuredProduct?.name ?? "Title"}</h2>
        </MotionItem>
        <MotionItem className='max-w-xl mx-auto'>
          <p className="text-xl text-white/70 text-center mt-5 ">
            {featuredProduct?.tagline ?? "App section body copy goes here."}
          </p>
        </MotionItem>
        <MotionItem className="flex justify-center">
          <Link
            href={ctaHref}
            className="mt-6 inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 font-medium text-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--brand-1)"
          >
            {ctaLabel}
          </Link>
        </MotionItem>
        <AppScreenshotScrollEffect className="flex justify-center">
          {/* Swap this image with a product screenshot. */}
          <Image
            src={featuredScreenshot?.src ?? appScreen}
            alt={featuredScreenshot?.alt ?? "App screen"}
            className="mt-14"
            sizes="(min-width: 1024px) 720px, (min-width: 640px) 80vw, 92vw"
          />
        </AppScreenshotScrollEffect>

      </Container>

    </MotionSection>
  )
};
