"use client";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import AboutMe from "@/components/sections/about-me";
import ExperienceTimeline from "@/components/sections/experience-timeline";
import BentoPlayground from "@/components/sections/bento-playground";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <AboutMe />
      <ExperienceTimeline />
      <BentoPlayground />
      <Footer />
    </main>
  );
}
