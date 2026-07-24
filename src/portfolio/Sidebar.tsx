import { GlitchText } from '../effects/GlitchText';
import { OPERATOR_NAME } from '../boot/constants';
import styles from './Sidebar.module.css';

const CONTACT_LINKS = [
  { label: 'Email', href: 'mailto:caio@example.com', value: 'caio@example.com' },
  { label: 'GitHub', href: 'https://github.com/', value: 'github.com/caiolesnock' },
  { label: 'LinkedIn', href: 'https://linkedin.com/', value: 'linkedin.com/in/caiolesnock' },
];

const SKILLS = [
  { group: 'Languages', items: ['TypeScript', 'Python', 'Go', 'SQL'] },
  { group: 'Frontend', items: ['React', 'Vite', 'CSS'] },
  { group: 'Backend', items: ['Node.js', 'PostgreSQL', 'Docker'] },
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
        <p className={styles.title}>Full-Stack Engineer</p>
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

      <section className={styles.block} aria-label="Skills">
        <h2 className={styles.blockLabel}>Skills</h2>
        <div className={styles.skillGroups}>
          {SKILLS.map((group) => (
            <div key={group.group} className={styles.skillGroup}>
              <p className={styles.skillGroupLabel}>{group.group}</p>
              <ul className={styles.skillTags}>
                {group.items.map((item) => (
                  <li key={item} className={styles.skillTag}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
