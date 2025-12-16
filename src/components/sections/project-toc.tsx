"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "key-features", label: "Key Features" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "challenges", label: "Challenges & Learnings" },
  { id: "agentic-ai", label: "Building Agentic AI Systems" },
  { id: "rag-pipelines", label: "Real-Time Data & RAG Pipelines" },
  { id: "blockchain", label: "Blockchain Integration" },
  { id: "design", label: "Design & Component Composition" },
  { id: "outcome", label: "Outcome" },
];

export default function ProjectTOC() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      setActiveSection(current?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sticky top-24 self-start">
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
        <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
          On this page
        </h3>
        <nav className="space-y-2">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-white/10" />
          {sections.map((section) => {
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`relative block w-full text-left text-sm py-2 pl-6 transition-colors ${
                  isActive
                    ? "text-white font-medium"
                    : "text-white/50 hover:text-white/70"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent-primary"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {section.label}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}


