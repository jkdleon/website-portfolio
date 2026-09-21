import Image from 'next/image';

import { CareerTopology } from '@/components/landing/CareerTopology';
import { MonoLabel } from '@/components/ui/MonoLabel';
import { NodeMesh } from '@/components/ui/NodeMesh';
import { StatTile } from '@/components/ui/StatTile';
import { personal } from '@/lib/constants/personal';
import { stats } from '@/lib/constants/stats';

export default function Hero({ id }: { id?: string }) {
  return (
    <section id={id ?? 'overview'} className="relative scroll-mt-14 overflow-hidden">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <NodeMesh />

      <div className="relative mx-auto max-w-content px-5 pb-12 pt-14 md:pb-16 md:pt-20">
        <div className="grid items-center gap-6 md:grid-cols-[auto_minmax(0,1fr)_auto] md:gap-8">
          <Image
            src="/pic.jpg"
            alt=""
            width={96}
            height={96}
            priority
            className="h-20 w-20 rounded-full border border-line-strong object-cover md:h-24 md:w-24"
          />

          <div className="min-w-0">
            <MonoLabel as="p" tone="accent" className="mb-2">
              {personal.role}
            </MonoLabel>
            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-fg sm:text-5xl md:text-6xl">
              {personal.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {personal.headline}
            </p>
          </div>

          <div className="flex flex-row gap-3 md:flex-col">
            <a
              href={personal.cvHref}
              download
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-[6px] bg-fg px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-bg transition-opacity hover:opacity-85"
            >
              Download CV <span aria-hidden="true">↓</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex h-11 items-center justify-center gap-2 rounded-[6px] border border-line-strong px-5 font-mono text-[11px] uppercase tracking-[0.12em] text-fg transition-colors hover:border-accent hover:text-accent"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
          {stats.map((stat) => (
            <StatTile key={stat.label} value={stat.value} display={stat.display} label={stat.label} />
          ))}
        </div>

        <div className="mt-10">
          <CareerTopology />
        </div>
      </div>
    </section>
  );
}
