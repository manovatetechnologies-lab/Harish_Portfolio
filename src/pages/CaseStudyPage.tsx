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
        <section className="pt-40 text-center bg-background">
          <h1 className="text-3xl font-display">Case Study Not Found</h1>
          <Link
  to="/casestudies"
  className="
    group
    relative
    inline-flex items-center gap-2
    text-muted-foreground
    mb-8
    transition-colors duration-300
    hover:text-primary
  "
>
  <ArrowLeft
    size={16}
    className="transition-transform duration-300 group-hover:-translate-x-1"
  />

  <span className="relative">
    Back to Case Studies

    {/* animated underline */}
    <span
      className="
        absolute
        left-0
        -bottom-1
        h-[1.5px]
        w-full
        bg-primary
        scale-x-0
        origin-left
        transition-transform duration-300
        group-hover:scale-x-100
      "
    />
  </span>
</Link>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* HERO */}
      <section className="pt-32 pb-20 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <Link
  to="/casestudies"
  className="
    group
    relative
    inline-flex items-center gap-2
    text-muted-foreground
    mb-8
    transition-colors duration-300
    hover:text-primary
  "
>
  <ArrowLeft
    size={16}
    className="transition-transform duration-300 group-hover:-translate-x-1"
  />

  <span className="relative">
    Back to Case Studies

    {/* animated underline */}
    <span
      className="
        absolute
        left-0
        -bottom-1
        h-[1.5px]
        w-full
        bg-primary
        scale-x-0
        origin-left
        transition-transform duration-300
        group-hover:scale-x-100
      "
    />
  </span>
</Link>


          <p className="text-primary tracking-[0.35em] uppercase text-xs mb-4">
            {study.domain}
          </p>

          <h1 className="text-4xl md:text-5xl heading-glow mb-6">
            {study.title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground mb-8">
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
      <section className="pb-24 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {study.summary}
          </p>
        </div>
      </section>

      {/* PROBLEM / SOLUTION */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl grid md:grid-cols-2 gap-14">
          <div className="card-gold p-8">
            <h2 className="text-2xl font-display mb-4">The Challenge</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.problem}
            </p>
          </div>

          <div className="card-gold p-8">
            <h2 className="text-2xl font-display mb-4">The Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              {study.solution}
            </p>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <h2 className="text-3xl font-display heading-glow mb-10">
            Impact
          </h2>

          <div className="card-gold p-8">
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="pb-28 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl">
          <h2 className="text-3xl font-display heading-glow mb-12">
            Process & Execution
          </h2>

          <div className="space-y-14">
            {study.process.map((step) => (
              <div key={step.title} className="card-gold p-8">
                <h3 className="text-xl font-display mb-3">
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
                      <span className="mt-2 w-2 h-2 rotate-45 bg-primary flex-shrink-0" />
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
      <section className="pb-32 bg-background">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl flex flex-wrap gap-4">
          {study.links.map((link) => (
            <Button
              key={link.label}
              variant="outline"
              asChild
              className="border-gold-gradient text-primary"
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
