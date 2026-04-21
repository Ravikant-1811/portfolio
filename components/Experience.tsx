'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin } from 'react-icons/fi';

const experiences = [
  {
    role: 'Software Developer',
    company: 'Zeusinfinity Services',
    location: 'Vadodara, Gujarat',
    duration: 'Jan 2026 - Present',
    points: [
      'Developing and managing WordPress websites using Elementor and ACF for dynamic interfaces.',
      'Building custom software and AI-powered automation workflows to improve internal efficiency.',
      'Providing software support and basic hardware system maintenance for stable operations.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Mohphret Technologies LLP',
    location: 'Vapi, Gujarat',
    duration: 'Feb 2025 - Jan 2026',
    points: [
      'Developed the official company website, increasing online traffic by 35%.',
      'Built key SV Placement modules that improved operational efficiency by 40%.',
      'Collaborated across teams to reduce development turnaround time by 25%.',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Global Medical Devices',
    location: 'Pune, Maharashtra',
    duration: 'Jun 2024 - Nov 2024',
    points: [
      'Launched company website and boosted online visibility by 40%.',
      'Developed CRM and technician mobile app reducing manual workload by 50%.',
      'Improved reporting efficiency by 60% through streamlined features and tracking.',
    ],
  },
  {
    role: 'Social Media Manager',
    company: 'Corpbiz Experts Solution Pvt Ltd',
    location: 'Wagholi, Pune',
    duration: 'Sep 2023 - Apr 2024',
    points: [
      'Managed end-to-end campaign operations including paid ads, email, and WhatsApp marketing.',
      'Produced content concepts, scripts, and video creatives for stronger audience engagement.',
      'Contributed to dealer-management software initiatives supporting marketing automation.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">Roles where I shipped software, improved workflows, and drove measurable outcomes.</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2" />

          <div className="space-y-8">
            {experiences.map((item, index) => (
              <motion.article
                key={item.company + item.duration}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06 }}
                className="relative pl-12 md:pl-0"
              >
                <div className="absolute left-[9px] top-6 h-3 w-3 rounded-full bg-primary md:left-1/2 md:-translate-x-[5px]" />
                <div className={`md:w-[46%] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                  <div className="glass-card p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-bold">{item.role}</h3>
                        <p className="mt-1 text-base font-semibold text-primary">{item.company}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.duration}</p>
                        <p className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
                          <FiMapPin size={13} />
                          {item.location}
                        </p>
                      </div>
                      <FiBriefcase className="mt-1 text-primary" size={18} />
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.points.map((point) => (
                        <li key={point} className="text-sm text-muted-foreground">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
