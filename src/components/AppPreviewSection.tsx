"use client";

import screenshot1 from "@/assets/screenshot-1.png";
import screenshot2 from "@/assets/screenshot-2.png";
import screenshot3 from "@/assets/screenshot-3.png";
import content from "@/data/content.json";
import { motion } from "framer-motion";

const screenshots = [screenshot1, screenshot2, screenshot3];

const AppPreviewSection = () => {
  const { title, subtitle } = content.appPreview;

  return (
    <section id="preview" className="py-24 relative overflow-hidden">
      <div className="floating-shape w-[400px] h-[400px] bg-emerald left-1/2 -translate-x-1/2 top-0 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title.split("Hudaa")[0]}{" "}
            <span className="gradient-text-gold">Hudaa</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
          {screenshots.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              className="glass-card rounded-3xl p-3 w-[200px] md:w-[240px]"
            >
              <img
                src={src.src}
                alt={`App screenshot ${i + 1}`}
                className="rounded-2xl w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppPreviewSection;
