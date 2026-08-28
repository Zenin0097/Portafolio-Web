import type { Language } from '../types/portfolio';

export const LANGUAGE_STORAGE_KEY = 'portfolio-language';

export function getStoredLanguage(): Language {
  if (typeof window === 'undefined') return 'es';
  const value = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (value === 'es' || value === 'en') return value;
  return window.navigator.language.toLowerCase().startsWith('en') ? 'en' : 'es';
}

export function applyLanguage(language: Language): void {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = language;
  document.documentElement.dataset.lang = language;
  window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  window.dispatchEvent(new CustomEvent<Language>('portfolio:language-change', { detail: language }));
}
