import { Sprout, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 pb-12 border-b border-background/10">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-grow flex items-center justify-center">
                <Sprout className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-2xl">
                Abot<span className="text-gradient-harvest">Tanim</span>
              </span>
            </div>
            <p className="text-background/70 max-w-md">
              An AI-integrated digital marketplace empowering Filipino farmers and modernizing the Philippine agricultural sector — one fair harvest at a time.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-smooth"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" /> hello@abottanim.ph
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" /> +63 (02) 8123 4567
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <span>University of Cabuyao, Laguna, Philippines</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold mb-4">Explore</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li><a href="#features" className="hover:text-accent transition-smooth">Features</a></li>
              <li><a href="#value" className="hover:text-accent transition-smooth">Why AbotTanim</a></li>
              <li><a href="#contact" className="hover:text-accent transition-smooth">Request a Demo</a></li>
              <li><a href="#contact" className="hover:text-accent transition-smooth">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} AbotTanim. All rights reserved.</p>
          <p>Where Every Harvest is an Opportunity 🌾</p>
        </div>
      </div>
    </footer>
  );
};
