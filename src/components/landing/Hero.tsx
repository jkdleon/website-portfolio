import { personal } from '@/lib/constants/personal';
import { Avatar } from '@/components/ui/Avatar';
import { ScrollPrompt } from '@/components/ui/ScrollPrompt';

export default function Hero({ id }: { id?: string }) {
  const parts = personal.name.toLowerCase().split(' ');
  const firstLine = parts[0];
  const secondLine = parts.slice(1).join(' ');

  return (
    <section
      id={id}
      className="scroll-mt-14 min-h-[90vh] flex flex-col justify-center pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
          {/* Left column */}
          <div className="flex-1">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight leading-[1.05] text-foreground">
              <span className="block">{firstLine}</span>
              <span className="block">{secondLine}</span>
            </h1>

            <p className="mt-6 text-muted text-base md:text-lg max-w-md leading-relaxed">
              {personal.tagline}
            </p>

            <p className="mt-2 font-mono text-xs text-subtle tracking-widest uppercase">
              {personal.openToRemote}
            </p>

            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full font-mono text-[11px] uppercase tracking-widest hover:opacity-80 transition-opacity"
              >
                Let&apos;s Chat
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full font-mono text-[11px] uppercase tracking-widest text-muted hover:border-border-strong hover:text-foreground transition-colors"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right column — circular avatar */}
          <div className="flex md:justify-end">
            <Avatar initials="JK" size={200} />
          </div>
        </div>

        {/* Scroll prompt */}
        <div className="mt-16 md:mt-20">
          <ScrollPrompt />
        </div>
      </div>
    </section>
  );
}
