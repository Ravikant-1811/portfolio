'use client';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { Navbar } from '@/components/Navbar';
import { Projects } from '@/components/Projects';
import { Skills } from '@/components/Skills';
import { ThemeProvider } from '@/components/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
