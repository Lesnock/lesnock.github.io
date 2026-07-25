import { GlitchText } from '../effects/GlitchText';
import { OPERATOR_NAME } from '../boot/constants';
import styles from './Sidebar.module.css';

const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/', value: 'github.com/caiolesnock' },
  { label: 'Email', href: 'mailto:caio.lesnock@outlook.com', value: 'caio.lesnock@outlook.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', value: 'linkedin.com/in/caiolesnock' },
];

export function Sidebar() {
  return (
    <aside className={styles.sidebar} aria-label="Profile">
      <div className={styles.identity}>
        <p className={styles.status}>
          <span className={styles.statusDot} aria-hidden="true" />
          Online
        </p>
        <GlitchText as="h1" text={OPERATOR_NAME} className={styles.name} />
        <p className={styles.title}>Senior Software Engineer</p>
      </div>

      <section className={styles.block} aria-label="Contact">
        <h2 className={styles.blockLabel}>Contact</h2>
        <ul className={styles.contactList}>
          {CONTACT_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className={styles.contactLink}>
                <span className={styles.contactKey}>{link.label}</span>
                <span className={styles.contactValue}>{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
