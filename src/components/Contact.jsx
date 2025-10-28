import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Briefcase, Github, Download, LinkedinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
    const handleGithub = () => {
    window.open('https://github.com/vguyon-dev', '_blank');
  };

  const handleIndeed = () => {
    window.open('https://profile.indeed.com/p/valenting-w9df4uc', '_blank');
  };

  const handleLinkedIn = () => {
    window.open('https://www.linkedin.com/in/guyon-valentin/', '_blank');
  };

  const handleEmail = () => {
    window.open('mailto:vguyon.dev@hotmail.com', '_blank');
  };

  const contactOptions = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Indeed',
      description: 'Contactez-moi via Indeed',
      color: 'from-blue-500 to-indigo-600',
      action: () => handleIndeed('Indeed'),
    },
    {
      icon: <LinkedinIcon className="w-8 h-8" />,
      title: 'LinkedIn',
      description: 'Contactez-moi via LinkedIn',
      color: 'from-indigo-600 to-violet-700',
      action: () => handleLinkedIn('LinkedIn'),
    },
    {
      icon: <Github className="w-8 h-8" />,
      title: 'GitHub',
      description: 'Consultez mon code source',
      color: 'from-gray-600 to-gray-800',
      action: () => handleGithub('GitHub'),
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: 'Email',
      description: 'Envoyez-moi un message',
      color: 'from-purple-500 to-pink-600',
      action: () => handleEmail('Email'),
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Me <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contacter</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour discuter de vos projets ou opportunités
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {contactOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl cursor-pointer"
              onClick={option.action}
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${option.color} mb-4`}>
                {option.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white">{option.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{option.description}</p>
              <Button
                className={`w-full bg-gradient-to-r ${option.color} hover:opacity-90`}
                onClick={(e) => {
                  e.stopPropagation();
                  option.action();
                }}
              >
                Accéder
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <img 
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-cyan-400/30"
              alt="Ma photo"
              src=""  
            />
            <p className="text-gray-300 text-lg">
              Disponible pour de nouvelles opportunités et collaborations
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;