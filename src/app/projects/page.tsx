import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Work from "@/components/sections/work";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Work />
      </div>
      <Footer />
    </main>
  );
}

