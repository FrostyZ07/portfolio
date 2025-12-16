"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/layout/container";
import ProjectCard from "@/components/ui/project-card";
import { DATA } from "@/lib/data";

export default function Work() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Map projects to gradient variants
  const projectsWithGradients = DATA.projects.map((project, index) => ({
    ...project,
    gradient: (["pink", "blue", "green"] as const)[index % 3],
    year: "2024",
  }));

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white">
            Curated{" "}
            <span className="italic bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
              Work
            </span>
          </h1>
        </motion.div>

        {/* Staggered Grid Layout */}
        <div className="relative">
          {/* Optional: Connecting Dashed Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px border-l border-dashed border-white/10 transform -translate-x-1/2 hidden md:block" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column (Starts Higher) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              {projectsWithGradients
                .filter((_, index) => index % 2 === 0)
                .map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    index={index * 2}
                  />
                ))}
            </motion.div>

            {/* Right Column (Starts Lower - Offset by ~100px) */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-8 md:pt-24"
            >
              {projectsWithGradients
                .filter((_, index) => index % 2 === 1)
                .map((project, index) => (
                  <ProjectCard
                    key={project.title}
                    {...project}
                    index={index * 2 + 1}
                  />
                ))}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}


