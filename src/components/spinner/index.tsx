'use client';

import { motion } from 'motion/react';

type SpinnerProps = {
  size?: number;
  color?: string;
};

const Spinner = ({ size = 18, color = '#fff' }: SpinnerProps) => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: 'linear',
        duration: 1,
      }}
      style={{
        width: size,
        height: size,
        border: `${size / 8}px solid ${color}40`,
        borderTop: `${size / 8}px solid ${color}`,
        borderRadius: '50%',
        boxSizing: 'border-box',
        margin: 'auto',
      }}
    />
  );
};

export default Spinner;
