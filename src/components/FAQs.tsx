"use client"
import { useId, useState } from "react";
import { PlusIcon, MinusIcon } from "./icons";
import {motion , AnimatePresence} from 'framer-motion';
import { Container } from "./layout/Container";
import { MotionItem } from "./motion/MotionItem";
import { MotionSection } from "./motion/MotionSection";
// Drop in your most common questions here.
const items = [
  {
    question: "Question 1",
    answer:
      "Answer 1. Keep it short and helpful.",
  },
  {
    question: "Question 2",
    answer:
      "Answer 2. Add a few details to build trust.",
  },
  {
    question: "Question 3",
    answer:
      "Answer 3. Mention anything people always ask you.",
  },
  {
    question: "Question 4",
    answer:
      "Answer 4. Keep this clear and reassuring.",
  },
];

const AccordionItem = ({question, answer}:{question:string, answer: string}) => {
  const[isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const panelId = `${buttonId}-panel`;

  return(
   
    <div className="border-b border-white/30">
    <button
      type="button"
      className="flex w-full items-center py-7 text-left"
      onClick={() => setIsOpen(!isOpen)}
      aria-expanded={isOpen}
      aria-controls={panelId}
      id={buttonId}
    >
      <span className="flex-1 text-lg font-bold">{question}</span>
      {isOpen ? <MinusIcon aria-hidden="true" /> :<PlusIcon aria-hidden="true" />}
      
      </button>
      <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div 
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        initial={{opacity: 0, height: 0, marginTop: 0}}
        animate={{opacity: 1, height: "auto" , marginTop:'16px'}}
        exit={{opacity: 0, height: 0, marginTop: 0}}
          className="pb-7 mt-4 text-white/70"
          >{answer}</motion.div>

      )}
      </AnimatePresence>
    
  </div>
  
    
  )
}

export const FAQs = () => {
  return (
    <MotionSection id="faqs" variant="staggerChildren" className="section-block bg-(--ink) text-white bg-linear-to-b from-[#0b3a3a] to-(--ink) ">
      <Container>
        {/* FAQ headline goes here. */}
        <MotionItem>
          <h2 className="text-5xl sm:text-6xl sm:w-162 mx-auto text-center text-white tracking-tighter">
            FAQ
          </h2>
        </MotionItem>
        <MotionItem className="mt-12 max-w-162 mx-auto">
          {items.map(({question, answer}) => (
              <AccordionItem question={question} answer={answer} key={question}/>
          ))}
        </MotionItem>
      </Container>
    </MotionSection>
  )
};
