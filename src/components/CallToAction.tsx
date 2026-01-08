"use client"
import HelixImage from '../assets/images/helix2.png'
import EmojiImage from '../assets/images/emojistar.png'
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  })

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  
  return (
    <section id="cta" className="section-block bg-(--ink) text-white py-18 sm:py-24" ref={containerRef}>
      
      <div className="container max-w-xl relative text-center">
      <motion.div style={{translateY}}>
      {/* Decorative images - swap or remove if you want a cleaner CTA. */}
      <Image
        src={HelixImage}
        alt=""
        className="pointer-events-none absolute top-6 right-0 hidden md:block w-28 md:w-32 lg:w-40"
        aria-hidden="true"
      />
      </motion.div>
      <motion.div style={{translateY}}>
       
      <Image
        src={EmojiImage}
        alt=""
        className="pointer-events-none absolute -top-16 left-0 hidden md:block w-24 md:w-28 lg:w-36"
        aria-hidden="true"
      />
      </motion.div>
       

        {/* CTA headline + supporting copy. */}
        <h2 className="font-bold text-5xl sm:text-6xl tracking-tighter">Subscription</h2>
        <p className="text-xl text-white/70  mt-5">Body copy goes here.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            aria-label="Email address"
            placeholder="email@company.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
          />
          <button type="submit" className="bg-white text-black h-12 rounded-lg px-5">Primary CTA</button>
        </form>
      </div>


    </section>
  )
};
