'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
};

const GITHUB_USER = 'Ravikant-1811';

export function Projects() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`);
        if (!res.ok) {
          setLoading(false);
          return;
        }

        const data = (await res.json()) as Repo[];
        setRepos(data);
      } catch {
        setRepos([]);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const vercelProjects = useMemo(() => {
    return repos
      .filter((repo) => repo.homepage && repo.homepage.includes('vercel.app'))
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .slice(0, 9);
  }, [repos]);

  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="section-title">Projects From Vercel</h2>
          <p className="section-subtitle">Auto-fetched from your GitHub repos that have a Vercel deployment URL.</p>
        </div>

        {loading ? (
          <div className="mt-12 text-center text-muted-foreground">Loading projects...</div>
        ) : vercelProjects.length === 0 ? (
          <div className="mt-12 glass-card p-8 text-center">
            <p className="text-muted-foreground">No Vercel-linked projects found in GitHub repo homepages.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Add a `https://your-project.vercel.app` URL in each repo homepage field and they will appear here automatically.
            </p>
          </div>
        ) : (
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {vercelProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.07 }}
                className="glass-card p-6"
              >
                <h3 className="text-xl font-bold capitalize">{project.name.replace(/-/g, ' ')}</h3>
                <p className="mt-3 min-h-[48px] text-sm text-muted-foreground">
                  {project.description || 'Live deployed project from GitHub + Vercel.'}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-2">
                  {project.language && (
                    <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                      {project.language}
                    </span>
                  )}
                  <span className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                    ⭐ {project.stargazers_count}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={project.homepage || undefined}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
                  >
                    Live Demo
                    <FiExternalLink size={14} />
                  </a>
                  <a
                    href={project.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold"
                  >
                    GitHub
                    <FiGithub size={14} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
