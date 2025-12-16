"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import ProjectDetailNav from "@/components/sections/project-detail-nav";
import ProjectTOC from "@/components/sections/project-toc";
import Footer from "@/components/layout/footer";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import Badge from "@/components/ui/badge";
import Container from "@/components/layout/container";

export default function BioBloomPage() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true, margin: "-100px" });

  const techStack = [
    "Next.js 15",
    "React",
    "Sanity CMS",
    "TypeScript",
    "AI / LLMs",
    "RAG",
    "Blockchain",
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
                Hackathon Project · AI + Sustainability
              </Badge>
            </div>

            {/* Title */}
            <h1 className="font-serif text-6xl md:text-7xl lg:text-8xl font-bold text-white">
              BioBloom
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              An AI-powered sustainable agriculture ecosystem combining crop intelligence,
              biowaste optimization, and supply-chain transparency.
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
                className="aspect-video bg-gradient-to-br from-pink-500/20 via-red-500/20 to-pink-600/20 rounded-2xl border border-white/10 overflow-hidden"
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
                <Accordion type="single" defaultValue="ai-crop">
                  <AccordionItem value="ai-crop" title="AI-Driven Crop Intelligence">
                    Agentic AI analyzes soil data, crop history, and climate patterns to
                    recommend optimal crop rotation and disease prevention strategies.
                  </AccordionItem>
                  <AccordionItem value="biowaste" title="Biowaste Optimization Engine">
                    RAG-powered system that converts agricultural waste into actionable reuse,
                    composting, and energy insights.
                  </AccordionItem>
                  <AccordionItem value="blockchain" title="Blockchain-Based Supply Chain">
                    Transparent farm-to-market tracking ensuring traceability, trust, and fair
                    pricing.
                  </AccordionItem>
                  <AccordionItem value="ui" title="Polished & Accessible UI">
                    Clean, inclusive interface designed for farmers, students, and stakeholders.
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
                    <strong className="text-white">Next.js 15</strong> — Server Actions and
                    Partial Prerendering
                  </p>
                  <p>
                    <strong className="text-white">TypeScript</strong> — Type-safe development
                  </p>
                  <p>
                    <strong className="text-white">Tailwind CSS</strong> — Utility-first styling
                  </p>
                  <p>
                    <strong className="text-white">shadcn/ui</strong> — Radix-based accessible
                    components
                  </p>
                  <p>
                    <strong className="text-white">motion.dev</strong> — Smooth animation
                    orchestration
                  </p>
                  <p>
                    <strong className="text-white">Sanity CMS</strong> — Headless content
                    management
                  </p>
                  <p>
                    <strong className="text-white">GROQ</strong> — Structured querying
                  </p>
                  <p>
                    <strong className="text-white">RAG + LLMs</strong> — Context-aware reasoning
                  </p>
                  <p>
                    <strong className="text-white">Blockchain</strong> — Decentralized verification
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
                  <div id="agentic-ai" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Building Agentic AI Systems
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Orchestrating multiple AI agents, decision pipelines, and reasoning layers
                      to deliver reliable agricultural intelligence.
                    </p>
                  </div>

                  <div id="rag-pipelines" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Real-Time Data & RAG Pipelines
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Handling live agricultural datasets, embeddings, vector search, and
                      latency-sensitive queries.
                    </p>
                  </div>

                  <div id="blockchain" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Blockchain Integration
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Implementing transparent smart contracts and ensuring data integrity across
                      the supply chain.
                    </p>
                  </div>

                  <div id="design" className="scroll-mt-24">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Design & Component Composition
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Advanced shadcn/ui composition, motion hierarchy, staggered animations, and
                      accessibility-first design. Typography width, spacing, and rhythm must match
                      the reference exactly.
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
                  BioBloom emerged as a robust real-world demonstration of applying AI, RAG
                  systems, and blockchain to sustainability challenges. The project showcases
                  full-stack depth, system-level thinking, and the ability to transform complex
                  technology into practical, user-friendly solutions.
                </p>
              </motion.section>
            </div>

            {/* Right Column - Sticky TOC */}
            <div className="lg:col-span-1 hidden lg:block">
              <ProjectTOC />
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
                href="/projects/smart-attendance"
                className="block p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all"
              >
                <p className="text-sm text-white/50 mb-2">Previous Project</p>
                <p className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  Smart Attendance System
                </p>
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link
                href="/projects/floatchat"
                className="block p-8 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all text-right"
              >
                <p className="text-sm text-white/50 mb-2">Next Project</p>
                <p className="text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                  FloatChat
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

