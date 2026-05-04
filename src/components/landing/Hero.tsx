import { personal } from '@/lib/constants/personal';
import { experience } from '@/lib/constants/experience';
import { certifications } from '@/lib/constants/certifications';
import { skills } from '@/lib/constants/skills';
import { StatCounter } from '@/components/ui/StatCounter';

export default function Hero() {
  const initials = personal.name
    .split(' ')
    .map((p) => p[0])
    .slice(0, 3)
    .join('');

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-20 overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 w-full">
        <div className="flex items-center gap-3 mb-8">
          <span className="relative inline-flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Available for Remote · Cloud &amp; DevOps
          </span>
        </div>

        <div className="grid md:grid-cols-[auto_1fr] gap-8 md:gap-10 items-center">
          <div
            aria-hidden="true"
            className="hidden md:flex w-32 h-32 rounded-full glow-ring items-center justify-center bg-surface font-mono text-2xl text-accent tracking-tight"
          >
            {initials}
          </div>

          <div>
            <p className="font-mono text-xs text-accent label-block tracking-widest uppercase mb-4">
              hello
            </p>
            <h1 className="text-5xl md:text-7xl font-semibold text-foreground leading-[0.95] tracking-tight mb-5">
              {personal.name}
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-3">
              {personal.tagline}
            </p>
            <p className="font-mono text-xs uppercase tracking-widest text-subtle">
              Doha, Qatar &middot; <span className="text-muted">{personal.openToRemote}</span>
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent text-background font-mono text-xs tracking-widest uppercase hover:opacity-90 transition-opacity"
              >
                Let&apos;s Chat
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="chip"
              >
                Connect on LinkedIn
              </a>
              <a href="/resume.pdf" download className="chip">
                Resume
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <StatCounter value={7} suffix="+" label="Years Experience" />
          <StatCounter value={experience.length} suffix="" label="Roles Held" />
          <StatCounter value={certifications.length} suffix="" label="Certifications" />
          <StatCounter value={skills.length} suffix="" label="Skill Areas" />
        </div>

        <div className="mt-14 flex items-center gap-2 font-mono text-[11px] uppercase tracking-widest text-subtle">
          <span className="h-px flex-1 bg-border" />
          <span>scroll</span>
          <span className="text-accent">↓</span>
        </div>
      </div>
    </section>
  );
}
