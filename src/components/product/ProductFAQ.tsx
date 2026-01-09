"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import type { ProductPageFaq } from "@/content";
import { MinusIcon, PlusIcon } from "../icons";
import { Container } from "../layout/Container";
import { MotionSection } from "../motion/MotionSection";

type ProductFAQProps = {
  block: ProductPageFaq;
};

type AccordionItemProps = {
  question: string;
  answer: string;
};

const AccordionItem = ({ question, answer }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const buttonId = useId();
  const panelId = `${buttonId}-panel`;

  return (
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
        {isOpen ? <MinusIcon aria-hidden="true" /> : <PlusIcon aria-hidden="true" />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            className="pb-7 mt-4 text-white/70"
          >
            {answer}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export const ProductFAQ = ({ block }: ProductFAQProps) => {
  return (
    <MotionSection id={block.id} variant="fadeUp" className="section-block bg-(--ink) text-white">
      <Container>
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{block.title}</h2>
        </div>
        <div className="mt-12 max-w-3xl">
          {block.items.map((item) => (
            <AccordionItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </Container>
    </MotionSection>
  );
};
