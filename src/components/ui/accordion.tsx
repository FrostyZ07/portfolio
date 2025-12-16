"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface AccordionItemProps {
  value: string;
  title: string;
  children: React.ReactNode;
}

interface AccordionProps {
  type?: "single" | "multiple";
  defaultValue?: string;
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  value: string | string[];
  setValue: (value: string) => void;
  type: "single" | "multiple";
}>({
  value: "",
  setValue: () => {},
  type: "single",
});

export function Accordion({ type = "single", defaultValue, children }: AccordionProps) {
  const [value, setValue] = React.useState<string | string[]>(
    type === "multiple" ? [] : defaultValue || ""
  );

  const handleSetValue = React.useCallback(
    (itemValue: string) => {
      if (type === "multiple") {
        setValue((prev) => {
          const prevArray = Array.isArray(prev) ? prev : [];
          return prevArray.includes(itemValue)
            ? prevArray.filter((v) => v !== itemValue)
            : [...prevArray, itemValue];
        });
      } else {
        setValue(value === itemValue ? "" : itemValue);
      }
    },
    [type, value]
  );

  return (
    <AccordionContext.Provider value={{ value, setValue: handleSetValue, type }}>
      <div className="space-y-2">{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({ value, title, children }: AccordionItemProps) {
  const { value: contextValue, setValue } = React.useContext(AccordionContext);
  const isOpen =
    typeof contextValue === "string"
      ? contextValue === value
      : contextValue.includes(value);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setValue(value)}
        className="w-full flex items-center justify-between py-4 text-left group"
      >
        <span className="text-lg font-semibold text-white group-hover:text-white/80 transition-colors">
          {title}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-white/50" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-4 text-white/70 leading-relaxed">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


