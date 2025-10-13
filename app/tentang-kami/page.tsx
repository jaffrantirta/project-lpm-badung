// app/tentang-kami/page.tsx
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AboutHeroSection from "@/components/sections/about/AboutHeroSection";
import HistorySection from "@/components/sections/about/HistorySection";
import TasksFunctionsSection from "@/components/sections/about/TasksFunctionsSection";
import OrganizationStructureSection from "@/components/sections/about/OrganizationStructureSection";
import OrganizationalValuesSection from "@/components/sections/about/OrganizationalValuesSection";
import AchievementsSection from "@/components/sections/about/AchievementsSection";
import VisionMissionSection from "@/components/sections/VisionMissionSection";

export const metadata = {
  title: "LPM Kabupaten Badung - Tentang Kami",
  description:
    "Mengenal lebih dekat Lembaga Pemberdayaan Masyarakat Kabupaten Badung",
};

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <AboutHeroSection />
      <HistorySection />
      <VisionMissionSection />
      <TasksFunctionsSection />
      <OrganizationStructureSection />
      <OrganizationalValuesSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
}
