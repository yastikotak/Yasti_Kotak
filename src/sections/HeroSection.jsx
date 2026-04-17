import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const HeroSection = () => {
  const { name, roles, tagline, subheading, resumeUrl } = portfolioData.hero;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="min-h-[85vh] flex flex-col justify-center relative pt-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <h2 className="text-teal-400 font-medium tracking-wider mb-4">HELLO THERE, I'M</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">
          {name}
        </h1>
        
        <div className="text-2xl md:text-4xl font-semibold mb-6 text-slate-300 h-12 flex items-center gap-3">
          I am a 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 relative">
            {roles[currentRoleIndex]}
            <motion.span
              key={currentRoleIndex}
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute left-0 bottom-0 h-[2px] bg-blue-400"
            />
          </span>
        </div>

        <p className="text-xl md:text-2xl text-slate-300 mb-6 font-medium leading-relaxed max-w-3xl">
          {tagline}
        </p>

        <p className="text-slate-400 text-lg mb-10 max-w-2xl leading-relaxed">
          {subheading}
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            View Projects <ArrowRight size={18} />
          </a>
          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 glass hover:bg-white/10 text-slate-100 font-medium rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 border border-slate-700"
          >
            Download Resume <Download size={18} />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
