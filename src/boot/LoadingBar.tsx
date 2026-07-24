import { LOADING_BAR_SEGMENTS } from './constants';
import styles from './LoadingBar.module.css';

interface LoadingBarProps {
  progress: number;
}

export function LoadingBar({ progress }: LoadingBarProps) {
  const filledSegments = Math.round((progress / 100) * LOADING_BAR_SEGMENTS);
  const emptySegments = LOADING_BAR_SEGMENTS - filledSegments;

  return (
    <div className={styles.root}>
      <div
        className={styles.glyphs}
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="System loading progress"
      >
        <span className={styles.filled}>{'█'.repeat(filledSegments)}</span>
        <span className={styles.empty}>{'█'.repeat(emptySegments)}</span>
      </div>
      <span className={styles.percentage}>{Math.round(progress)}%</span>
    </div>
  );
}
