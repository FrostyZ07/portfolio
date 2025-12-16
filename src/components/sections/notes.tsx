"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import GlassCard from "@/components/ui/glass-card";
import Container from "@/components/layout/container";

const notes = [
  { title: "Building RAG Systems", status: "Coming Soon" },
  { title: "Generative AI Best Practices", status: "Coming Soon" },
  { title: "Full-Stack AI Applications", status: "Coming Soon" },
];

export default function Notes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="notes"
      ref={ref}
      className="py-32 relative z-10"
    >
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold tracking-tighter mb-16 text-center"
        >
          Notes
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0.5, y: 30 }}
              animate={isInView ? { opacity: 0.5, y: 0 } : { opacity: 0.5, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ opacity: 1 }}
            >
              <GlassCard className="p-6 h-full cursor-pointer">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">{note.title}</h3>
                  <p className="text-sm text-white/50 font-mono">{note.status}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}


