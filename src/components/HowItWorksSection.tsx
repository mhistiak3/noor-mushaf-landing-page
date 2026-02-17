"use client";

import content from "@/data/content.json";
import { motion } from "framer-motion";
import { BookmarkCheck, BookMarked, Headphones } from "lucide-react";

const icons = {
  BookMarked,
  Headphones,
  BookmarkCheck,
};

const HowItWorksSection = () => {
  const { title, subtitle, steps } = content.howItWorks;

  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title.split("Start")[0]}Start{" "}
            <span className="gradient-text-gold">
              {title.split("Start")[1]}
            </span>
            {!title.includes("Start") && (
              <>
                How <span className="gradient-text-gold">Hudaa</span> Works
              </>
            )}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4">
          {steps.map((step, i) => {
            const iconsList = [BookMarked, Headphones, BookmarkCheck];
            const Icon = iconsList[i] || BookMarked;

            return (
              <div key={step.title} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="flex flex-col items-center text-center max-w-[220px]"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4 glow-emerald">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <span className="text-xs font-semibold text-accent mb-2">
                    Step {i + 1}
                  </span>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.2 + 0.3 }}
                    className="hidden md:block w-20 h-[2px] bg-gradient-to-r from-emerald to-accent origin-left"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
