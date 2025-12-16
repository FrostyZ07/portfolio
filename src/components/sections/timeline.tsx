"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/glass-card";
import Container from "@/components/layout/container";
import { DATA } from "@/lib/data";

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="py-32 relative z-10"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center"
        >
          Timeline
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-accent-primary to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {DATA.timeline.map((item, index) => (
              <motion.div
                key={`${item.year}-${index}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex items-start md:items-center gap-8"
              >
                {/* Year (Sticky Left) */}
                <div className="w-16 md:w-32 flex-shrink-0 text-right">
                  <span className="text-2xl md:text-3xl font-bold text-accent-primary">
                    {item.year}
                  </span>
                </div>

                {/* Dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10 w-4 h-4 bg-accent-primary rounded-full border-4 border-background shadow-lg shadow-accent-primary/50 hidden md:block" />

                {/* Content Card (Right) */}
                <div className="flex-1 ml-16 md:ml-0">
                  <GlassCard className="p-6">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">{item.role}</h3>
                      <p className="text-accent-primary font-medium">{item.org}</p>
                      <p className="text-white/70 text-sm">{item.desc}</p>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

