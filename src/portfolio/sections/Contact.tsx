import styles from './sections.module.css';

export function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <p className={styles.eyebrow}>Contact</p>
      <h2 className={styles.heading}>Let's Talk</h2>
      <p className={styles.body}>Placeholder contact copy — email, socials, and a CTA go here.</p>
    </section>
  );
}
