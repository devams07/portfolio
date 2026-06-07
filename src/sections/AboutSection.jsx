import { motion } from 'framer-motion'
import { highlights, profile } from '../data/portfolio'

export default function AboutSection() {
  const handleDownload = (e) => {
    e.preventDefault()
    fetch('/Deva_M_S_Resume.pdf')
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'Deva_M_S_Resume.pdf')
        document.body.appendChild(link)
        link.click()
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        }
        window.URL.revokeObjectURL(url)
      })
      .catch((error) => console.error('Download failed:', error))
  }

  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-white light:text-slate-900">About Me</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-cyan rounded-full" />
        </div>

        {/* Content Layout */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Biography Text & Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 md:text-3xl">
              Passionate Cyber Security Engineer & Tech Developer
            </h3>
            
            <p className="mt-6 text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
              I am a Cybersecurity enthusiast with a solid foundation in SOC operations, threat monitoring, log analysis, SIEM tools, and network security concepts. I am familiar with OWASP Top 10 web application security principles, web development, and Python automation scripts.
            </p>
            
            <p className="mt-4 text-base leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
              Currently pursuing a B.E. in Computer Science with a specialization in Cyber Security. I am passionate about learning advanced security technologies, improving threat detection processes, and designing automation that enhances incident response capabilities.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan px-7 py-3 text-sm font-semibold text-white transition hover:opacity-90 shadow-[0_0_15px_rgba(139,92,246,0.3)] cursor-pointer"
              >
                Get In Touch
              </a>
              <a
                href="/Deva_M_S_Resume.pdf"
                onClick={handleDownload}
                className="inline-flex items-center justify-center rounded-full border border-cyan/35 bg-transparent px-7 py-3 text-sm font-semibold text-cyan transition hover:bg-cyan/10 cursor-pointer"
              >
                Download CV
              </a>
            </div>
          </motion.div>

          {/* Right: Highlights Cards Stack */}
          <div className="space-y-5">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon
              return (
                <motion.article
                  key={highlight.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.12 }}
                  className="glass-panel group flex items-start gap-5 rounded-2xl p-6 transition duration-300 hover:translate-x-2"
                >
                  {/* Icon badge */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-xl text-cyan transition duration-300 group-hover:bg-cyan/20 group-hover:scale-105">
                    <IconComponent />
                  </div>
                  
                  {/* Text Details */}
                  <div className="min-w-0">
                    <h4 className="text-lg font-semibold text-white dark:text-white light:text-slate-900">
                      {highlight.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                      {highlight.text}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
