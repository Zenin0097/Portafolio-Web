import { useEffect, useState } from "react";
import type { Language } from "../../types/portfolio";
import { applyLanguage, getStoredLanguage } from "../../utils/language";

export default function LanguageToggle() {
  const [language, setLanguage] = useState<Language>("es");

  useEffect(() => {
    setLanguage(getStoredLanguage());
    const onChange = (event: Event) =>
      setLanguage((event as CustomEvent<Language>).detail);
    window.addEventListener("portfolio:language-change", onChange);
    return () =>
      window.removeEventListener("portfolio:language-change", onChange);
  }, []);

  const set = (next: Language) => {
    applyLanguage(next);
    setLanguage(next);
  };

  return (
    <div
      className="theme-transition inline-flex h-11 items-center rounded-full border border-border bg-surface/80 p-1 shadow-sm"
      role="group"
      aria-label="Language selector"
    >
      {(["es", "en"] as const).map((item) => (
        <button
          key={item}
          type="button"
          onClick={() => set(item)}
          aria-pressed={language === item}
          className={`type-badge h-9 min-w-10 rounded-full px-2.5 uppercase tracking-wide transition duration-300 ${
            language === item
              ? "bg-accent text-on-accent shadow-sm"
              : "text-text-muted hover:text-text-primary"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
