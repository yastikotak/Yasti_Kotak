import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const AboutSection = () => {
  const { title, description1, description2, description3 } = portfolioData.about;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="glass p-8 md:p-10 rounded-2xl relative overflow-hidden group"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl transform group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        
        <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
          <motion.p variants={itemVariants}>
            {description1}
          </motion.p>
          <motion.p variants={itemVariants}>
            {description2}
          </motion.p>
          <motion.p variants={itemVariants} className="text-slate-200 font-medium">
            {description3}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
