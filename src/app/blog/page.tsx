import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Notes from "@/components/sections/notes";

export default function BlogPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-16">
        <Notes />
      </div>
      <Footer />
    </main>
  );
}


