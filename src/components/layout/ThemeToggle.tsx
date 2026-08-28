import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import type { Theme } from "../../types/portfolio";
import { applyTheme, getStoredTheme } from "../../utils/theme";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getStoredTheme());
    const onChange = (event: Event) =>
      setTheme((event as CustomEvent<Theme>).detail);
    window.addEventListener("portfolio:theme-change", onChange);
    return () => window.removeEventListener("portfolio:theme-change", onChange);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    applyTheme(next);
    setTheme(next);
  };

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="theme-transition inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/80 text-text-primary shadow-sm transition duration-300 hover:border-accent/50 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
      aria-label={
        isDark
          ? "Cambiar a tema claro / Switch to light theme"
          : "Cambiar a tema oscuro / Switch to dark theme"
      }
      aria-pressed={isDark}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? (
        <Sun size={18} aria-hidden="true" />
      ) : (
        <Moon size={18} aria-hidden="true" />
      )}
    </button>
  );
}
