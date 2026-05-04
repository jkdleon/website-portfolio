import Nav from '@/components/ui/Nav';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Skills from '@/components/landing/Skills';
import DataAnalytics from '@/components/landing/DataAnalytics';
import Certifications from '@/components/landing/Certifications';
import AcademicLog from '@/components/landing/AcademicLog';
import Experience from '@/components/landing/Experience';
import FeaturedVenture from '@/components/landing/FeaturedVenture';
import Projects from '@/components/landing/Projects';
import Contact from '@/components/landing/Contact';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero id="overview" />
        <About />
        <Skills id="skills" />
        <DataAnalytics />
        <Certifications />
        <AcademicLog id="education" />
        <Experience id="history" />
        <FeaturedVenture id="venture" />
        <Projects id="projects" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
