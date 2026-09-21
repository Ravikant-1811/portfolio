'use client';

import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';

const capabilities = [
  { number: '01', title: 'Business applications', copy: 'Admin dashboards, CRMs, task systems, portals, authentication, reporting, and structured operational workflows.', stack: 'PHP · MySQL · SQLite · JavaScript · APIs' },
  { number: '02', title: 'WordPress delivery', copy: 'Custom WordPress builds, Elementor and ACF systems, WooCommerce changes, performance work, and production maintenance.', stack: 'WordPress · PHP · ACF · WooCommerce · SEO' },
  { number: '03', title: 'Automation systems', copy: 'Messaging tools, content pipelines, scheduled tasks, AI-assisted operations, and integrations that remove repetitive work.', stack: 'Node.js · TypeScript · Python · Webhooks · AI' },
  { number: '04', title: 'Deployments & reliability', copy: 'Hands-on deployment, Linux process management, Cloudflare routing, monitoring, diagnostics, and recovery.', stack: 'Linux · Cloudflare · PM2 · Docker · Vercel' },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow text-primary">Capabilities</p><h2 className="section-title mt-5">From brief<br />to browser.</h2><a href="#contact" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm font-bold">Discuss a project <FiArrowDownRight /></a></div>
          <div className="border-t border-foreground">
            {capabilities.map((item, index) => (
              <motion.article key={item.number} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ delay: index * 0.05 }} className="grid gap-4 border-b border-foreground/30 py-8 sm:grid-cols-[64px_1fr]">
                <span className="eyebrow text-primary">{item.number}</span><div><h3 className="font-serif text-3xl sm:text-4xl">{item.title}</h3><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{item.copy}</p><p className="eyebrow mt-5 text-foreground/70">{item.stack}</p></div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
