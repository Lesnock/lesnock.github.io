import { GlitchText } from '../../effects/GlitchText';
import { OPERATOR_NAME } from '../../boot/constants';
import styles from './sections.module.css';

export function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <p className={styles.eyebrow}>Full-Stack Engineer</p>
      <GlitchText as="h1" text={OPERATOR_NAME} className={styles.heading} />
      <p className={styles.body}>
        Placeholder hero copy — a short line about what Caio builds and the kind of
        problems he likes solving.
      </p>
    </section>
  );
}
