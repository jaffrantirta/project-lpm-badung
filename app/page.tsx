import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import TasksSection from "@/components/sections/TasksSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";
import StatisticsSection from "@/components/sections/StatisticsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TasksSection />
      <VisionMissionSection />
      <StatisticsSection />
      <Footer />
    </div>
  );
}
