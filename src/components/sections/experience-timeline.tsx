"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/layout/container";
import { DATA } from "@/lib/data";

export default function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const timelineData = [
    {
      date: "JAN 2024 - PRESENT",
      company: "IEEE CIS",
      location: "Remote",
      role: "Treasurer",
      achievements: [
        "Managed financial allocation and leadership for technical events, resulting in **40% faster** content delivery",
        "Orchestrated cross-functional collaboration between teams, streamlining operations",
        "Led strategic planning initiatives that enhanced organizational efficiency",
        "Implemented new systems for budget tracking and resource management"
      ],
      tags: ["TypeScript", "Next.js", "Tailwind", "Framer Motion", "React"]
    },
    {
      date: "OCT 2025",
      company: "RNS Institute of Technology",
      location: "On-site",
      role: "Hackathon Winner",
      achievements: [
        "Led development of BioBloom, an AI-powered sustainable agriculture ecosystem",
        "Built agentic AI workflows for crop planning and biowaste optimization using RAG",
        "Integrated blockchain-based supply-chain transparency",
        "Secured **1st Place** in a 24-hour national-level hackathon"
      ],
      tags: ["Next.js", "TypeScript", "AI/LLMs", "RAG", "Blockchain", "Tailwind", "Motion.dev"]
    },
    {
      date: "NOV 2025",
      company: "K S School of Engineering & Management",
      location: "On-site",
      role: "Hackathon Winner",
      achievements: [
        "Developed FloatChat, a conversational AI system for Ocean Argo float data",
        "Implemented RAG-based reasoning over NetCDF datasets for natural language queries",
        "Built vector search pipeline for efficient scientific data retrieval",
        "Created accessible interface for complex oceanographic data analysis"
      ],
      tags: ["Next.js", "TypeScript", "Python", "NetCDF", "RAG", "Vector Search", "Tailwind"]
    }
  ];

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden"
    >
      <Container className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-20"
        >
          Experience That Brings{" "}
          <span className="italic">Ideas to Life</span>
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          {/* Gradient Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] transform -translate-x-1/2 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-50 blur-sm" />
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-24">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative grid md:grid-cols-2 gap-8 items-center"
              >
                {/* Avatar Node on Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-[#030303] shadow-2xl shadow-blue-500/50" />
                    <div className="absolute inset-0 rounded-full bg-blue-500/30 blur-xl animate-pulse" />
                  </div>
                </div>

                {/* Left Side - Date, Company, Location */}
                <div className="text-right space-y-2 pr-8">
                  <p className="text-sm font-mono text-white/50">{item.date}</p>
                  <p className="text-xl font-bold text-white">{item.company}</p>
                  <p className="text-sm text-white/70">{item.location}</p>
                  <span className={`inline-block px-3 py-1 text-xs rounded-full ${
                    item.location === "Remote"
                      ? "bg-green-500/20 text-green-400 border border-green-500/30"
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                  }`}>
                    {item.location}
                  </span>
                </div>

                {/* Right Side - Role, Achievements, Tags */}
                <div className="space-y-4 pl-8">
                  <h3 className="font-serif text-3xl font-bold text-white">{item.role}</h3>
                  
                  <ul className="space-y-3 text-white/70">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-blue-400 mt-1">▹</span>
                        <span dangerouslySetInnerHTML={{ 
                          __html: achievement.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>') 
                        }} />
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-sm bg-white/5 border border-white/10 rounded-full text-white/70 font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

