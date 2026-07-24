import type { ElementType, ComponentPropsWithoutRef } from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps<T extends ElementType> {
  text: string;
  as?: T;
  className?: string;
}

export function GlitchText<T extends ElementType = 'span'>({
  text,
  as,
  className,
  ...rest
}: GlitchTextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GlitchTextProps<T>>) {
  const Tag = as ?? 'span';
  return (
    <Tag
      className={className ? `${styles.glitch} ${className}` : styles.glitch}
      data-text={text}
      {...rest}
    >
      {text}
    </Tag>
  );
}
