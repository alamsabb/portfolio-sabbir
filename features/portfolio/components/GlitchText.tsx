"use client";

import { motion } from "framer-motion";

interface GlitchTextProps {
  text: string;
  className?: string;
}

export function GlitchText({ text, className = "" }: GlitchTextProps) {
  return (
    <motion.span
      className={`relative inline-block ${className}`}
      animate={{
        textShadow: [
          "2px 2px 0px #ff0000, -2px -2px 0px #00ffff",
          "0px 0px 0px #ff0000, 0px 0px 0px #00ffff",
          "2px 2px 0px #ff0000, -2px -2px 0px #00ffff",
          "0px 0px 0px #ff0000, 0px 0px 0px #00ffff",
        ],
        x: [0, -2, 2, -2, 2, 0],
      }}
      transition={{
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3,
        repeatType: "reverse",
      }}
    >
      {text}
    </motion.span>
  );
}

