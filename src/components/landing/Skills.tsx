'use client';

import { useState } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { skills } from '@/lib/constants/skills';

export default function Skills({ id }: { id?: string }) {
  const [active, setActive] = useState(skills[0].name);
  const category = skills.find((s) => s.name === active) ?? skills[0];

  return (
    <SectionWrapper id={id ?? 'skills'}>
      <div className="max-w-6xl mx-auto px-5">
        <SectionLabel label="technicalCommandCenter" />
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-10">
          Competency matrix.
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {skills.map((s) => (
            <button
              key={s.name}
              onClick={() => setActive(s.name)}
              className={`px-4 py-1.5 rounded-full font-mono text-[11px] uppercase tracking-widest border transition-all ${
                active === s.name
                  ? 'bg-foreground text-background border-foreground'
                  : 'border-border text-subtle hover:text-foreground hover:border-border-strong'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Skill chips for selected category */}
        <div className="flex flex-wrap gap-2 min-h-[60px]">
          {category.skills.map((skill) => (
            <span key={skill} className="chip cursor-default">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
