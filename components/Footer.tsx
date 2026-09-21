'use client';

import { FiArrowUp, FiGithub, FiLinkedin } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="bg-foreground py-8 text-background">
      <div className="section-shell flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="font-serif text-2xl">Ravikant Upadhyay</p><p className="eyebrow mt-1 text-background/45">Software developer · India · Remote</p></div>
        <div className="flex items-center gap-5 text-sm font-bold"><a href="https://github.com/Ravikant-1811" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><FiGithub /> GitHub</a><a href="https://linkedin.com/in/ravikant-upadhyay" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent"><FiLinkedin /> LinkedIn</a><a href="#home" aria-label="Back to top" className="grid h-10 w-10 place-items-center border border-background/40 hover:bg-background hover:text-foreground"><FiArrowUp /></a></div>
        <p className="eyebrow text-background/45">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
