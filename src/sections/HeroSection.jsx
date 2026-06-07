import { motion } from 'framer-motion'
import { RiArrowDownLine } from 'react-icons/ri'

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 text-center"
    >
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight">
            Hi, I'm <span className="text-cyan">Deva M S</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600"
        >
          Cybersecurity enthusiast specializing in SOC operations, threat monitoring, web application security, SIEM analysis, and Python automation to build secure, resilient, and efficient digital solutions.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-cyan px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_20px_rgba(139,92,246,0.4)] cursor-pointer"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      {/* Bouncing Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1.5 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-xs uppercase tracking-[0.25em] text-slate-400">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-lg text-cyan"
        >
          <RiArrowDownLine />
        </motion.div>
      </motion.div>
    </section>
  )
}
