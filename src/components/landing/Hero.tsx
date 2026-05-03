import { personal } from '@/lib/constants/personal';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <p className="font-mono text-accent text-sm mb-4 tracking-widest uppercase">
          Hello, I&apos;m
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
          {personal.name}
        </h1>
        <p className="font-mono text-lg md:text-xl text-muted mb-4">
          {personal.tagline}
        </p>
        <p className="text-muted mb-10">{personal.openToRemote}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors"
          >
            View My Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 border border-accent text-accent font-semibold rounded hover:bg-accent/10 transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
