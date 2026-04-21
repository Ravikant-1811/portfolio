'use client';

import { motion } from 'framer-motion';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['PHP', 'JavaScript', 'Python', 'HTML', 'CSS', 'C/C++'],
  },
  {
    title: 'Frameworks & CMS',
    skills: ['React', 'Next.js', 'WordPress', 'Elementor', 'ACF', 'Node.js'],
  },
  {
    title: 'Databases & Backend',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'API Integration', 'Authentication', 'Server Logic'],
  },
  {
    title: 'AI, Cloud & DevOps',
    skills: ['AI Model Integration', 'Cloudflare', 'Linux Server Management', 'Automation Workflows', 'Git', 'Uptime Monitoring'],
  },
  {
    title: 'Design & Media',
    skills: ['Photoshop', 'Illustrator', 'Canva', 'Affinity Photo', 'Premiere Pro', 'CapCut'],
  },
  {
    title: 'Marketing Operations',
    skills: ['Meta Business Suite', 'Paid Ads', 'Email Marketing', 'WhatsApp Marketing', 'Campaign Tracking', 'Content Planning'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="section-title">Skills and Tech Stack</h2>
          <p className="section-subtitle">A blend of software engineering, automation, cloud operations, and digital growth tooling.</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.05 }}
              className="glass-card p-6"
            >
              <h3 className="text-xl font-bold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-background/75 px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
