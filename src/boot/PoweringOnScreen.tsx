import { useLanguage } from '../i18n/LanguageContext';
import styles from './PoweringOnScreen.module.css';

interface PoweringOnScreenProps {
  durationMs: number;
  onComplete: () => void;
}

export function PoweringOnScreen({ durationMs, onComplete }: PoweringOnScreenProps) {
  const { t } = useLanguage();

  return (
    <p
      className={styles.root}
      style={{ '--duration': `${durationMs}ms` } as React.CSSProperties}
      onAnimationEnd={onComplete}
    >
      {t.boot.poweringOn}
    </p>
  );
}
