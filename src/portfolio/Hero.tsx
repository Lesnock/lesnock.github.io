import { FiArrowDown, FiMail } from 'react-icons/fi';
import { GlitchText } from '../effects/GlitchText';
import { OPERATOR_NAME } from '../boot/constants';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className={styles.hero} aria-label={t.hero.profileAria}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.text}>
            <span className={styles.eyebrow}>{t.hero.eyebrow}</span>
            <GlitchText as="h1" text={OPERATOR_NAME} className={styles.name} />
            <p className={styles.title}>[ {t.hero.title.toUpperCase()} ]</p>
            <p className={styles.summary}>
              {t.hero.greeting} <br />
              {t.hero.summaryIntro}{' '}
              <span className={styles.summaryHighlight}>{t.hero.summaryYears}</span>{' '}
              {t.hero.summaryOutro}
            </p>
            <div className={styles.actions}>
              <a href="#projects" className={styles.primaryButton}>
                {t.hero.viewWork}
              </a>
              <a href="mailto:caio.lesnock@outlook.com" className={styles.secondaryButton}>
                <FiMail aria-hidden="true" />
                {t.hero.getInTouch}
              </a>
            </div>
          </div>

          <div className={styles.avatarFrame}>
            <span className={`${styles.avatarCorner} ${styles.avatarCornerTl}`} aria-hidden="true" />
            <span className={`${styles.avatarCorner} ${styles.avatarCornerBr}`} aria-hidden="true" />
            <div className={styles.avatarScan} aria-hidden="true" />
            <img src="/profile.jpg" alt="Caio Lesnock" className={styles.avatar} />
            <span className={styles.avatarLight} aria-hidden="true" />
          </div>
        </div>
      </div>

      <a href="#toolbox" className={styles.scrollCue} aria-label={t.hero.scrollAria}>
        <span>{t.hero.scroll}</span>
        <FiArrowDown aria-hidden="true" className={styles.scrollIcon} />
      </a>
    </header>
  );
}
