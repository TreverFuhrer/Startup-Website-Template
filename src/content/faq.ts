import type { FaqItem } from "./types";

type FaqSection = {
  title: string;
  items: FaqItem[];
};

export const faqSection: FaqSection = {
  title: "Company FAQ",
  items: [
    {
      question: "Question 1",
      answer: "Answer 1. Keep it short and helpful.",
    },
    {
      question: "Question 2",
      answer: "Answer 2. Add a few details to build trust.",
    },
    {
      question: "Question 3",
      answer: "Answer 3. Mention anything people always ask you.",
    },
    {
      question: "Question 4",
      answer: "Answer 4. Keep this clear and reassuring.",
    },
  ],
};

export default faqSection;
