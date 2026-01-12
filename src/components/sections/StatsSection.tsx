import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  Rocket,
  BarChart3,
} from "lucide-react";

/* ---------------- COUNT UP HOOK ---------------- */

const useCountUp = (end: number, startOnView: boolean, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startOnView) return;

    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [startOnView, end, duration]);

  return count;
};

/* ---------------- MAIN SECTION ---------------- */

const ImpactStats = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
  ref={sectionRef}
  className="section-spacing relative bg-transparent"
>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">

          {/* HEADER */}
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
              Impact
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-glow mb-6 font-semibold">
              Measurable business outcomes across engagements
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed">
              Driving measurable business outcomes across
              <span className="text-primary font-medium"> SoftServe Hub </span>
              and
              <span className="text-primary font-medium"> Manovate Technologies</span>
              through disciplined execution, operational clarity, and sustained growth.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <StatCard
              icon={Users}
              label="Global Clients"
              value={useCountUp(650, inView)}
              suffix="+"
              description="Trusted partners across multiple regions spanning fintech, healthcare, retail, and logistics."
            />

            <StatCard
              icon={Rocket}
              label="Projects Delivered"
              value={useCountUp(1150, inView)}
              suffix="+"
              description="End-to-end delivery of strategic initiatives across product, operations, and transformation programs."
            />

            <StatCard
              icon={BarChart3}
              label="Efficiency Uplift"
              value={useCountUp(95, inView)}
              suffix="%"
              description="Average improvement in operational efficiency through process optimization and execution rigor."
            />

            {/* GRAPH CARD */}
            <StatCard
              type="graph"
              label="Business Growth & Execution"
              description="Typical outcomes observed within 12-24 months of engagement."
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
  icon?: React.ElementType;
  label: string;
  value?: number;
  suffix?: string;
  description: string;
  type?: "default" | "graph";
};

const StatCard = ({
  icon: Icon,
  label,
  value,
  suffix = "",
  description,
  type = "default",
}: StatCardProps) => {
  return (
    <div
      className="
        card-gold
        p-8
        rounded-3xl
        h-full
        flex flex-col
        justify-between
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:gold-glow-subtle
      "
    >
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-primary text-xs tracking-[0.3em] uppercase">
          {label}
        </span>

        {/* ICON OR 4x */}
        {type === "default" && Icon && (
          <Icon className="w-5 h-5 text-primary" />
        )}

        {type === "graph" && (
          <div
            className="
              w-14 h-14
              rounded-xl
              flex items-center justify-center
              bg-background
              text-primary
              text-xl font-semibold
              shadow-[0_0_30px_rgba(234,179,8,0.65)]
            "
          >
            4×
          </div>
        )}
      </div>

      {/* STANDARD CARD */}
      {type === "default" && (
        <>
          <h3 className="text-4xl md:text-5xl font-medium text-foreground mb-4">
            {value}
            {suffix}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
        </>
      )}

      {/* GRAPH CARD */}
      {type === "graph" && (
        <>
          {/* GRAPH */}
          <svg
            viewBox="0 0 120 70"
            className="w-full h-28 mb-4"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="fillGrow" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0.45"
                />
                <stop
                  offset="100%"
                  stopColor="hsl(var(--primary))"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            {/* AREA */}
            <polygon
              points="0,58 20,50 40,54 65,34 85,40 120,16 120,70 0,70"
              fill="url(#fillGrow)"
            />

            {/* SHARP LINE */}
            <polyline
              points="0,58 20,50 40,54 65,34 85,40 120,16"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="3.5"
              strokeLinejoin="miter"
              strokeLinecap="square"
            />
          </svg>

          {/* DESCRIPTION (INSIDE CARD) */}
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </>
      )}
    </div>
  );
};
