"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectDetailNav from "@/components/sections/project-detail-nav";
import ProjectTOC from "@/components/sections/project-toc";
import Footer from "@/components/layout/footer";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Badge from "@/components/ui/badge";
import Container from "@/components/layout/container";

export default function FloatChatPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const techStack = [
    "Next.js 15",
    "React",
    "TypeScript",
    "Python",
    "NetCDF",
    "RAG",
    "Vector Search",
    "Tailwind CSS",
    "motion.dev",
  ];

  return (
    <main className="min-h-screen bg-[#030303]">
      <ProjectDetailNav />

      {/* Hero Section */}
      <section ref={heroRef} className="pt-32 pb-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            {/* Badge */}
            <div className="flex justify-center">
              <Badge className="bg-white/5 border-white/10">
                Research Project · Ocean Data · AI
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white">
              FloatChat
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A conversational AI system that makes Ocean Argo float data accessible through
              natural language using RAG-based reasoning over NetCDF datasets.
            </p>

            {/* Tech Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="px-4 py-2 text-sm bg-white/5 border border-white/10 rounded-full text-white/70 font-mono hover:bg-white/10 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Primary CTA */}
            <motion.a
              href="#"
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all shadow-lg shadow-white/20"
            >
              Check it out
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </motion.div>

          {/* Preview Images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid md:grid-cols-2 gap-6 mt-16 max-w-6xl mx-auto"
          >
            {[1, 2].map((i) => (
              <motion.div
                key={i}
                className="aspect-video bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-600/20 rounded-2xl border border-white/10 overflow-hidden"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                  <span className="text-white/20 text-sm">Preview Image {i}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Main Content - Two Column Layout */}
      <section className="py-20">
        <Container>
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-3 space-y-16">
              {/* Key Features */}
              <motion.section
                id="key-features"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="font-serif text-4xl font-bold text-white mb-8">
                  Key Features
                </h2>
                <Accordion type="single" defaultValue="natural-language">
                  <AccordionItem value="natural-language" title="Natural Language Ocean Queries">
                    Users can ask questions like temperature trends, salinity changes, and depth
                    profiles in plain English and receive structured answers.
                  </AccordionItem>
                  <AccordionItem value="rag-argo" title="RAG over Argo Float Data">
                    Retrieval-augmented generation over NetCDF-based Argo datasets enables
                    context-aware scientific reasoning.
                  </AccordionItem>
                  <AccordionItem value="interactive-summary" title="Interactive Data Summarization">
                    Complex multidimensional ocean data is distilled into readable insights without
                    exposing raw scientific formats.
                  </AccordionItem>
                  <AccordionItem value="research-friendly" title="Research-Friendly Interface">
                    Designed for students and researchers with clarity, accessibility, and minimal
                    cognitive overhead.
                  </AccordionItem>
                </Accordion>
              </motion.section>

              {/* Tech Stack */}
              <motion.section
                id="tech-stack"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="font-serif text-4xl font-bold text-white mb-6">
                  Tech Stack
                </h2>
                <div className="space-y-3 text-white/70">
                  <p>
                    <strong className="text-white">Next.js 15</strong> — Full-stack React framework
                  </p>
                  <p>
                    <strong className="text-white">TypeScript</strong> — Type-safe frontend
                    development
                  </p>
                  <p>
                    <strong className="text-white">Python</strong> — Data parsing and scientific
                    computation
                  </p>
                  <p>
                    <strong className="text-white">NetCDF</strong> — Oceanographic data format
                  </p>
                  <p>
                    <strong className="text-white">Vector Databases</strong> — Semantic retrieval
                  </p>
                  <p>
                    <strong className="text-white">RAG + LLMs</strong> — Context-aware reasoning
                  </p>
                  <p>
                    <strong className="text-white">Tailwind CSS</strong> — Utility-first styling
                  </p>
                  <p>
                    <strong className="text-white">motion.dev</strong> — Smooth animation
                    orchestration
                  </p>
                </div>
              </motion.section>

              {/* Challenges & Learnings */}
              <motion.section
                id="challenges"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="font-serif text-4xl font-bold text-white mb-8">
                  Challenges & Learnings
                </h2>

                <div className="space-y-8">
                  <div id="argo-data" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Working with Ocean Argo Data
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Understanding the structure, scale, and variability of global Argo float
                      datasets and their scientific constraints.
                    </p>
                  </div>

                  <div id="netcdf-rag" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      RAG over Scientific NetCDF Files
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Transforming multidimensional scientific data into retrievable semantic chunks
                      without losing context or precision.
                    </p>
                  </div>

                  <div id="performance" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Performance & Query Optimization
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Optimizing retrieval latency, memory usage, and response time for large ocean
                      datasets.
                    </p>
                  </div>

                  <div id="design" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Design & Component Composition
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Applying shadcn/ui components with careful motion hierarchy to maintain
                      clarity in a data-heavy interface. Typography width, spacing, and rhythm must
                      match the reference exactly.
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Outcome */}
              <motion.section
                id="outcome"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="scroll-mt-24"
              >
                <h2 className="font-serif text-4xl font-bold text-white mb-6">Outcome</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  FloatChat demonstrated how large-scale scientific ocean data can be made
                  accessible through conversational AI. The project highlights strong data
                  engineering, RAG system design, and the ability to bridge complex scientific
                  datasets with intuitive user experiences.
                </p>
              </motion.section>
            </div>

            {/* Right Column - Sticky TOC */}
            <div className="lg:col-span-1 hidden lg:block">
              <FloatChatTOC />
            </div>
          </div>
        </Container>
      </section>

      {/* Bottom Navigation */}
      <section className="py-20 border-t border-white/10">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link
                href="/projects/biobloom"
                className="block p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <p className="text-sm text-white/50 mb-2">Previous Project</p>
                <p className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  BioBloom
                </p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link
                href="/projects/smart-attendance"
                className="block p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-right"
              >
                <p className="text-sm text-white/50 mb-2">Next Project</p>
                <p className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  Smart Attendance System
                </p>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

// FloatChat-specific TOC component
function FloatChatTOC() {
  const [activeSection, setActiveSection] = useState("");

  const sections = [
    { id: "key-features", label: "Key Features" },
    { id: "tech-stack", label: "Tech Stack" },
    { id: "challenges", label: "Challenges & Learnings" },
    { id: "argo-data", label: "Working with Ocean Argo Data" },
    { id: "netcdf-rag", label: "RAG over Scientific NetCDF Files" },
    { id: "performance", label: "Performance & Query Optimization" },
    { id: "design", label: "Design & Component Composition" },
    { id: "outcome", label: "Outcome" },
  ];

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

