import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import SectionHeading from '../components/SectionHeading';

const ExperienceSection = () => {
  const { title, roles } = portfolioData.experience;

  return (
    <section id="experience" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>

      <div className="space-y-12 pl-4 md:pl-0">
        {roles.map((role, index) => {
          const IconComponent = role.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative md:flex gap-8 group"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-auto top-0 bottom-[-3rem] w-[2px] bg-slate-800 md:relative md:w-[2px] md:bg-transparent -z-10 hidden md:block">
                <div className="absolute top-0 bottom-0 left-0 w-full bg-slate-800" />
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-blue-500 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              </div>

              {/* Icon Marker */}
              <div className="absolute -left-4 md:relative md:left-auto md:w-16 md:flex md:justify-center z-10 top-0">
                <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-blue-500 flex items-center justify-center p-2 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
                  <IconComponent className="text-blue-400 w-full h-full" />
                </div>
              </div>

              {/* Content Card */}
              <div className="ml-8 md:ml-0 flex-1 glass p-8 rounded-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-50" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {role.title}
                    </h3>
                    <h4 className="text-teal-400 font-medium tracking-wide">
                      {role.organization}
                    </h4>
                  </div>
                  <span className="inline-block px-3 py-1 bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium rounded-full whitespace-nowrap self-start">
                    {role.date}
                  </span>
                </div>

                <ul className="space-y-3 text-slate-300 text-[15px] leading-relaxed">
                  {role.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-blue-500 mt-1.5">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
