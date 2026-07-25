import { FiArrowDown, FiMail } from 'react-icons/fi';
import { GlitchText } from '../effects/GlitchText';
import { OPERATOR_NAME } from '../boot/constants';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './Hero.module.css';

const SKILLS = ['Node.js', 'TypeScript', 'React', 'PHP', 'Vue'];

export function Hero() {
  const { t } = useLanguage();

  return (
    <header className={styles.hero} aria-label={t.hero.profileAria}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.text}>
            <GlitchText as="h1" text={OPERATOR_NAME} className={styles.name} />
            <p className={styles.title}>{t.hero.title}</p>
            <p className={styles.summary}>
              {t.hero.greeting} <br />
              {t.hero.summaryIntro}{' '}
              <span className={styles.summaryHighlight}>{t.hero.summaryYears}</span>{' '}
              {t.hero.summaryOutro}
            </p>
            <ul className={styles.skillTags}>
              {SKILLS.map((item) => (
                <li key={item} className={styles.skillTag}>
                  {item}
                </li>
              ))}
            </ul>
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
            <img src="/profile.jpg" alt="Caio Lesnock" className={styles.avatar} />
          </div>
        </div>
      </div>

      <a href="#projects" className={styles.scrollCue} aria-label={t.hero.scrollAria}>
        <span>{t.hero.scroll}</span>
        <FiArrowDown aria-hidden="true" className={styles.scrollIcon} />
      </a>
    </header>
  );
}
