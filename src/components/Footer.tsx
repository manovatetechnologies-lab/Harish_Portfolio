import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative z-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl font-light tracking-wider text-foreground hover:text-primary transition-colors duration-300"
          >
            <span className="text-gold-gradient">AM</span>
          </Link>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Alexander Mitchell. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm font-body tracking-wide transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-primary text-sm font-body tracking-wide transition-colors duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
