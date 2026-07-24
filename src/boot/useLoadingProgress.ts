import { useEffect, useRef, useState } from 'react';
import { BOOT_MESSAGES } from './constants';

interface UseLoadingProgressOptions {
  enabled: boolean;
  minDurationMs: number;
  maxDurationMs: number;
  holdMs: number;
  onComplete: () => void;
}

interface UseLoadingProgressResult {
  progress: number;
  currentMessage: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

/**
 * Produces a monotonically increasing, non-linear progress value driven by
 * requestAnimationFrame. A decaying sine jitter is layered on top of an
 * eased base curve so the bar reads as "unstable hardware" rather than a
 * perfectly linear fill, while still guaranteeing it lands on exactly 100.
 */
function computeProgress(elapsedMs: number, durationMs: number, previous: number): number {
  const t = Math.min(1, elapsedMs / durationMs);
  const base = easeOutCubic(t) * 100;
  const jitter = Math.sin(t * 37) * 4 * (1 - t);
  const raw = base + jitter;
  return Math.min(100, Math.max(previous, raw));
}

function messageForProgress(progress: number): string {
  const index = Math.min(
    BOOT_MESSAGES.length - 1,
    Math.floor((progress / 100) * BOOT_MESSAGES.length)
  );
  return BOOT_MESSAGES[index];
}

export function useLoadingProgress({
  enabled,
  minDurationMs,
  maxDurationMs,
  holdMs,
  onComplete,
}: UseLoadingProgressOptions): UseLoadingProgressResult {
  const [progress, setProgress] = useState(0);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!enabled) return;

    const duration = minDurationMs + Math.random() * (maxDurationMs - minDurationMs);
    let frameId: number;
    let holdTimeoutId: number;
    let startTime: number | null = null;
    let previous = 0;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const elapsed = now - startTime;
      const next = computeProgress(elapsed, duration, previous);
      previous = next;
      setProgress(next);

      if (elapsed < duration) {
        frameId = requestAnimationFrame(tick);
      } else {
        setProgress(100);
        holdTimeoutId = window.setTimeout(() => onCompleteRef.current(), holdMs);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(holdTimeoutId);
    };
  }, [enabled, minDurationMs, maxDurationMs, holdMs]);

  return { progress, currentMessage: messageForProgress(progress) };
}
