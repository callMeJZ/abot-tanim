import { useEffect, useState } from "react";
import { Sprout, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#features", label: "Features" },
  { href: "#value", label: "Why AbotTanim" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-18 py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-grow flex items-center justify-center shadow-card group-hover:scale-110 transition-smooth">
            <Sprout className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl text-foreground">
            Abot<span className="text-gradient-harvest">Tanim</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-smooth">
              {l.label}
            </a>
          ))}
          <Button variant="hero" size="sm" asChild>
            <a href="#contact">Request a Demo</a>
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-foreground/80 font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contact">Request a Demo</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
