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
      <section className="section-spacing pt-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl">
          {/* ================= INTRO CARD ================= */}
          {/* ================= INTRO CARD ================= */}
<div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur px-8 py-10 md:px-12 md:py-12 mb-24">
  <div className="grid lg:grid-cols-2 gap-14 items-center">

    {/* LEFT — CONTENT */}
    <div className="space-y-8 max-w-xl">
      <p className="font-display text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
        I’m Harish N, Founder and Director of SoftServe Hub — working at
        the intersection of AI, automation, and software delivery to
        accelerate operational growth for teams across 15+ countries.
      </p>

      <p className="text-muted-foreground text-lg leading-relaxed">
        My practice is rooted in clarity and measurable execution —
        transforming complex business goals into intelligent systems
        that are easy to adopt, govern, and scale.
      </p>

      <p className="text-gold/80 text-xs tracking-[0.3em] uppercase">
        Based in Chennai · Working Globally · 15+ Countries Served
      </p>

{/* CTA BUTTONS */}
<div className="flex flex-wrap gap-4 pt-4">

  {/* Personal Email */}
  <Button
    asChild
    className="bg-gold text-black hover:scale-105 transition-all flex items-center gap-2"
  >
    <a href="mailto:harishnandhakumar2004@gmail.com">
      <Mail size={16} />
      Personal Email
    </a>
  </Button>

  {/* Business Inquiries */}
  <Button
    asChild
    variant="outline"
    className="border-gold text-gold hover:bg-gold hover:text-black flex items-center gap-2"
  >
    <a href="mailto:founder@softservehub.in">
      <Mail size={16} />
      Business Inquiries
    </a>
  </Button>

  {/* LinkedIn */}
  <Button
    asChild
    variant="outline"
    className="border-white/20 hover:border-gold hover:text-gold flex items-center gap-2"
  >
    <a
      href="https://www.linkedin.com/in/harish-nandakumar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin size={16} />
      LinkedIn
    </a>
  </Button>

  {/* GitHub */}
  <Button
    asChild
    variant="outline"
    className="border-white/20 hover:border-gold hover:text-gold flex items-center gap-2"
  >
    <a
      href="https://github.com/HarishNandakumar"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Github size={16} />
      GitHub
    </a>
  </Button>

</div>

    </div>

    {/* RIGHT — GROWTH GRAPH */}
    {/* RIGHT — GROWTH GRAPH */}
<div ref={graphRef} className="relative">
  <div className="rounded-2xl border border-white/10 bg-black/50 p-6">
    <p className="text-xs tracking-[0.25em] text-gold/70 uppercase mb-4">
      Client Growth Trajectory
    </p>

    <svg viewBox="0 0 400 220" className="w-full h-auto" fill="none">
      {/* GRID */}
      {[0, 1, 2, 3, 4].map((i) => (
        <line
          key={i}
          x1="0"
          y1={40 * i + 10}
          x2="400"
          y2={40 * i + 10}
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* ANIMATED LINE */}
      <path
        d="M20 190 L90 160 L160 130 L230 90 L300 60 L380 30"
        stroke="url(#goldGradient)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          strokeDasharray: 1000,
          strokeDashoffset: animateGraph ? 0 : 1000,
          transition: "stroke-dashoffset 1.8s ease-out",
        }}
      />

      {/* POINTS */}
      {[190, 160, 130, 90, 60, 30].map((y, i) => (
        <circle
          key={i}
          cx={20 + i * 70}
          cy={y}
          r={animateGraph ? 4 : 0}
          fill="#EAB308"
          style={{
            transition: `r 0.4s ease ${0.6 + i * 0.15}s`,
          }}
        />
      ))}

      {/* GRADIENT */}
      <defs>
        <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FACC15" />
          <stop offset="100%" stopColor="#EAB308" />
        </linearGradient>
      </defs>
    </svg>

    <div className="mt-4 text-sm text-muted-foreground">
      Consistent growth driven by scalable delivery and long-term partnerships
    </div>
  </div>
</div>

  </div>
</div>


          {/* ================= STORY & VALUES ================= */}
<div className="grid lg:grid-cols-2 gap-20 mb-28">

  {/* STORY */}
  <div className="space-y-10">
    <div>
      <h2 className="font-display text-3xl font-light mb-6 heading-glow">
        Business Journey
      </h2>

      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Over the years, I’ve partnered with founders, executives, and
          leadership teams to design and scale digital systems that drive
          measurable business growth. My work spans strategy, technology, and
          execution — always focused on outcomes that matter.
        </p>

        <p>
          What started as a passion for building technology evolved into a
          leadership practice centered on solving complex operational and
          organizational challenges through intelligent, scalable platforms.
        </p>

        <p>
          Today, I focus on helping businesses modernize their operations,
          streamline decision-making, and create digital foundations that
          support long-term expansion and resilience.
        </p>
      </div>
    </div>

    <div>
      <h2 className="font-display text-3xl font-light mb-6 heading-glow">
        Leadership Philosophy
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        I believe sustainable growth comes from clarity, discipline, and
        alignment. Technology should simplify complexity, empower teams, and
        support leaders in making confident, data-driven decisions.
      </p>
    </div>
  </div>

  {/* VALUES */}
  <div className="space-y-6">
    <h2 className="font-display text-3xl font-light mb-8 heading-glow">
      Core Principles
    </h2>

    {[
      {
        icon: Target,
        title: "Outcome-Driven Strategy",
        description:
          "Every initiative is aligned with clear business objectives and measurable impact.",
      },
      {
        icon: Award,
        title: "Operational Excellence",
        description:
          "High standards in execution, governance, and long-term system reliability.",
      },
      {
        icon: User,
        title: "People-Centered Systems",
        description:
          "Designing solutions that empower teams and fit real-world workflows.",
      },
      {
        icon: Heart,
        title: "Trust-Based Partnerships",
        description:
          "Long-term collaborations built on transparency, accountability, and shared success.",
      },
    ].map((item) => (
      <div
        key={item.title}
        className="flex gap-5 rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6"
      >
        <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
          <item.icon size={20} />
        </div>

        <div>
          <h3 className="text-lg font-display text-foreground mb-1">
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


          {/* ================= STATS ================= */}
          <div className="border-t border-b border-white/10 py-16 mb-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
              {[
                { number: "3+", label: "Years Experience" },
                { number: "70+", label: "Projects Delivered" },
                { number: "30+", label: "Clients" },
                { number: "15+", label: "Countries Served" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl md:text-4xl font-display text-gold-gradient mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

<RecognitionSection />

          {/* ================= FINAL CTA ================= */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-light mb-6 heading-glow">
              Let’s create something exceptional
            </h2>

            <p className="text-muted-foreground mb-8">
              I’m always open to meaningful conversations around technology,
              systems, and growth.
            </p>

            <Link to="/contact">
              <Button size="lg" className="bg-gold text-black hover:scale-105">
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
