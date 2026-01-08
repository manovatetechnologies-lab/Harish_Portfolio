import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

type Project = {
  slug: string;
  title: string;
  role: string;
  domain: string;
  tech: string[];
  timeline: string;
  summary: string;
  problem: string;
  solution: string;
  impact: string[];
  process: {
    title: string;
    description: string;
    bullets: string[];
  }[];
  links: {
    label: string;
    url: string;
  }[];
};

import projects from "@/data/projects"; // ← move your array here OR paste inline

const Projects = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <p className="text-primary text-xs tracking-[0.35em] uppercase mb-4">
            Selected Work
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-light mb-6 heading-glow">
            Projects that drive{" "}
            <span className="text-gold-gradient">real-world impact</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl">
            A snapshot of platforms, AI systems, and digital products built for
            scalability, performance, and measurable outcomes.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="section-spacing">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl space-y-32">

          {projects.map((project) => (
            <article
              key={project.slug}
              className="relative"
            >
              {/* HEADER */}
              <div className="mb-10">
                <p className="text-gold/70 text-xs tracking-[0.3em] uppercase mb-3">
                  {project.domain}
                </p>

                <h2 className="font-display text-3xl md:text-4xl font-light mb-3">
                  {project.title}
                </h2>

                <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
                  <span>{project.role}</span>
                  <span>•</span>
                  <span>{project.timeline}</span>
                </div>
              </div>

              {/* SUMMARY */}
              <div className="grid lg:grid-cols-3 gap-10 mb-12">
                <p className="lg:col-span-2 text-muted-foreground leading-relaxed">
                  {project.summary}
                </p>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold/70 mb-3">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* PROBLEM / SOLUTION */}
              <div className="grid md:grid-cols-2 gap-12 mb-14">
                <div>
                  <h3 className="text-lg font-display mb-3">Problem</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.problem}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-display mb-3">Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>

              {/* IMPACT */}
              <div className="mb-14">
                <h3 className="text-lg font-display mb-4">Impact</h3>
                <ul className="space-y-3">
                  {project.impact.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-muted-foreground"
                    >
                      <span className="text-gold mt-1">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* PROCESS */}
              <div className="grid md:grid-cols-3 gap-8 mb-14">
                {project.process.map((step, i) => (
                  <div
                    key={step.title}
                    className="rounded-2xl border border-white/10 bg-black/40 p-6"
                  >
                    <p className="text-gold/70 text-xs tracking-[0.25em] uppercase mb-2">
                      Step {i + 1}
                    </p>
                    <h4 className="font-display mb-2">
                      {step.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {step.description}
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex gap-2">
                          <span className="text-gold">•</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* LINKS */}
              <div className="flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <Button
                    key={link.label}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-black"
                    asChild
                  >
                    <a href={link.url} target="_blank" rel="noreferrer">
                      {link.label}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </article>
          ))}

        </div>
      </section>
    </Layout>
  );
};

export default Projects;
