'use client';

import { FiArrowUpRight, FiCheck, FiGithub } from 'react-icons/fi';
import { featuredProjects, openSource, profile } from '@/lib/profile';
import { Reveal, SectionHeader } from './ui';

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Projects"
          title="Things I’ve built"
          lead="Hardware, infrastructure and client software — plus open-source tools on GitHub."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.06} className="card card-hover flex flex-col p-6">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">{project.context}</p>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{project.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              <ul className="mt-5 space-y-2 text-sm">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <FiCheck className="shrink-0 text-accent" /> {h}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-6">
                {project.stack.map((s) => (
                  <span key={s} className="chip">
                    {s}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-2xl font-bold">Open source</h3>
            <p className="mt-1 text-sm text-muted-foreground">Tools and apps published on GitHub.</p>
          </div>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
            <FiGithub /> All repositories
          </a>
        </Reveal>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.map((repo, i) => (
            <Reveal key={repo.title} delay={i * 0.04}>
              <a
                href={repo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full flex-col p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <h4 className="font-semibold group-hover:text-primary">{repo.title}</h4>
                  <FiArrowUpRight className="shrink-0 text-muted-foreground transition group-hover:rotate-45 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{repo.description}</p>
                <p className="mt-auto pt-4 text-xs font-medium text-muted-foreground">{repo.stack.join(' · ')}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
