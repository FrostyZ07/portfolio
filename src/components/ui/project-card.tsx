"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  year: string;
  category: string;
  description: string;
  stack: string[];
  link: string;
  gradient: "pink" | "blue" | "green";
  index: number;
}

const gradients = {
  pink: "from-pink-500 via-red-500 to-pink-600",
  blue: "from-blue-600 via-purple-600 to-indigo-700",
  green: "from-emerald-500 via-teal-500 to-green-600",
};

export default function ProjectCard({
  title,
  year,
  category,
  description,
  stack,
  link,
  gradient,
  index,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const cardContent = (
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 space-y-4 hover:bg-white/10 transition-all duration-300 cursor-pointer">
      {/* Top: Title, Year, Category */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">{title}</h3>
          <div className="flex items-center gap-3 text-sm text-white/50">
            <span>{year}</span>
            <span>•</span>
            <span>{category}</span>
          </div>
        </div>
        <div className="p-2 rounded-lg bg-white/5">
          <ExternalLink className="w-5 h-5 text-white/70" />
        </div>
      </div>

      {/* Main Visual: Gradient Container with Mockup */}
      <motion.div
        className={`relative h-64 md:h-80 rounded-2xl bg-gradient-to-br ${gradients[gradient]} overflow-hidden`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Browser/Mockup Window */}
        <motion.div
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4"
        >
          {/* Mock Browser UI */}
          <div className="flex gap-2 mb-3">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
          </div>
          <div className="space-y-2">
            <div className="h-2 bg-white/20 rounded w-3/4" />
            <div className="h-2 bg-white/10 rounded w-full" />
            <div className="h-2 bg-white/10 rounded w-5/6" />
          </div>
        </motion.div>

        {/* Description Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 pt-2">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs bg-black/40 border border-white/10 rounded-full text-white/70 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative group"
    >
      {link.startsWith("/") ? (
        <Link href={link} className="block">{cardContent}</Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer" className="block">
          {cardContent}
        </a>
      )}

      {/* Rotating Badge on Hover - Follows Cursor */}
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          style={{
            position: "fixed",
            left: cursorPos.x,
            top: cursorPos.y,
            pointerEvents: "none",
            zIndex: 9999,
            transform: "translate(-50%, -50%)",
          }}
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="w-28 h-28 rounded-full border-2 border-white/30 bg-black/80 backdrop-blur-md relative overflow-hidden"
          >
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 100 100"
            >
              <defs>
                <path
                  id={`circle-path-${title.replace(/\s/g, "-")}`}
                  d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                />
              </defs>
              <text
                className="text-[6px] fill-white font-medium"
                dominantBaseline="middle"
              >
                <textPath
                  href={`#circle-path-${title.replace(/\s/g, "-")}`}
                  startOffset="0%"
                >
                  View Details • View Details • View Details • View Details •
                </textPath>
              </text>
            </svg>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}

