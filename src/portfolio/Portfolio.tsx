import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Contact } from './sections/Contact';
import styles from './Portfolio.module.css';

interface PortfolioProps {
  /** Whether the boot sequence has finished — until then, hide from a11y tree and input. */
  interactive: boolean;
}

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Portfolio({ interactive }: PortfolioProps) {
  return (
    <div className={styles.root} inert={!interactive}>
      <nav className={styles.nav}>
        <span className={styles.navBrand}>CL</span>
        <ul className={styles.navLinks}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
