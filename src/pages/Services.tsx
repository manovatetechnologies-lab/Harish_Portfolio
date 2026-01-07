import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Compass,
  TrendingUp,
  Users,
  Lightbulb,
  Target,
  Layers,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Strategic Advisory",
    description:
      "Navigate complex business landscapes with clarity and confidence. I partner with executive teams to develop actionable strategies that align vision with execution.",
    features: [
      "Strategic planning and roadmap development",
      "Market analysis and competitive positioning",
      "Business model innovation",
      "M&A strategy and integration",
    ],
  },
  {
    icon: TrendingUp,
    title: "Growth Strategy",
    description:
      "Unlock sustainable growth through data-driven market strategies. From market entry to scaling operations, I help organizations achieve their ambitious growth targets.",
    features: [
      "Market entry and expansion strategy",
      "Revenue optimization",
      "Customer acquisition frameworks",
      "Partnership and channel development",
    ],
  },
  {
    icon: Users,
    title: "Leadership Development",
    description:
      "Build high-performing teams that deliver exceptional results. I work with leaders at all levels to develop the skills and mindsets needed to drive organizational success.",
    features: [
      "Executive coaching and mentorship",
      "Team effectiveness workshops",
      "Organizational culture transformation",
      "Succession planning",
    ],
  },
  {
    icon: Lightbulb,
    title: "Innovation Consulting",
    description:
      "Transform emerging opportunities into competitive advantages. I help organizations build innovation capabilities that fuel long-term success.",
    features: [
      "Innovation strategy and governance",
      "Design thinking facilitation",
      "Digital transformation advisory",
      "Emerging technology assessment",
    ],
  },
  {
    icon: Target,
    title: "Operational Excellence",
    description:
      "Optimize operations for efficiency and effectiveness. I identify and eliminate bottlenecks while building sustainable processes that scale.",
    features: [
      "Process optimization and automation",
      "Performance management systems",
      "Cost reduction strategies",
      "Quality improvement initiatives",
    ],
  },
  {
    icon: Layers,
    title: "Board Advisory",
    description:
      "Provide strategic counsel to boards and executive committees. I bring an objective perspective to governance, risk, and strategic decision-making.",
    features: [
      "Board effectiveness reviews",
      "Risk and governance frameworks",
      "Strategic committee facilitation",
      "Investor relations strategy",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4 fade-in">
              Services
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 fade-in fade-in-delay-1">
              Strategic expertise for{" "}
              <span className="text-gold-gradient">transformative growth</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed fade-in fade-in-delay-2">
              I partner with organizations at critical inflection points, bringing
              deep expertise and a proven track record to drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="border-gold-gradient rounded-lg p-8 lg:p-12 group hover:bg-card/50 transition-all duration-500"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Icon and Title */}
                  <div className="lg:w-1/3">
                    <service.icon
                      size={40}
                      className="text-primary mb-6 transition-all duration-300 group-hover:text-gold-glow"
                    />
                    <h2 className="font-display text-2xl md:text-3xl font-light text-foreground">
                      {service.title}
                    </h2>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3">
                    <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                        >
                          <span className="text-primary mt-1">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Ready to discuss your challenges?
            </h2>
            <p className="text-muted-foreground text-lg font-body font-light mb-10">
              Every engagement begins with understanding your unique situation.
            </p>
            <Button variant="gold" size="xl" asChild className="group">
              <Link to="/contact" className="flex items-center gap-2">
                Schedule a Consultation
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
