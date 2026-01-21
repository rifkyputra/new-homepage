// Svelte 5 runes-based store for theme management

export type BackgroundVariant = 'default' | 'purple' | 'bw';

interface GradientColors {
  start: string;
  stop1: string;
  stop2: string;
  stop3: string;
  stop4: string;
}

const gradients: Record<BackgroundVariant, GradientColors> = {
  default: {
    start: 'rgba(37, 80, 122, 0.9)',
    stop1: 'rgba(6, 86, 112, 0.9)',
    stop2: 'rgba(0, 85, 102, 0.9)',
    stop3: 'rgba(0, 119, 136, 0.9)',
    stop4: 'rgba(0, 153, 170, 0.9)',
  },
  purple: {
    start: '#1a253eff',
    stop1: '#364e8cff',
    stop2: '#364e8cff',
    stop3: '#0f172a',
    stop4: '#0f172a',
  },
  bw: {
    start: '#000000',
    stop1: '#1a1a1a',
    stop2: '#2d2d2d',
    stop3: '#1a1a1a',
    stop4: '#000000',
  },
};

class ThemeStore {
  variant = $state<BackgroundVariant>('bw');

  get gradient() {
    return gradients[this.variant];
  }

  get gradientStyle() {
    const g = this.gradient;
    return `radial-gradient(circle at top left, ${g.start} 0%, ${g.stop1} 25%, ${g.stop2} 50%, ${g.stop3} 75%, ${g.stop4} 100%)`;
  }

  setVariant(variant: BackgroundVariant) {
    this.variant = variant;
  }
}

export const themeStore = new ThemeStore();
