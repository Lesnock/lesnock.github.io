import styles from './sections.module.css';

export function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <p className={styles.eyebrow}>Projects</p>
      <h2 className={styles.heading}>Selected Work</h2>
      <p className={styles.body}>
        Placeholder project grid — case studies and links will live here.
      </p>
    </section>
  );
}
