import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ravikant-portfolio.vercel.app'),
  title: 'Ravikant Upadhyay - Full Stack Developer',
  description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies. Building scalable applications and digital experiences.',
  keywords: ['Full Stack Developer', 'React', 'Node.js', 'TypeScript', 'Web Developer', 'Portfolio'],
  authors: [{ name: 'Ravikant Upadhyay' }],
  openGraph: {
    title: 'Ravikant Upadhyay - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
    type: 'website',
    url: 'https://ravikant-portfolio.vercel.app',
    siteName: 'Ravikant Upadhyay Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ravikant Upadhyay - Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Node.js, and modern web technologies.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}