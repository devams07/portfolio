import { motion } from 'framer-motion'
import { RiShieldKeyholeLine, RiTerminalBoxLine, RiCodeSSlashLine } from 'react-icons/ri'

const skillCategories = [
  {
    title: 'Security & Operations',
    icon: RiShieldKeyholeLine,
    skills: [
      { name: 'Web Application Security', level: 88 },
      { name: 'Vulnerability Assessment & Pen Testing', level: 87 },
      { name: 'Network Security', level: 85 },
      { name: 'OWASP Top 10', level: 85 },
      { name: 'Threat Detection & Vulnerability Scanning', level: 84 },
      { name: 'Log Analysis', level: 82 },
      { name: 'SIEM Basic', level: 80 },
      { name: 'Digital Forensics (Basic)', level: 78 },
    ],
  },
  {
    title: 'Security Tools',
    icon: RiTerminalBoxLine,
    skills: [
      { name: 'Burp Suite', level: 85 },
      { name: 'Nmap', level: 84 },
      { name: 'Wireshark', level: 82 },
      { name: 'OWASP ZAP', level: 81 },
      { name: 'Metasploit', level: 80 },
      { name: 'Nikto', level: 78 },
      { name: 'splunk', level: 76 },
    ],
  },
  {
    title: 'Systems & Automation',
    icon: RiCodeSSlashLine,
    skills: [
      { name: 'Linux', level: 85 },
      { name: 'Python (Automation)', level: 83 },
      { name: 'Web Development', level: 80 },
    ],
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.05,
    },
  },
}

const barVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function SkillsSection() {
  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-white light:text-slate-900">My Skills</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 dark:text-slate-300 light:text-slate-600">
            A comprehensive overview of my expertise in cybersecurity, operational tools, automation scripts, and programming systems.
          </p>
          <div className="mx-auto mt-3 h-1 w-12 bg-cyan rounded-full" />
        </div>

        {/* Categories Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="glass-panel flex flex-col gap-6 rounded-3xl p-6 border border-white/5 bg-[#0a0914]/40"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 border-b border-white/5 pb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan/10 text-2xl text-cyan">
                    <Icon />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-wide">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-semibold text-slate-300 text-left">{skill.name}</span>
                        <span className="font-mono font-bold text-cyan">{skill.level}%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                        <motion.div
                          variants={barVariants}
                          className="h-full rounded-full bg-cyan origin-left"
                          style={{
                            width: `${skill.level}%`,
                            transformOrigin: 'left',
                            background: 'linear-gradient(90deg, #8b5cf6, #c084fc)',
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
