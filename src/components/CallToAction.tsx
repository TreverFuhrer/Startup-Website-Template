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
    <section id="cta" className="bg-(--ink) text-white py-[72px] sm:py-24" ref={containerRef}>
      
      <div className="container max-w-xl relative">
      <motion.div style={{translateY}}>
      {/* Decorative images - swap or remove if you want a cleaner CTA. */}
      <Image src={HelixImage} alt="" className="absolute top-6 left-[calc(100%+36px)]" aria-hidden="true" />
      </motion.div>
      <motion.div style={{translateY}}>
       
      <Image src={EmojiImage} alt="" className="absolute -top-[120px] right-[calc(100%+30px)]" aria-hidden="true" />
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
