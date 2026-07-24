import styles from './BootMessages.module.css';

interface BootMessagesProps {
  message: string;
}

export function BootMessages({ message }: BootMessagesProps) {
  return (
    <p className={styles.root} aria-live="polite" key={message}>
      {message}
    </p>
  );
}
