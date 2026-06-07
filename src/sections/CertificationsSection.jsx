import { motion } from 'framer-motion'
import SectionHeader from '../components/SectionHeader'
import { certifications } from '../data/portfolio'

export default function CertificationsSection() {
  return (
    <section id="certifications" className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Verified Certifications"
          title="Learning through courses and certifications."
          description="I've taken online courses and earned certifications in security, networking, and cloud computing to strengthen my knowledge."
        />

        <div className="mt-10 space-y-5">
          {certifications.map((certification, index) => (
            <motion.article
              key={certification}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="glass-panel section-ring relative rounded-[26px] p-5 pl-16"
            >
              <div className="absolute bottom-5 left-7 top-5 w-px bg-gradient-to-b from-cyan via-cyan-soft to-transparent" />
              <div className="absolute left-[1.37rem] top-7 h-4 w-4 rounded-full border-4 border-night bg-cyan shadow-[0_0_18px_rgba(73,230,255,0.85)]" />
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-500">
                #{String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white dark:text-white">
                {certification}
              </h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
