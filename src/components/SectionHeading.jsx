import React from 'react';
import { motion } from 'framer-motion';

const SectionHeading = ({ children, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 mb-8 md:mb-12 ${className}`}
    >
      {children}
    </motion.h2>
  );
};

export default SectionHeading;
