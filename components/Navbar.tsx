'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';
import { useTheme } from './ThemeProvider';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-shell">
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => scrollToSection('#home')}
            className="text-lg font-bold tracking-tight text-foreground md:text-xl"
          >
            Ravikant Upadhyay
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Ravikant-Upadhyay-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Resume
            </a>
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border p-2 text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={17} /> : <FiSun size={17} />}
            </button>
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={toggleTheme}
              className="rounded-full border border-border p-2 text-foreground"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <FiMoon size={17} /> : <FiSun size={17} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="rounded-full border border-border p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FiX size={19} /> : <FiMenu size={19} />}
            </button>
          </div>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          className="overflow-hidden md:hidden"
        >
          <div className="glass-card mb-4 space-y-3 p-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-sm font-semibold text-foreground"
              >
                {item.name}
              </button>
            ))}
            <a
              href="/Ravikant-Upadhyay-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
            >
              Open Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
}
