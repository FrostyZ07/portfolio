"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter } from "lucide-react";
import Container from "@/components/layout/container";

export default function AboutMe() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <Container className="relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-sm uppercase tracking-wider text-white/50">MORE ABOUT ME</p>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white">
              I&apos;m Thanmay, a creative{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                engineer
              </span>
            </h2>

            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                I bridge the gap between abstract algorithms and tangible solutions. 
                Specializing in Generative AI, RAG Architectures, and full-stack engineering.
              </p>
              <p>
                My work focuses on building AI-driven systems that are not just technically 
                sound, but also intuitive and impactful. I believe in the power of clear 
                communication and thoughtful design in engineering.
              </p>
              <p>
                When I&apos;m not coding, I enjoy exploring new technologies, contributing to 
                open-source projects, and continuously learning to push the boundaries of 
                what&apos;s possible.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {[
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Github, href: "https://github.com", label: "GitHub" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-white/70" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[600px] flex items-center justify-center"
          >
            {/* Stacked Images */}
            {[
              { rotation: -8, z: 1, delay: 0 },
              { rotation: 4, z: 2, delay: 0.1 },
              { rotation: -4, z: 3, delay: 0.2 },
            ].map(({ rotation, z, delay }, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : { opacity: 0, y: 50, rotate: 0 }}
                transition={{ duration: 0.6, delay: delay + 0.3 }}
                className="absolute w-64 h-80 rounded-2xl overflow-hidden shadow-2xl"
                style={{ zIndex: z }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 border border-white/10 flex items-end">
                  {index === 2 && (
                    <div className="w-full p-4 bg-black/40 backdrop-blur-sm text-white text-sm font-medium">
                      I Travel
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


