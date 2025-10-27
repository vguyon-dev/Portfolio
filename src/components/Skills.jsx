import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Smartphone, Globe, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Développement Web',
      skills: ['PHP/Symfony/Laravel', 'JavaScript', 'HTML/CSS', 'TailwindCSS', 'Node.js', 'API REST'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'Développement Logiciel',
      skills: ['Windev','Java', 'Architecture logicielle','Tests unitaires'],
      color: 'from-blue-500 to-indigo-500',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'PC SOFT',
      skills: ['Windev', 'WindevMobile', 'WLanguage', 'HFSQL', 'Applications desktop', 'GDS'],
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile',
      skills: ['WindevMobile', 'UI/UX mobile'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Bases de données',
      skills: ['SQL', 'HFSQL', 'MySQL', 'Optimisation'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Outils & Méthodologies',
      skills: ['Git', 'GDS', 'Agile', 'VS Code', 'Debugging'],
      color: 'from-rose-500 to-orange-500',
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Compétences</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Une expertise complète en développement web, logiciel et maîtrise des outils PC SOFT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 shadow-xl"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-slate-600/50 hover:border-cyan-400/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;