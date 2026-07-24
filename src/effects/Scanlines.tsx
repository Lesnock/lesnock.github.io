import styles from './Scanlines.module.css';

interface ScanlinesProps {
  /** Fades the CRT scanline texture out once the boot sequence finishes. */
  faded?: boolean;
}

export function Scanlines({ faded }: ScanlinesProps) {
  return (
    <div className={faded ? `${styles.root} ${styles.faded}` : styles.root} aria-hidden="true">
      <div className={styles.sweep} />
    </div>
  );
}
