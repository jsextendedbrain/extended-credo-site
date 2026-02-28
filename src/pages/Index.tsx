import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsBar from "@/components/SkillsBar";
import AssignmentsSection from "@/components/AssignmentsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CoursesSection from "@/components/CoursesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsBar />
        <AssignmentsSection />
        <ExperienceSection />
        <CoursesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
