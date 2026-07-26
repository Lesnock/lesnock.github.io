import { useLanguage } from '../i18n/LanguageContext';
import { StatBar } from './StatBar';
import styles from './SystemAnalysisPanel.module.css';

const ATTRIBUTE_ACCENTS = ['primary', 'secondary', 'purple', 'pink', 'primary'] as const;

export function SystemAnalysisPanel() {
  const { t } = useLanguage();
  const { systemAnalysisTitle, systemAnalysisBody, systemAnalysisAttributes } = t.resume;

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

      <div className={styles.attributeGrid}>
        {systemAnalysisAttributes.map(({ label, value, max, hint }, index) => (
          <div className={styles.attributeItem} key={label}>
            <StatBar
              label={label}
              value={value}
              max={max}
              accent={ATTRIBUTE_ACCENTS[index % ATTRIBUTE_ACCENTS.length]}
            />
            {hint && <span className={styles.attributeHint}>{hint}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}
