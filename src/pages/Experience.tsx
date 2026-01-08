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
    location: "Hybrid",
    summary:
      "Founded and scaled SoftServe Hub into a trusted technology partner delivering AI-powered applications, workflow automation, and data-driven business solutions.",
    bullets: [
      "Built and scaled SoftServe Hub for global clients",
      "Designed and delivered AI & Data Science solutions improving decision-making",
      "Developed automation workflows integrating APIs, AI models, and third-party tools",
      "Led digital transformation initiatives achieving measurable ROI",
      "Cultivated strong client relationships through effective communication and delivery",
    ],
  },
  {
    id: 2,
    company: "SoftServe Hub",
    role: "Angel Investor & Strategic Partner",
    period: "Sep 2024 – Present · 1 yr 5 mos",
    location: "Chennai, Tamil Nadu, India · On-site",
    summary:
      "Active angel investor and strategic partner supporting AI, SaaS, automation, and digital ventures with both capital and execution expertise.",
    bullets: [
      "Invests in AI, SaaS, automation, and digital-first ventures",
      "Typical investment range: $3M – $10M",
      "Provides strategic support in scaling, operations, and execution",
      "Focuses on long-term partnership-driven growth models",
    ],
  },
  {
    id: 3,
    company: "Manovate Technologies",
    role: "Business Operations & Client Strategy Manager",
    period: "Nov 2025 – Present",
    location: "Chennai, Tamil Nadu, India · On-site",
    summary:
      "Leading strategic, operational, and client-facing functions that drive organizational growth and ensure high-quality project delivery across enterprise engagements.",
    bullets: [
      "Lead business planning, operational oversight, and client strategy initiatives",
      "Drive organizational performance and execution efficiency",
      "Ensure delivery excellence across multi-disciplinary project teams",
      "Strengthen long-term client relationships through strategic alignment",
    ],
  },
];

/* ================= COMPONENT ================= */

const Experience = () => {
  const orderedExperiences = [...experiences].sort((a, b) => a.id - b.id);

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm tracking-[0.3em] uppercase mb-4">
              Experience
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6 heading-glow">
              Leadership through{" "}
              <span className="text-gold-gradient">execution & strategy</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Building, scaling, and advising technology-driven organizations
              across AI, automation, and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-light mb-12">
              Professional Journey
            </h2>

            <div className="relative">
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

              <div className="space-y-14">
                {orderedExperiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8 md:pl-20">
                    <div className="absolute left-0 md:left-8 top-3 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />

                    <div className="card-gold p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row md:justify-between gap-3 mb-4">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl">
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

<SkillsSection />

      {/* CTA */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              Let’s work together
            </h2>
            <p className="text-muted-foreground mb-10">
              I bring leadership, execution, and long-term thinking to every
              engagement.
            </p>
            <Button variant="gold" size="xl" asChild className="group">
              <Link to="/contact" className="flex items-center gap-2">
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Experience;
