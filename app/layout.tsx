import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://ravikant-1811.vercel.app'),
  title: 'Ravikant Upadhyay | Software Developer',
  description:
    'Ravikant Upadhyay — Software Developer in Vadodara, India, specialising in AI & ML, full-stack web development, CRM/DMS systems, WordPress, automation and IoT.',
  keywords: [
    'Ravikant Upadhyay',
    'Software Developer',
    'Full Stack Developer',
    'AI ML',
    'WordPress Developer',
    'CRM Developer',
    'IoT',
    'Vadodara',
    'Portfolio',
  ],
  authors: [{ name: 'Ravikant Upadhyay' }],
  openGraph: {
    title: 'Ravikant Upadhyay | Software Developer',
    description:
      'Portfolio of Ravikant Upadhyay, showcasing software development, AI projects, web products, and automation solutions.',
    type: 'website',
    url: 'https://ravikant-1811.vercel.app',
    siteName: 'Ravikant Upadhyay Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravikant Upadhyay | Software Developer',
    description:
      'Software Developer building scalable digital products, AI-powered workflows, and high-performance websites.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
