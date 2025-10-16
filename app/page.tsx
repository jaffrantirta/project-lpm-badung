import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import BidangSection from "@/components/sections/BidangSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import Footer from "@/components/Footer";
import Carousel from "@/components/sections/Corausel";
import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";

export default function Home() {
  const images = ["/images/banner.jpg"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <FloatingWhatsAppButton />
      {/* <HeroSection /> */}
      <Carousel images={images} />
      <AboutSection />
      <BidangSection />
      <VisionMissionSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
