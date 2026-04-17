import { ScanLine, LineChart, Handshake, Truck, MapPinned, Users } from "lucide-react";

const features = [
  {
    icon: ScanLine,
    title: "AI & Image Recognition",
    desc: "Snap a photo of any crop — our AI identifies it and recommends the best nearby buyers and sourcing options.",
    accent: true,
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    desc: "Models trained on historical harvests and market trends tell you what to plant and when to sell.",
  },
  {
    icon: Handshake,
    title: "Direct & Transparent Marketplace",
    desc: "Real-time price tracking and direct contracting tools ensure fair, producer-to-buyer deals.",
  },
  {
    icon: Truck,
    title: "Truck Sharing System",
    desc: "Coordinate shared transportation across farms to drastically cut logistics costs and post-harvest losses.",
    accent: true,
  },
  {
    icon: MapPinned,
    title: "Product Heatmaps",
    desc: "Regional supply-and-demand heatmaps reveal market gaps, oversupply risks, and new opportunities.",
  },
  {
    icon: Users,
    title: "Community & Market Alignment",
    desc: "A live Buyer Demand Feed and Community Forum align production with what the market actually needs.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Features & Benefits
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground">
            Built for the modern <span className="text-gradient-harvest">Filipino farmer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Six powerful tools working together to put fair value back into every harvest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={`group relative p-7 rounded-3xl border transition-smooth hover:-translate-y-2 hover:shadow-elegant ${
                f.accent
                  ? "bg-gradient-grow border-transparent text-primary-foreground"
                  : "bg-card border-border hover:border-primary/40"
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-smooth group-hover:scale-110 ${
                  f.accent ? "bg-background/20 backdrop-blur" : "bg-gradient-harvest"
                }`}
              >
                <f.icon className={`w-7 h-7 ${f.accent ? "text-primary-foreground" : "text-accent-foreground"}`} />
              </div>
              <h3 className="font-display font-bold text-xl mb-2">{f.title}</h3>
              <p className={`text-sm leading-relaxed ${f.accent ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {f.desc}
              </p>
              <div
                className={`absolute top-7 right-7 font-display font-bold text-3xl opacity-20 ${
                  f.accent ? "text-primary-foreground" : "text-primary"
                }`}
              >
                0{i + 1}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
