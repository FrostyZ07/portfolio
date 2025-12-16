"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/layout/container";

export default function BentoPlayground() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 via-transparent to-transparent pointer-events-none" />
      
      <Container className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="font-serif text-4xl md:text-5xl font-bold text-white text-center mb-20"
        >
          Explore, experiment &&{" "}
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            say hello
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Card 1: Uses */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-sm uppercase tracking-wider text-white/50 mb-6">USES</h3>
            <div className="flex gap-4 justify-center">
              {[
                { name: "Arc", icon: "🎨" },
                { name: "VS Code", icon: "💻" },
                { name: "Raycast", icon: "⚡" },
              ].map((app, idx) => (
                <motion.div
                  key={app.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.2 + idx * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-2xl mb-2 shadow-2xl">
                    {app.icon}
                  </div>
                  <p className="text-xs text-white/60">{app.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Card 2: Last Played (Spotify) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-all duration-300 relative overflow-hidden"
          >
            <h3 className="text-sm uppercase tracking-wider text-white/50 mb-6">LAST PLAYED</h3>
            <div className="relative h-48 flex items-center justify-center">
              {/* Album Artwork */}
              <div className="relative z-10 w-32 h-32 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/20 border border-white/10 shadow-2xl flex items-center justify-center">
                <div className="text-4xl">🎵</div>
              </div>
              
              {/* Vinyl Record Spinning Out */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute z-0 w-32 h-32 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-4 border-gray-700 shadow-2xl"
                style={{ left: "calc(50% - 4rem)" }}
              >
                <div className="absolute inset-4 rounded-full bg-gray-900" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-8 bg-white/20" />
                </motion.div>
              </motion.div>

              {/* Song Info */}
              <div className="absolute bottom-0 left-0 right-0 text-center space-y-1">
                <p className="text-white font-medium">Song Title</p>
                <p className="text-white/50 text-sm">Artist Name</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

