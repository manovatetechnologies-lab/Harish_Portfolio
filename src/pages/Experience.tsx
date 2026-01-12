import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SkillsSection from "@/components/sections/SkillSection";

/* ================= DATA ================= */

const experiences = [
  {
    id: 1,
    company: "SoftServe Hub",
    role: "Founder & Director",
    period: "Aug 2022 – Present · 3 yrs 6 mos",
    location: "Chennai, Tamilnadu, India",
    summary:
      "Founded and scaled SoftServe Hub into a multi-disciplinary technology partner delivering AI-driven products, automation systems, and data-led business solutions for global clients.",
    bullets: [
      "Founded SoftServe Hub and scaled operations across multiple industries and geographies",
      "Defined company vision, service offerings, and long-term growth strategy",
      "Led end-to-end delivery of AI, automation, and product engineering engagements",
      "Designed scalable operating models for engineering, delivery, and client success teams",
      "Partnered directly with founders, CXOs, and leadership teams on digital transformation",
      "Oversaw solution architecture, execution quality, and delivery governance",
      "Built long-term client relationships through outcome-driven engagement models",
      "Drove measurable ROI through automation, analytics, and workflow optimization",
      "Established internal standards for execution discipline, accountability, and growth",
    ],
  },
  {
    id: 2,
    company: "SoftServe Hub",
    role: "Angel Investor & Strategic Partner",
    period: "Sep 2024 – Present · 1 yr 5 mos",
    location: "Chennai, Tamil Nadu, India",
    summary:
      "Active angel investor and strategic partner supporting early-stage and growth-stage ventures with capital, execution guidance, and operational advisory.",
    bullets: [
      "Invests in AI, SaaS, automation, and digital-first technology ventures",
      "Provides early-stage and growth capital aligned with long-term value creation",
      "Advises founders on go-to-market strategy, execution planning, and scale readiness",
      "Supports leadership teams in building operational and delivery discipline",
      "Guides product positioning, pricing strategy, and customer acquisition planning",
      "Helps founders avoid execution bottlenecks during rapid growth phases",
      "Acts as a long-term strategic partner rather than a passive investor",
      "Focuses on sustainable growth, governance, and founder-led decision-making",
      "Strengthens investor-founder alignment through hands-on involvement",
    ],
  },
  {
    id: 3,
    company: "Manovate Technologies",
    role: "Business Operations & Client Strategy Manager",
    period: "Nov 2025 – Present",
    location: "Chennai, Tamil Nadu, India · On-site",
    summary:
      "Leading business operations, delivery oversight, and client strategy functions to ensure consistent execution, strong partnerships, and scalable growth across enterprise engagements.",
    bullets: [
      "Owns business operations, delivery coordination, and client strategy initiatives",
      "Drives execution excellence across cross-functional and multi-disciplinary teams",
      "Aligns operational processes with long-term business and client objectives",
      "Manages key enterprise client relationships and strategic engagements",
      "Improves delivery efficiency through process optimization and governance",
      "Supports leadership in planning growth, capacity, and delivery scalability",
      "Ensures consistent quality, timelines, and accountability across projects",
      "Acts as a bridge between leadership, delivery teams, and client stakeholders",
      "Strengthens trust and retention through structured communication and execution",
    ],
  },
];


/* ================= COMPONENT ================= */

const Experience = () => {
  const orderedExperiences = [...experiences].sort((a, b) => a.id - b.id);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="
  fade-in
  text-gold
  text-xs
  tracking-[0.35em]
  uppercase
  mb-9
  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]
">
              Experience
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl heading-glow mb-6">
              Leadership through{" "}
              <span className="text-gold-gradient">
                execution & strategy
              </span>
            </h1>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Building, scaling, and advising technology-driven organizations
              across AI, automation, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-light mb-12">
              Professional Journey
            </h2>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-14">
                {orderedExperiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8 md:pl-20">
                    {/* Dot */}
                    <div className="absolute left-0 md:left-8 top-6 w-2.5 h-2.5 rounded-full bg-primary -translate-x-1/2 gold-glow-subtle" />

                    <div className="card-gold p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="text-xl md:text-2xl font-display">
                            {exp.role}
                          </h3>
                          <p className="text-primary">{exp.company}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {exp.location}
                          </p>
                        </div>

                        <p className="text-sm text-muted-foreground whitespace-nowrap">
                          {exp.period}
                        </p>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {exp.summary}
                      </p>

                      <ul className="space-y-2">
                        {exp.bullets.map((item) => (
                          <li
                            key={item}
                            className="flex gap-3 text-sm text-muted-foreground"
                          >
                            <span className="text-primary mt-0.5">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <SkillsSection />

      {/* CTA */}
      <section className="section-spacing bg-background">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl heading-glow mb-6">
              Let’s work together
            </h2>

            <p className="text-muted-foreground mb-10">
              I bring leadership, execution, and long-term thinking to every
              engagement.
            </p>

            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground gold-glow rounded-full"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
