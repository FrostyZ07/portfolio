"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Work" },
  { path: "/blog", label: "Blog" },
];

const moreItems = [
  { path: "/connect", label: "Connect" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4"
    >
      {/* Single centered pill that contains logo + links */}
      <div className="relative flex justify-center">
        <div className="flex items-center gap-6 bg-black/60 backdrop-blur-md border border-white/12 rounded-full px-6 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
          {/* Logo inside pill, aligned with links */}
          <Link href="/" className="text-base font-semibold text-white tracking-tight">
            TS
          </Link>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? "text-white" : "text-white/70 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* More dropdown */}
            <div className="relative group">
              <button
                className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-1 focus:outline-none"
              >
                More
                <span className="text-white/50 group-hover:text-white/80">▾</span>
              </button>
              <div className="pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto absolute top-8 right-0 mt-2 w-48 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200">
                <div className="py-2">
                  {moreItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="block px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                  <div className="h-px bg-white/10 my-1" />
                  <a
                    href="/resume.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-pink-400 hover:text-pink-300 hover:bg-white/5 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden mt-4 pt-4 border-t border-white/10 space-y-3 text-center"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          {moreItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            onClick={() => setIsMenuOpen(false)}
            className="block text-sm font-semibold text-pink-400 hover:text-pink-300 transition-colors"
          >
            Resume
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
