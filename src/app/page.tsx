import Contact from '@/components/landing/Contact';
import { Credentials } from '@/components/landing/Credentials';
import Footer from '@/components/landing/Footer';
import Hero from '@/components/landing/Hero';
import Projects from '@/components/landing/Projects';
import { Stack } from '@/components/landing/Stack';
import { Summary } from '@/components/landing/Summary';
import { Work } from '@/components/landing/Work';
import { TopBar } from '@/components/ui/TopBar';

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero id="overview" />
        <Summary id="summary" />
        <Work id="work" />
        <Projects id="projects" />
        <Stack id="stack" />
        <Credentials id="credentials" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
