import { portfolioData } from './data/portfolioData';
import { AnimatedRoles } from './components/AnimatedRoles';
import { FlipProjectCard } from './components/FlipProjectCard';
import { Download } from 'lucide-react';
import RotatingText from './components/RotatingText';
import MagicBento from './components/MagicBento';
import TiltedCard from './components/TiltedCard';
import Galaxy from './components/Galaxy';

function HeroBrush() {
  return (
    <svg className="hero-brush" viewBox="0 0 400 420" aria-hidden="true">
      <path
        d="M40 280 C120 120 200 80 340 100 C380 200 360 360 200 400 C80 380 20 320 40 280 Z"
        fill="var(--brush-fill)"
        opacity="0.55"
      />
      <path
        d="M60 300 C140 160 220 100 320 130 C350 240 300 380 180 390 C90 370 40 330 60 300 Z"
        fill="var(--brush-fill-2)"
        opacity="0.4"
      />
    </svg>
  );
}

export function LandingView({ onNavigatePage, onScrollTo }) {
  const { landing, hero, highlights, projects, contact } = portfolioData;
  const previewProjects = projects.items.slice(0, 4);

  const scroll = (id) => {
    if (onScrollTo) onScrollTo(id);
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const bentoItems = (landing.gallery || []).map((item, index) => ({
    color: 'transparent',
    title: '',
    description: item.caption || '',
    label: '',
    image: item.src
  }));

  return (
    <div className="landing-root">
      <section className="landing-hero" id="top">
        <div className="landing-hero__grid">
          <div className="landing-hero__visual">
            <HeroBrush />
            <div className="landing-portrait">
              <img src={hero.portraitUrl} alt="" />
            </div>
          </div>

          <div className="landing-hero__content">
            <p className="landing-eyebrow">{landing.heroGreeting}</p>
            <h1 className="landing-hero__name">{hero.name}</h1>
            <a className="landing-email" href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <p className="landing-role-line" style={{ marginBottom: "8px" }}>
              <AnimatedRoles roles={landing.rotatingRoles} />
            </p>
            <div style={{ marginBottom: "22px", fontSize: "clamp(1.15rem, 2.2vw, 1.45rem)", fontWeight: 600, color: "var(--accent-coral)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              <span>Creative</span>
              <RotatingText
                texts={['Coder', 'Thinker', 'Problem Solver']}
                mainClassName="rotating-main"
                staggerFrom="last"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-120%', opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: 'spring', damping: 30, stiffness: 400 }}
                rotationInterval={3000}
              />
            </div>
            <p className="landing-tagline" style={{ marginBottom: "32px" }}>{landing.heroTagline}</p>
            <div className="landing-hero__actions">
              <a className="landing-btn landing-btn--primary" href={hero.resumeUrl} target="_blank" rel="noreferrer">
                <Download size={17} strokeWidth={2} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-quote" id="l-quote" aria-labelledby="quote-heading">
        <h2 id="quote-heading" className="visually-hidden">
          Personal quote
        </h2>
        <blockquote className="landing-quote__block">
          <p>&ldquo;{landing.signatureQuote}&rdquo;</p>
        </blockquote>
      </section>

      <section className="landing-section landing-approach" id="l-approach" aria-labelledby="approach-heading">
        <div className="landing-section__head">
          <h2 id="approach-heading">My Approach</h2>
          <p className="landing-section__sub">How I tackle problems and deliver value.</p>
        </div>
        <div className="approach-grid">
          {highlights.approach.map((item) => {
            const Icon = item.icon;
            return (
              <div className="approach-card" key={item.title}>
                <div className="approach-card__icon-wrapper">
                  <Icon className="approach-card__icon" size={26} strokeWidth={1.5} />
                </div>
                <h3 className="approach-card__title">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </section>

      <section className="landing-section" id="l-preview">
        <div className="landing-section__head" style={{ marginBottom: "32px" }}>
          <h2>Highlighted projects</h2>
        </div>
        <div className="flip-card-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {previewProjects.map((p) => (
            <div key={p.id} style={{ height: '320px' }}>
              <TiltedCard
                imageSrc={p.images?.[0] ?? hero.portraitUrl}
                altText={p.title}
                captionText=""
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
                imageWidth="100%"
                rotateAmplitude={12}
                scaleOnHover={1.03}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <div style={{ padding: '20px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', boxSizing: 'border-box' }}>
                    <h3 style={{ color: 'var(--white)', margin: '0 0 6px', fontSize: '1.1rem', textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>{p.title}</h3>
                    <p style={{ color: 'var(--peach-muted)', margin: 0, fontSize: '0.85rem', fontWeight: 600, textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}>
                      {p.techStack.slice(0, 3).join(' • ')}
                    </p>
                  </div>
                }
              />
            </div>
          ))}
        </div>
        <p className="landing-more">
          <button type="button" className="landing-link-btn" onClick={() => onNavigatePage('projects')}>
            Full project write-ups →
          </button>
        </p>
      </section>

      <section className="landing-section gallery-section" id="l-gallery" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="gallery-galaxy-container" style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.4, pointerEvents: 'none' }}>
          <Galaxy 
            density={0.8}
            glowIntensity={0.2}
            twinkleIntensity={0.5}
            starSpeed={0.3}
          />
        </div>
        <div className="landing-section__head" style={{ position: 'relative', zIndex: 1 }}>
          <h2>Gallery</h2>
          <p className="landing-section__sub">Events, leadership, and concepts — mapped out magically.</p>
        </div>
        <div style={{ marginTop: '28px', position: 'relative', zIndex: 1 }}>
          <MagicBento 
            items={bentoItems}
            textAutoHide={true}
            enableStars={false}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="255, 120, 90" 
          />
        </div>
      </section>




      <section className="landing-cta">
        <p className="landing-cta__line">Let&apos;s build something that holds up to real users and real data.</p>
        <div className="landing-cta__row">
          <a className="landing-btn landing-btn--primary" href={`mailto:${contact.email}`}>
            Start by saying hi
          </a>
        </div>
        <button type="button" className="landing-link-btn landing-cta__secondary" onClick={() => onNavigatePage('contact')}>
          More contact options →
        </button>
      </section>
    </div>
  );
}
