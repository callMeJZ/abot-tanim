import { ArrowRight, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTASection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-hero p-10 md:p-16 text-center shadow-elegant">
          {/* Decorative */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-glow/30 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, hsl(var(--primary-foreground)) 1px, transparent 0)",
              backgroundSize: "24px 24px",
            }}
          />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-background/15 backdrop-blur border border-background/30 text-primary-foreground text-sm font-semibold">
              Let's grow together
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-6xl text-primary-foreground leading-tight">
              Ready to transform your <span className="text-gradient-harvest">agricultural supply chain?</span>
            </h2>
            <p className="text-lg text-primary-foreground/85 max-w-xl mx-auto">
              Join cooperatives, restaurants, and institutional buyers building a fairer, smarter Philippine agri-economy.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button variant="hero" size="xl">
                Get in Touch <ArrowRight />
              </Button>
              <Button variant="glass" size="xl">
                <CalendarCheck /> Book a Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
