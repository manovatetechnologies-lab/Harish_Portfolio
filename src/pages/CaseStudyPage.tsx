import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import casestudies from "@/data/casestudies";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudyPage = () => {
  const { slug } = useParams();
  const study = casestudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <Layout>
        <section className="pt-40 text-center">
          <h1 className="text-3xl font-display">Case Study Not Found</h1>
          <Link to="/casestudies" className="text-primary mt-6 inline-block">
            ← Back to Case Studies
          </Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <Link
            to="/casestudies"
            className="inline-flex items-center gap-2 text-muted-foreground mb-8 hover:text-primary"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">
            {study.domain}
          </p>

          <h1 className="font-display text-4xl md:text-5xl font-light text-foreground mb-6">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-6">
            <span>
              <strong className="text-foreground">Role:</strong> {study.role}
            </span>
            <span>
              <strong className="text-foreground">Timeline:</strong>{" "}
              {study.timeline}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1 text-xs rounded-full border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY */}
      <section className="pb-20">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
            {study.summary}
          </p>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="pb-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl mb-4">The Problem</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div>
            <h2 className="font-display text-2xl mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="pb-24 bg-card/30">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <h2 className="font-display text-3xl mb-10">Impact</h2>
          <ul className="space-y-4">
            {study.impact.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-muted-foreground"
              >
                <span className="text-primary mt-1">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <h2 className="font-display text-3xl mb-12">
            Process & Execution
          </h2>

          <div className="space-y-14">
            {study.process.map((step) => (
              <div key={step.title}>
                <h3 className="font-display text-xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1">—</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS / CTA */}
      <section className="pb-28">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl flex flex-wrap gap-4">
          {study.links.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              asChild
              className="group"
            >
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
                <ArrowUpRight
                  size={16}
                  className="ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </Button>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudyPage;
