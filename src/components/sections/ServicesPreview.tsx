import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Lightbulb, TrendingUp, Users, Compass } from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description:
      "Navigate complex business landscapes with clarity and confidence.",
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Unlock sustainable growth through data-driven market strategies.",
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Build high-performing teams that deliver exceptional results.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description:
      "Transform emerging opportunities into competitive advantages.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4">
            Services
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
            How I can help you succeed
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gold p-8 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon
                size={32}
                className="text-primary mb-6 transition-all duration-300 group-hover:text-gold-glow"
              />
              <h3 className="font-display text-xl md:text-2xl font-light text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="goldOutline" size="lg" asChild className="group">
            <Link to="/services" className="flex items-center gap-2">
              View All Services
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

export default ServicesPreview;
