import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Digital Transformation for Global Retailer",
    category: "Strategy & Operations",
    impact: "47% increase in digital revenue",
    problem:
      "A Fortune 100 retail company was struggling to compete with digital-native competitors. Their legacy technology infrastructure and siloed organizational structure were preventing them from delivering seamless customer experiences.",
    solution:
      "I led a comprehensive digital transformation initiative that included redesigning their e-commerce platform, implementing a unified customer data strategy, and restructuring teams around customer journeys rather than channels.",
    tools: [
      "Customer Journey Mapping",
      "Agile Transformation",
      "Change Management",
      "Data Strategy",
    ],
    results: [
      "47% increase in digital revenue within 18 months",
      "35% improvement in customer satisfaction scores",
      "50% reduction in time-to-market for new features",
      "Successfully integrated online and offline experiences",
    ],
  },
  {
    id: 2,
    title: "Market Expansion Strategy for FinTech Startup",
    category: "Growth Strategy",
    impact: "$120M Series C funding secured",
    problem:
      "A high-growth fintech company had achieved product-market fit in their initial market but lacked a clear strategy for international expansion. Investors were hesitant to commit to Series C without a compelling growth narrative.",
    solution:
      "Developed a comprehensive market expansion strategy that identified priority markets, defined entry approaches, and created a scalable operating model. Worked closely with leadership to articulate the vision to investors.",
    tools: [
      "Market Analysis",
      "Financial Modeling",
      "Competitive Intelligence",
      "Investor Communications",
    ],
    results: [
      "Successfully secured $120M Series C funding",
      "Launched in 3 new markets within 12 months",
      "300% increase in total addressable market",
      "Established strategic partnerships in each new market",
    ],
  },
  {
    id: 3,
    title: "Operational Turnaround for Manufacturing Company",
    category: "Operational Excellence",
    impact: "28% margin improvement",
    problem:
      "A mid-sized manufacturing company was experiencing declining margins due to inefficient operations, quality issues, and an outdated production approach. The company needed to modernize while maintaining continuous operations.",
    solution:
      "Implemented a phased operational transformation program that included lean manufacturing principles, predictive maintenance systems, and workforce upskilling initiatives.",
    tools: [
      "Lean Six Sigma",
      "Predictive Analytics",
      "Change Management",
      "Performance Management",
    ],
    results: [
      "28% improvement in operating margins",
      "40% reduction in quality defects",
      "25% increase in production capacity",
      "Transformed company culture toward continuous improvement",
    ],
  },
  {
    id: 4,
    title: "Leadership Team Transformation for Healthcare Organization",
    category: "Leadership Development",
    impact: "Employee engagement up 40%",
    problem:
      "A regional healthcare system was experiencing high executive turnover, low employee engagement, and inconsistent performance across facilities. The organization needed to build a cohesive leadership team and culture.",
    solution:
      "Designed and facilitated a comprehensive leadership development program that included executive coaching, team effectiveness workshops, and a new performance management framework aligned with organizational values.",
    tools: [
      "360 Assessments",
      "Executive Coaching",
      "Team Building",
      "Culture Transformation",
    ],
    results: [
      "40% improvement in employee engagement scores",
      "85% retention of leadership team over 3 years",
      "Consistent performance metrics across all facilities",
      "Recognized as 'Best Place to Work' in healthcare sector",
    ],
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4 fade-in">
              Case Studies
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 fade-in fade-in-delay-1 heading-glow">
              Results that speak{" "}
              <span className="text-gold-gradient">for themselves</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed fade-in fade-in-delay-2">
              A selection of engagements that demonstrate my approach to solving
              complex business challenges and delivering measurable impact.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-5xl mx-auto space-y-16">
            {caseStudies.map((study, index) => (
              <article
                key={study.id}
                className="border-gold-gradient rounded-lg p-8 lg:p-12"
              >
                {/* Header */}
                <div className="mb-10">
                  <p className="text-primary text-sm font-body tracking-wider uppercase mb-3">
                    {study.category}
                  </p>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4">
                    {study.title}
                  </h2>
                  <p className="inline-block px-4 py-2 bg-primary/10 text-primary font-body text-sm rounded">
                    {study.impact}
                  </p>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-10">
                  {/* Problem */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                      <span className="text-primary">—</span> The Challenge
                    </h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">
                      {study.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4 flex items-center gap-2">
                      <span className="text-primary">—</span> The Approach
                    </h3>
                    <p className="text-muted-foreground font-body font-light leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Tools & Results */}
                <div className="grid md:grid-cols-2 gap-10 mt-10 pt-10 border-t border-border">
                  {/* Tools */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4">
                      Methodologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-3 py-1 border border-border text-muted-foreground font-body text-sm rounded"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-4">
                      Key Results
                    </h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                        >
                          <span className="text-primary mt-0.5">✓</span>
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Let's create your success story
            </h2>
            <p className="text-muted-foreground text-lg font-body font-light mb-10">
              Every challenge is unique. Let's discuss how I can help you achieve
              your goals.
            </p>
            <Button variant="gold" size="xl" asChild className="group">
              <Link to="/contact" className="flex items-center gap-2">
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
    </Layout>
  );
};

export default CaseStudies;
