import FloatingWhatsAppButton from "@/components/FloatingWhatsAppButton";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import HeroStructureSection from "@/components/sections/structure/HeroStructureSection";
import OrgaizationStructureSection from "@/components/sections/structure/OrgaizationStructureSection";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navigation />
      <FloatingWhatsAppButton />
      <HeroStructureSection />
      <OrgaizationStructureSection />
      <Footer />
    </div>
  );
}
