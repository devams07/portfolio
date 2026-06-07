import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { education } from '../data/portfolio'

export default function EducationSection() {
  return (
    <section id="education" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Education"
          title="My school and college studies."
          description="I'm studying cybersecurity in college and focus on practical skills alongside my formal education."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {education.map((item) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              className="glass-panel section-ring rounded-[30px] p-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-cyan">Education</p>
              <h3 className="mt-4 text-2xl font-semibold text-white dark:text-white">{item.title}</h3>
              <p className="mt-3 text-slate-300 dark:text-slate-300">{item.institution}</p>
              <p className="mt-5 text-sm font-medium text-cyan-soft">{item.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
