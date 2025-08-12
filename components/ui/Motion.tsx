'use client';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const Reveal = ({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) => {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.24, delay } },
  };

  // If user prefers reduced motion, render with no animation
  if (reduce) return <motion.div initial={false}>{children}</motion.div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const Stagger = ({ children }: PropsWithChildren) => {
  const reduce = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  if (reduce) return <motion.div initial={false}>{children}</motion.div>;

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px' }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export const M = motion;
