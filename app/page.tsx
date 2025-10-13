import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TasksSection from "@/components/sections/TasksSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import Footer from "@/components/Footer";
import Carousel from "@/components/sections/Corausel";

export default function Home() {
  const images = ["/images/banner.jpg"];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <HeroSection />
      <Carousel images={images} />
      <AboutSection />
      <TasksSection />
      <VisionMissionSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
