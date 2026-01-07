import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboutPreview = () => {
  return (
    <section id="about-preview" className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Label */}
          <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4">
            About
          </p>

          {/* Heading */}
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-8">
            Two decades of turning vision into measurable impact
          </h2>

          {/* Description */}
          <div className="space-y-6 mb-10">
            <p className="text-muted-foreground text-lg font-body font-light leading-relaxed">
              With over 20 years of experience across Fortune 500 companies and
              high-growth startups, I specialize in bridging the gap between
              strategic vision and operational excellence. My approach combines
              deep analytical rigor with human-centered design thinking.
            </p>
            <p className="text-muted-foreground text-lg font-body font-light leading-relaxed">
              I've had the privilege of advising C-suite executives, leading
              cross-functional teams, and driving transformational initiatives
              that have generated billions in enterprise value.
            </p>
          </div>

          {/* CTA */}
          <Button variant="goldGhost" size="lg" asChild className="group">
            <Link to="/experience" className="flex items-center gap-2">
              View Full Experience
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

export default AboutPreview;
