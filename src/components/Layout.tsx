import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import GeometricPatternBackground from "./StarFieldBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <GeometricPatternBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
