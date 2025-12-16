"use client";

import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent";
}

export default function Badge({ children, className, variant = "default" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
        variant === "default"
          ? "bg-white/[0.05] text-white/70 border border-white/[0.1]"
          : "bg-accent-primary/20 text-accent-primary border border-accent-primary/30",
        className
      )}
    >
      {children}
    </span>
  );
}


