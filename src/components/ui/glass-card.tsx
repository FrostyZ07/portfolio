"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export default function GlassCard({
  children,
  className,
  hoverEffect = true,
  ...props
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl",
        "transition-all duration-300",
        hoverEffect && "hover:bg-white/[0.04] hover:border-white/[0.1]",
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : {}}
      {...props}
    >
      {children}
    </motion.div>
  );
}


