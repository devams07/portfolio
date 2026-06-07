import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SkillCard from '../components/SkillCard'

const skillItems = [
  // Group 1: Cyber Security & Monitoring
  { name: 'Network Security', level: 85, category: 'Security' },
  { name: 'Web Application Security', level: 88, category: 'Security' },
  { name: 'Threat Detection & Vulnerability Scanning', level: 84, category: 'Security' },
  { name: 'Log Analysis', level: 82, category: 'Security' },
  { name: 'SIEM Basic', level: 80, category: 'Security' },
  { name: 'Digital Forensics (Basic)', level: 78, category: 'Security' },
  // Group 2: Vulnerability Assessment & Pen Testing
  { name: 'Vulnerability Assessment & Penetration Testing', level: 87, category: 'Security' },
  { name: 'OWASP Top 10', level: 85, category: 'Security' },
  { name: 'Web Development', level: 80, category: 'Coding' },
  // Group 3: Security Tools
  { name: 'Burp Suite', level: 85, category: 'Tools' },
  { name: 'Metasploit', level: 80, category: 'Tools' },
  { name: 'Wireshark', level: 82, category: 'Tools' },
  { name: 'Nmap', level: 84, category: 'Tools' },
  { name: 'OWASP ZAP', level: 81, category: 'Tools' },
  { name: 'Nikto', level: 78, category: 'Tools' },
  { name: 'splunk', level: 76, category: 'Tools' },
  // Group 4: Automation & Systems
  { name: 'Python (Automation)', level: 83, category: 'Coding' },
  { name: 'Linux', level: 85, category: 'Coding' },
]

const filterTabs = [
  { id: 'All', label: 'All' },
  { id: 'Security', label: 'Security' },
  { id: 'Tools', label: 'Tools' },
  { id: 'Coding', label: 'Systems & Coding' },
]

export default function SkillsSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'All') return skillItems
    return skillItems.filter((item) => item.category === activeFilter)
  }, [activeFilter])

  return (
    <section id="skills" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold text-white dark:text-white light:text-slate-900">My Skills</h2>
          <div className="mx-auto mt-3 h-1 w-12 bg-cyan rounded-full" />
        </div>

        {/* Filter Tabs Pills */}
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-400 hover:text-white hover:bg-white/5 border border-white/5 bg-[#0a0914]/20'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="skills-active-pill"
                    className="absolute inset-0 rounded-full bg-cyan shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #a78bfa 100%)', zIndex: -1 }}
                  />
                )}
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Flat Grid of Skills */}
        <motion.div
          layout
          className="grid gap-5 sm:grid-cols-2 md:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
