import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  User,
  Target,
  Award,
  Heart,
  Mail,
  Linkedin,
  Github,
} from "lucide-react";
import RecognitionSection from "@/components/sections/CertificatesSection";

/* ---------------- COUNT UP HOOK ---------------- */

const useCountUp = (end: number, start: boolean, duration = 1200) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  return count;
};

/* ---------------- STATS BLOCK ---------------- */

const StatsBlock = ({
  stats,
}: {
  stats: { value: number; suffix?: string; label: string }[];
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="border-t border-b border-border py-16 mb-24"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat) => {
          const value = useCountUp(stat.value, inView);

          return (
            <div key={stat.label}>
              <div className="text-3xl md:text-4xl text-gold-gradient mb-2">
                {value}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground tracking-wide">
                {stat.label}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};



const About = () => {
  const graphRef = useRef<HTMLDivElement | null>(null);
  const [animateGraph, setAnimateGraph] = useState(false);

  useEffect(() => {
    if (!graphRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateGraph(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(graphRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
  <section className="section-spacing pt-32 bg-background">

    {/* ================= INTRO CARD (FULL WIDTH) ================= */}
    <div className="card-gold px-6 md:px-12 py-14 mb-24">
      <div className="max-w-4xl mx-auto space-y-12">

        {/* INTRO */}
        <p className="text-xl md:text-2xl lg:text-3xl font-display font-light leading-relaxed">
          I’m Harish N - a founder, business operator, and investor focused on
          building scalable organizations, strengthening execution, and driving
          measurable outcomes across global client engagements.
        </p>

        {/* ROLE 1 */}
        <div className="space-y-5">
          <p className="text-lg leading-relaxed">
            <span className="text-primary font-medium">
              Founder & Director — SoftServe Hub
            </span>
            <br />
            Leading business strategy, delivery operations, and client engagements.
            Responsible for building scalable operating models, strengthening
            execution discipline, and partnering with organizations to drive
            sustainable growth across multiple industries and regions.
          </p>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 text-primary px-6 py-3 hover:bg-accent"
          >
            <a href="https://www.softservehub.in" target="_blank" rel="noopener noreferrer">
              Visit SoftServe Hub ↗
            </a>
          </Button>


          <StatsBlock
  stats={[
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 750, suffix: "+", label: "Projects Delivered" },
    { value: 250, suffix: "+", label: "Clients" },
    { value: 15, suffix: "+", label: "Countries Served" },
  ]}
/>

        </div>

        {/* ROLE 2 */}
        <div className="space-y-5">
          <p className="text-lg leading-relaxed">
            <span className="text-primary font-medium">
              Angel Investor & Strategic Advisor — SoftServe Hub
            </span>
            <br />
            Supporting early-stage initiatives through capital allocation,
            execution guidance, and strategic oversight. Actively involved in
            shaping go-to-market strategy, delivery discipline, and long-term
            value creation.
          </p>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 text-primary px-6 py-3 hover:bg-accent"
          >
            <a href="https://www.softservehub.in" target="_blank" rel="noopener noreferrer">
              View Investment Focus ↗
            </a>
          </Button>

          <StatsBlock
  stats={[
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 70, suffix: "+", label: "Projects Delivered" },
    { value: 30, suffix: "+", label: "Clients" },
    { value: 15, suffix: "+", label: "Countries Served" },
  ]}
/>

        </div>

        {/* ROLE 3 */}
        <div className="space-y-5">
          <p className="text-lg leading-relaxed">
            <span className="text-primary font-medium">
              Business Operations & Client Strategy Manager — Manovate Technologies
            </span>
            <br />
            Driving operational excellence and client strategy across delivery
            programs. Focused on improving execution efficiency, strengthening
            client partnerships, and aligning operational outcomes with long-term
            business objectives.
          </p>

          <Button
            asChild
            variant="outline"
            className="rounded-full border-primary/40 text-primary px-6 py-3 hover:bg-accent"
          >
            <a href="https://www.manovatetechnologies.com" target="_blank" rel="noopener noreferrer">
              Visit Manovate Technologies ↗
            </a>
          </Button>

          <StatsBlock
  stats={[
    { value: 8, label: "Months Experience" },
    { value: 100, suffix: "+", label: "Projects Delivered" },
    { value: 650, suffix: "+", label: "Clients" },
    { value: 45, suffix: "+", label: "Countries Served" },
  ]}
/>

        </div>
      </div>
    </div>

    {/* ================= REST OF CONTENT (NORMAL CONTAINER) ================= */}
    <div className="container mx-auto px-6 lg:px-12 max-w-7xl">

      {/* ================= STORY & VALUES ================= */}
          <div className="grid lg:grid-cols-2 gap-20 mb-28">

            {/* STORY */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-display font-light mb-6 heading-glow">
                  Business Journey
                </h2>

                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>
                    Over the years, I’ve partnered with founders, executives,
                    and leadership teams to design and scale digital systems
                    that drive measurable business growth.
                  </p>

                  <p>
                    What started as a passion for building technology evolved
                    into a leadership practice centered on solving complex
                    operational challenges.
                  </p>

                  <p>
                    Today, I focus on helping businesses modernize operations
                    and build resilient digital foundations.
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display font-light mb-6 heading-glow">
                  Leadership Philosophy
                </h2>

                <p className="text-muted-foreground leading-relaxed">
                  Technology should simplify complexity, empower teams,
                  and support confident, data-driven leadership.
                </p>
              </div>
            </div>

            {/* VALUES */}
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-light mb-8 heading-glow">
                Core Principles
              </h2>

              {[
                {
                  icon: Target,
                  title: "Outcome-Driven Strategy",
                  description:
                    "Every initiative aligns with clear business objectives.",
                },
                {
                  icon: Award,
                  title: "Operational Excellence",
                  description:
                    "High standards in execution and long-term reliability.",
                },
                {
                  icon: User,
                  title: "People-Centered Systems",
                  description:
                    "Designing solutions that empower real teams.",
                },
                {
                  icon: Heart,
                  title: "Trust-Based Partnerships",
                  description:
                    "Long-term collaborations built on transparency.",
                },
              ].map((item) => (
                <div key={item.title} className="card-gold p-6 flex gap-5">
                  <div className="w-11 h-11 rounded-full  flex items-center justify-center gold-glow-subtle">
                    <item.icon size={20} className="text-primary" />
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-primary mb-1">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <RecognitionSection />

          {/* ================= FINAL CTA ================= */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-light mb-6 heading-glow">
              Let’s create something exceptional
            </h2>

            <p className="text-muted-foreground mb-8">
              I’m always open to meaningful conversations around technology,
              systems, and growth.
            </p>

            <Link to="/contact">
              <Button
  size="lg"
  className="bg-primary text-primary-foreground gold-glow rounded-full px-8"
>
  Get in Touch
</Button>

            </Link>
          </div>


    </div>

  </section>
</Layout>

  );
};

export default About;

