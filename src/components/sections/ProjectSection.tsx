import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <section className="relative py-28 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER ROW */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          
          {/* LEFT */}
          <div>
            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">
              Selected Work
            </p>

            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Projects that drive real-world impact
            </h2>

            <p className="text-muted-foreground max-w-2xl text-lg">
              A snapshot of platforms and digital products built for scalability,
              performance, and measurable outcomes.
            </p>
          </div>

          {/* RIGHT BUTTON */}
          <div className="shrink-0">
            <button
              className="
                inline-flex items-center gap-2
                rounded-full
                border border-gold/30
                px-6 py-3
                text-gold
                text-sm
                transition-all duration-300
                hover:bg-gold hover:text-black
              "
            >
              <Link to="/casestudies">
                  View More Projects
                </Link>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PROJECT CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <ProjectCard
            category="Online Stores & D2C"
            title="E-Commerce Platform"
            description="A scalable e-commerce platform built for D2C brands with optimized checkout, secure payments, and high-performance storefronts."
          />

          <ProjectCard
            category="AI & Automation"
            title="AI Workflow Automation"
            description="End-to-end automation system enabling intelligent workflows, monitoring, and governance for enterprise operations."
          />

          <ProjectCard
            category="Brand & Corporate"
            title="Corporate Web Platform"
            description="A modern corporate website designed for global reach, performance, and seamless content management."
          />

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

/* -------------------------------- */

const ProjectCard = ({
  category,
  title,
  description,
}: {
  category: string;
  title: string;
  description: string;
}) => {
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
        hover:translate-y-[-4px]
      "
    >
      <p className="text-gold/80 text-xs tracking-[0.3em] uppercase mb-4">
        {category}
      </p>

      <h3 className="text-xl font-semibold text-foreground mb-4">
        {title}
      </h3>

      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
};
