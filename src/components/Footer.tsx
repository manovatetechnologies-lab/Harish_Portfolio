import {
  Mail,
  Briefcase,
  Calendar,
  Linkedin,
  Github,
  Globe,
  Download,
} from "lucide-react";
import { Link } from "react-router-dom";

const FooterCTA = () => {
  const navLinks = [
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Projects", to: "/projects" },
  { label: "Contact", to: "/contact" },
];
  return (
    <footer className="relative mt-32 border-t border-gold/10 bg-black/80 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mb-16">

          {/* LEFT : PROFILE */}
          <div>
            <h3 className="font-display text-3xl mb-4 text-foreground">
              Harish N
            </h3>

            <p className="text-muted-foreground leading-relaxed max-w-md mb-8">
              Founder of SoftServe Hub. Delivering AI, automation, and
              product engineering solutions focused on real business impact.
            </p>

            {/* PRIMARY CTA */}
            <a
  href="/BusinessCard.pdf"
  download="Harish-Business-Card.pdf"
  className="
    inline-flex items-center gap-2
    rounded-full
    bg-gold
    px-7 py-4
    text-black font-medium
    transition-all duration-300
    hover:scale-105
    hover:shadow-[0_0_40px_rgba(234,179,8,0.4)]
  "
>
  <Download className="w-4 h-4" />
  Download Business Card
</a>

          </div>

          {/* MIDDLE : NAVIGATION */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-foreground">
              Navigation
            </h4>

            <ul className="space-y-4 text-muted-foreground">
  {navLinks.map((item) => (
    <li key={item.label}>
      <Link
        to={item.to}
        className="hover:text-gold transition cursor-pointer"
      >
        {item.label}
      </Link>
    </li>
  ))}
</ul>
          </div>

          {/* RIGHT : ACTION BUTTONS */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-foreground">
              Get in Touch
            </h4>

            <div className="flex flex-wrap gap-3">
  <ActionButton
    icon={<Mail />}
    label="Email"
    href="mailto:founder@softservehub.in"
    external
  />

  <ActionButton
    icon={<Briefcase />}
    label="Business"
    href="/contact"
  />

  <ActionButton
    icon={<Calendar />}
    label="Intro Call"
    href="https://calendly.com/softservehub/client-meeting"
    external
  />

  <ActionButton
    icon={<Linkedin />}
    label="LinkedIn"
    href="https://www.linkedin.com/in/harishnandhakumar"
    external
  />

  <ActionButton
    icon={<Github />}
    label="GitHub"
    href="https://github.com/HarishNandakumar"
    external
  />

  <ActionButton
    icon={<Globe />}
    label="Website"
    href="https://www.softservehub.in"
    external
  />
</div>

          </div>
        </div>

        {/* FOOTER META */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2026 Harish N · SoftServe Hub. All rights reserved.</p>

          <div className="flex items-center gap-4">
            <span>founder@softservehub.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;

/* -------------------------------------------------- */

const ActionButton = ({
  icon,
  label,
  href,
  external = false,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
  external?: boolean;
}) => {
  const commonClasses = `
    flex items-center
    gap-4
    min-w-[170px]
    justify-start
    rounded-full
    border border-white/10
    bg-white/5
    px-6 py-3
    text-sm font-medium
    text-foreground
    backdrop-blur
    transition-all duration-300
    hover:border-gold/30
    hover:bg-white/10
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        <span className="flex items-center justify-center w-5 h-5 text-gold flex-shrink-0">
          {icon}
        </span>
        <span>{label}</span>
      </a>
    );
  }

  return (
    <a href={href} className={commonClasses}>
      <span className="flex items-center justify-center w-5 h-5 text-gold flex-shrink-0">
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
};
