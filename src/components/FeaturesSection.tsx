"use client";

import content from "@/data/content.json";
import { motion } from "framer-motion";
import {
  BookOpen,
  Bookmark,
  Brain,
  Headphones,
  Moon,
  Search,
} from "lucide-react";

const icons = {
  BookOpen,
  Bookmark,
  Headphones,
  Brain,
  Search,
  Moon,
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const FeaturesSection = () => {
  const { title, subtitle, items } = content.features;
  const splitTitle = title.split("Quran Journey");

  return (
    <section id="features" className="py-24 relative">
      <div className="floating-shape w-[300px] h-[300px] bg-accent -right-40 top-20 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {splitTitle[0]}{" "}
            <span className="gradient-text-gold">Quran Journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((feature, i) => {
            const Icon = icons[feature.icon as keyof typeof icons] || BookOpen;
            return (
              <motion.div
                key={feature.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card rounded-2xl p-6 group cursor-default hover:glow-emerald transition-shadow duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
