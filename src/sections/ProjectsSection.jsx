import { motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard'
import { projects, profile } from '../data/portfolio'

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl text-center">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-white light:text-slate-900">Featured Projects</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 dark:text-slate-300 light:text-slate-600">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, security, performance, and user experience.
          </p>
          <div className="mx-auto mt-3 h-1 w-12 bg-cyan rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        {/* Check My GitHub Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-cyan px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer"
            style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)' }}
          >
            Check My GitHub
            <span>&rarr;</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
