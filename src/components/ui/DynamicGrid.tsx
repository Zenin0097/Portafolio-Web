import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "../../types/portfolio";
import { staggerContainer } from "../../utils/animationVariants";
import ProjectCard from "./ProjectCard";

export default function DynamicGrid({ projects }: { projects: Project[] }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={reducedMotion ? undefined : staggerContainer}
      initial={reducedMotion ? undefined : "hidden"}
      whileInView={reducedMotion ? undefined : "visible"}
      viewport={{ once: true, amount: 0.08 }}
      className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </motion.div>
  );
}
