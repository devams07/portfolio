import { motion } from 'framer-motion'

export default function SkillCard({ name, level }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45 }}
      className="glass-panel flex flex-col justify-between rounded-2xl p-5 border border-white/5 bg-[#0a0914]/40"
    >
      <div className="flex flex-col gap-4">
        {/* Skill Name */}
        <h4 className="text-base font-semibold text-white dark:text-white light:text-slate-900 tracking-wide text-left">
          {name}
        </h4>
        
        <div className="space-y-1.5">
          {/* Progress Bar Container */}
          <div className="h-3 w-full rounded-full bg-white/5 dark:bg-white/5 light:bg-black/5 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
              className="h-full rounded-full bg-cyan origin-left"
              style={{
                width: `${level}%`,
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.4)',
                background: 'linear-gradient(90deg, #8b5cf6, #c084fc)'
              }}
            />
          </div>
          
          {/* Percentage text */}
          <div className="flex justify-end">
            <span className="font-mono text-xs font-bold text-cyan">
              {level}%
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
