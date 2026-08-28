import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#inicio", es: "Inicio", en: "Home" },
  { href: "#proyectos", es: "Proyectos", en: "Projects" },
  {
    href: "#experiencia",
    es: "Experiencia & Certificaciones",
    en: "Experience & Certifications",
  },
  { href: "#skills", es: "Skills", en: "Skills" },
  { href: "#sobre-mi", es: "Sobre mí", en: "About me" },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) =>
      event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/80 text-text-primary shadow-sm"
        aria-label="Abrir menú / Open menu"
        aria-expanded={open}
      >
        <Menu size={20} aria-hidden="true" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] bg-overlay backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.18 }}
            onMouseDown={(event) =>
              event.target === event.currentTarget && setOpen(false)
            }
          >
            <motion.aside
              className="theme-transition absolute right-0 top-0 flex h-dvh w-[min(88vw,24rem)] flex-col border-l border-border bg-base p-5 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: reducedMotion ? 0 : 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <span className="type-label text-accent">AR // Dev</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface text-text-primary"
                  aria-label="Cerrar menú / Close menu"
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile">
                {links.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="type-body rounded-2xl px-4 py-4 font-medium text-text-primary hover:bg-surface hover:text-accent"
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: reducedMotion ? 0 : 0.04 * index }}
                  >
                    <span className="lang-es">{link.es}</span>
                    <span className="lang-en">{link.en}</span>
                  </motion.a>
                ))}
              </nav>

              <div className="mt-auto border-t border-border pt-6">
                <p className="type-label mb-3 text-text-muted">
                  <span className="lang-es">Preferencias</span>
                  <span className="lang-en">Preferences</span>
                </p>
                <div className="flex items-center gap-3">
                  <ThemeToggle />
                  <LanguageToggle />
                </div>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
