"use client"
import appScreen from "../assets/images/app-screen.png";
import Image from 'next/image';
import {motion , useScroll, useTransform} from 'framer-motion';
import { useRef } from "react";
export const ProductShowcase = () => {
  const appImage = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ["start end", "end end"]

  });

const rotateX = useTransform(scrollYProgress, [0, 1], [15,0]);
const opacity = useTransform(scrollYProgress, [0, 1], [.3,1]);

  return (
    <section id="app" className="section-block bg-(--ink) text-white bg-gradient-to-b from-(--ink) to-[#0b3a3a] py-[72px] sm:py-24">
      <div className="container">
        {/* App section headline. */}
        <h2 className="text-center text-5xl font-bold tracking-tighter">Title</h2>
        <div className='max-w-xl mx-auto'>
        <p className="text-xl text-white/70 text-center mt-5 ">App section body copy goes here.</p>
        </div>
        <div className="flex justify-center">
        <motion.div
        ref={appImage}
        style={{
          opacity: opacity,
          rotateX: rotateX,
          transformPerspective: "800px",

        }}
        >
        {/* Swap this image with a product screenshot. */}
        <Image
          src={appScreen}
          alt="App screen"
          className="mt-14"
          sizes="(min-width: 1024px) 720px, (min-width: 640px) 80vw, 92vw"
        />
        </motion.div>
        </div>

      </div>

    </section>
  )
};
