import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import SecretSauce from "@/components/sections/secret-sauce";
import AboutMe from "@/components/sections/about-me";
import ExperienceTimeline from "@/components/sections/experience-timeline";
import Work from "@/components/sections/work";
import SkillsMarquee from "@/components/sections/skills-marquee";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SecretSauce />
      <AboutMe />
      <ExperienceTimeline />
      <Work />
      <SkillsMarquee />
      <Footer />
    </main>
  );
}

