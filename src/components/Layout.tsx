import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StarfieldBackground from "./StarfieldBackground";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StarfieldBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
