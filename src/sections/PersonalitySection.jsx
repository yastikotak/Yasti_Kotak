import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Quote } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const PersonalitySection = () => {
  const { title, traits, quote } = portfolioData.personality;

  return (
    <section id="personality" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Traits Column */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {traits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 hover:bg-slate-800/80 transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-400 font-bold text-xl border border-violet-500/20">
                {String(index + 1).padStart(2, '0')}
              </div>
              <h3 className="text-xl font-semibold text-slate-200">{trait}</h3>
            </motion.div>
          ))}
        </div>

        {/* Quote Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7 glass rounded-3xl p-8 md:p-12 relative flex flex-col justify-center items-center text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10 pointer-events-none" />
          
          <Quote className="w-16 h-16 text-slate-700/50 absolute top-8 left-8" />
          
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-slate-100 z-10 italic mt-6">
            {quote}
          </h2>
          
          <Quote className="w-16 h-16 text-slate-700/50 absolute bottom-8 right-8 rotate-180" />
        </motion.div>

      </div>
    </section>
  );
};

export default PersonalitySection;
