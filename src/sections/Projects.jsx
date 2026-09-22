import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import TiltCard from "../components/TiltCard";

function ProjectCard({ project, index }) {
  const reversed = index % 2 === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-8 md:flex-row md:items-center ${
        reversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <TiltCard className="w-full md:w-1/2" maxTilt={6}>
        <div className="glass-strong relative overflow-hidden rounded-3xl p-2">
          <div
            className={`group relative aspect-[16/11] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${project.color}`}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : null}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />
            <div className="absolute inset-x-0 top-0 flex items-center gap-1.5 bg-black/25 px-4 py-2.5 backdrop-blur-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">
              <span className="font-display text-lg font-semibold text-white drop-shadow-lg md:text-xl">
                {project.title}
              </span>
            </div>
          </div>
        </div>
      </TiltCard>

      <div className="w-full md:w-1/2">
        <span className="font-mono text-xs tracking-widest text-white/35">
          {project.year ? `${project.year} · ` : ""}0{index + 1}
        </span>
        <h3 className="font-display mt-2 text-2xl font-semibold text-white md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-cyan-300/80">
          {project.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-white/55">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="glass rounded-full px-3 py-1 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.github || project.liveDemo ? (
          <div className="mt-6 flex flex-wrap gap-5">
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                GitHub
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ) : null}
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="hover"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Live Demo
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="section-label mb-3">Selected work</p>
          <h2 className="font-display text-4xl font-semibold text-white md:text-5xl">
            Projects that made an <span className="text-gradient">impact</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-24 md:gap-32">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
