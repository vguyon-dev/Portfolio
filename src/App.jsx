import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <>
      <Helmet>
        <title>Portfolio - Développeur Web & Logiciel</title>
        <meta name="description" content="Portfolio professionnel présentant mes compétences en développement web, logiciel et maîtrise des outils PC SOFT (Windev, WindevMobile)" />
      </Helmet>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;