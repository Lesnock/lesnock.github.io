import { Scanlines } from './Scanlines';
import { NoiseOverlay } from './NoiseOverlay';
import { ParticleField } from './ParticleField';
import { Vignette } from './Vignette';
import styles from './BackgroundEffects.module.css';

/**
 * Ambient CRT/cyberpunk atmosphere layered above the portfolio and boot
 * chrome alike. Purely decorative and non-interactive.
 */
export function BackgroundEffects() {
  return (
    <div className={styles.root}>
      <ParticleField />
      <Scanlines />
      <NoiseOverlay />
      <Vignette />
    </div>
  );
}
