import React from "react";
import {
  Award,
  GraduationCap,
  ShieldCheck,
  Database,
  Globe,
  Cpu,
  Code,
  Rocket,
  Briefcase,
  Network,
} from "lucide-react";

const RecognitionSection = () => {
  return (
    <section className="section-spacing relative bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">

          {/* SECTION HEADER */}
          <div className="max-w-3xl mb-16 fade-in-up">
            <p className="
  fade-in
  text-gold
  text-xs
  tracking-[0.35em]
  uppercase
  mb-9
  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]
">
              Recognition
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl heading-glow mb-6">
              Certifications and industry credentials
            </h2>

            <p className="text-muted-foreground text-lg">
              A curated collection of certifications, internships, and simulations
              earned while leading intelligent transformation programs.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            <RecognitionCard
              icon={<Award />}
              meta="IEEE · JUN 2025"
              title="11th International Conference on Communication and Signal Processing (ICCSP 2025)"
              credential="-"
            />

            <RecognitionCard
              icon={<GraduationCap />}
              meta="Elevate Labs · APR 2025"
              title="Data Analyst Internship"
              credential="-"
            />

            <RecognitionCard
              icon={<Rocket />}
              meta="IBM SkillsBuild · SEP 2024"
              title="Journey to Cloud (IBM SkillsBuild)"
              credential="U6nhAXzM"
            />

            <RecognitionCard
              icon={<Database />}
              meta="MongoDB · SEP 2024"
              title="MongoDB Node.js Developer Path (SmartBridge)"
              credential="MDBlwu2ng2znl"
            />

            <RecognitionCard
              icon={<Globe />}
              meta="Forage · JUL 2024"
              title="AWS APAC – Solutions Architecture Job Simulation"
              credential="9w3WiALdPgNYQCurm"
            />

            <RecognitionCard
              icon={<Cpu />}
              meta="Forage · JUL 2024"
              title="BCG – GenAI Job Simulation"
              credential="6G2E3jiQXv9MBokow"
            />

            <RecognitionCard
              icon={<ShieldCheck />}
              meta="IBM · APR 2024"
              title="Cybersecurity Fundamentals"
              credential="-"
            />

            <RecognitionCard
              icon={<ShieldCheck />}
              meta="Tata Group · FEB 2024"
              title="Cybersecurity Analyst Job Simulation"
              credential="svaxytsjjeSYKMwnC"
            />

            <RecognitionCard
              icon={<Code />}
              meta="Accenture · FEB 2024"
              title="Developer and Technology Job Simulation"
              credential="ctEdMRpGNGAheZNZP"
            />

            <RecognitionCard
              icon={<GraduationCap />}
              meta="Coursera · FEB 2024"
              title="Google Certified Educator (Data Analytics)"
              credential="KKU45VZ2TDZ9"
            />

            <RecognitionCard
              icon={<Network />}
              meta="Cisco · NOV 2023"
              title="Cybersecurity Essentials"
              credential="-"
            />

            <RecognitionCard
              icon={<Code />}
              meta="Ratatype · NOV 2023"
              title="Typing Certificate"
              credential="C6637287EN"
            />

            <RecognitionCard
              icon={<Database />}
              meta="Forage (Tata Group) · AUG 2023"
              title="Data Visualization"
              credential="z2MEiBz7s5iquguY"
            />

            <RecognitionCard
              icon={<Briefcase />}
              meta="Edureka · JUL 2023"
              title="Full Stack Web Development Internship Program"
              credential="-"
            />

            <RecognitionCard
              icon={<Network />}
              meta="Cisco · MAY 2023"
              title="Networking Essentials"
              credential="-"
            />

            <RecognitionCard
              icon={<Cpu />}
              meta="Gravitchain Technology Group · JUL–NOV 2024"
              title="AI Product Development Intern"
              credential="-"
            />

            <RecognitionCard
              icon={<Code />}
              meta="Shibaura Machine India · 2023"
              title="Electrical, Electronic & C Programming Internship"
              credential="-"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;

/* ------------------------------------------------------------------ */

type RecognitionCardProps = {
  icon: React.ReactNode;
  meta: string;
  title: string;
  credential: string;
};

const RecognitionCard = ({
  icon,
  meta,
  title,
  credential,
}: RecognitionCardProps) => {
  return (
    <div
      className="
        card-gold
        p-7
        rounded-3xl
        transition-all duration-300 ease-out
        hover:-translate-y-1
        hover:gold-glow-subtle
      "
    >
      {/* META */}
      <div className="flex items-center gap-3 text-primary text-xs tracking-[0.25em] uppercase mb-4">
        <span className="w-9 h-9 rounded-full bg-accent/80 flex items-center justify-center gold-glow-subtle">
          {icon}
        </span>
        {meta}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-medium text-foreground mb-3 leading-snug">
        {title}
      </h3>

      {/* CREDENTIAL */}
      <p className="text-sm text-muted-foreground mb-4">
        Credential ID: {credential}
      </p>

      {/* LINK */}
      <a
        href="https://www.linkedin.com/in/harishnandhakumar/"
        target="_blank"
        rel="noopener noreferrer"
        className="link-gold text-sm text-primary"
      >
        View on LinkedIn ↗
      </a>
    </div>
  );
};
