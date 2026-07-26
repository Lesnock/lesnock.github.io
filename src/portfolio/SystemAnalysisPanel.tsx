import { useLanguage } from '../i18n/LanguageContext';
import styles from './SystemAnalysisPanel.module.css';

export function SystemAnalysisPanel() {
  const { t } = useLanguage();
  const { systemAnalysisTitle, systemAnalysisBody, systemAnalysisStatus } = t.resume;

  return (
    <div className={styles.hologram} role="note" aria-label={systemAnalysisTitle}>
      <div className={styles.scanlines} aria-hidden="true" />
      <div className={styles.shimmer} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerTl}`} aria-hidden="true" />
      <span className={`${styles.corner} ${styles.cornerBr}`} aria-hidden="true" />

      <h3 className={styles.title} data-text={systemAnalysisTitle}>
        {systemAnalysisTitle}
      </h3>
      <p className={styles.body}>{systemAnalysisBody}</p>

      <div className={styles.statusBar}>
        {systemAnalysisStatus.map(({ label, value }) => (
          <span className={styles.statusItem} key={label}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusLabel}>{label}</span>
            <span className={styles.statusValue}>{value}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
