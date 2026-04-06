import { HeroSection } from "@/components/sections/HeroSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-1">
        <HeroSection />
      </div>
      <MarqueeSection />
    </main>
  );
}
