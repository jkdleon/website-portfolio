import Nav from '@/components/ui/Nav';
import ScrollProgress from '@/components/ui/ScrollProgress';
import Hero from '@/components/landing/Hero';
import About from '@/components/landing/About';
import Experience from '@/components/landing/Experience';
import Skills from '@/components/landing/Skills';
import Certifications from '@/components/landing/Certifications';
import Projects from '@/components/landing/Projects';
import Contact from '@/components/landing/Contact';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-border py-10">
        <div className="max-w-6xl mx-auto px-5 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            {'// network × cloud × ops'}
          </p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            &copy; 2026 James Kyle De Leon
          </p>
        </div>
      </footer>
    </>
  );
}
