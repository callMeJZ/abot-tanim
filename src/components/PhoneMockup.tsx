import { TrendingUp, Leaf, ArrowUpRight, Sparkles } from "lucide-react";

export const PhoneMockup = () => {
  return (
    <div className="relative mx-auto w-[280px] sm:w-[320px] animate-float">
      {/* Glow */}
      <div className="absolute -inset-8 bg-gradient-harvest opacity-30 blur-3xl rounded-full" />

      {/* Phone frame */}
      <div className="relative rounded-[3rem] bg-foreground p-3 shadow-elegant">
        <div className="rounded-[2.5rem] overflow-hidden bg-background">
          {/* Notch */}
          <div className="relative h-7 bg-foreground">
            <div className="absolute left-1/2 -translate-x-1/2 top-1.5 w-24 h-5 bg-foreground rounded-full" />
          </div>

          {/* App content */}
          <div className="bg-gradient-soft p-5 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-muted-foreground">Magandang umaga,</p>
                <p className="font-display font-bold text-foreground">Mang Juan 🌾</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-grow flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>

            {/* Price card */}
            <div className="bg-gradient-grow rounded-2xl p-4 text-primary-foreground shadow-card">
              <p className="text-xs opacity-90">Today's Best Price</p>
              <div className="flex items-end justify-between mt-1">
                <p className="text-3xl font-display font-bold">₱48<span className="text-base opacity-80">/kg</span></p>
                <div className="flex items-center gap-1 bg-accent/30 px-2 py-1 rounded-full">
                  <TrendingUp className="w-3 h-3" />
                  <span className="text-xs font-bold">+12%</span>
                </div>
              </div>
              <p className="text-xs opacity-90 mt-1">Palay · Laguna region</p>
            </div>

            {/* Listings */}
            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Active Buyers</p>
              {[
                { name: "Mayani Co-op", crop: "Tomato · 200kg", price: "₱65" },
                { name: "Fresh MNL", crop: "Bell Pepper · 80kg", price: "₱120" },
              ].map((b) => (
                <div key={b.name} className="flex items-center justify-between p-3 rounded-xl bg-card border border-border">
                  <div>
                    <p className="text-sm font-semibold text-foreground">{b.name}</p>
                    <p className="text-xs text-muted-foreground">{b.crop}</p>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-bold text-sm">
                    {b.price}<ArrowUpRight className="w-3 h-3" />
                  </div>
                </div>
              ))}
            </div>

            {/* AI chip */}
            <div className="flex items-center gap-2 p-3 rounded-xl bg-accent/15 border border-accent/30">
              <div className="w-8 h-8 rounded-full bg-gradient-harvest flex items-center justify-center shrink-0">
                <Sparkles className="w-4 h-4 text-accent-foreground" />
              </div>
              <p className="text-xs text-foreground">AI: Plant <strong>kalabasa</strong> next month — demand up 34%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
