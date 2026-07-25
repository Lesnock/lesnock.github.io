import { useLanguage } from '../i18n/LanguageContext';
import styles from './ReadyScreen.module.css';

interface ReadyScreenProps {
  onReadyClick: () => void;
}

export function ReadyScreen({ onReadyClick }: ReadyScreenProps) {
  const { t } = useLanguage();

  return (
    <div className={styles.root}>
      <p className={styles.status}>{t.boot.systemReady}</p>
      <button type="button" className={styles.button} onClick={onReadyClick} autoFocus>
        {t.boot.readyButton}
      </button>
    </div>
  );
}
