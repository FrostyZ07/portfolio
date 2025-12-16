"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// Skills with actual brand logos from Simple Icons
const skills = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", color: "#000000" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg", color: "#06B6D4" },
  { name: "CSS / PostCSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", color: "#264DE4" },
  { name: "Figma", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", color: "#F24E1E" },
  { name: "Framer Motion", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg", color: "#0055FF" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Express", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#FFFFFF" },
  { name: "FastAPI", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
  { name: "REST APIs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg", color: "#85EA2D" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", color: "#4DB33D" },
  { name: "Redis", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg", color: "#D82C20" },
  { name: "PyTorch", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", color: "#EE4C2C" },
  { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg", color: "#4D77CF" },
  { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", color: "#130754" },
  { name: "OpenAI / LLMs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/openai/openai-original.svg", color: "#412991" },
  { name: "Vector DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", color: "#003B57" },
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg", color: "#FF9900" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "GitHub", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", color: "#FFFFFF" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", color: "#FCC624" },
];

// Individual icon component with scroll-based convergence/divergence
function ScrollRevealIcon({ 
  skill, 
  index, 
  containerRef 
}: { 
  skill: typeof skills[0]; 
  index: number;
  containerRef: React.RefObject<HTMLDivElement>;
}) {
  const iconRef = useRef<HTMLDivElement>(null);
  
  // Scroll progress for this section (0 to 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Calculate final grid position
  const totalCols = 10;
  const row = Math.floor(index / totalCols);
  const col = index % totalCols;
  const centerCol = Math.floor(totalCols / 2);
  const totalRows = Math.ceil(skills.length / totalCols);
  const centerRow = Math.floor(totalRows / 2);
  
  // Final position offsets from center (in grid units, will be converted to pixels)
  const colOffset = col - centerCol;
  const rowOffset = row - centerRow;
  
  // Distance from center for scale/opacity
  const colDist = Math.abs(colOffset);
  const rowDist = Math.abs(rowOffset);
  const dist = Math.sqrt(colDist * colDist + rowDist * rowDist);
  const maxDist = Math.sqrt((totalCols / 2) * (totalCols / 2) + (totalRows / 2) * (totalRows / 2));
  const normalizedDist = Math.min(dist / maxDist, 1);
  
  const finalScale = 1 - normalizedDist * 0.15;
  const finalOpacity = 1 - normalizedDist * 0.2;

  // Interpolate position based on scroll progress
  // At scrollProgress = 0: all icons at center (converged)
  // At scrollProgress = 1: icons at final positions (diverged)
  const gridUnitSize = 80; // Approximate size of grid cell + gap
  const x = useTransform(scrollYProgress, [0, 0.5, 1], [0, colOffset * gridUnitSize * 0.5, colOffset * gridUnitSize]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, rowOffset * gridUnitSize * 0.5, rowOffset * gridUnitSize]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 0.9, finalScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 1], [0.3, 0.6, 0.8, finalOpacity]);
  const rotateY = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      ref={iconRef}
      style={{ 
        position: "absolute",
        left: "50%",
        top: "50%",
        x,
        y,
        scale,
        opacity,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ 
        scale: finalScale * 1.15,
        z: 50,
        rotateY: 5,
      }}
      className="group"
    >
      <div
        className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-2xl bg-neutral-900 border border-white/10"
        style={{
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.9),
            inset 0 1px 0 rgba(255, 255, 255, 0.05),
            inset 0 -1px 0 rgba(0, 0, 0, 0.5),
            0 0 0 1px rgba(255, 255, 255, 0.03)
          `,
        }}
      >
        {/* Inner shadow for depth */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-black/60 via-transparent to-black/40" />
        
        {/* Inner highlight */}
        <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-2xl bg-gradient-to-b from-white/8 to-transparent" />
        
        {/* Subtle glow on hover with brand color */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            boxShadow: `inset 0 0 20px ${skill.color}20`,
          }}
        />
        
        {/* Brand Logo */}
        <img
          src={skill.logo}
          alt={skill.name}
          className="w-10 h-10 md:w-12 md:h-12 relative z-10 transition-all"
          style={{
            filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.8))",
          }}
          onError={(e) => {
            // Fallback to colored background with initial
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            const fallback = target.nextElementSibling as HTMLElement;
            if (fallback) {
              fallback.style.display = 'flex';
              fallback.style.backgroundColor = skill.color;
            }
          }}
        />
        {/* Fallback if image fails */}
        <div 
          className="hidden items-center justify-center text-white text-xs font-bold relative z-10 w-full h-full rounded-2xl"
          style={{ display: 'none' }}
        >
          {skill.name.charAt(0)}
        </div>
        
        {/* Tooltip on hover */}
        <motion.div 
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
          className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none z-20"
        >
          <span className="text-xs text-white/90 font-medium whitespace-nowrap bg-black/90 px-3 py-1.5 rounded-lg border border-white/20 backdrop-blur-sm shadow-xl">
            {skill.name}
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function SecretSauce() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Large Glossy Abstract 3D Object - Centerpiece */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }
              : {}
          }
          transition={{
            opacity: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            y: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
            scale: { duration: 1.2, ease: [0.4, 0, 0.2, 1] },
          }}
          className="relative mb-12"
        >
          {/* Subtle floating + slow rotation of provided hero asset (transparent) */}
          <motion.div
            className="relative w-64 h-64 md:w-80 md:h-80"
            style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.02, 1],
            }}
            transition={{
              y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              scale: { duration: 10, repeat: Infinity, ease: [0.42, 0, 0.58, 1] },
            }}
          >
            <motion.img
              src="/portfoliospinner.avif"
              alt="Secret Sauce centerpiece"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                mixBlendMode: "normal",
                backgroundColor: "transparent",
              }}
              animate={{
                rotate: 360,
                y: [0, -8, 0],
                scale: [1, 1.02, 1],
              }}
              transition={{
                rotate: { duration: 50, repeat: Infinity, ease: "linear" },
                y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                scale: { duration: 10, repeat: Infinity, ease: [0.42, 0, 0.58, 1] },
              }}
            />
          </motion.div>
        </motion.div>

        {/* Typography Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-center mb-16 space-y-4"
        >
          {/* Label */}
          <p className="text-xs uppercase tracking-widest text-white/40 font-medium">
            MY SKILLS
          </p>

          {/* Main Heading */}
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-white drop-shadow-lg">The Secret</span>{" "}
            <motion.span
              className="bg-gradient-to-r from-pink-400 via-purple-400 to-pink-500 bg-clip-text text-transparent"
              style={{
                textShadow: "0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(168, 85, 247, 0.4)",
                filter: "drop-shadow(0 0 20px rgba(236, 72, 153, 0.5))",
              }}
              animate={
                isInView
                  ? {
                      backgroundPosition: ["0%", "100%", "0%"],
                    }
                  : {}
              }
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              Sauce
            </motion.span>
          </h2>
        </motion.div>

        {/* Skill Icons Grid - Converge/Diverge on Scroll */}
        <div className="w-full max-w-6xl mx-auto">
          <div 
            className="relative"
            style={{
              minHeight: "500px",
              width: "100%",
            }}
          >
            {skills.map((skill, index) => (
              <ScrollRevealIcon 
                key={skill.name} 
                skill={skill} 
                index={index}
                containerRef={containerRef}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Additional background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/3 to-transparent pointer-events-none" />
    </section>
  );
}
