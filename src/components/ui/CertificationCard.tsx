import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "framer-motion";
import { BadgeCheck, ExternalLink } from "lucide-react";
import type { Certification } from "../../types/portfolio";

export default function CertificationCard({
  certification,
}: {
  certification: Certification;
}) {
  const x = useMotionValue(50);
  const y = useMotionValue(50);
  const reducedMotion = useReducedMotion();
  const background = useMotionTemplate`radial-gradient(320px circle at ${x}px ${y}px, var(--app-color-accent-glow), transparent 62%)`;

  return (
    <motion.article
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
      whileHover={reducedMotion ? undefined : { y: -3 }}
      style={{ background }}
      className="theme-transition relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-4 backdrop-blur-md sm:p-5"
    >
      {/* Cabecera compacta: Icono y Fecha alineados */}
      <div className="flex items-center justify-between gap-3">
        <div className="grid size-9 place-items-center rounded-xl bg-accent/10 text-accent">
          <BadgeCheck size={18} aria-hidden="true" />
        </div>
        <span className="type-badge rounded-full border border-border bg-base/60 px-2.5 py-0.5 text-xs text-text-muted font-mono">
          <span className="lang-es">{certification.date.es}</span>
          <span className="lang-en">{certification.date.en}</span>
        </span>
      </div>

      {/* Título y emisor más juntos */}
      <div className="mt-3">
        <h3 className="type-h3 text-base font-semibold text-text-primary leading-snug">
          <span className="lang-es">{certification.name.es}</span>
          <span className="lang-en">{certification.name.en}</span>
        </h3>
        <p className="type-body-sm mt-1 text-xs text-text-secondary">
          <span className="lang-es">{certification.issuer.es}</span>
          <span className="lang-en">{certification.issuer.en}</span>
        </p>
      </div>

      {/* Enlace de validación más sutil */}
      {certification.validationUrl && (
        <a
          href={certification.validationUrl}
          target="_blank"
          rel="noreferrer"
          className="type-button mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:underline"
        >
          <span className="lang-es">Validar credencial</span>
          <span className="lang-en">Validate credential</span>
          <ExternalLink size={13} aria-hidden="true" />
        </a>
      )}
    </motion.article>
  );
}
