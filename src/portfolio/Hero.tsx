import { FiArrowDown, FiMail } from 'react-icons/fi';
import { GlitchText } from '../effects/GlitchText';
import { OPERATOR_NAME } from '../boot/constants';
import styles from './Hero.module.css';

const SKILLS = ['Node.js', 'TypeScript', 'React', 'PHP', 'Vue'];

export function Hero() {
  return (
    <header className={styles.hero} aria-label="Profile">
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.text}>
            <GlitchText as="h1" text={OPERATOR_NAME} className={styles.name} />
            <p className={styles.title}>Senior Software Engineer</p>
            <p className={styles.summary}>
              Hi!👋 <br />
              I'm Caio Lesnock, a Software Engineer with{' '}
              <span className={styles.summaryHighlight}>10+ years</span> of experience building
              scalable web applications. Feel free to explore some of my work below.
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
                View My Work
              </a>
              <a href="mailto:caio.lesnock@outlook.com" className={styles.secondaryButton}>
                <FiMail aria-hidden="true" />
                Get In Touch
              </a>
            </div>
          </div>

          <div className={styles.avatarFrame}>
            <img src="/profile.jpg" alt="Caio Lesnock" className={styles.avatar} />
          </div>
        </div>
      </div>

      <a href="#projects" className={styles.scrollCue} aria-label="Scroll to projects">
        <span>Scroll</span>
        <FiArrowDown aria-hidden="true" className={styles.scrollIcon} />
      </a>
    </header>
  );
}
