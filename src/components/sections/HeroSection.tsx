import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about-preview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Overline */}
          <p className="fade-in text-muted-foreground text-sm font-body tracking-[0.3em] uppercase mb-6">
            Strategic Consultant & Advisor
          </p>

          {/* Name */}
          <h1 className="fade-in fade-in-delay-1 font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-wide mb-6">
            <span className="text-gold-gradient">Alexander</span>
            <br />
            <span className="text-foreground">Mitchell</span>
          </h1>

          {/* Value Statement */}
          <p className="fade-in fade-in-delay-2 text-muted-foreground text-lg md:text-xl font-body font-light max-w-2xl mx-auto mb-12 leading-relaxed">
            Transforming complex challenges into elegant solutions through
            strategic insight and innovative leadership.
          </p>

          {/* CTA Buttons */}
          <div className="fade-in fade-in-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="gold" size="xl" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button variant="goldOutline" size="xl" asChild>
              <Link to="/case-studies">View Work</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300 animate-bounce"
        aria-label="Scroll to content"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
