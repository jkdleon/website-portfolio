import Nav from '@/components/ui/Nav';
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
      <footer className="border-t border-border py-8 text-center">
        <p className="font-mono text-xs text-muted">
          James Kyle De Leon &middot; Built with Next.js &amp; Tailwind
        </p>
      </footer>
    </>
  );
}
