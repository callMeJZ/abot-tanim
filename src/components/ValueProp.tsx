import { ShieldCheck, Brain, TrendingUp } from "lucide-react";
import farmerImg from "@/assets/farmer-phone.jpg";

const points = [
  { icon: Brain, title: "AI-Driven Decisions", desc: "Smart recommendations from real market data, not guesswork." },
  { icon: ShieldCheck, title: "Risk Reduction", desc: "Predictive models that protect farmers from price volatility." },
  { icon: TrendingUp, title: "Higher Profitability", desc: "Direct contracting and shared logistics keep more value with the grower." },
];

export const ValueProp = () => {
  return (
    <section id="value" className="py-24 bg-gradient-soft">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute -inset-4 bg-gradient-harvest opacity-20 blur-2xl rounded-3xl" />
          <img
            src={farmerImg}
            alt="Filipino farmer using the AbotTanim mobile app in a rice field"
            className="relative rounded-3xl shadow-elegant w-full"
            loading="lazy"
            width={1200}
            height={900}
          />
          <div className="absolute -bottom-6 -right-6 bg-card border border-border rounded-2xl p-4 shadow-elegant max-w-[200px] hidden sm:block">
            <p className="text-xs text-muted-foreground">Average farmer income</p>
            <p className="font-display font-bold text-2xl text-primary">+38%</p>
            <p className="text-xs text-muted-foreground">in pilot regions</p>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/15 text-accent-foreground text-sm font-semibold border border-accent/30">
            Our Value
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground leading-tight">
            More Than Just a <span className="text-gradient-harvest">Marketplace</span>.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            AbotTanim is not merely a digital listing platform. We actively integrate artificial intelligence and data-driven tools to <strong className="text-foreground">reduce farming risks</strong> and improve overall <strong className="text-foreground">profitability</strong> for everyone in the supply chain.
          </p>

          <div className="space-y-4 pt-2">
            {points.map((p) => (
              <div key={p.title} className="flex gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-smooth">
                <div className="w-12 h-12 rounded-xl bg-gradient-grow flex items-center justify-center shrink-0">
                  <p.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
