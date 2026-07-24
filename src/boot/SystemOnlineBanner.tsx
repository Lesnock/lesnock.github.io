import styles from './SystemOnlineBanner.module.css';

interface SystemOnlineBannerProps {
  durationMs: number;
  onComplete: () => void;
}

export function SystemOnlineBanner({ durationMs, onComplete }: SystemOnlineBannerProps) {
  return (
    <p
      className={styles.root}
      style={{ '--duration': `${durationMs}ms` } as React.CSSProperties}
      onAnimationEnd={onComplete}
    >
      System Online
    </p>
  );
}
