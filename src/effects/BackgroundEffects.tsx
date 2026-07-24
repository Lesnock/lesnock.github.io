import { Scanlines } from './Scanlines';
import { NoiseOverlay } from './NoiseOverlay';
import { ParticleField } from './ParticleField';
import { Vignette } from './Vignette';
import styles from './BackgroundEffects.module.css';

interface BackgroundEffectsProps {
  /** Once the boot sequence finishes, the CRT scanline texture fades out for cleaner text. */
  interactive: boolean;
}

/**
 * Ambient CRT/cyberpunk atmosphere layered above the portfolio and boot
 * chrome alike. Purely decorative and non-interactive.
 */
export function BackgroundEffects({ interactive }: BackgroundEffectsProps) {
  return (
    <div className={styles.root}>
      <ParticleField />
      <Scanlines faded={interactive} />
      <NoiseOverlay />
      <Vignette />
    </div>
  );
}
