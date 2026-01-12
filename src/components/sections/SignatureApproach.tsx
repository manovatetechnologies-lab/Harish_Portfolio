import React from "react";
import {
  Compass,
  Cpu,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const SignatureApproach = () => {
  return (
    <section className="section-spacing relative bg-transparent">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* SECTION HEADER */}
          <div className="max-w-3xl mb-20 fade-in-up">
            <p className="
  fade-in
  text-gold
  text-xs
  tracking-[0.35em]
  uppercase
  mb-9
  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]
">
              Signature Approach
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-glow mb-6 font-semibold">
              Engagement blueprint from idea to impact
            </h2>

            <p className="text-muted-foreground text-xl leading-relaxed">
              A structured, execution-focused approach designed to translate
              strategic intent into measurable business outcomes.
            </p>
          </div>

          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <ApproachCard
              icon={Compass}
              title="Discover & Diagnose"
              bullets={[
                "Clarifying business objectives and stakeholder priorities.",
                "Assessing current operations, workflows, and constraints.",
                "Defining success criteria and execution scope early.",
              ]}
            />

            <ApproachCard
              icon={Cpu}
              title="Design the Operating Model"
              bullets={[
                "Structuring delivery models aligned with growth goals.",
                "Defining ownership, accountability, and decision paths.",
                "Establishing governance and execution guardrails.",
              ]}
            />

            <ApproachCard
              icon={Rocket}
              title="Build & Execute"
              bullets={[
                "Driving execution through structured delivery cycles.",
                "Ensuring progress visibility and outcome tracking.",
                "Adapting plans based on feedback and results.",
              ]}
            />

            <ApproachCard
              icon={ShieldCheck}
              title="Scale & Sustain"
              bullets={[
                "Strengthening operational resilience and continuity.",
                "Embedding processes for long-term scalability.",
                "Supporting leadership with clear performance reporting.",
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
  icon: React.ElementType;
  title: string;
  bullets: string[];
};

const ApproachCard = ({
  icon: Icon,
  title,
  bullets,
}: ApproachCardProps) => {
  return (
    <div
      className="
        card-gold
        p-10
        rounded-3xl
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:gold-glow-subtle
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 mb-8">
        <Icon className="w-6 h-6 text-foreground" />
        <h3 className="text-2xl font-medium text-primary">
          {title}
        </h3>
      </div>

      {/* BULLETS */}
      <ul className="space-y-4">
        {bullets.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-4 text-muted-foreground text-lg leading-relaxed"
          >
            <span className="mt-2 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
