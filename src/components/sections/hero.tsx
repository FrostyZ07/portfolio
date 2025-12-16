"use client";

import { motion } from "framer-motion";
import { ArrowRight, Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("thanmay1100@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24">

      {/* Horizon Glow Effect */}
      <div className="fixed bottom-0 left-0 right-0 h-[500px] pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-blue-500/10 to-transparent blur-3xl" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center">
        {/* Sub-headline with Inline Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-6 text-lg md:text-xl text-white/70"
        >
          <span>Hello, I&apos;m</span>
          <span className="font-semibold text-white">Thanmay M Shetty</span>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-primary to-accent-secondary border-2 border-white/20" />
          <span>an AIML Student</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 leading-tight max-w-4xl"
        >
          I build AI-driven systems and product-grade applications where engineering meets usability and clarity.
        </motion.h1>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-6 py-3 bg-gray-800/80 text-white rounded-full border border-white/20 hover:bg-gray-800 transition-colors"
          >
            Let&apos;s Connect
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          {/* Email with Copy */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="flex items-center gap-2 px-4 py-3 text-white/70 hover:text-white transition-colors"
          >
            thanmay1100@gmail.com
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
