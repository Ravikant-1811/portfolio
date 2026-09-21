'use client';

import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

const projects = [
  { index: '01', title: 'Taskflow', description: 'A multi-tenant task and workspace system designed for teams that need clarity without heavyweight project software.', impact: 'Workspaces · roles · task pipelines', stack: ['PHP', 'SQLite', 'JavaScript'], href: 'https://github.com/Ravikant-1811/Taskflow-PHP', tone: 'bg-secondary text-secondary-foreground' },
  { index: '02', title: 'Multi-User Communication Platform', description: 'A role-based business platform with separate admin and client dashboards, secure access, and real-time communication.', impact: 'Auth · dashboards · live chat', stack: ['PHP', 'MySQL', 'AJAX'], href: 'https://github.com/Ravikant-1811/Multi-User-PHP-Web-Application', tone: 'bg-primary text-primary-foreground' },
  { index: '03', title: 'WhatsApp Campaign Console', description: 'A controlled bulk-messaging dashboard with templates, scheduling, queue visibility, and safer delivery controls.', impact: 'Queues · campaigns · automation', stack: ['TypeScript', 'Node.js', 'Automation'], href: 'https://github.com/Ravikant-1811/Whatsapp-Bulk-Bot', tone: 'bg-foreground text-background' },
];

const smallerProjects = [
  ['Digital Card Generator', 'PHP + SQLite product for creating and sharing managed digital cards.', 'Digital-Card-Generator'],
  ['Email Signature Tool', 'Reusable email-safe signature builder with saved profile support.', 'Email-Signature-Tool'],
  ['Find Business', 'Business discovery and lead collection platform backed by PHP and MySQL.', 'find-business'],
];

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-8 border-b border-foreground pb-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div><p className="eyebrow mb-5 text-primary">Selected work / 2024—2026</p><h2 className="section-title">Proof, not promises.</h2></div>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground lg:justify-self-end lg:text-lg">A selection of products built around the work businesses actually do: coordinating teams, serving clients, moving information, and reducing repetition.</p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article key={project.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: index * 0.08 }} className={`${project.tone} flex min-h-[480px] flex-col justify-between p-7 sm:p-9`}>
              <div className="flex items-start justify-between"><span className="eyebrow opacity-65">Project {project.index}</span><FiArrowUpRight size={24} /></div>
              <div><p className="mb-5 text-sm font-bold uppercase tracking-[0.12em] opacity-65">{project.impact}</p><h3 className="font-serif text-4xl leading-[0.95] sm:text-5xl">{project.title}</h3><p className="mt-6 leading-relaxed opacity-80">{project.description}</p><div className="mt-8 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="border border-current/40 px-3 py-1.5 text-xs font-bold uppercase tracking-wider">{item}</span>)}</div><a href={project.href} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 border-b border-current pb-1 text-sm font-bold">View repository <FiGithub /></a></div>
            </motion.article>
          ))}
        </div>
        <div className="mt-16">
          {smallerProjects.map(([title, description, slug], index) => <a key={title} href={`https://github.com/Ravikant-1811/${slug}`} target="_blank" rel="noopener noreferrer" className="group grid gap-3 border-t border-foreground/30 py-6 transition hover:px-3 hover:bg-foreground hover:text-background sm:grid-cols-[64px_1fr_1fr_auto] sm:items-center"><span className="eyebrow opacity-50">0{index + 4}</span><h3 className="font-serif text-2xl sm:text-3xl">{title}</h3><p className="text-sm opacity-65">{description}</p><FiArrowUpRight className="transition group-hover:rotate-45" /></a>)}
        </div>
      </div>
    </section>
  );
}
