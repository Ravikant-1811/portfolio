'use client';

import { FiExternalLink, FiMapPin } from 'react-icons/fi';
import { experience } from '@/lib/profile';
import { Metric, Reveal, SectionHeader } from './ui';

export function Experience() {
  return (
    <section id="experience" className="section bg-muted/40">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Experience"
          title="Where I’ve made an impact"
          lead="From web development and CRM systems to social media operations — each role measured by outcomes, not just output."
        />

        <ol className="relative space-y-6 border-l pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <li key={job.company} className="relative">
              <span
                className={`absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-background sm:-left-[47px] ${
                  job.current ? 'bg-accent ring-4 ring-accent/20' : 'bg-primary'
                }`}
              />
              <Reveal delay={i * 0.04} className="card p-6 sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold">{job.role}</h3>
                    <p className="font-medium text-primary">{job.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted-foreground">
                    <p className="font-medium text-foreground">
                      {job.period}
                      {job.current && <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-xs text-accent">Current</span>}
                    </p>
                    <p className="mt-1 flex items-center justify-end gap-1">
                      <FiMapPin size={12} /> {job.location} · {job.type}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted-foreground">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                      <span>
                        <Metric text={point} />
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {job.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                  {job.link && (
                    <a href={job.link.href} target="_blank" rel="noopener noreferrer" className="chip gap-1 text-primary hover:border-primary/50">
                      {job.link.label} <FiExternalLink size={11} />
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
