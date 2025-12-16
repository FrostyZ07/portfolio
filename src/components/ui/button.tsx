"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  href?: string;
  download?: boolean;
}

export default function Button({
  children,
  className,
  variant = "primary",
  onClick,
  href,
  download,
}: ButtonProps) {
  const baseStyles =
    "px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center gap-2";

  const variantStyles = {
    primary: "bg-white text-background hover:bg-white/90",
    secondary: "bg-white/[0.05] text-white border border-white/[0.1] hover:bg-white/[0.1]",
  };

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variantStyles[variant], className)}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variantStyles[variant], className)}
      >
        {children}
      </motion.a>
    );
  }

  return content;
}


