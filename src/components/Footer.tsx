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
    <footer className="relative overflow-hidden">

  {/* ================= TOP (GOLD SECTION) ================= */}
  <div className="bg-primary">
    <div className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-10">

        {/* LEFT */}
        <div>
          <h3 className="font-display text-3xl mb-4 text-black">
            Harish N
          </h3>

          <p className="text-black/70 leading-relaxed max-w-md mb-8">
            Founder and business operator focused on building scalable
            organizations, strengthening operations, and delivering
            measurable outcomes for clients and partners.
          </p>

          <a
            href="/BusinessCard.pdf"
            download="Harish-Business-Card.pdf"
            className="
              inline-flex items-center gap-2
              rounded-full
              bg-black text-white
              px-7 py-4
              font-medium
              transition-all duration-300
              hover:scale-[1.03]
              hover:bg-black/90
            "
          >
            <Download className="w-4 h-4" />
            Download Business Card
          </a>
        </div>

        {/* MIDDLE */}
        <div>
          <h4 className="text-xl font-medium mb-6 text-black">
            Navigation
          </h4>

          <ul className="space-y-4">
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  className="text-black/70 hover:text-black transition"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT */}
        <div>
          <h4 className="text-xl font-medium mb-6 text-black">
            Get in Touch
          </h4>

          <div className="flex flex-wrap gap-3">
            <ActionButton icon={<Mail />} label="Email" href="mailto:founder@softservehub.in" />
            <ActionButton icon={<Briefcase />} label="Business" href="mailto:info@softservehub.in" />
            <ActionButton icon={<Calendar />} label="Intro Call" href="https://calendly.com/softservehub/client-meeting" />
            <ActionButton icon={<Linkedin />} label="LinkedIn" href="https://www.linkedin.com/in/harishnandhakumar/" />
            <ActionButton icon={<Github />} label="GitHub" href="https://github.com/HarishNandakumar" />
            <ActionButton icon={<Globe />} label="Website" href="https://www.softservehub.in" />
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* ================= BOTTOM (WHITE META BAR) ================= */}
  <div className="bg-background border-t border-black/10">
    <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-black">
      <p>© 2026 Harish N · SoftServe Hub. All rights reserved.</p>
      <span>founder@softservehub.in</span>
    </div>
  </div>

</footer>

  );
};

export default FooterCTA;


const ActionButton = ({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-3
        min-w-[170px]
        rounded-full
        border border-black/20
        bg-white/40
        backdrop-blur
        px-6 py-3
        text-sm font-medium
        text-black
        transition-all duration-300
        hover:bg-white/60
        hover:border-black/40
      "
    >
      <span className="w-5 h-5 text-black">{icon}</span>
      <span>{label}</span>
    </a>
  );
};
