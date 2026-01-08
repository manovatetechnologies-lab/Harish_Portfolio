import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const AboutPreview = () => {
  return (
    <section id="about-preview" className="section-spacing relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          {/* Section Label */}
          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-black/40 backdrop-blur px-8 py-10 md:px-12 md:py-12">

            {/* Main Content */}
            <div className="space-y-8 mb-10">
              <p className="font-display text-xl md:text-2xl lg:text-3xl font-light text-foreground leading-relaxed">
                I’m Harish N, the Founder and Director of SoftServe Hub, where we
                blend AI, automation, and software delivery to accelerate
                operational growth for teams in 15+ countries.
              </p>

              <p className="text-muted-foreground text-lg font-body font-light leading-relaxed">
                My practice is rooted in clarity and measurable execution -
                turning complex business goals into intelligent systems that
                are easy to adopt, govern, and scale.
              </p>
            </div>

            {/* Location Line */}
            <p className="text-gold/80 text-xs font-body tracking-[0.3em] uppercase mb-10">
              Based in Chennai · Working Globally · 15+ Countries Served
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {/* Personal Email */}
              <Button
                className="
                  bg-gold text-black
                  border border-gold
                  transition-all duration-300
                  hover:bg-black hover:text-gold
                  flex items-center gap-2
                "
              >
                <Mail size={16} />
                Personal Email
              </Button>

              {/* Business Inquiries */}
              <Button
                className="
                  bg-black text-gold
                  border border-gold
                  transition-all duration-300
                  hover:bg-gold hover:text-black
                  flex items-center gap-2
                "
              >
                <Mail size={16} />
                Business Inquiries
              </Button>

              {/* LinkedIn */}
              <Button
                className="
                  bg-black text-foreground
                  border border-white/20
                  transition-all duration-300
                  hover:bg-gold hover:text-black hover:border-gold
                  flex items-center gap-2
                "
              >
                <Linkedin size={16} />
                LinkedIn Profile
              </Button>

              {/* GitHub */}
              <Button
                className="
                  bg-black text-foreground
                  border border-white/20
                  transition-all duration-300
                  hover:bg-gold hover:text-black hover:border-gold
                  flex items-center gap-2
                "
              >
                <Github size={16} />
                GitHub Showcase
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
