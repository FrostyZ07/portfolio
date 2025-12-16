"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";
import GlassCard from "@/components/ui/glass-card";
import Badge from "@/components/ui/badge";
import Container from "@/components/layout/container";
import { DATA } from "@/lib/data";

export default function ProjectsBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
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
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DATA.projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={project.size === "large" ? "md:col-span-2" : ""}
            >
              <GlassCard className="p-8 h-full group relative">
                <a
                  href={project.link}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] transition-colors"
                >
                  <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-accent-primary transition-colors" />
                </a>

                <div className="space-y-6">
                  <div>
                    <Badge variant="accent" className="mb-3">
                      {project.category}
                    </Badge>
                    <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-white/50 uppercase tracking-wider">
                      Features
                    </h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3 text-white/70"
                        >
                          <span className="text-accent-primary mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="default">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

