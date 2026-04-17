import { ArrowRight, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PhoneMockup } from "./PhoneMockup";
import heroBg from "@/assets/hero-farm.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1600} height={1100} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-accent/40" />
      </div>

      {/* Decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />

      <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="text-primary-foreground space-y-7 animate-fade-in">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/15 backdrop-blur-md border border-background/30 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            AI-Powered Agri Marketplace · Philippines
          </span>

          <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05]">
            Where Every Harvest is an{" "}
            <span className="text-gradient-harvest">Opportunity</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl leading-relaxed">
            AbotTanim is an AI-integrated digital marketplace that directly connects Filipino farmers with buyers — minimizing middlemen, maximizing income, and modernizing agriculture.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Request a Demo <ArrowRight className="ml-1" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">
                <PlayCircle /> Contact Us
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-6 text-primary-foreground/85">
            {[
              { n: "7.4M", l: "Filipino farmers" },
              { n: "90K", l: "Early target users" },
              { n: "0", l: "Middlemen needed" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-bold text-2xl md:text-3xl text-accent-glow">{s.n}</p>
                <p className="text-xs uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animate-scale-in">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
};
