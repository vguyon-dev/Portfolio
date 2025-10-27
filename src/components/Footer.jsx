import React from 'react';
import { Github, Briefcase, Mail, LinkedinIcon } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Portfolio
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Développeur Web & Logiciel
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/vguyon-dev"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://profile.indeed.com/p/valenting-w9df4uc"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Indeed"
            >
              <Briefcase size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/guyon-valentin/"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={24} />
            </a>
            <a
              href="mailto:vguyon.dev@hotmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <p className="text-gray-400 text-sm">
            © {currentYear === 2025 ? "2025" : "2025 - " + currentYear} Tous droits réservés - Guyon Valentin
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;