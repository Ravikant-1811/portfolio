'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const stats = [
  { label: 'Websites Delivered', value: '21+' },
  { label: 'Custom Software Builds', value: '5+' },
  { label: 'On-Time Delivery', value: '98%' },
];

const GITHUB_USER = 'Ravikant-1811';

export function Hero() {
  const [avatarUrl, setAvatarUrl] = useState(`https://github.com/${GITHUB_USER}.png`);

  useEffect(() => {
    const loadAvatar = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
        if (!res.ok) return;
        const data = (await res.json()) as { avatar_url?: string };
        if (data.avatar_url) setAvatarUrl(data.avatar_url);
      } catch {
        // keep fallback GitHub avatar URL
      }
    };

    loadAvatar();
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="section-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-primary">
              Software Developer | AI + Automation
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              Building reliable digital systems that improve business performance.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground md:text-xl">
              I am Ravikant Upadhyay, a full-stack developer with hands-on experience in AI tools, CRM/DMS systems, WordPress builds,
              and automation workflows. I turn ideas into production-ready products.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                Hire Me
                <FiArrowDownRight size={16} />
              </a>
              <a
                href="#projects"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
              >
                View Work
              </a>
              <a
                href="/Ravikant-Upadhyay-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3">
              {[
                { href: 'https://github.com/Ravikant-1811', icon: FiGithub, label: 'GitHub' },
                { href: 'https://linkedin.com/in/ravikant-upadhyay', icon: FiLinkedin, label: 'LinkedIn' },
                { href: 'mailto:nravikant123@gmail.com', icon: FiMail, label: 'Email' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-border p-3 text-foreground transition-all hover:-translate-y-0.5 hover:border-primary"
                  aria-label={item.label}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card p-4 md:p-6">
              <div className="relative h-[360px] overflow-hidden rounded-2xl border border-white/50 md:h-[460px]">
                <img src={avatarUrl} alt="Ravikant Upadhyay" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10" />
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-black/55 p-4 text-white backdrop-blur-sm">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-200">GitHub Profile Photo</p>
                  <p className="mt-1 text-lg font-semibold">Software Developer at Zeusinfinity Services</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card p-4 text-center">
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
