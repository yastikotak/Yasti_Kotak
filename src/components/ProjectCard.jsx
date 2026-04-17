import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="glass rounded-2xl p-6 flex flex-col h-full relative group overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl transform group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
      
      <div className="flex justify-between items-start mb-6 z-10">
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex gap-3">
          {project.githubUrl && project.githubUrl !== '#' && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="space-y-4 flex-grow z-10">
        <div>
          <h4 className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-1">Problem</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-1">Solution</h4>
          <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
        </div>
        
        {project.uniqueFeature && (
          <div>
            <h4 className="text-sm font-semibold text-violet-400 uppercase tracking-wider mb-1">Highlight</h4>
            <p className="text-slate-300 text-sm italic">{project.uniqueFeature}</p>
          </div>
        )}
      </div>

      <div className="mt-6 pt-6 border-t border-slate-700/50 flex flex-wrap gap-2 z-10">
        {project.techStack.map((tech, idx) => (
          <span 
            key={idx} 
            className="px-3 py-1 text-xs font-medium bg-slate-800 text-slate-300 rounded-full border border-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
