"use client";

import { useEffect, useState } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  speed?: number;
}

const symbols = "!@#$%^&*";

export default function TextReveal({ text, className = "", speed = 50 }: TextRevealProps) {
  const [displayText, setDisplayText] = useState<string>(
    text
      .split("")
      .map(() => symbols[Math.floor(Math.random() * symbols.length)])
      .join("")
  );
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete) return;

    let iterations = 0;
    const maxIterations = text.length;

    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iterations) {
              return char;
            }
            if (char === " ") {
              return " ";
            }
            return symbols[Math.floor(Math.random() * symbols.length)];
          })
          .join("")
      );

      iterations += 1;

      if (iterations >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
        setIsComplete(true);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isComplete]);

  return <span className={className}>{displayText}</span>;
}


