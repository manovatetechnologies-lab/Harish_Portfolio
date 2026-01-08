import React from "react";
import {
  Users,
  Rocket,
  BarChart3,
  Sparkles,
} from "lucide-react";

const ImpactStats = () => {
  return (
    <section className="relative py-28 bg-black">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
          <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">
            Proven Impact
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
            Measurable outcomes across global engagements
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mb-16">
            Our work delivers tangible results — from scale and efficiency
            to research-driven innovation.
          </p>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <StatCard
              icon={<Users className="w-5 h-5 text-gold" />}
              label="Global Clients"
              value="250+"
              description="Trusted partners across 15 countries in fintech, healthcare, retail, and logistics."
            />

            <StatCard
              icon={<Rocket className="w-5 h-5 text-gold" />}
              label="Projects Delivered"
              value="750+"
              description="AI, automation, software, and analytics programs completed end-to-end."
            />

            <StatCard
              icon={<BarChart3 className="w-5 h-5 text-gold" />}
              label="Efficiency Uplift"
              value="60%"
              description="Average productivity boost achieved through intelligent automation rollouts."
            />

            <StatCard
              icon={<Sparkles className="w-5 h-5 text-gold" />}
              label="Conference"
              value="ICCSPS 2025"
              description="Nutric AI research accepted at ICCSPS 2025 on personalized nutrition intelligence."
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;

/* ------------------------------------------------------------------ */

type StatCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
};

const StatCard = ({
  icon,
  label,
  value,
  description,
}: StatCardProps) => {
  return (
    <div
      className="
        relative
        rounded-3xl
        border border-gold/15
        bg-black/40
        backdrop-blur
        p-8
        transition-all duration-300
        hover:border-gold/30
        hover:-translate-y-1
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-gold/80 text-xs tracking-[0.3em] uppercase">
          {label}
        </span>
        <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center">
          {icon}
        </div>
      </div>

      {/* VALUE */}
      <h3 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
        {value}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
