import { useMemo } from 'react';
import styles from './ParticleField.module.css';

const PARTICLE_COUNT = 22;

/** Mostly cyan signage with an occasional accent neon, like distant Night City rooftops. */
const PARTICLE_COLORS = [
  'var(--color-secondary)',
  'var(--color-secondary)',
  'var(--color-secondary)',
  'var(--color-primary)',
  'var(--color-accent-pink)',
  'var(--color-accent-purple)',
];

interface Particle {
  id: number;
  left: number;
  size: number;
  driftDurationS: number;
  driftDelayS: number;
  opacity: number;
  color: string;
}

function generateParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, id) => ({
    id,
    left: Math.random() * 100,
    size: 1 + Math.random() * 2,
    driftDurationS: 14 + Math.random() * 18,
    driftDelayS: Math.random() * -20,
    opacity: 0.25 + Math.random() * 0.45,
    color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
  }));
}

export function ParticleField() {
  const particles = useMemo(() => generateParticles(PARTICLE_COUNT), []);

  return (
    <div className={styles.root} aria-hidden="true">
      {particles.map((particle) => (
        <span
          key={particle.id}
          className={styles.particle}
          style={
            {
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              '--particle-color': particle.color,
              '--drift-duration': `${particle.driftDurationS}s`,
              '--drift-delay': `${particle.driftDelayS}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
