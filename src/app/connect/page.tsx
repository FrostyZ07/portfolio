import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Connect from "@/components/sections/connect";

export default function ConnectPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-24">
        <Connect />
      </div>
      <Footer />
    </main>
  );
}


