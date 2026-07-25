import { Sidebar } from './Sidebar';
import { Resume } from './Resume';
import { ContactNav } from './ContactNav';
import styles from './Portfolio.module.css';

interface PortfolioProps {
  /** Whether the boot sequence has finished — until then, hide from a11y tree and input. */
  interactive: boolean;
}

export function Portfolio({ interactive }: PortfolioProps) {
  return (
    <div className={styles.root} inert={!interactive}>
      <ContactNav />
      <Sidebar />
      <Resume />
    </div>
  );
}
