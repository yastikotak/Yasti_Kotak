import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="w-full py-8 mt-20 border-t border-slate-800/60 bg-slate-900/50 relative z-10 backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} {portfolioData.hero.name}. All rights reserved.
        </p>
        
        <div className="text-slate-500 text-sm">
          Built with <span className="text-blue-400">React</span> & <span className="text-teal-400">Tailwind CSS</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
