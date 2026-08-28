import type { Theme } from '../types/portfolio';

export const THEME_STORAGE_KEY = 'portfolio-theme';

// Fixed values are intentionally limited to browser chrome metadata.
// All visible UI colors are owned by src/styles/global.css.
const META_THEME_COLOR_DARK = '#0f172a';
const META_THEME_COLOR_LIGHT = '#f8fafc';

function getSystemTheme(): Theme {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'dark';
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function getStoredTheme(): Theme {
  if (typeof window === 'undefined') return 'dark';

  const value = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (value === 'dark' || value === 'light') return value;

  return getSystemTheme();
}

export function applyTheme(theme: Theme): void {
  if (typeof document === 'undefined') return;

  const root = document.documentElement;
  const isDark = theme === 'dark';

  root.dataset.theme = theme;
  root.classList.toggle('dark', isDark);
  root.style.colorScheme = theme;

  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeColor) {
    themeColor.content = isDark ? META_THEME_COLOR_DARK : META_THEME_COLOR_LIGHT;
  }

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
    window.dispatchEvent(new CustomEvent<Theme>('portfolio:theme-change', { detail: theme }));
  }
}
