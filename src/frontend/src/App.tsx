import { CTASection } from "@/components/CTASection";
import { CelebritySection } from "@/components/CelebritySection";
import { FAQSection } from "@/components/FAQSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { LocationSection } from "@/components/LocationSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Suspense } from "react";

function LoadingScreen() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: "#FDF6EC" }}
    >
      <div
        className="w-16 h-16 rounded-xl flex items-center justify-center font-display font-black text-lg mb-4 animate-pulse"
        style={{
          background: "linear-gradient(135deg, #8B5E3C, #C4956A)",
          color: "#FDF6EC",
          boxShadow: "0 0 40px rgba(139,94,60,0.5)",
        }}
      >
        CP
      </div>
      <p
        className="text-sm font-medium tracking-widest uppercase"
        style={{ color: "rgba(139,94,60,0.75)" }}
      >
        Loading...
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ background: "#FDF6EC" }}
    >
      <Header />
      <Suspense fallback={<LoadingScreen />}>
        <main>
          <HeroSection />
          <ServicesSection />
          <GallerySection />
          <CelebritySection />
          <ReviewsSection />
          <WhyChooseUs />
          <FAQSection />
          <LocationSection />
          <CTASection />
        </main>
      </Suspense>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
