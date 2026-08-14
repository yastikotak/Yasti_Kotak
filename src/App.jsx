import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, ExternalLink, Mail } from 'lucide-react';
import { portfolioData } from './data/portfolioData';
import { LandingView } from './LandingView';
import Galaxy from './components/Galaxy';
import SplitText from './components/SplitText';
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
              <div className="work-card" key={project.id}>
                <span className="work-card__shine" />
                <div className="work-card__media" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                  <img src={project.images?.[0] || projectFallbackImage} alt={project.title} loading="lazy" />
                </div>
                <div className="work-card__head" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                  <h3>{project.title}</h3>
                </div>
                <p className="work-card__minor" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                  {project.cardBlurb || project.solution}
                </p>
                <div className="chips work-card__chips" onClick={() => setSelectedProject(project)} style={{ cursor: 'pointer' }}>
                  {project.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="work-card__actions">
                  <button
                    type="button"
                    className="landing-btn landing-btn--primary work-card__btn-primary"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                  {project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="landing-btn landing-btn--ghost work-card__btn-ghost"
                    >
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      );
    }

    if (activeTab === 'about') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body">
          <div className="about-shell">
            <SplitText
              tag="h2"
              text={portfolioData.hero.name}
              className="about-name-split"
              delay={65}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 32 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.15}
              rootMargin="-40px"
              textAlign="left"
            />

            <div className="about-cards-grid">
              <motion.article
                className="about-card panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35 }}
              >
                <p className="eyebrow">About</p>
                <h3 className="panel-title">Intro</h3>
                <p className="muted">{portfolioData.about.intro}</p>
              </motion.article>

              <motion.article
                className="about-card panel"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.35, delay: 0.08 }}
              >
                <p className="eyebrow">Direction</p>
                <h3 className="panel-title">Career Objective</h3>
                <p className="muted">{portfolioData.about.objective}</p>
              </motion.article>
            </div>

            <div className="about-education-wrap">
              <h3 className="panel-title about-education-title">Education Timeline</h3>
              <div className="about-timeline">
                {portfolioData.educationContent.map((edu, idx) => (
                  <motion.article
                    key={edu.institution}
                    className="about-timeline__item panel"
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                  >
                    <span className="about-timeline__dot" />
                    <p className="about-timeline__year">{edu.year}</p>
                    <h4>{edu.institution}</h4>
                    <p className="muted">{edu.degree}</p>
                    <p className="about-timeline__score">{edu.score}</p>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      );
    }

    if (activeTab === 'events') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body">
          <h2 className="tab-heading">{portfolioData.events.title}</h2>
          <div className="track-grid">
            <article className="panel track-section">
              <p className="eyebrow">Capabilities</p>
              <h3 className="panel-title">Skills</h3>
              <div className="track-skills">
                {portfolioData.events.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.name} className="track-skill-chip">
                      <Icon size={16} />
                      <span>{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </article>

            <article className="panel track-section">
              <p className="eyebrow">Highlights</p>
              <h3 className="panel-title">Achievements</h3>
              <div className="track-achievements">
                {portfolioData.events.achievements.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="track-achievement-card">
                      <div className="track-achievement-card__icon">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4>{item.title}</h4>
                        <p className="muted">{item.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </article>
          </div>

          <article className="panel track-section">
            <p className="eyebrow">Credentials</p>
            <h3 className="panel-title">Certifications</h3>
            <div className="track-cert-grid">
              {portfolioData.events.certifications.map((cert) => (
                <div key={cert.title} className="track-cert-card">
                  <div className="track-cert-card__media">
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate`}
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.nextElementSibling;
                        if (fallback) fallback.style.display = 'grid';
                      }}
                    />
                    <div className="track-cert-card__fallback">Add certificate photo</div>
                  </div>
                  <div className="track-cert-card__meta">
                    <h4>{cert.title}</h4>
                    <p className="muted">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="panel track-section">
            <p className="eyebrow">Teams</p>
            <h3 className="panel-title">My Teams</h3>
            <div className="track-timeline">
              {portfolioData.events.teams.map((team) => (
                <div key={team.title} className="track-timeline__item">
                  <span className="track-timeline__dot" />
                  <div>
                    <p className="track-timeline__date">{team.date}</p>
                    <h4>{team.title}</h4>
                    <p className="muted">{team.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </article>
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

    if (activeTab === 'resume') {
      return (
        <motion.section {...sectionAnimation} transition={{ duration: 0.3 }} className="tab-body resume-tab">
          <div className="resume-header-block" style={{ marginBottom: '24px' }}>
            <h2 className="tab-heading" style={{ textAlign: 'left', margin: '0 0 8px' }}>Resume</h2>
            <p className="resume-updated" style={{ margin: 0, color: 'var(--text-muted)' }}>My professional experience and academic credentials in one document.</p>
            <div style={{ marginTop: '16px', display: 'flex', gap: '12px' }}>
              <a
                href={portfolioData.hero.resumeUrl}
                download
                className="landing-btn landing-btn--primary"
                style={{ padding: '8px 16px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Download size={14} /> Download PDF
              </a>
              <a
                href={portfolioData.hero.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="landing-btn landing-btn--ghost"
                style={{ padding: '8px 16px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <ExternalLink size={14} /> Open in New Tab
              </a>
            </div>
          </div>
          <div className="pdf-shell" style={{ overflow: 'hidden', border: '1px solid var(--peach-border)', borderRadius: '12px', background: 'var(--white)', boxShadow: 'var(--shadow-soft)' }}>
            <iframe
              src={portfolioData.hero.resumeUrl}
              title="Yasti Kotak Resume"
              className="pdf-frame"
              width="100%"
              height="800px"
              style={{ border: 'none', display: 'block' }}
            />
          </div>
          <p className="pdf-fallback" style={{ textAlign: 'center', fontSize: '0.82rem', marginTop: '16px' }}>
            If the PDF does not display, you can download it directly <a href={portfolioData.hero.resumeUrl} download style={{ color: 'var(--accent-coral)', textDecoration: 'underline' }}>here</a>.
          </p>
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

              {selectedProject.features && (
                <div className="project-drawer__section">
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feat) => (
                      <li key={feat}>{feat}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.insights && (
                <div className="project-drawer__section">
                  <h4>Business Insights</h4>
                  <ul>
                    {selectedProject.insights.map((insight) => (
                      <li key={insight}>{insight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedProject.pipeline && (
                <div className="project-drawer__section">
                  <h4>SQL Data Pipeline</h4>
                  <p>{selectedProject.pipeline}</p>
                </div>
              )}

              <div className="project-drawer__section">
                <h4>Tech Stack</h4>
                <div className="chips" style={{ marginTop: '8px', marginBottom: '16px' }}>
                  {selectedProject.techStack.map((tech) => (
                    <span key={tech} className="chip">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedProject.images && selectedProject.images.length > 1 && (
                <div className="project-drawer__section">
                  <h4>Dashboard Gallery</h4>
                  {renderImages(selectedProject.images, selectedProject.title)}
                </div>
              )}

              <div className="project-drawer__links" style={{ display: 'flex', gap: '12px', marginTop: '28px', borderTop: '1px solid var(--peach-border)', paddingTop: '20px' }}>
                {selectedProject.githubUrl !== '#' && (
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="landing-btn landing-btn--ghost" style={{ padding: '10px 20px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Github size={16} /> View Repository
                  </a>
                )}
                {selectedProject.liveUrl !== '#' && selectedProject.liveUrl !== selectedProject.githubUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer" className="landing-btn landing-btn--primary" style={{ padding: '10px 20px', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <ExternalLink size={16} /> Live Demo
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
