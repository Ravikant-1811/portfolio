'use client';

import { motion } from 'framer-motion';

const experiences = [
  { company: 'Zeusinfinity Services', role: 'Software Developer', period: 'Jan 2026 — Present', location: 'Vadodara', detail: 'WordPress systems, custom software, AI-enabled workflows, server operations, and hands-on client delivery.' },
  { company: 'Mohphret Technologies LLP', role: 'Software Developer', period: 'Feb 2025 — Jan 2026', location: 'Vapi', detail: 'Company web platform and recruitment software modules focused on faster, clearer internal operations.' },
  { company: 'Global Medical Devices', role: 'Software Developer', period: 'Jun 2024 — Nov 2024', location: 'Pune', detail: 'CRM, service tracking, company website, and field-technician mobile support for a medical devices team.' },
  { company: 'Corpbiz Experts Solution', role: 'Social Media Manager', period: 'Sep 2023 — Apr 2024', location: 'Pune', detail: 'Campaign operations, creative production, WhatsApp and email workflows, and dealer-management initiatives.' },
];

export function Experience() {
  return (
    <section id="experience" className="bg-muted/50 py-24 sm:py-32">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-6 border-b border-foreground pb-10 sm:flex-row sm:items-end"><div><p className="eyebrow mb-5 text-primary">Experience</p><h2 className="section-title">Where I learned<br />to deliver.</h2></div><p className="max-w-sm text-sm leading-relaxed text-muted-foreground">A path through development, operations, client work, and digital delivery—each role adding another layer to how I build.</p></div>
        <div>
          {experiences.map((item, index) => (
            <motion.article key={item.company} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.05 }} className="grid gap-4 border-b border-foreground/30 py-7 md:grid-cols-[60px_1fr_1fr_1.2fr] md:items-start">
              <span className="eyebrow text-primary">0{index + 1}</span><div><h3 className="font-serif text-2xl">{item.company}</h3><p className="mt-1 text-sm font-bold">{item.role}</p></div><div className="text-sm text-muted-foreground"><p>{item.period}</p><p>{item.location}</p></div><p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
