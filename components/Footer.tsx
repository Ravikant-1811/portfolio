'use client';

import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '@/lib/profile';

export function Footer() {
  return (
    <footer className="border-t py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.role}
        </p>
        <div className="flex items-center gap-2">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
            <FiMail />
          </a>
          <a href="#home" aria-label="Back to top" className="icon-btn">
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}
