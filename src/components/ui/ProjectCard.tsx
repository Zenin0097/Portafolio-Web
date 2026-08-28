import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Clock3 } from "lucide-react";
import type { Project } from "../../types/portfolio";
import { cardHover, fadeUp } from "../../utils/animationVariants";

export default function ProjectCard({ project }: { project: Project }) {
  const reducedMotion = useReducedMotion();
  const hasUrl = Boolean(project.url);

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={reducedMotion ? undefined : cardHover.hover}
      transition={{
        duration: reducedMotion ? 0 : 0.28,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="theme-transition group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-surface shadow-sm hover:border-accent/30 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-surface-deep">
        <img
          src={project.image}
          alt={project.imageAlt.es}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover scale-105 transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-x-4 bottom-4 flex justify-end">
          <span className="type-badge inline-flex items-center gap-2 rounded-full border border-border/50 bg-overlay/80 px-3 py-1.5 font-mono text-xs text-on-accent backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex size-2 rounded-full bg-accent"></span>
            </span>
            <span>
              <span className="lang-es">{project.status.es}</span>
              <span className="lang-en">{project.status.en}</span>
            </span>
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="type-h3 text-text-primary">{project.name}</h3>
        <p className="type-body-sm mt-3 text-text-secondary">
          <span className="lang-es">{project.description.es}</span>
          <span className="lang-en">{project.description.en}</span>
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.length > 0 ? (
            project.technologies.map((tech) => (
              <span
                key={tech.name}
                className="type-badge inline-flex items-center justify-center text-center px-3 py-1 rounded-full border border-border bg-base/60"
              >
                <span className="text-xs text-text-secondary">{tech.name}</span>
              </span>
            ))
          ) : (
            <span className="type-badge inline-flex items-center justify-center text-center gap-1.5 px-3 py-1 rounded-full border border-dashed border-border text-text-muted">
              <Clock3 size={12} aria-hidden="true" className="shrink-0" />
              <span className="text-xs">Tecnologías por confirmar</span>
            </span>
          )}
        </div>

        <div className="mt-auto pt-6">
          {hasUrl ? (
            <a
              href={project.url ?? undefined}
              target={project.url?.startsWith("http") ? "_blank" : undefined}
              rel={project.url?.startsWith("http") ? "noreferrer" : undefined}
              className="type-button inline-flex min-h-11 items-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-on-accent transition hover:bg-accent-dim"
            >
              <span className="lang-es">Visitar proyecto</span>
              <span className="lang-en">Visit project</span>
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : (
            <span
              className="type-button inline-flex min-h-11 cursor-not-allowed items-center gap-2 rounded-xl border border-border bg-control-muted/30 px-4 py-2.5 text-text-muted"
              aria-disabled="true"
            >
              <span className="lang-es">Demo no configurada</span>
              <span className="lang-en">Demo not configured</span>
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
