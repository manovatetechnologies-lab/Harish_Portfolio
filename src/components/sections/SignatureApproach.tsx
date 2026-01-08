import React from "react";
import {
  Compass,
  Cpu,
  Rocket,
  ShieldCheck
} from "lucide-react";

const SignatureApproach = () => {
  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* SECTION HEADER */}
          <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">
            Signature Approach
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Engagement blueprint from idea to impact
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mb-14">
            Every collaboration follows a repeatable-yet-flexible framework
            that balances experimentation with enterprise-grade delivery.
          </p>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ApproachCard
              icon={<Compass className="w-5 h-5 text-gold" />}
              title="Discover & Diagnose"
              description="Stakeholder workshops, process shadowing, and data health checks establish the transformation baseline."
              bullets={[
                "Value roadmap within 2 weeks",
                "Tech + data landscape mapping",
                "Success metrics definition",
              ]}
            />

            <ApproachCard
              icon={<Cpu className="w-5 h-5 text-gold" />}
              title="Architect the Intelligence"
              description="Blueprints covering ML models, automation pipelines, experience design, and infrastructure requirements."
              bullets={[
                "Reference architecture & backlog",
                "Security and compliance guardrails",
                "Pilot scoping",
              ]}
            />

            <ApproachCard
              icon={<Rocket className="w-5 h-5 text-gold" />}
              title="Build, Launch & Orchestrate"
              description="Agile pods deliver production-ready features with observability and feedback loops baked in from day one."
              bullets={[
                "Incremental releases every sprint",
                "Testing automation & MLOps workflows",
                "Adoption enablement",
              ]}
            />

            <ApproachCard
              icon={<ShieldCheck className="w-5 h-5 text-gold" />}
              title="Scale & Partner"
              description="Design operating models, playbooks, and training systems so teams own and evolve the solution sustainably."
              bullets={[
                "Runbooks and L3 support",
                "Continuous improvement roadmap",
                "Executive reporting cadence",
              ]}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureApproach;

/* ------------------------------------------------------------------ */

type ApproachCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
};

const ApproachCard = ({
  icon,
  title,
  description,
  bullets,
}: ApproachCardProps) => {
  return (
    <div
      className="
        rounded-3xl
        border border-gold/15
        bg-black/40
        backdrop-blur
        p-8
        transition-all duration-300
        hover:border-gold/30
      "
    >
      {/* CARD HEADER */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-foreground">
          {title}
        </h3>
      </div>

      {/* DESCRIPTION */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>

      {/* BULLETS */}
      <ul className="space-y-2">
        {bullets.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-2 text-muted-foreground"
          >
            <span className="text-gold mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
