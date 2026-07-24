export type BootState =
  | 'Initializing'
  | 'SystemReady'
  | 'PoweringOn'
  | 'Flicker1'
  | 'Flicker2'
  | 'Lighting'
  | 'SystemOnline'
  | 'Interactive';

export type BootEvent =
  | { type: 'LOADING_COMPLETE' }
  | { type: 'READY_CLICKED' }
  | { type: 'POWER_ON_COMPLETE' }
  | { type: 'FLICKER_1_COMPLETE' }
  | { type: 'FLICKER_2_COMPLETE' }
  | { type: 'LIGHTING_COMPLETE' }
  | { type: 'ONLINE_COMPLETE' };

export interface BootHandlers {
  onReadyClick: () => void;
  onPowerOnComplete: () => void;
  onFlicker1Complete: () => void;
  onFlicker2Complete: () => void;
  onLightingComplete: () => void;
  onOnlineComplete: () => void;
}
