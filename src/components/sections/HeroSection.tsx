import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowDown, Brain, Shield, Globe } from "lucide-react";
import heroImage from "@/components/assets/harish-portrait.jpg";

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
      className="relative min-h-screen bg-background flex items-center"
    >
      <div className="container mx-auto px-6 lg:px-12 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div className="max-w-xl">

            {/* Overline */}
<p className="
  fade-in
  text-gold
  text-xs
  tracking-[0.35em]
  uppercase
  mb-9
  drop-shadow-[0_0_10px_rgba(234,179,8,0.6)]
">
  Building · Investing · Scaling · Client Strategy
</p>


            {/* Name */}
<h1 className="fade-in fade-in-delay-1 text-5xl md:text-6xl lg:text-7xl mb-4 heading-glow font-semibold">
  <span className="text-black">Harish N</span>
</h1>
{/* Roles & Impact */}
<div className="fade-in fade-in-delay-2 space-y-3 mb-10">
  <p className="text-lg leading-relaxed">
    <span className="text-primary font-medium">
      Founder & Director
    </span>{" "}
    <span className="text-muted-foreground">at</span>{" "}
    <span className="text-primary font-medium">
      SoftServe Hub
    </span>{" "}
    - building and scaling businesses through strategic execution,
    operational structure, and outcome-driven delivery.
  </p>

  <p className="text-lg leading-relaxed">
    <span className="text-primary font-medium">
      Angel Investor
    </span>{" "}
    <span className="text-muted-foreground">at</span>{" "}
    <span className="text-primary font-medium">
      SoftServe Hub
    </span>{" "}
    - supporting early-stage ventures with capital, strategic guidance,
    and execution support focused on long-term value creation.
  </p>

  <p className="text-lg leading-relaxed">
    <span className="text-primary font-medium">
      Business Operations & Client Strategy Manager
    </span>{" "}
    <span className="text-muted-foreground">at</span>{" "}
    <span className="text-primary font-medium">
      Manovate Technologies
    </span>{" "}
    - leading client engagements, strengthening operational workflows,
    and driving sustainable growth initiatives.
  </p>

</div>


            {/* CTA */}
<div className="fade-in fade-in-delay-4 flex flex-wrap gap-4 mb-14">

  {/* 1. Work with me – Calendar */}
  <Button
    asChild
    className="
      rounded-full
      gold-glow
      bg-primary
      text-primary-foreground
      px-7 py-5
      hover:bg-primary/90
    "
  >
    <a
      href="https://YOUR-CALENDAR-LINK-HERE"
      target="_blank"
      rel="noopener noreferrer"
    >
      Work with me ↗
    </a>
  </Button>

  <Button
  asChild
  className="
    rounded-full
    border-gold-gradient
    bg-transparent
    text-primary
    px-7 py-5
    hover:bg-accent
  "
>
  <Link to="/casestudies">
    View Case Studies ↗
  </Link>
</Button>


  {/* 3. SoftServe Hub */}
  <Button
    asChild
    variant="outline"
    className="
      rounded-full
      text-primary
      border-border
      px-7 py-5
      hover:bg-accent
      flex items-center gap-2
    "
  >
    <a
      href="https://www.softservehub.in"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Globe className="w-4 h-4" />
      SoftServe Hub
    </a>
  </Button>

  {/* 4. Manovate Technologies */}
  <Button
    asChild
    variant="outline"
    className="
      rounded-full
      text-primary
      border-border
      px-7 py-5
      hover:bg-accent
      flex items-center gap-2
    "
  >
    <a
      href="https://www.manovatetechnologies.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Globe className="w-4 h-4" />
      Manovate Technologies
    </a>
  </Button>

</div>

               </div>

          {/* RIGHT IMAGE */}
<div className="relative flex justify-center lg:justify-end">
  <div className="relative w-72 h-[24rem] md:w-80 md:h-[26rem] lg:w-[24rem] lg:h-[30rem]">
    <div className="absolute -inset-5 rounded-full bg-primary/20 blur-3xl" />
    <img
      src={heroImage}
      alt="Harish N portrait"
      className="relative z-10 w-full h-full object-cover rounded-3xl border border-border gold-glow"
    />
  </div>
</div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition"
        aria-label="Scroll to content"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
};

export default HeroSection;
