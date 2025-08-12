// In the Index.tsx file
import Header from "@/components/portfolio/Header";
import MainProjects from "@/components/portfolio/MainProjects";
import MediaSection from "@/components/portfolio/MediaSection";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Header />
      
      {/* Main Projects Section */}
      <MainProjects />
      
      {/* Media Showcase Section - Corrected */}
      <MediaSection />
      
      {/* Footer Contact Section */}
      <Footer />
    </div>
  );
};

export default Index;