import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import heroImage from "@/components/assets/harish-portrait.jpg";
import {
  Brain,
  Shield,
  Globe,
  Workflow,
  Sparkles
} from "lucide-react";



const HeroSection = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about-preview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: HERO CONTENT */}
<div className="max-w-xl">

  {/* Overline */}
  <p className="fade-in text-gold/80 text-xs font-body tracking-[0.35em] uppercase mb-6">
    AI · Automation · Software · Business Solutions
  </p>

  {/* Name */}
  <h1 className="fade-in fade-in-delay-1 font-display text-5xl md:text-6xl lg:text-7xl font-semibold mb-4">
    <span className="text-foreground">Harish</span>{" "}
    <span className="text-foreground">N</span>
  </h1>

  {/* Designation */}
  <h2 className="fade-in fade-in-delay-2 font-display text-xl md:text-2xl text-gold/90 mb-6">
    Founder & Director - SoftServe Hub
  </h2>

  {/* Description */}
  <p className="fade-in fade-in-delay-3 text-muted-foreground text-lg leading-relaxed mb-10">
    I build AI & automation systems that 10× efficiency for startups and
    enterprises. From intelligent decisioning to full-stack delivery,
    every product blends data, design, and automation to accelerate growth.
  </p>

  {/* CTA BUTTONS */}
  <div className="fade-in fade-in-delay-4 flex flex-wrap gap-4 mb-12">
    <Button
  asChild
  className="
    bg-gold text-black
    border border-gold
    transition-all duration-300 ease-out
    hover:bg-black hover:text-gold hover:border-gold
    shadow-[0_0_20px_rgba(212,175,55,0.25)]
    hover:shadow-[0_0_25px_rgba(212,175,55,0.35)]
  "
>
  <Link to="/contact">
    Work with me ↗
  </Link>
</Button>



<Button
  asChild
  className="
    bg-black text-gold
    border border-gold
    transition-all duration-300 ease-out
    hover:bg-gold hover:text-black hover:border-gold
  "
>
  <Link to="/casestudies">
    View Case Studies ↗
  </Link>
</Button>



<Button
  asChild
  className="
    bg-transparent text-gold
    border border-gold/40
    transition-all duration-300
    hover:bg-gold hover:text-black
    flex items-center gap-2
  "
>
  <a
    href="https://www.softservehub.in"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Globe className="w-4 h-4 transition-colors" />
    Visit SoftServe Hub
  </a>
</Button>


  </div>

  {/* FEATURE CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    
    {/* Card 1 */}
    <div className="
  flex gap-4
  rounded-2xl
  border border-gold/20
  bg-black/40
  p-6
  backdrop-blur
  transition-all duration-300
  hover:border-gold/40
">
  {/* Icon */}
  <div className="
    w-10 h-10
    rounded-full
    bg-gold/10
    flex items-center justify-center
  ">
    <Brain className="w-5 h-5 text-gold" />
  </div>

  {/* Content */}
  <div>
    <h3 className="text-gold font-semibold mb-2">
      AI-first strategy
    </h3>
    <p className="text-sm text-muted-foreground mb-4">
      Every engagement begins with a decision architecture audit and
      value modelling.
    </p>
    <button className="
      inline-flex items-center gap-1
      text-sm text-gold
      border border-gold/40
      rounded-full px-4 py-1
      transition-all
      hover:bg-gold hover:text-black
    ">
      Explore Workflows ↗
    </button>
  </div>
</div>

<div className="
  flex gap-4
  rounded-2xl
  border border-gold/20
  bg-black/40
  p-6
  backdrop-blur
  transition-all duration-300
  hover:border-gold/40
">
  {/* Icon */}
  <div className="
    w-10 h-10
    rounded-full
    bg-gold/10
    flex items-center justify-center
  ">
    <Shield className="w-5 h-5 text-gold" />
  </div>

  {/* Content */}
  <div>
    <h3 className="text-gold font-semibold mb-2">
      Automation with guardrails
    </h3>
    <p className="text-sm text-muted-foreground mb-4">
      LLM and workflow agents launched with governance, monitoring,
        and change ops.
    </p>
    <button className="
      inline-flex items-center gap-1
      text-sm text-gold
      border border-gold/40
      rounded-full px-4 py-1
      transition-all
      hover:bg-gold hover:text-black
    ">
      Explore Workflows ↗
    </button>
  </div>
</div>


    

  </div>
</div>


          {/* RIGHT: IMAGE */}
          {/* RIGHT: IMAGE */}
<div className="relative flex justify-center lg:justify-end">
  <div className="relative w-80 h-[30rem] md:w-96 md:h-[34rem] lg:w-[26rem] lg:h-[38rem]">
    
    {/* GOLD GLOW AURA */}
    <div className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl" />
    <div className="absolute -inset-4 rounded-full bg-gold/20 blur-2xl" />

    {/* IMAGE */}
    <img
      src={heroImage}
      alt="Harish N"
      className="relative z-10 w-full h-full object-cover rounded-3xl border border-gold/30 shadow-[0_0_60px_rgba(212,175,55,0.25)]"
    />

    {/* SUBTLE OUTLINE */}
    <div className="absolute inset-0 rounded-3xl ring-1 ring-gold/20 pointer-events-none" />
  </div>
</div>


        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors duration-300"
        aria-label="Scroll to content"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
