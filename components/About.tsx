'use client';

import { motion } from 'framer-motion';
import { FiCpu, FiGlobe, FiLayers, FiSettings } from 'react-icons/fi';

const focusAreas = [
  {
    title: 'Full-Stack Products',
    detail: 'Web applications, business dashboards, CRM/DMS systems, and API integrations.',
    icon: FiLayers,
  },
  {
    title: 'AI + Automation',
    detail: 'AI tool integration, workflow automation, smart content pipelines, and productivity systems.',
    icon: FiCpu,
  },
  {
    title: 'High-Impact Websites',
    detail: 'WordPress, Elementor, ACF, SEO-focused pages, and conversion-first site structures.',
    icon: FiGlobe,
  },
  {
    title: 'Ops and Reliability',
    detail: 'Linux servers, Cloudflare setups, uptime monitoring, and deployment troubleshooting.',
    icon: FiSettings,
  },
];

export function About() {
  return (
    <section id="about" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            B.Tech CSE graduate with a minor in AI and ML. I build practical software that connects technology with measurable business growth.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-7 md:p-8"
          >
            <h3 className="text-2xl font-bold">Software Developer focused on outcomes</h3>
            <p className="mt-4 text-muted-foreground">
              I have delivered 21+ websites and 5+ custom software solutions for recruitment, healthcare, and service businesses. My work includes
              building scalable modules, reducing manual workflows, and creating user-friendly interfaces that teams actually enjoy using.
            </p>
            <p className="mt-4 text-muted-foreground">
              Along with development, I bring experience in digital operations including campaign tooling, email and WhatsApp marketing support,
              and cross-team coordination. This helps me design systems that perform well both technically and commercially.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'CGPA', value: '7.47/10' },
                { label: 'Core Stack', value: 'PHP + JS' },
                { label: 'Location', value: 'Vadodara' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-card/80 p-3 text-center">
                  <p className="text-lg font-bold text-primary">{item.value}</p>
                  <p className="text-xs uppercase tracking-[0.08em] text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="grid gap-4"
          >
            {focusAreas.map((area) => (
              <div key={area.title} className="glass-card p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary/12 p-2 text-primary">
                    <area.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold">{area.title}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{area.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
