'use client';

import { FiCode, FiCpu, FiDatabase, FiLayout, FiServer, FiTrendingUp } from 'react-icons/fi';
import { focusAreas, profile } from '@/lib/profile';
import { Reveal, SectionHeader } from './ui';

const icons = [FiCode, FiDatabase, FiCpu, FiServer, FiLayout, FiTrendingUp];

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-shell">
        <SectionHeader eyebrow="About" title="Engineer by training, problem-solver by habit." />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-lg leading-relaxed text-muted-foreground">{profile.summary}</p>
            <div className="mt-6 grid gap-3 text-sm sm:grid-cols-2">
              {[
                ['Based in', profile.location],
                ['Experience', '5 roles · since 2020'],
                ['Education', 'B.Tech CSE, minor in AI & ML'],
                ['Status', profile.availability],
              ].map(([k, v]) => (
                <div key={k} className="card p-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{k}</p>
                  <p className="mt-1 font-medium">{v}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((area, i) => {
              const Icon = icons[i % icons.length];
              return (
                <Reveal key={area.title} delay={i * 0.05} className="card card-hover p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <h3 className="mt-4 font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{area.copy}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
