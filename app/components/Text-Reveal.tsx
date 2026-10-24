"use client";

import { motion } from "motion/react";
import React, { ReactElement } from "react";

const initial = {
  y: -10,
  opacity: 0,
};

const animate = {
  y: 0,
  opacity: 1,
  transition: {
    duration: 0.5,
  },
};

const TextReveal = ({ children }: { children: ReactElement }) => {
  return (
    <motion.div initial={initial} animate={animate}>
      {children}
    </motion.div>
  );
};

export default TextReveal;
