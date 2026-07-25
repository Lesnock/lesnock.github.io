import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import styles from './ContactNav.module.css';

const CONTACT_LINKS = [
  { label: 'GitHub', href: 'https://github.com/', icon: FiGithub },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FiLinkedin },
  { label: 'Email', href: 'mailto:caio.lesnock@outlook.com', icon: FiMail },
];

export function ContactNav() {
  return (
    <nav className={styles.nav} aria-label="Contact">
      <ul className={styles.list}>
        {CONTACT_LINKS.map(({ label, href, icon: Icon }) => (
          <li key={label}>
            <a href={href} className={styles.link} aria-label={label} title={label}>
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
