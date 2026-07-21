import Navbar from "@/components/Navbar";
import LandingPage from "@/components/LandingPage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f] selection:bg-[#0066cc] selection:text-white flex flex-col font-sans overflow-hidden">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}
