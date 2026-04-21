'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi';
import { z } from 'zod';
import { EMAILJS_CONFIG } from '../lib/emailjs-config';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactForm = z.infer<typeof contactSchema>;

const contactLinks = [
  { label: 'Email', value: 'nravikant123@gmail.com', href: 'mailto:nravikant123@gmail.com', icon: FiMail },
  { label: 'Phone', value: '+91 7096291214', href: 'tel:+917096291214', icon: FiPhone },
  { label: 'Location', value: 'Vadodara, Gujarat, India', href: '#', icon: FiMapPin },
  { label: 'GitHub', value: 'Ravikant-1811', href: 'https://github.com/Ravikant-1811', icon: FiGithub },
  { label: 'LinkedIn', value: 'ravikant-upadhyay', href: 'https://linkedin.com/in/ravikant-upadhyay', icon: FiLinkedin },
];

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_email: 'nravikant123@gmail.com',
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 4500);
    } catch {
      alert('Message not sent. Please contact me directly at nravikant123@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="section-shell">
        <div className="text-center">
          <h2 className="section-title">Lets Build Something Great</h2>
          <p className="section-subtitle">Open to freelance projects, full-time opportunities, and product collaborations.</p>
        </div>

        <div className="mt-12 grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Share your project details and I will reply with a clear plan, timeline, and execution approach.
            </p>
            <div className="mt-5 space-y-3">
              {contactLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 rounded-xl border border-border bg-background/70 p-3"
                >
                  <span className="rounded-lg bg-primary/12 p-2 text-primary">
                    <item.icon size={16} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <h3 className="text-2xl font-bold">Send a Message</h3>

            {isSubmitted && (
              <div className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-100/70 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                Message sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-5 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <input
                    {...register('name')}
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition focus:ring-2"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                </div>

                <div>
                  <input
                    {...register('email')}
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition focus:ring-2"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <input
                  {...register('subject')}
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition focus:ring-2"
                />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
              </div>

              <div>
                <textarea
                  {...register('message')}
                  rows={6}
                  placeholder="Tell me about your project"
                  className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-primary/30 transition focus:ring-2"
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground disabled:opacity-65"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <FiSend size={16} />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
