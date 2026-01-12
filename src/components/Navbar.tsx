import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Experience", path: "/experience" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/casestudies" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (location.pathname === "/" && item.path === "/") {
      scrollToSection("hero");
    }
  };

  return (
    <nav
  className="
    fixed top-0 left-0 right-0 z-50
    bg-primary
    border-b border-primary/40
    overflow-hidden
  "
>

  {/* Content Overlay */}
  <div className="relative z-10">
    <div className="container mx-auto px-6 lg:px-12">
      <div className="flex items-center justify-between h-14">
        {/* Logo */}
        <Link
          to="/"
          className="font-display text-2xl font-light tracking-wider text-black font-semibold"
        >
          Business Portfolio
        </Link>

        {/* Desktop Navigation */}
<div className="hidden md:flex items-center space-x-8">
  {navItems.map((item) => {
    const isActive = location.pathname === item.path;

    return (
      <Link
        key={item.name}
        to={item.path}
        className={`
          relative
          text-sm uppercase tracking-wide
          text-black/80
          transition-colors duration-300
          hover:text-black

          after:content-['']
          after:absolute
          after:left-0
          after:-bottom-1
          after:h-[2px]
          after:w-0
          after:bg-black
          after:transition-all
          after:duration-300
          after:ease-out
          hover:after:w-full

          ${
            isActive
              ? "text-black after:w-full"
              : ""
          }
        `}
      >
        {item.name}
      </Link>
    );
  })}
</div>


        {/* Mobile Toggle */}
        <button className="md:hidden text-black">
          <Menu size={24} />
        </button>

      </div>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
