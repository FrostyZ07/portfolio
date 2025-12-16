"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Mail, 
  Globe, 
  MapPin, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Twitter,
  Send
} from "lucide-react";
import Container from "@/components/layout/container";

export default function Connect() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden bg-[#030303]">
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs uppercase tracking-wider text-white/50 mb-4">NETWORK</p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white">
            Connect With{" "}
            <span className="italic bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
        </motion.div>

        {/* Grid Layout with Dashed Borders */}
        <div className="grid md:grid-cols-2 gap-8 border-2 border-dashed border-white/10 rounded-2xl p-8">
          {/* Left Column: Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 rounded-2xl p-8 border border-white/10"
          >
            {/* Avatar with Online Dot */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-[#030303]" />
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-400 rounded-full border-4 border-[#030303]">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                </div>
              </div>
              
              <h2 className="font-serif text-2xl font-bold text-white mb-3">Thanmay</h2>
              
              {/* Tags */}
              <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-white/70">
                  Developer
                </span>
                <span className="px-3 py-1 text-xs bg-white/10 border border-white/20 rounded-full text-white/70">
                  Freelancer
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-white/70">
                <MapPin className="w-5 h-5" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <Mail className="w-5 h-5" />
                <span>thanmay1100@gmail.com</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Mail
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              
              <div className="flex gap-3">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:bg-white/10 transition-colors"
                >
                  <Globe className="w-4 h-4" />
                  Website
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/70 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Links Grid */}
          <div className="space-y-8">
            {/* CODE & CRAFT Section */}
            <div>
              <div className="border-t border-dashed border-white/10 pt-6 mb-6">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-4">CODE & CRAFT</p>
                <div className="grid grid-cols-1 gap-4">
                  <motion.a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                    className="bg-white/5 rounded-xl p-6 border border-white/10 flex items-center gap-4 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">GitHub</h3>
                      <p className="text-sm text-white/50">@FrostyZ07</p>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>

            {/* CONNECT Section */}
            <div>
              <div className="border-t border-dashed border-white/10 pt-6 mb-6">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-4">CONNECT</p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Linkedin, title: "LinkedIn", handle: "in/thanmay-m-shetty-244997281", href: "https://linkedin.com" },
                    { icon: Twitter, title: "Twitter / X", handle: "@thanmay1100", href: "https://twitter.com" },
                    { icon: Send, title: "Telegram", handle: "@thanmaydev", href: "https://telegram.org" },
                    { icon: Mail, title: "Email", handle: "thanmay1100@gmail.com", href: "mailto:thanmay1100@gmail.com" },
                  ].map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.title}
                        href={link.href}
                        target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                        rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                        className="bg-white/5 rounded-xl p-6 border border-white/10 flex flex-col items-center gap-3 transition-colors"
                      >
                        <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-center">
                          <h3 className="font-semibold text-white mb-1 text-sm">{link.title}</h3>
                          <p className="text-xs text-white/50">{link.handle}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

