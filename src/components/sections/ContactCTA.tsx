import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ContactCTA = () => {
  return (
    <section className="pt-24 pb-16 relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 heading-glow">
            Ready to move from{" "}
            <span className="text-gold-gradient">strategy to execution</span>?
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            Let’s explore how structured execution, clear priorities, and
            outcome-driven decision-making can accelerate meaningful business
            results.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            className="
              rounded-full
              px-10 py-6
              text-base font-medium
              bg-primary text-primary-foreground
              gold-glow
              transition-all duration-300
              hover:scale-[1.04]
            "
          >
            <Link to="/contact" className="flex items-center gap-3">
              Start the Conversation
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
