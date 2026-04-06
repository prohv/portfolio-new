import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <HeroSection />
      </div>
      <ProjectsSection />
      <MarqueeSection />
    </main>
  );
}
