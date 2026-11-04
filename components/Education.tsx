'use client';

import { FiAward, FiBookOpen } from 'react-icons/fi';
import { certifications, education } from '@/lib/profile';
import { Reveal, SectionHeader } from './ui';

export function Education() {
  return (
    <section id="education" className="section">
      <div className="section-shell">
        <SectionHeader eyebrow="Education" title="Learning & certifications" />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4">
            {education.map((item, i) => (
              <Reveal key={item.degree} delay={i * 0.05} className="card flex gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <FiBookOpen />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-semibold">{item.degree}</h3>
                    <span className="text-sm text-muted-foreground">{item.year}</span>
                  </div>
                  <p className="text-sm text-primary">{item.minor}</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.school} · {item.place} · <span className="font-medium text-foreground">{item.score}</span>
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <FiAward className="text-accent" /> Certifications
            </h3>
            <ul className="mt-4 divide-y">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start justify-between gap-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{c.name}</p>
                    <p className="text-xs text-muted-foreground">{c.issuer}</p>
                  </div>
                  <span className="chip shrink-0">{c.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
