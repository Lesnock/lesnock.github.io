import type { CSSProperties, ElementType, ComponentPropsWithoutRef } from 'react';
import styles from './GlitchText.module.css';

interface GlitchTextProps<T extends ElementType> {
  text: string;
  as?: T;
  className?: string;
  /** Seconds between glitch bursts. Defaults to 5s. */
  interval?: number;
  /** Enables the fluorescent-tube flicker layer. Off by default. */
  blink?: boolean;
}

export function GlitchText<T extends ElementType = 'span'>({
  text,
  as,
  className,
  interval = 5,
  blink = false,
  style,
  ...rest
}: GlitchTextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof GlitchTextProps<T>>) {
  const Tag = as ?? 'span';
  const glitchClass = [styles.glitch, blink && styles.blink, className].filter(Boolean).join(' ');
  const glitchStyle: CSSProperties = { ...style, '--glitch-interval': `${interval}s` } as CSSProperties;
  return (
    <Tag className={glitchClass} data-text={text} style={glitchStyle} {...rest}>
      {text}
    </Tag>
  );
}
