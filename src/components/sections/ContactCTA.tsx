import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="section-spacing relative bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 heading-glow">
            Ready to elevate your{" "}
            <span className="text-gold-gradient">strategy</span>?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg font-body font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Let's discuss how strategic insight and innovative thinking can
            transform your organization's trajectory.
          </p>

          {/* CTA Button */}
          <Button variant="gold" size="xl" asChild className="group">
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
