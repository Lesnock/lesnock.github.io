import styles from './LightingEffect.module.css';

interface LightingEffectProps {
  durationMs: number;
}

/**
 * A decorative radial burst that sweeps outward from center during the
 * stabilization phase, layered on top of Overlay's --power-driven blackout
 * to sell "electricity spreading" rather than a plain cross-fade.
 */
export function LightingEffect({ durationMs }: LightingEffectProps) {
  return (
    <div className={styles.burst} style={{ '--duration': `${durationMs}ms` } as React.CSSProperties} />
  );
}
