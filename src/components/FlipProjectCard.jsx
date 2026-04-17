import { useState } from 'react';

export function FlipProjectCard({ title, coverSrc, blurb, problem, highlight, techStack = [] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className={`flip-card ${flipped ? 'is-flipped' : ''}`}
      role="button"
      tabIndex={0}
      onClick={() => setFlipped((f) => !f)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped((f) => !f);
        }
      }}
      aria-pressed={flipped}
      aria-label={`${title}. Click to ${flipped ? 'show image' : 'show summary'}.`}
    >
      <div className="flip-card__inner">
        <div className="flip-card__face flip-card__front">
          <div className="flip-card__image-wrap">
            <img src={coverSrc} alt="" loading="lazy" />
          </div>
          <p className="flip-card__title">{title}</p>
          <span className="flip-card__hint">Click to flip</span>
        </div>
        <div className="flip-card__face flip-card__back">
          <p className="flip-card__blurb">{blurb}</p>
          <p className="flip-card__detail">
            <strong>Problem:</strong> {problem}
          </p>
          <p className="flip-card__detail">
            <strong>Highlight:</strong> {highlight}
          </p>
          {techStack.length > 0 && (
            <ul className="flip-card__tech">
              {techStack.slice(0, 5).map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          <span className="flip-card__hint">Click to flip back</span>
        </div>
      </div>
    </div>
  );
}
