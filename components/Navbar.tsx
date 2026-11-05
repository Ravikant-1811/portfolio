'use client';

import { useEffect, useState } from 'react';
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { profile } from '@/lib/profile';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(`#${e.target.id}`)),
      { rootMargin: '-45% 0px -50% 0px' },
    );
    navItems.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const ThemeIcon = theme === 'light' ? FiMoon : FiSun;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled || menuOpen ? 'border-b bg-background/85 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
            {profile.initials}
          </span>
          <span className="hidden font-semibold sm:block">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition hover:text-primary ${
                active === item.href ? 'bg-muted text-foreground' : 'text-muted-foreground'
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary hidden !py-2 sm:inline-flex">
            <FiDownload /> Resume
          </a>
          <button onClick={toggleTheme} className="icon-btn" aria-label="Toggle color theme">
            <ThemeIcon size={16} />
          </button>
          <button onClick={() => setMenuOpen((v) => !v)} className="icon-btn lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="section-shell pb-5 lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="rounded-xl border bg-card px-4 py-3 text-sm font-medium">
                {item.name}
              </a>
            ))}
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" className="btn-primary col-span-2 sm:hidden">
              <FiDownload /> Download resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
