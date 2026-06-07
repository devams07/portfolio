import { AnimatePresence, motion } from 'framer-motion'

export default function LoadingScreen({ show }) {
  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-night"
        >
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-cyan/30 bg-cyan/10 font-mono text-cyan">
              DM
            </div>
            <p className="font-mono text-xs uppercase tracking-[0.55em] text-cyan">
              Initializing Portfolio
            </p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
