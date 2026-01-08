"use client";

import { motion } from "framer-motion";
import type { ComponentPropsWithoutRef } from "react";

import { Section } from "../layout/Section";
import { fadeIn, fadeUp, scaleIn, staggerChildren } from "../../motion/variants";
import { useReducedMotionPref } from "../../motion/useReducedMotionPref";

type VariantName = "fadeUp" | "fadeIn" | "scaleIn" | "staggerChildren";

type MotionSectionProps = ComponentPropsWithoutRef<typeof Section> & {
  variant?: VariantName;
  once?: boolean;
  amount?: number;
};

const MotionSectionRoot = motion.create(Section);
const variantsByName = {
  fadeUp,
  fadeIn,
  scaleIn,
  staggerChildren,
};

export const MotionSection = ({
  variant = "fadeUp",
  once = true,
  amount = 0.2,
  ...props
}: MotionSectionProps) => {
  const reducedMotion = useReducedMotionPref();

  return (
    <MotionSectionRoot
      variants={variantsByName[variant](reducedMotion)}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      {...props}
    />
  );
};
