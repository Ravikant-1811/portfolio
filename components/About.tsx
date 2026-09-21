'use client';

import { motion } from 'framer-motion';

const principles = [
  ['01', 'Build for the messy middle', 'The real work begins after the demo: permissions, edge cases, handoffs, maintenance, and people who use software differently than expected.'],
  ['02', 'Make operations visible', 'Good systems show what is happening, what needs attention, and who owns the next step without creating another layer of administration.'],
  ['03', 'Ship the whole outcome', 'Code, deployment, monitoring, documentation, and support are parts of one deliverable—not separate conversations.'],
];

export function About() {
  return (
    <section id="about" className="border-y border-foreground bg-foreground py-24 text-background sm:py-32">
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="eyebrow text-accent">About / working style</p>
            <p className="mt-6 max-w-sm text-lg leading-relaxed text-background/65">I work comfortably between product thinking, implementation, and the operational details that keep software useful after launch.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <h2 className="font-serif text-5xl leading-[0.92] sm:text-7xl lg:text-8xl">Part engineer.<br />Part operator.<br /><span className="text-primary">All delivery.</span></h2>
            <p className="mt-10 max-w-3xl text-lg leading-relaxed text-background/70 sm:text-xl">I build practical systems for service businesses and teams: PHP applications, WordPress platforms, admin tools, CRM workflows, messaging utilities, and automation that removes repetitive work.</p>
          </motion.div>
        </div>
        <div className="mt-20 grid border-t border-background/25 lg:grid-cols-3">
          {principles.map(([number, title, copy], index) => (
            <motion.article key={title} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="border-b border-background/25 py-8 lg:border-b-0 lg:border-r lg:px-8 first:lg:pl-0 last:lg:border-r-0">
              <span className="eyebrow text-accent">{number}</span><h3 className="mt-5 font-serif text-3xl">{title}</h3><p className="mt-4 text-sm leading-relaxed text-background/60">{copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
