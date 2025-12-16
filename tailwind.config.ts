import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#030303",
        surface: "#0A0A0A",
        glass: "rgba(255, 255, 255, 0.02)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
        "accent-primary": "#38BDF8",
        "accent-secondary": "#818CF8",
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        spotlight: "spotlight 2s ease 0.75s 1 forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-33.333%)" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

