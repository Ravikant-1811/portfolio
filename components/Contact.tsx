'use client';

import emailjs from '@emailjs/browser';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiArrowUpRight, FiSend } from 'react-icons/fi';
import { z } from 'zod';
import { EMAILJS_CONFIG } from '../lib/emailjs-config';

const schema = z.object({ name: z.string().min(1, 'Name is required'), email: z.string().email('Enter a valid email'), subject: z.string().min(1, 'Subject is required'), message: z.string().min(10, 'Please add a little more detail') });
type ContactForm = z.infer<typeof schema>;

export function Contact() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: ContactForm) => {
    setSending(true);
    try {
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message, to_email: 'nravikant123@gmail.com' }, EMAILJS_CONFIG.PUBLIC_KEY);
      setSent(true); reset(); setTimeout(() => setSent(false), 4500);
    } catch { alert('Message not sent. Please email nravikant123@gmail.com directly.'); }
    finally { setSending(false); }
  };

  const fieldClass = 'w-full border-b border-background/35 bg-transparent px-0 py-4 text-base text-background outline-none placeholder:text-background/35 focus:border-accent';

  return (
    <section id="contact" className="bg-primary py-24 text-primary-foreground sm:py-32">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[1fr_0.9fr]">
          <div><p className="eyebrow opacity-65">Have a useful problem?</p><h2 className="mt-6 font-serif text-6xl leading-[0.86] sm:text-8xl lg:text-9xl">Let’s make<br />it work.</h2><p className="mt-8 max-w-xl text-lg leading-relaxed opacity-75">Tell me what is slow, manual, confusing, or ready to become a real product. I’ll reply with a practical way forward.</p><a href="mailto:nravikant123@gmail.com" className="mt-10 inline-flex items-center gap-3 border-b border-current pb-2 text-lg font-bold">nravikant123@gmail.com <FiArrowUpRight /></a></div>
          <form onSubmit={handleSubmit(onSubmit)} className="border border-primary-foreground/40 p-6 sm:p-8">
            <div className="flex items-center justify-between"><h3 className="font-serif text-3xl">Project note</h3><span className="eyebrow opacity-55">Usually replies in 24h</span></div>
            {sent && <p className="mt-6 bg-accent px-4 py-3 text-sm font-bold text-accent-foreground">Message sent. I’ll be in touch.</p>}
            <div className="mt-6 grid gap-x-5 sm:grid-cols-2"><div><input {...register('name')} className={fieldClass} placeholder="Your name" />{errors.name && <p className="mt-1 text-xs">{errors.name.message}</p>}</div><div><input {...register('email')} className={fieldClass} placeholder="Email address" />{errors.email && <p className="mt-1 text-xs">{errors.email.message}</p>}</div></div>
            <div><input {...register('subject')} className={fieldClass} placeholder="What are we building?" />{errors.subject && <p className="mt-1 text-xs">{errors.subject.message}</p>}</div>
            <div><textarea {...register('message')} rows={5} className={`${fieldClass} resize-none`} placeholder="A few useful details about the project..." />{errors.message && <p className="mt-1 text-xs">{errors.message.message}</p>}</div>
            <button type="submit" disabled={sending} className="mt-8 flex w-full items-center justify-center gap-2 bg-foreground px-5 py-4 text-sm font-bold text-background disabled:opacity-50">{sending ? 'Sending...' : 'Send project note'} {!sending && <FiSend />}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
