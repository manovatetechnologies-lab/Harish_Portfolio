import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Managing Director, Strategic Advisory",
    company: "Mitchell & Partners",
    period: "2019 – Present",
    description:
      "Founded boutique consulting practice focused on strategic advisory for C-suite executives and boards. Advise organizations across technology, financial services, and healthcare sectors.",
    achievements: [
      "Advised 40+ organizations on strategic transformation initiatives",
      "Delivered $2B+ in documented value creation for clients",
      "Built network of senior advisors and domain experts",
      "Developed proprietary frameworks for strategic decision-making",
    ],
  },
  {
    id: 2,
    role: "Senior Partner",
    company: "Global Strategy Consultancy",
    period: "2012 – 2019",
    description:
      "Led the firm's digital transformation and technology strategy practice. Served clients across North America and Europe on complex strategic challenges.",
    achievements: [
      "Grew practice revenue from $15M to $85M annually",
      "Led 100+ consulting engagements across Fortune 500 clients",
      "Developed firm's capabilities in AI and digital strategy",
      "Mentored and developed 50+ senior consultants",
    ],
  },
  {
    id: 3,
    role: "Vice President, Corporate Strategy",
    company: "Fortune 100 Technology Company",
    period: "2007 – 2012",
    description:
      "Led corporate strategy function reporting to the CEO. Responsible for strategic planning, M&A strategy, and new market development.",
    achievements: [
      "Led strategic planning for $50B enterprise",
      "Evaluated and executed 5 major acquisitions totaling $8B",
      "Developed 5-year strategic roadmap adopted by board",
      "Launched new business unit generating $500M in revenue",
    ],
  },
  {
    id: 4,
    role: "Engagement Manager",
    company: "Top-Tier Management Consultancy",
    period: "2003 – 2007",
    description:
      "Progressed from Associate to Engagement Manager. Focused on growth strategy and operations improvement for technology and telecommunications clients.",
    achievements: [
      "Promoted to Engagement Manager in 3 years (top 10%)",
      "Led cross-functional teams of 10-15 consultants",
      "Delivered transformational projects across 3 continents",
      "Recognized with firm's Excellence Award",
    ],
  },
];

const education = [
  {
    degree: "MBA, Strategy & Finance",
    institution: "Harvard Business School",
    year: "2003",
  },
  {
    degree: "B.S. Economics, magna cum laude",
    institution: "University of Pennsylvania",
    year: "1999",
  },
];

const affiliations = [
  "Board Member, Regional Healthcare Foundation",
  "Advisory Board, FinTech Innovation Lab",
  "Member, Young Presidents' Organization",
  "Visiting Lecturer, MBA Strategy Course",
];

const Experience = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <p className="text-primary text-sm font-body tracking-[0.3em] uppercase mb-4 fade-in">
              Experience
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-6 fade-in fade-in-delay-1">
              Two decades of{" "}
              <span className="text-gold-gradient">strategic leadership</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl font-body font-light leading-relaxed fade-in fade-in-delay-2">
              From management consulting to corporate strategy to building my own
              practice, my career has been focused on one thing: helping
              organizations achieve their most ambitious goals.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-12">
              Professional Journey
            </h2>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

              {/* Timeline items */}
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={exp.id} className="relative pl-8 md:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-0 md:left-8 top-2 w-2 h-2 rounded-full bg-primary -translate-x-1/2" />

                    <div className="card-gold p-6 lg:p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                        <div>
                          <h3 className="font-display text-xl md:text-2xl font-light text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-body">{exp.company}</p>
                        </div>
                        <p className="text-muted-foreground font-body text-sm md:text-right whitespace-nowrap">
                          {exp.period}
                        </p>
                      </div>

                      <p className="text-muted-foreground font-body font-light leading-relaxed mb-6">
                        {exp.description}
                      </p>

                      <ul className="space-y-2">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 text-muted-foreground font-body text-sm"
                          >
                            <span className="text-primary mt-0.5">✓</span>
                            {achievement}
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

      {/* Education & Affiliations */}
      <section className="section-spacing bg-card/30">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Education */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-8">
                Education
              </h2>
              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="border-l-2 border-primary pl-6">
                    <p className="font-display text-lg text-foreground">
                      {edu.degree}
                    </p>
                    <p className="text-muted-foreground font-body">
                      {edu.institution}
                    </p>
                    <p className="text-muted-foreground font-body text-sm">
                      {edu.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Affiliations */}
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-light text-foreground mb-8">
                Board & Advisory Roles
              </h2>
              <ul className="space-y-4">
                {affiliations.map((affiliation) => (
                  <li
                    key={affiliation}
                    className="flex items-start gap-3 text-muted-foreground font-body"
                  >
                    <span className="text-primary mt-1">—</span>
                    {affiliation}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-light text-foreground mb-6">
              Let's work together
            </h2>
            <p className="text-muted-foreground text-lg font-body font-light mb-10">
              I bring this experience to every engagement, tailored to your unique
              challenges.
            </p>
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
    </Layout>
  );
};

export default Experience;
