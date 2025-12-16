# Master Project Blueprint: The "Neural Glass" Portfolio
**Role:** Senior Frontend Architect
**Client:** Thanmay M Shetty (AIML Engineer)
**Reference Aesthetic:** [aayushbharti.in](https://aayushbharti.in)
**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, Lucide React.

---

## 1. Project Initialization & Configuration

### A. File Structure
Ensure the project follows this exact structure:
```text
src/
├── app/
│   ├── globals.css         // CSS Variables + Noise Utility
│   ├── layout.tsx          // Root Layout (Geist Font + Metadata)
│   └── page.tsx            // Main Page Composition
├── components/
│   ├── ui/                 // Atomic Design Elements
│   │   ├── glass-card.tsx  // Base surface component
│   │   ├── badge.tsx       // Skill/Tech pill
│   │   ├── button.tsx      // Primary/Secondary buttons
│   │   └── text-reveal.tsx // Shuffle/Decode effect
│   ├── layout/
│   │   ├── navbar.tsx      // Floating dock
│   │   ├── footer.tsx      // Contact section
│   │   └── container.tsx   // Max-width wrapper
│   └── sections/
│       ├── hero.tsx
│       ├── skills-marquee.tsx
│       ├── projects-bento.tsx
│       └── timeline.tsx
├── lib/
│   ├── utils.ts            // cn() helper
│   └── data.ts             // Structured content (Types + Data)
└── hooks/
    └── use-mouse-position.ts // For spotlight effects
    B. Tailwind Configuration (tailwind.config.ts)
Extend the theme with these specific values to achieve the "Deep Space" look:

Colors:

background: #030303

surface: #0A0A0A

glass: rgba(255, 255, 255, 0.02)

glass-border: rgba(255, 255, 255, 0.08)

accent-primary: #38BDF8 (Sky-400)

accent-secondary: #818CF8 (Indigo-400)

Animation:

marquee: marquee 40s linear infinite

spotlight: spotlight 2s ease .75s 1 forwards

C. Global CSS (globals.css)
Add a noise texture utility class:
.bg-noise {
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='[http://www.w3.org/2000/svg'%3E%3Cfilter](http://www.w3.org/2000/svg'%3E%3Cfilter) id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

2. Core Components Specification
A. GlassCard (The Surface)
Props: className, children, hoverEffect? (boolean)

Styles:

Base: bg-white/[0.02] backdrop-blur-xl border border-white/[0.05] rounded-2xl

Hover: hover:bg-white/[0.04] hover:border-white/[0.1] transition-all duration-300

Motion: Use framer-motion to add a subtle y: -5 lift on hover.

B. Navbar (The Floating Dock)
Position: Fixed, bottom-8 or top-6 (Centered horizontally).

Design: A "pill" shape (rounded-full).

Glass: Higher blur (backdrop-blur-2xl) and slightly lighter border.

Items: [Home, Work, Journey, Notes].

Interaction: layoutId underline animation for the active tab.

C. TextReveal (The Decryption Effect)
Logic:

Accept a text string prop.

On mount, start a timer.

Iterate through the string, replacing characters with random symbols (!@#$%^&*) before settling on the correct character.

Speed: 50ms per character.

3. Section-by-Section Implementation Blueprint
SECTION 1: HERO
Layout: Flex Column, Centered.

Elements:

Badge: nav-green pulsing dot + text "Open to Work".

H1: "Thanmay M Shetty" (wrapped in TextReveal).

H2/Sub: "Engineering Intelligence." (Grey text).

Abstract: (See Data Section).

CTA Group:

Primary Button: "Resume" (White bg, black text, hover invert).

Social Icons: GitHub, LinkedIn (Lucide Icons, hover scale 1.1).

Background: Use useMousePosition to render a radial-gradient that follows the cursor, revealing the noise texture behind it.

SECTION 2: SKILLS MARQUEE
Design: Two horizontal rows moving in opposite directions.

Row 1 (Languages/Core): Python, C++, Java, TypeScript, SQL.

Row 2 (AI/Frameworks): TensorFlow, PyTorch, Next.js, Docker, AWS, LangChain.

Visual: Text should be large (text-4xl), font-weight bold, with opacity-20. When hovered, opacity jumps to 100 and color shifts to accent-primary.

SECTION 3: PROJECTS (Bento Grid)
Grid Layout: CSS Grid with grid-cols-1 md:grid-cols-3.

Card 1 (BioBloom): Spans 2 columns (md:col-span-2).

Content: Large title, list of features (RAG, Vision, Blockchain).

Card 2 (FloatChat): Spans 1 column.

Content: Focus on the "Llama 3" and "NetCDF" tech stack.

Interactivity:

Wrap cards in GlassCard.

Add an "External Link" icon to the top right.

SECTION 4: TIMELINE (The Neural Path)
Structure:

Left column: Sticky Year (e.g., "2024").

Right column: Content Card.

Divider: A vertical line (w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent).

Motion: Use useScroll to trigger opacity: 1 on the timeline items as they reach the center of the viewport.
4. Data Dictionary (Copy into lib/data.ts)
export const DATA = {
  hero: {
    name: "Thanmay M Shetty",
    role: "AIML Engineer",
    abstract: "I bridge the gap between abstract algorithms and tangible solutions. Specializing in Generative AI, RAG Architectures, and full-stack engineering.",
  },
  projects: [
    {
      title: "BioBloom",
      category: "Agri-Tech AI",
      description: "A unified AI ecosystem solving fragmentation in agriculture.",
      features: ["RAG-based Crop Rotation", "Biowaste Optimization Agent", "Blockchain Supply Chain"],
      stack: ["Python", "LangChain", "Solidity", "React"],
      link: "#",
      size: "large" // helper for bento grid span
    },
    {
      title: "FloatChat",
      category: "Oceanographic Intelligence",
      description: "Decoding the Indian Ocean via ARGO float data.",
      features: ["NetCDF Data RAG", "Natural Language Interface"],
      stack: ["Llama 3", "Pinecone", "Next.js"],
      link: "#",
      size: "small"
    }
  ],
  timeline: [
    {
      year: "2024",
      role: "IEEE CIS Treasurer",
      org: "IEEE",
      desc: "Managed financial allocation and leadership for technical events."
    },
    {
      year: "2023",
      role: "Hackathon Winner",
      org: "RNSIT",
      desc: "Built rapid prototype for smart city logistics."
    },
    {
      year: "2023",
      role: "Hackathon Winner",
      org: "KSEEM",
      desc: "Created AI solution for waste segregation."
    }
  ]
}
5. Implementation Prompt for Cursor
Prompt: "Read portfolio_master_spec.md. You are the Lead Developer.

Initialize the project with the specified file structure.

Setup the Tailwind config and Global CSS first.

Create the lib/data.ts file.

Build the GlassCard and Navbar components.

Then, construct the page.tsx section by section. Focus on pixel-perfect implementation of the glassmorphism and motion details."