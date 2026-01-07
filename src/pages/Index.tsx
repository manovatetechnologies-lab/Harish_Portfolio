import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import CaseStudiesPreview from "@/components/sections/CaseStudiesPreview";
import InsightsPreview from "@/components/sections/InsightsPreview";
import ContactCTA from "@/components/sections/ContactCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <CaseStudiesPreview />
      <InsightsPreview />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
