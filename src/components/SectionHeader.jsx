import { motion } from 'framer-motion'

export default function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl"
    >
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.45em] text-cyan">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl md:leading-tight dark:text-white">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 dark:text-slate-300 md:text-lg">
        {description}
      </p>
    </motion.div>
  )
}
