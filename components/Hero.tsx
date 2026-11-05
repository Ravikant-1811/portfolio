'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { profile, stats } from '@/lib/profile';

export function Hero() {
  const [avatarFailed, setAvatarFailed] = useState(false);

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="hero-glow pointer-events-none absolute inset-0" />
      <div className="dot-grid pointer-events-none absolute inset-0" />

      <div className="section-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              {profile.availability}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
              Hi, I’m {profile.name.split(' ')[0]}.
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                I build software that works for business.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {profile.role} specialising in full-stack web, CRM/DMS systems, AI-powered automation and IoT — with a marketer’s eye for what
              actually moves the needle.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experience" className="btn-primary">
                View my experience <FiArrowRight />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
            </div>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="card p-6"
          >
            <div className="flex items-center gap-4">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-accent">
                {!avatarFailed ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover" onError={() => setAvatarFailed(true)} />
                ) : (
                  <span className="grid h-full w-full place-items-center text-2xl font-bold text-white">{profile.initials}</span>
                )}
              </div>
              <div>
                <p className="text-lg font-semibold">{profile.name}</p>
                <p className="text-sm text-muted-foreground">{profile.role}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <FiMapPin /> {profile.location}
                </p>
              </div>
            </div>

            <p className="mt-5 rounded-xl bg-muted px-4 py-3 text-sm font-medium">{profile.tagline}</p>

            <dl className="mt-5 grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border p-3">
                  <dt className="text-xs text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-2xl font-bold text-primary">{s.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 flex gap-2">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="icon-btn">
                <FiGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="icon-btn">
                <FiLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
                <FiMail />
              </a>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
