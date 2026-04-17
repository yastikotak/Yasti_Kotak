import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { LandingView } from './LandingView';
import Galaxy from './components/Galaxy';
import './App.css';
import './landing.css';

const Github = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const Linkedin = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

function scrollToSection(id) {
  requestAnimationFrame(() => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const [selectedProject, setSelectedProject] = useState(null);
  const projectFallbackImage = portfolioData.hero.portraitUrl;

  const goLanding = () => {
    setActiveTab('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const sectionAnimation = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  };

  const renderImages = (images = [], altPrefix = 'Gallery') => {
    if (!images.length) return null;
    return (
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={img} className="gallery-card">
            <img src={img} alt={`${altPrefix} ${index + 1}`} loading="lazy" />
          </div>
        ))}
      </div>
    );
  };

  const renderPageContent = () => {
    if (activeTab === 'projects') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body">
          <h2 className="tab-heading">Projects</h2>
          <p className="projects-intro">Tap any card to open full project details.</p>
          <div className="work-grid">
            {portfolioData.projects.items.map((project) => (
              <button type="button" className="work-card" key={project.id} onClick={() => setSelectedProject(project)}>
                <span className="work-card__shine" />
                <div className="work-card__media">
                  <img src={project.images?.[0] || projectFallbackImage} alt={project.title} loading="lazy" />
                </div>
                <div className="work-card__head">
                  <h3>{project.title}</h3>
                  <span className="work-card__cta">Open</span>
                </div>
                <p className="work-card__minor">{project.cardBlurb || project.solution}</p>
                <div className="chips work-card__chips">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </motion.section>
      );
    }

    if (activeTab === 'about') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body">
          <h2 className="tab-heading">About Me</h2>
          
          <div className="panel" style={{ marginBottom: "32px", padding: "24px" }}>
            <p style={{ fontSize: "1.05rem", lineHeight: 1.6, color: "var(--text)", marginBottom: "24px" }}>
              {portfolioData.about.intro}
            </p>
            <h3 className="eyebrow" style={{ color: "var(--accent-coral)", marginBottom: "8px", fontSize: "0.75rem" }}>Career Objective</h3>
            <p className="muted" style={{ margin: 0, fontSize: "0.95rem" }}>
              {portfolioData.about.objective}
            </p>
          </div>

          <h3 className="panel-title" style={{ marginTop: "40px", marginBottom: "20px" }}>Education Journey</h3>
          <div style={{ position: 'relative', paddingLeft: '18px', borderLeft: '2px solid var(--peach-border)', display: 'block', marginLeft: '8px' }}>
            {portfolioData.educationContent.map((edu, idx) => (
              <div key={idx} style={{ position: 'relative', marginBottom: idx === portfolioData.educationContent.length - 1 ? 0 : '32px' }}>
                <span style={{ 
                  position: 'absolute', left: '-25px', top: '4px', width: '12px', height: '12px', 
                  background: 'var(--accent-coral)', borderRadius: '50%', border: '2px solid var(--panel-bg)'
                }} />
                <h4 style={{ margin: "0 0 6px", fontSize: "1.05rem", color: "var(--text)" }}>{edu.institution}</h4>
                <p className="muted" style={{ margin: "0 0 10px", fontSize: "0.85rem", fontWeight: 600 }}>{edu.year}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', background: 'rgba(255,255,255,0.03)', padding: '14px 16px', borderRadius: '10px', border: '1px solid var(--peach-border)' }}>
                  <p style={{ margin: 0, fontSize: "0.9rem", color: "var(--text-muted)" }}>{edu.degree}</p>
                  <p style={{ margin: 0, fontSize: "0.9rem", fontWeight: 700, color: 'var(--text)' }}>{edu.score}</p>
                </div>
              </div>
            ))}
          </div>

          <h3 className="panel-title" style={{ marginTop: '56px', marginBottom: '20px' }}>{portfolioData.skills.title}</h3>
          <div className="panel">
            <div className="split-grid">
              {portfolioData.skills.categories.map((cat, idx) => {
                const Icon = cat.icon;
                return (
                  <div key={idx}>
                    <h4 className="panel-title" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
                      <Icon size={18} />
                      {cat.title}
                    </h4>
                    <ul style={{ margin: 0, paddingLeft: "1.2rem" }}>
                      {cat.items.map((skill) => (
                        <li key={skill.name} className="muted" style={{ marginBottom: "6px", fontSize: '0.9rem' }}>{skill.name}</li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.section>
      );
    }

    if (activeTab === 'events') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body">
          <h2 className="tab-heading">{portfolioData.events.title}</h2>
          <div className="panel">
            <p className="eyebrow">{portfolioData.events.roleTitle}</p>
            <h3 className="panel-title">Leadership timeline</h3>
            <div className="stack">
              {portfolioData.events.roles.map((role) => (
                <article key={role.title} className="panel sub-card">
                  <h4>{role.title}</h4>
                  <p className="muted">
                    {role.organization} · {role.date}
                  </p>
                  <ul>
                    {role.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
          <div className="panel">
            <h3 className="panel-title">Event photos</h3>
            {renderImages(portfolioData.events.images, 'Event')}
          </div>
        </motion.section>
      );
    }

    if (activeTab === 'contact') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body">
          <h2 className="tab-heading">Contact</h2>
          <div className="split-grid">
            <a className="panel contact-link" href={`mailto:${portfolioData.contact.email}`}>
              <Mail size={18} />
              <span>{portfolioData.contact.email}</span>
            </a>
            <a
              className="panel contact-link"
              href={portfolioData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
            <a
              className="panel contact-link"
              href={portfolioData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.section>
      );
    }

    return null;
  };

  return (
    <>
      <div className="galaxy-bg" aria-hidden="true">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.35}
          saturation={0.7}
          hueShift={45}
          twinkleIntensity={0.3}
          rotationSpeed={0.06}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
      <div className="app-shell">
      <header className="shell-nav">
        <button type="button" className="shell-nav__logo" onClick={goLanding}>
          {portfolioData.landing.logoWord}
        </button>


        <nav className="shell-nav__pages" aria-label="Site pages">
          {portfolioData.tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              className={`shell-nav__page ${activeTab === tab.id ? 'is-active' : ''}`}
              onClick={() => {
                setActiveTab(tab.id);
                if (tab.id === 'landing') window.scrollTo({ top: 0, behavior: 'smooth' });
                else window.scrollTo(0, 0);
              }}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="content-wrap">
        {activeTab === 'landing' ? (
          <LandingView
            onNavigatePage={(id) => {
              setActiveTab(id);
              window.scrollTo(0, 0);
            }}
            onScrollTo={scrollToSection}
          />
        ) : (
          <AnimatePresence mode="wait">
            <div key={activeTab}>{renderPageContent()}</div>
          </AnimatePresence>
        )}
      </main>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.article
              className="project-drawer"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="project-drawer__head">
                <h3>{selectedProject.title}</h3>
                <button type="button" className="project-drawer__close" onClick={() => setSelectedProject(null)}>
                  Close
                </button>
              </div>
              <div className="project-drawer__hero">
                <img src={selectedProject.images?.[0] || projectFallbackImage} alt={selectedProject.title} />
              </div>
              <div className="project-drawer__section">
                <h4>Overview</h4>
                <p>{selectedProject.cardBlurb || selectedProject.solution}</p>
              </div>
              <div className="project-drawer__section">
                <h4>Problem</h4>
                <p>{selectedProject.problem}</p>
              </div>
              <div className="project-drawer__section">
                <h4>Solution</h4>
                <p>{selectedProject.solution}</p>
              </div>
              <div className="project-drawer__section">
                <h4>Outcomes</h4>
                <ul>
                  {(selectedProject.outcomes || []).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="project-drawer__section">
                <h4>Signature Feature</h4>
                <p>{selectedProject.uniqueFeature}</p>
              </div>
              <div className="project-drawer__section">
                <h4>Tech Stack</h4>
              </div>
              <div className="chips">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="chip">
                    {tech}
                  </span>
                ))}
              </div>
              {renderImages(selectedProject.images, selectedProject.title)}
              <div className="actions-inline">
                {selectedProject.githubUrl !== '#' && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github size={16} />
                  </a>
                )}
                {selectedProject.liveUrl !== '#' && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="footer-note">
        <a href={portfolioData.hero.resumeUrl} className="footer-resume" target="_blank" rel="noreferrer">
          <Download size={14} aria-hidden />
          Resume
        </a>
        <span className="footer-dot">·</span>
        Built with React · {portfolioData.hero.name}
      </footer>
      </div>
    </>
  );
}

export default App;
