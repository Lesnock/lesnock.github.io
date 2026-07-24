import styles from './sections.module.css';

export function About() {
  return (
    <section id="about" className={styles.section}>
      <p className={styles.eyebrow}>About</p>
      <h2 className={styles.heading}>Who I Am</h2>
      <p className={styles.body}>
        Placeholder about copy — background, focus areas, and what drives the work.
      </p>
    </section>
  );
}
