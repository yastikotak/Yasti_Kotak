import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';
import { Mail, Send } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const Github = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const ContactSection = () => {
  const { title, email, linkedin, github } = portfolioData.contact;
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Mock submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormState({ name: '', email: '', message: '' });
      alert("Thanks for reaching out! (This is a mock UI)");
    }, 1500);
  };

  return (
    <section id="contact" className="py-12 relative z-10">
      <SectionHeading>{title}</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-slate-300 mb-8 max-w-md leading-relaxed">
            I am currently open to internships and project collaborations in full-stack and AI-driven development. If you want to connect, feel free to reach out.
          </p>

          <div className="space-y-6">
            <a href={`mailto:${email}`} className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700 cursor-pointer">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                <Mail size={24} className="text-slate-400 group-hover:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Email Me at</p>
                <p className="text-slate-200 font-semibold">{email}</p>
              </div>
            </a>

            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700 cursor-pointer">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                <Linkedin size={24} className="text-slate-400 group-hover:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Connect on</p>
                <p className="text-slate-200 font-semibold">LinkedIn</p>
              </div>
            </a>

            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 glass rounded-2xl hover:bg-slate-800/80 transition-all border border-transparent hover:border-slate-700 cursor-pointer">
              <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                <Github size={24} className="text-slate-400 group-hover:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-slate-500 font-medium">Follow on</p>
                <p className="text-slate-200 font-semibold">GitHub</p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* Contact Form Details */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass p-8 rounded-3xl"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formState.name}
                onChange={(e) => setFormState({...formState, name: e.target.value})}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) => setFormState({...formState, email: e.target.value})}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2">Message</label>
              <textarea
                id="message"
                required
                rows="4"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
                className="w-full bg-slate-800/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium flex items-center justify-center gap-2 transition-all disabled:opacity-70"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>Send Message <Send size={18} /></>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactSection;
