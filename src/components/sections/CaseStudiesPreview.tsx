import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Digital Transformation for Global Retailer",
    category: "Strategy & Operations",
    impact: "47% increase in digital revenue",
    description:
      "Led a comprehensive digital transformation initiative for a Fortune 100 retail company, modernizing their e-commerce infrastructure and customer experience.",
  },
  {
    id: 2,
    title: "Market Expansion Strategy for FinTech Startup",
    category: "Growth Strategy",
    impact: "$120M Series C funding secured",
    description:
      "Developed and executed a market expansion strategy that positioned a high-growth fintech startup for successful Series C funding.",
  },
];

const CaseStudiesPreview = () => {
  return (
    <section className="section-spacing relative bg-card/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4">
            Case Studies
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground heading-glow">
            Featured work
          </h2>
        </div>

        {/* Case Studies */}
        <div className="max-w-5xl mx-auto space-y-8 mb-12">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="border-gold-gradient rounded-lg p-8 lg:p-10 group hover:bg-card/50 transition-all duration-500"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <p className="text-primary text-sm font-body tracking-wider uppercase mb-3">
                    {study.category}
                  </p>
                  <h3 className="font-display text-2xl md:text-3xl font-light text-foreground mb-4">
                    {study.title}
                  </h3>
                  <p className="text-muted-foreground font-body font-light leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="lg:text-right">
                  <p className="text-sm font-body tracking-wider uppercase text-muted-foreground mb-2">
                    Impact
                  </p>
                  <p className="font-display text-xl text-primary">
                    {study.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="goldOutline" size="lg" asChild className="group">
            <Link to="/case-studies" className="flex items-center gap-2">
              View All Case Studies
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

export default CaseStudiesPreview;
