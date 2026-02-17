"use client";

import phoneMockup from "@/assets/phone-mockup.png";
import content from "@/data/content.json";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { title, subtitle, buttons } = content.hero;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Floating shapes */}
      <div className="floating-shape w-[400px] h-[400px] bg-emerald top-20 -left-40 animate-float" />
      <div
        className="floating-shape w-[300px] h-[300px] bg-accent top-1/2 right-0 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="floating-shape w-[200px] h-[200px] bg-emerald bottom-20 left-1/3 animate-float-slow"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-right"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-arabic text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            dir="rtl"
          >
            <span className="gradient-text-gold">
              {title.split("،")[0]}، {title.split("،")[1]}
            </span>
            <br />

            <span className="text-foreground pt-8 inline-block">
              {title.split("\n")[1]}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 lg:ml-auto mb-8"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
          >
            <a
              href={buttons.primary.href}
              className="btn-primary-glow text-center"
            >
              {buttons.primary.text}
            </a>
            <a
              href={buttons.secondary.href}
              className="btn-outline-gold text-center"
            >
              {buttons.secondary.text}
            </a>
          </motion.div>
        </motion.div>

        {/* Phone mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 60 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-emerald rounded-full blur-[100px] opacity-20 animate-pulse-glow" />
            <img
              src={phoneMockup.src}
              alt="Noor Mushaf App"
              className="relative z-10 w-[280px] md:w-[340px] drop-shadow-2xl animate-float-slow rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
