# Neural Glass Portfolio

A high-end, interactive portfolio website with exotic clean glassmorphism design, built for Thanmay M Shetty (AIML Engineering Student).

## Features

- **Mouse Spotlight**: Reactive gradient that follows cursor movement
- **Glassmorphism Design**: Clean glass surfaces with backdrop blur
- **Text Reveal Effect**: Decryption animation for hero name
- **Skills Marquee**: Two rows moving in opposite directions
- **Bento Grid Projects**: Asymmetric grid layout for featured work
- **Neural Timeline**: Scroll-triggered gradient fill on vertical timeline
- **Floating Dock Navbar**: MacOS-style floating navigation

## Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS (custom glassmorphism config)
- Framer Motion
- Lucide React Icons

## Design System

- **Background**: Deep black (#030303)
- **Surface**: #0A0A0A
- **Glass**: rgba(255, 255, 255, 0.02) with backdrop-blur-xl
- **Accent Colors**: Sky-400 (#38BDF8) and Indigo-400 (#818CF8)
- **Noise Texture**: SVG film grain overlay

## Project Structure

```
src/
├── app/
│   ├── globals.css         # CSS Variables + Noise Utility
│   ├── layout.tsx          # Root Layout
│   └── page.tsx            # Main Page Composition
├── components/
│   ├── ui/                 # Atomic Design Elements
│   │   ├── glass-card.tsx
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── text-reveal.tsx
│   ├── layout/
│   │   ├── navbar.tsx      # Floating dock
│   │   ├── footer.tsx
│   │   └── container.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── skills-marquee.tsx
│       ├── projects-bento.tsx
│       ├── timeline.tsx
│       └── notes.tsx
├── lib/
│   ├── utils.ts
│   └── data.ts             # Structured content
└── hooks/
    └── use-mouse-position.ts
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## License

MIT


