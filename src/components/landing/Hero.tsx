import { personal } from '@/lib/constants/personal';
import { Avatar } from '@/components/ui/Avatar';
import { ScrollPrompt } from '@/components/ui/ScrollPrompt';

export default function Hero({ id }: { id?: string }) {
  return (
    <section
      id={id}
      className="scroll-mt-14 min-h-screen flex flex-col items-center justify-center pt-20 pb-16 text-center px-5"
    >
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
        {/* Avatar */}
        <div className="mb-6">
          <Avatar initials="JK" size={96} />
        </div>

        {/* Tagline above name */}
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
          {personal.tagline}
        </p>

        {/* Giant name */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[1.0] text-foreground mb-8">
          {personal.name}
        </h1>

        {/* Social chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            <span className="text-accent">↗</span> LinkedIn
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="chip"
          >
            <span className="text-accent">↗</span> GitHub
          </a>
          <span className="chip pointer-events-none">
            📍 {personal.openToRemote}
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 flex-wrap justify-center mb-16">
          <a
            href={`mailto:${personal.email}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-mono text-[11px] uppercase tracking-widest hover:opacity-80 transition-opacity"
          >
            Let&apos;s Chat
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full font-mono text-[11px] uppercase tracking-widest text-muted hover:border-border-strong hover:text-foreground transition-colors"
          >
            Resume
          </a>
        </div>

        <ScrollPrompt />
      </div>
    </section>
  );
}
