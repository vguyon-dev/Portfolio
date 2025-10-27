import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Projects = () => {
  const { toast } = useToast();

  const handleProjectClick = () => {
    toast({
      title: "Projet",
      description: "🚧 Cette fonctionnalité n'est pas encore implémentée—mais ne vous inquiétez pas ! Il le sera prochainement ! 🚀",
    });
  };

  const projects = [
     {
      title: 'Site Web',
      description: 'Mon site portfolio actuel.',
      technologies: ['JavaScript', 'JSX', 'Vite', 'Tailwind CSS','npm','Git'],
      image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c',
    },
    {
      title: 'Application Windev',
      description: 'Logiciel de gestion d\'entreprise développé avec Windev et base de données HFSQL.',
      technologies: ['Windev', 'WLanguage', 'HFSQL', 'GDS'],
      image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c',
    },
    {
      title: 'Application WindevMobile',
      description: 'Application mobile native développée avec WindevMobile pour iOS et Android.',
      technologies: ['WindevMobile', 'WLanguage', 'HFSQL', 'GDS'],
      image: 'https://images.unsplash.com/photo-1572177812156-58036aae439c',
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Projets</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets récents
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  alt={project.title}
                 src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    onClick={handleProjectClick}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    <ExternalLink className="mr-2" size={18} />
                    Voir le projet
                  </Button>
                  <Button
                    onClick={handleProjectClick}
                    variant="outline"
                    className="border-cyan-400 text-cyan-400 hover:bg-cyan-400/10"
                  >
                    <Github size={18} />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;