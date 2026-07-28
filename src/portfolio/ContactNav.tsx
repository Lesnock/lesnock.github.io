import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './ContactNav.module.css';

export function ContactNav() {
  const { t } = useLanguage();

  const CONTACT_LINKS = [
    { label: t.contactNav.github, href: 'https://github.com/Lesnock', icon: FiGithub, external: true },
    { label: t.contactNav.linkedin, href: 'https://www.linkedin.com/in/caiolesnock', icon: FiLinkedin, external: true },
    { label: t.contactNav.email, href: 'mailto:caio.lesnock@outlook.com', icon: FiMail, external: false },
  ];

  return (
    <nav className={styles.nav} aria-label={t.contactNav.aria}>
      <ul className={styles.list}>
        <li>
          <LanguageSwitcher />
        </li>
        {CONTACT_LINKS.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              className={styles.link}
              aria-label={label}
              title={label}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
              <Icon aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
