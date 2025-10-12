import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProgramHeroSection from "@/components/sections/program/ProgramHeroSection";
import ProgramFilterSection from "@/components/sections/program/ProgramFilterSection";
import ProgramSection from "@/components/sections/program/ProgramSection";

export const metadata = {
  title: "LPM Kabupaten Badung - Tentang Kami",
  description:
    "Mengenal lebih dekat Lembaga Pemberdayaan Masyarakat Kabupaten Badung",
};

export default function ProgramPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <ProgramHeroSection />
      <ProgramFilterSection />
      <ProgramSection />
      <Footer />
    </div>
  );
}
