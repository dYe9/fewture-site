'use client';
import { motion, useReducedMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';

export const Reveal = ({ children, delay=0 }: PropsWithChildren<{delay?:number}>) => {
  const reduce = useReducedMotion();
  const variants = reduce ? {} : {
    hidden: { opacity:0, y:12 },
    show: { opacity:1, y:0, transition:{ duration:0.24, delay } }
  };
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once:true, margin:'-10% 0px' }} variants={variants}>
      {children}
    </motion.div>
  );
};

export const Stagger = ({ children }: PropsWithChildren) => {
  const reduce = useReducedMotion();
  const variants = reduce ? {} : {
    hidden: {},
    show: { transition:{ staggerChildren: 0.06 } }
  };
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once:true, margin:'-10% 0px' }} variants={variants}>
      {children}
    </motion.div>
  );
};

export const M = motion;
