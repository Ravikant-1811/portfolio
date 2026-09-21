'use client';

import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 24);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled ? 'bg-background/95 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <div className="section-shell flex h-20 items-center justify-between border-b border-foreground/25">
        <a href="#home" className="flex items-center gap-3" aria-label="Back to home">
          <span className="grid h-10 w-10 place-items-center bg-foreground font-serif text-lg text-background">RU</span>
          <span className="hidden text-sm font-bold uppercase tracking-[0.13em] sm:block">Ravikant Upadhyay</span>
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => <a key={item.name} href={item.href} className="text-xs font-bold uppercase tracking-[0.14em] hover:text-primary">{item.name}</a>)}
          <a href="/Ravikant-Upadhyay-Resume.pdf" target="_blank" rel="noopener noreferrer" className="button-primary !px-4 !py-2.5">Resume</a>
          <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center border border-foreground" aria-label="Toggle color theme">{theme === 'light' ? <FiMoon size={17} /> : <FiSun size={17} />}</button>
        </nav>
        <div className="flex gap-2 md:hidden">
          <button onClick={toggleTheme} className="grid h-10 w-10 place-items-center border border-foreground" aria-label="Toggle color theme">{theme === 'light' ? <FiMoon size={17} /> : <FiSun size={17} />}</button>
          <button onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center bg-foreground text-background" aria-label="Toggle navigation">{menuOpen ? <FiX size={19} /> : <FiMenu size={19} />}</button>
        </div>
      </div>
      {menuOpen && (
        <nav className="border-b border-foreground bg-background px-5 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => <a key={item.name} href={item.href} onClick={() => setMenuOpen(false)} className="font-serif text-3xl">{item.name}</a>)}
          </div>
        </nav>
      )}
    </header>
  );
}
