'use client';

import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/70 py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div>
          <p className="text-sm font-semibold">Ravikant Upadhyay</p>
          <p className="text-xs text-muted-foreground">Software Developer | AI + Full-Stack Solutions</p>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://github.com/Ravikant-1811" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border p-2">
            <FiGithub size={16} />
          </a>
          <a href="https://linkedin.com/in/ravikant-upadhyay" target="_blank" rel="noopener noreferrer" className="rounded-full border border-border p-2">
            <FiLinkedin size={16} />
          </a>
          <a href="mailto:nravikant123@gmail.com" className="rounded-full border border-border p-2">
            <FiMail size={16} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">© {year} All rights reserved.</p>
      </div>
    </footer>
  );
}
