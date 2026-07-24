export const OPERATOR_NAME = 'CAIO LESNOCK';

/**
 * All boot-sequence timings live here so pacing can be tuned without
 * touching component logic or CSS keyframes.
 */
export const BOOT_TIMINGS = {
  loadingMinDurationMs: 2200,
  loadingMaxDurationMs: 3600,
  loadingCompleteHoldMs: 450,
  poweringOnDurationMs: 1100,
  /**
   * The flicker phases are deliberately long: each is a *burst* of strobes
   * that PLATEAU at full brightness for 160-320ms before dropping back, not
   * instantaneous spikes. The hold is what makes the flash legible — below
   * ~150ms the eye registers "something flashed" but cannot resolve the
   * interface underneath. The lighting phase is the slow warm-up after.
   */
  flicker1DurationMs: 1400,
  flicker2DurationMs: 1800,
  lightingDurationMs: 3600,
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
