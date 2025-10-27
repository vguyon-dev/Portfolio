import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Briefcase, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/CV_Guyon-Valentin_Developpeur-FullStack.pdf';
    link.download = 'CV_Guyon-Valentin_Developpeur-FullStack.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleGithub = () => {
    window.open('https://github.com/vguyon-dev', '_blank');
  };

  const handleIndeed = () => {
    window.open('https://profile.indeed.com/p/valenting-w9df4uc', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/guyon-valentin/', '_blank');
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold"
            >
              Développeur
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Web & Logiciel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 leading-relaxed"
            >
              Passionné par le développement web moderne et la création de solutions logicielles robustes. 
              Expert en outils PC SOFT (Windev, WindevMobile).
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold px-6 py-6 text-lg"
              >
                <Download className="mr-2" size={20} />
                Télécharger CV
              </Button>

              <Button
                onClick={handleGithub}
                variant="outline"
                className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-semibold px-6 py-6 text-lg"
              >
                <Github className="mr-2" size={20} />
                GitHub
              </Button>

              <Button
                onClick={handleIndeed}
                variant="outline"
                className="border-blue-400 text-blue-400 hover:bg-blue-400/10 font-semibold px-6 py-6 text-lg"
              >
                <Briefcase className="mr-2" size={20} />
                Indeed
              </Button>

              <Button
                onClick={handleLinkedIn}
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-400/10 font-semibold px-6 py-6 text-lg"
              >
                <Linkedin className="mr-2" size={20} />
                LinkedIn
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <img 
                className="relative z-10 w-full h-full object-cover rounded-full border-4 border-cyan-400/30 shadow-2xl"
                alt="Développeur professionnel travaillant sur un ordinateur"
               src="https://images.unsplash.com/photo-1603969409447-ba86143a03f6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;