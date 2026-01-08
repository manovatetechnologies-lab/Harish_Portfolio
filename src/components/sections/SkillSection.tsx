import React from "react";

const SkillsSection = () => {
  return (
    <section className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">
            Skills
          </p>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6 max-w-3xl">
            Core capabilities across AI, engineering, and strategy
          </h2>

          <p className="text-muted-foreground text-lg max-w-3xl mb-14">
            Every engagement blends deep technical mastery with business-first
            thinking and collaborative leadership.
          </p>

          {/* SKILLS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            <SkillCard
              title="Artificial Intelligence Expertise"
              skills={[
                "Artificial Intelligence (AI)",
                "Machine Learning (ML)",
                "Predictive Modeling",
                "Long Short-Term Memory (LSTM)",
                "Natural Language Processing (NLP)",
                "Large Language Models (LLM)",
                "Generative AI",
                "Intelligent Agents",
              ]}
            />

            <SkillCard
              title="Data Science & Analytics"
              skills={[
                "Data Science",
                "Data Analysis",
                "Data Engineering",
                "Database Administration",
                "Data Preparation",
                "Data Transformation",
                "Data Visualization",
                "Analytical Skills",
                "Microsoft Power BI",
                "Jupyter",
              ]}
            />

            <SkillCard
              title="Automation Leadership"
              skills={[
                "Workflow Automation",
                "Process Optimization",
                "Automation Strategy",
                "Intelligent Automation",
                "API Engineering",
                "PyTorch",
                "pickle (Model Serialization)",
                "n8n Workflows",
                "Change Management",
              ]}
            />

            <SkillCard
              title="Business & Strategic Skills"
              skills={[
                "Digital Transformation (DX)",
                "Business Development",
                "Business Growth Strategies",
                "Business Strategy & Client Solutions",
                "Project Planning",
                "Project Management",
                "Product Development",
              ]}
            />

            <SkillCard
              title="Technical Tools & Productivity"
              skills={[
                "Microsoft Excel",
                "Microsoft PowerPoint",
                "Microsoft Office",
                "Debugging Code",
                "Typing",
              ]}
            />

            <SkillCard
              title="Soft Skills"
              skills={[
                "Communication",
                "Team Collaboration",
                "Problem Solving",
                "Innovation & Creativity",
              ]}
            />

          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

/* ------------------------------------------------------------------ */

type SkillCardProps = {
  title: string;
  skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
  return (
    <div
      className="
        rounded-3xl
        border border-white/10
        bg-black/40
        backdrop-blur
        p-8
        transition-all duration-300
        hover:border-gold/30
      "
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">
        {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="
              px-4 py-1.5
              rounded-full
              border border-white/15
              text-sm text-muted-foreground
              bg-black/50
              transition-all duration-300
              hover:border-gold/40
              hover:text-foreground
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};
