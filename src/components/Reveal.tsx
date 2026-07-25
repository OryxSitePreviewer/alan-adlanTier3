import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  /** Vertical offset (px) the element rises from. Pass 0 for an opacity-only
   *  fade (e.g. the hero, to avoid a layout jump on the largest section). */
  y?: number;
  /** Optional stagger delay (seconds) before this element starts animating. */
  delay?: number;
  className?: string;
}

/**
 * Fades + gently rises its children into view once, the first time they scroll
 * into the viewport. Honours prefers-reduced-motion by dropping the movement
 * and keeping only a soft fade.
 */
export function Reveal({ children, y = 24, delay = 0, className }: RevealProps) {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: offset }}
      whileInView={{ opacity: 1, y: 0 }}
      // margin-based trigger fires once the element scrolls ~80px into view,
      // independent of section height (an `amount` threshold can never be met
      // by sections much taller than the viewport).
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}
