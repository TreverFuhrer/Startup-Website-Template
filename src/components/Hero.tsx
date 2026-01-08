"use client"
import CursorImage from '../assets/images/cursor.png'
import MessageImage from '../assets/images/message.png'
import Image from 'next/image';
import {motion} from 'framer-motion'
import { AnimatedGradientTextDemo } from './animatedtext';

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-clip bg-(--ink) bg-[linear-gradient(to_bottom,#06070b,#0b1f2a_40%,#0b3a3a_70%,#115e59_88%)] py-18 text-white sm:py-24"
    >
      <div className="absolute left-1/2 h-93.75 w-187.5 -translate-x-1/2 rounded-[100%] border border-(--brand-1) bg-(--ink) bg-[radial-gradient(closest-side,rgba(20,184,166,0.2),transparent)] sm:h-192 sm:w-384 lg:h-200 lg:w-600 top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
    <div className="container relative">
      <div className="flex items-center justify-center -mt-10">
        <AnimatedGradientTextDemo/>
      </div>
      <div className="flex justify-center mt-8 ">
      <div className="inline-flex relative">
      {/* Big headline lives here. */}
      <h1 className='text-6xl sm:text-8xl font-bold tracking-tight text-center inline-flex'>Title <br/> Subtitle</h1>
      <motion.div className='absolute right-119.5 top-27 hidden sm:inline'
      drag
      dragSnapToOrigin

      >
      <Image src={CursorImage} alt="" height={200} width={200} className='max-w-none' draggable="false" aria-hidden="true" />
      </motion.div>
      <motion.div className='absolute left-124.5 top-14 hidden sm:inline'
      drag
      dragSnapToOrigin
      >
      <Image src={MessageImage} alt=""  height={200} width={200} className='max-w-none' draggable="false" aria-hidden="true" />
      </motion.div>
      </div>
      </div>
      <div className="flex justify-center">
      {/* Short pitch goes here. */}
      <p className='text-lg sm:text-xl text-center mt-8 max-w-xl text-white/80'>Body copy that explains the core value in one punchy paragraph.</p>
      </div>
      <div className="flex justify-center mt-8">
      <a href="#cta" className='bg-white text-black py-3 px-5 rounded-lg font-medium'>Primary CTA</a>
      </div>


    </div>
    

    </section>
  )
};
