import React from 'react';
import { motion } from 'framer-motion';

const SkillBadge = ({ skill }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        {skill.level && (
          <span className="text-xs text-slate-500">{skill.level}%</span>
        )}
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2">
        <motion.div
          className="bg-gradient-to-r from-blue-500 to-teal-400 h-2 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBadge;
