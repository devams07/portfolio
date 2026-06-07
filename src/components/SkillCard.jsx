import { motion } from 'framer-motion'

const cardVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 }
  }
}

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.85, ease: 'easeOut' }
  }
}

export default function SkillCard({ name, level }) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={cardVariants}
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
              variants={barVariants}
              className="h-full rounded-full bg-cyan origin-left"
              style={{
                width: `${level}%`,
                transformOrigin: 'left',
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
