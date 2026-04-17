import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';
import SkillBadge from '../components/SkillBadge';

const SkillsSection = () => {
  const { title, categories } = portfolioData.skills;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {categories.map((category, index) => {
          const IconComponent = category.icon;
          return (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="glass p-8 rounded-2xl relative overflow-hidden group"
            >
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-teal-500/5 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-500" />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                  <IconComponent className="w-6 h-6 text-teal-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-100">{category.title}</h3>
              </div>
              
              <div className="space-y-2">
                {category.items.map((skill, idx) => (
                  <SkillBadge key={idx} skill={skill} />
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default SkillsSection;
