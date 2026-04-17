import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../components/SectionHeading';
import { portfolioData } from '../data/portfolioData';

const ResumeSection = () => {
  const { title, education, achievements, certifications } = portfolioData.resume;
  const EducationIcon = education.icon;
  const AchievementsIcon = achievements.icon;
  const CertificationsIcon = certifications.icon;

  return (
    <section id="resume" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <EducationIcon className="text-blue-400" />
            <h3 className="text-xl font-semibold text-slate-100">Education</h3>
          </div>
          <p className="text-slate-100 font-medium">{education.institute}</p>
          <p className="text-slate-300 mt-2">{education.degree}</p>
          <p className="text-slate-400 mt-2">{education.year}</p>
          <p className="text-teal-400 mt-3 font-semibold">{education.score}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <AchievementsIcon className="text-violet-400" />
            <h3 className="text-xl font-semibold text-slate-100">Achievements</h3>
          </div>
          <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
            {achievements.items.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-violet-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <CertificationsIcon className="text-teal-400" />
            <h3 className="text-xl font-semibold text-slate-100">Certifications</h3>
          </div>
          <ul className="space-y-3 text-slate-300 text-sm leading-relaxed">
            {certifications.items.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="text-teal-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;
