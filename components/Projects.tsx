'use client';

import { motion } from 'framer-motion';
import { FiActivity, FiGlobe, FiServer } from 'react-icons/fi';

const projects = [
  {
    title: 'Freelance Website and Software Development',
    summary:
      'Delivered 21+ websites and 5 custom platforms with optimized architecture, authentication, and conversion-focused UX.',
    impact: ['Up to 45% higher digital visibility', '40% workflow efficiency gain', '95%+ repeat-client rate'],
    stack: ['PHP', 'JavaScript', 'MySQL', 'WordPress', 'API Integration'],
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: FiGlobe,
  },
  {
    title: 'Raspberry Pi Based Hosting Server',
    summary:
      'Built a full web and mail hosting stack on Raspberry Pi with Cloudflare Tunnel, DNS tuning, and security hardening.',
    impact: ['24/7 stability with <1% downtime', 'Encrypted communication setup', 'Faster deployment + troubleshooting'],
    stack: ['Raspberry Pi', 'Cloudflare Tunnel', 'Linux', 'Postfix', 'Dovecot'],
    image:
      'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: FiServer,
  },
  {
    title: 'AI Autonomous Vacuum with Disinfection',
    summary:
      'Engineered an autonomous cleaner with UV disinfection, self-navigation, and voice/Bluetooth controls for smart operation.',
    impact: ['40% higher cleaning efficiency', '95% collision avoidance', '25% less cleaning time'],
    stack: ['Arduino', 'Ultrasonic Sensors', 'Motor Control', 'Voice Commands', 'Bluetooth'],
    image:
      'https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=1200',
    icon: FiActivity,
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Selected work across AI, full-stack software, and business-ready web platforms.</p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
              className="glass-card overflow-hidden"
            >
              <div className="relative h-52">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 p-2 text-slate-900">
                  <project.icon size={18} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{project.summary}</p>

                <ul className="mt-4 space-y-2">
                  {project.impact.map((point) => (
                    <li key={point} className="text-sm text-foreground">
                      • {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-semibold text-secondary-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
