'use client';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { PropsWithChildren } from 'react';

const base: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.24 } },
};

export const Reveal = ({ children, delay = 0 }: PropsWithChildren<{ delay?: number }>) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-10% 0px' }}
    variants={{
      hidden: base.hidden,
      show: { ...base.show, transition: { ...base.show!.transition as any, delay } },
    }}
  >
    {children}
  </motion.div>
);

export const Stagger = ({ children }: PropsWithChildren) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-10% 0px' }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06 } } }}
  >
    {children}
  </motion.div>
);

export const M = motion;
