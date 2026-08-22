import Navbar from "@/components/layout/Navbar";
import LandingPage from "@/components/sections/LandingPage";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent text-[#1d1d1f] dark:text-zinc-50 selection:bg-[#0066cc] selection:text-white flex flex-col font-sans transition-colors">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
