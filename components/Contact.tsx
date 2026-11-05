'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { z } from 'zod';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';
import { profile } from '@/lib/profile';
import { Reveal, SectionHeader } from './ui';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Please add a little more detail'),
});
type ContactForm = z.infer<typeof schema>;

const channels = [
  { icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: FiPhone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'in/ravikant-upadhyay', href: profile.linkedin },
  { icon: FiGithub, label: 'GitHub', value: profile.githubUser, href: profile.github },
  { icon: FiMapPin, label: 'Location', value: profile.location },
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactForm) => {
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message, to_email: profile.email },
        EMAILJS_CONFIG.PUBLIC_KEY,
      );
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  const field =
    'w-full rounded-xl border bg-background px-4 py-3 text-sm outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20';
  const error = 'mt-1 text-xs text-destructive';

  return (
    <section id="contact" className="section bg-muted/40">
      <div className="section-shell">
        <SectionHeader
          eyebrow="Contact"
          title="Let’s work together"
          lead="Hiring for a developer role, or have a website, CRM or automation project in mind? I usually reply within 24 hours."
        />

        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="space-y-3">
            {channels.map(({ icon: Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                    <Icon />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">{label}</span>
                    <span className="block truncate text-sm font-medium">{value}</span>
                  </span>
                </>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="card card-hover flex items-center gap-4 p-4"
                >
                  {body}
                </a>
              ) : (
                <div key={label} className="card flex items-center gap-4 p-4">
                  {body}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4 p-6 sm:p-8" noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
                  <input id="name" {...register('name')} className={field} placeholder="Your name" />
                  {errors.name && <p className={error}>{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
                  <input id="email" type="email" {...register('email')} className={field} placeholder="you@company.com" />
                  {errors.email && <p className={error}>{errors.email.message}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">Subject</label>
                <input id="subject" {...register('subject')} className={field} placeholder="Job opportunity, website, CRM…" />
                {errors.subject && <p className={error}>{errors.subject.message}</p>}
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea id="message" rows={5} {...register('message')} className={`${field} resize-none`} placeholder="Tell me a bit about it…" />
                {errors.message && <p className={error}>{errors.message.message}</p>}
              </div>

              {status === 'sent' && (
                <p className="rounded-xl bg-accent/15 px-4 py-3 text-sm font-medium text-accent">Thanks — your message is on its way. I’ll be in touch soon.</p>
              )}
              {status === 'error' && (
                <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm font-medium text-destructive">
                  Message couldn’t be sent. Please email me directly at {profile.email}.
                </p>
              )}

              <button type="submit" disabled={status === 'sending'} className="btn-primary w-full disabled:opacity-60">
                {status === 'sending' ? 'Sending…' : 'Send message'} <FiSend />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
