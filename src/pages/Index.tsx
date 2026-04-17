import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ValueProp } from "@/components/ValueProp";
import { Features } from "@/components/Features";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <h1 className="sr-only">AbotTanim — AI-integrated digital marketplace for Filipino farmers</h1>
      <Hero />
      <ValueProp />
      <Features />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
