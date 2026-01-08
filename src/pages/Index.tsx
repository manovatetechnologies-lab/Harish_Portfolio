import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import ImpactStats from "@/components/sections/StatsSection";
import InsightsPreview from "@/components/sections/InsightsPreview";
import ContactCTA from "@/components/sections/ContactCTA";
import SignatureApproach from "@/components/sections/SignatureApproach";
import ProjectsSection from "@/components/sections/ProjectSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ImpactStats />
      <InsightsPreview />
      <SignatureApproach />
      <ProjectsSection />
      <ContactCTA />
    </Layout>
  );
};

export default Index;
