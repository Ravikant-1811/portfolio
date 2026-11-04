'use client';

import { skillGroups } from '@/lib/profile';
import { Reveal, SectionHeader } from './ui';

export function Skills() {
  return (
    <section id="skills" className="section bg-muted/40">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Skills"
          title="Toolkit"
          lead="A blend of engineering, infrastructure, AI and creative tools — so a project can go from idea to launch to growth."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.05} className="card p-6">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="chip text-foreground">
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
