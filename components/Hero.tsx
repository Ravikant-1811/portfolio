'use client';

import { motion } from 'framer-motion';
import { FiArrowDownRight, FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const tools = ['PHP', 'WordPress', 'React', 'Automation', 'CRM Systems', 'Cloudflare', 'Linux', 'AI Workflows'];

export function Hero() {
  return (
    <section id="home" className="overflow-hidden pt-20">
      <div className="section-shell">
        <div className="grid min-h-[760px] border-x border-foreground/25 lg:grid-cols-[1fr_320px]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="flex flex-col justify-between p-6 py-16 sm:p-10 lg:p-14 lg:py-20">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="eyebrow flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-accent/25" /> Available for selected projects</span>
              <span className="eyebrow text-muted-foreground">Vadodara / India / Remote</span>
            </div>
            <div className="my-16 max-w-5xl">
              <p className="eyebrow mb-6 text-primary">Software developer + systems operator</p>
              <h1 className="text-[clamp(4rem,10vw,9.5rem)] font-normal leading-[0.78] tracking-[-0.075em]">I build the<br />systems behind<br /><span className="text-primary">the work.</span></h1>
              <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">Production-ready web products, CRM workflows, WordPress platforms, and automation built to survive real users, real deadlines, and real operations.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="button-primary">See selected work <FiArrowDownRight /></a>
              <a href="mailto:nravikant123@gmail.com" className="button-outline">Start a conversation <FiArrowUpRight /></a>
            </div>
          </motion.div>
          <aside className="flex flex-col justify-between border-t border-foreground/25 bg-foreground p-7 text-background lg:border-l lg:border-t-0 lg:p-9">
            <div><p className="eyebrow text-background/55">Operating profile</p><p className="mt-6 font-serif text-4xl leading-tight">Engineer when it needs building. Operator when it needs shipping.</p></div>
            <div className="space-y-0">
              {[["03+", "Years building"], ["21+", "Websites delivered"], ["05+", "Custom systems"]].map(([value, label]) => <div key={label} className="border-t border-background/30 py-5"><p className="font-serif text-5xl text-accent">{value}</p><p className="eyebrow mt-1 text-background/55">{label}</p></div>)}
            </div>
            <div className="flex gap-3 border-t border-background/30 pt-6">
              <a href="https://github.com/Ravikant-1811" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="grid h-11 w-11 place-items-center border border-background/50 hover:bg-background hover:text-foreground"><FiGithub /></a>
              <a href="https://linkedin.com/in/ravikant-upadhyay" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="grid h-11 w-11 place-items-center border border-background/50 hover:bg-background hover:text-foreground"><FiLinkedin /></a>
              <a href="mailto:nravikant123@gmail.com" aria-label="Email" className="grid h-11 w-11 place-items-center border border-background/50 hover:bg-background hover:text-foreground"><FiMail /></a>
            </div>
          </aside>
        </div>
      </div>
      <div className="overflow-hidden border-y border-foreground bg-accent py-4 text-accent-foreground">
        <div className="ticker-track flex w-max whitespace-nowrap">{[...tools, ...tools].map((tool, index) => <span key={`${tool}-${index}`} className="eyebrow mx-7 flex items-center gap-7">{tool}<span>✦</span></span>)}</div>
      </div>
    </section>
  );
}
