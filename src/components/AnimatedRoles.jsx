import { useEffect, useState } from 'react';

export function AnimatedRoles({ roles, typingSpeed = 72, pauseMs = 2200 }) {
  const [display, setDisplay] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [mode, setMode] = useState('type');

  useEffect(() => {
    const word = roles[roleIndex] ?? '';
    if (!word.length) return undefined;

    let id;
    if (mode === 'type') {
      if (display.length < word.length) {
        id = window.setTimeout(() => {
          setDisplay(word.slice(0, display.length + 1));
        }, typingSpeed);
      } else {
        id = window.setTimeout(() => setMode('pause'), pauseMs);
      }
    } else if (mode === 'pause') {
      id = window.setTimeout(() => setMode('delete'), 350);
    } else if (mode === 'delete') {
      if (display.length > 0) {
        id = window.setTimeout(() => setDisplay((d) => d.slice(0, -1)), Math.max(28, typingSpeed / 2));
      } else {
        setRoleIndex((i) => (i + 1) % roles.length);
        setMode('type');
      }
    }
    return () => window.clearTimeout(id);
  }, [display, mode, roleIndex, roles, typingSpeed, pauseMs]);

  return (
    <span className="animated-roles" aria-live="polite">
      <span className="animated-roles__text">{display}</span>
      <span className="animated-roles__caret" aria-hidden />
    </span>
  );
}
