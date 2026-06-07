import { motion } from 'framer-motion'
import {
  RiGithubLine,
  RiLinkedinBoxLine,
  RiMailLine,
  RiMapPin2Line,
} from 'react-icons/ri'
import { profile } from '../data/portfolio'

const contactItems = [
  { label: 'Email Me', value: profile.email, href: `mailto:${profile.email}`, icon: RiMailLine },
  {
    label: 'GitHub',
    value: profile.githubLabel,
    href: profile.github,
    icon: RiGithubLine,
  },
  {
    label: 'LinkedIn',
    value: profile.name,
    href: profile.linkedIn,
    icon: RiLinkedinBoxLine,
  },
  {
    label: 'Location',
    value: profile.location,
    href: '#top',
    icon: RiMapPin2Line,
  },
]

const socialLinks = [
  { icon: RiLinkedinBoxLine, href: profile.linkedIn },
  { icon: RiMailLine, href: `mailto:${profile.email}` },
  { icon: RiGithubLine, href: profile.github },
]

export default function ContactSection() {
  return (
    <section id="contact" className="relative px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            Get In <span className="text-cyan">Touch</span>
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan to-cyan-soft" />
          </div>
        </motion.div>

        {/* Contact Cards Grid */}
        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              className="will-change-transform block"
            >
              <div className="glass-panel section-ring flex flex-col items-center rounded-[28px] p-8 text-center transition-colors duration-300 md:hover:border-cyan/50 h-full">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan/12 text-4xl text-cyan transition duration-300">
                  <item.icon />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Security Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          className="mb-12 flex justify-center"
        >
          <div className="rounded-[24px] border-2 border-cyan/40 px-8 py-6 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan">Security Focused</p>
            <p className="mt-2 text-2xl font-bold text-white">SOC Engineer & Learner</p>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-24 border-t border-white/5 pt-12 flex flex-col items-center gap-6 text-center">
          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-slate-300 transition-all duration-300 hover:border-cyan hover:text-cyan hover:scale-105 cursor-pointer"
              >
                <link.icon />
              </a>
            ))}
          </div>

          {/* Cybersecurity status pulse */}
          <div className="flex items-center gap-2 rounded-full border border-emerald-500/10 bg-emerald-500/5 px-4 py-1.5 text-xs text-emerald-400 font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>All Systems Secure</span>
          </div>

          {/* Copyright */}
          <div className="text-xs text-slate-500 font-mono mt-2">
            <p>© 2026 DEVA M S. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </section>
  )
}
