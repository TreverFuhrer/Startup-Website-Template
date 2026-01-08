"use client"
import appScreen from "../assets/images/app-screen.png";
import Image from 'next/image';
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
import { AppScreenshotScrollEffect } from "./product/AppScreenshotScrollEffect";
export const ProductShowcase = () => {
  return (
    <MotionSection id="app" variant="staggerChildren" className="section-block bg-(--ink) text-white bg-linear-to-b from-(--ink) to-[#0b3a3a]">
      <Container>
        {/* App section headline. */}
        <MotionItem>
          <h2 className="text-center text-5xl font-bold tracking-tighter">Title</h2>
        </MotionItem>
        <MotionItem className='max-w-xl mx-auto'>
          <p className="text-xl text-white/70 text-center mt-5 ">App section body copy goes here.</p>
        </MotionItem>
        <AppScreenshotScrollEffect className="flex justify-center">
          {/* Swap this image with a product screenshot. */}
          <Image
            src={appScreen}
            alt="App screen"
            className="mt-14"
            sizes="(min-width: 1024px) 720px, (min-width: 640px) 80vw, 92vw"
          />
        </AppScreenshotScrollEffect>

      </Container>

    </MotionSection>
  )
};
