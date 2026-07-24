import styles from './NoiseOverlay.module.css';

/** Subtle animated static using an inline SVG turbulence filter — no image asset needed. */
export function NoiseOverlay() {
  return (
    <div className={styles.root} aria-hidden="true">
      <svg className={styles.svg}>
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
