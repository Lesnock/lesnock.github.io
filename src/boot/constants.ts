export const OPERATOR_NAME = 'CAIO LESNOCK';

/**
 * All boot-sequence timings live here so pacing can be tuned without
 * touching component logic or CSS keyframes.
 */
export const BOOT_TIMINGS = {
  loadingMinDurationMs: 2200,
  loadingMaxDurationMs: 3600,
  loadingCompleteHoldMs: 450,
  poweringOnDurationMs: 350,
  /**
   * Trimmed to a quick, subtle power-on: two short flicker beats followed
   * by a brief warm-up, totaling ~2s end to end rather than a long strobe
   * sequence.
   */
  flicker1DurationMs: 350,
  flicker2DurationMs: 450,
  lightingDurationMs: 850,
  onlineBannerDurationMs: 1600,
} as const;

/** Multiplier applied to every animated duration when reduced motion is preferred. */
export const REDUCED_MOTION_SCALE = 0.35;

export const BOOT_MESSAGES = [
  'Loading UI...',
  'Loading Components...',
  'Loading Projects...',
  'Loading Experience...',
  'Finalizing...',
] as const;

export const LOADING_BAR_SEGMENTS = 24;
