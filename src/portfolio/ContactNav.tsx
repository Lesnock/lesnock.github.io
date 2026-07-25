import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import styles from './ContactNav.module.css';

export function ContactNav() {
  const { t } = useLanguage();

  const CONTACT_LINKS = [
    { label: t.contactNav.github, href: 'https://github.com/', icon: FiGithub },
    { label: t.contactNav.linkedin, href: 'https://linkedin.com/', icon: FiLinkedin },
    { label: t.contactNav.email, href: 'mailto:caio.lesnock@outlook.com', icon: FiMail },
  ];

  return (
    <nav className={styles.nav} aria-label={t.contactNav.aria}>
      <ul className={styles.list}>
        <li>
          <LanguageSwitcher />
        </li>
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
