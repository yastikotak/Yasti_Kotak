import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Navbar = () => {
  const { navigation } = portfolioData;

  return (
    <nav className="sticky top-4 z-30">
      <div className="glass rounded-2xl p-3 border border-slate-700/70">
        <ul className="flex flex-wrap items-center justify-center gap-2">
          {navigation.map((item) => (
            <li key={item.target}>
              <a
                href={`#${item.target}`}
                className="inline-block px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
