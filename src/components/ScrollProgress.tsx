"use client";

import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] z-[60] origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, hsl(162 89% 20%), hsl(48 97% 54%))",
      }}
    />
  );
};

export default ScrollProgress;
