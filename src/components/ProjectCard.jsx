import { motion } from 'framer-motion'
import { RiGithubLine, RiArrowRightUpLine } from 'react-icons/ri'
import { profile } from '../data/portfolio'

export default function ProjectCard({ title, description, tech, github }) {
  // Render custom premium mockups for each project category/title
  const renderMockupHeader = () => {
    if (title.toLowerCase().includes('honeypot')) {
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#1e070e] to-[#0d0306] border-b border-red-500/10 p-4 font-mono text-[10px] text-red-400 select-none">
          {/* Terminal Window Header */}
          <div className="mb-3 flex items-center justify-between border-b border-red-500/15 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-red-500/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
            </div>
            <span className="text-[9px] text-red-500/50 uppercase tracking-widest">honeypot_console.sh</span>
            <div className="w-10" />
          </div>
          {/* Logs */}
          <div className="space-y-1.5 text-left text-xs">
            <p className="text-slate-400">$ python ransomware_honeypot.py</p>
            <p className="text-yellow-400">[i] Listening on file system changes...</p>
            <p className="text-red-400 animate-pulse">[ALERT] Process 8241: Malicious encryption signature detected!</p>
            <p className="text-green-400">[ACTION] Process killed. Snapshot restored. 0 bytes compromised.</p>
          </div>
        </div>
      )
    }

    if (title.toLowerCase().includes('dns')) {
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#07161e] to-[#030b0e] border-b border-cyan/10 p-4 font-mono text-[10px] text-cyan select-none">
          {/* Network Header */}
          <div className="mb-3 flex items-center justify-between border-b border-cyan/15 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-cyan/60" />
              <span className="h-2 w-2 rounded-full bg-cyan/40" />
              <span className="h-2 w-2 rounded-full bg-cyan/20" />
            </div>
            <span className="text-[9px] text-cyan-soft/60 uppercase tracking-widest">dns_sniff_v1.0</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
          </div>
          {/* Data packet grid */}
          <div className="space-y-2 text-left text-xs">
            <div className="flex justify-between border-b border-cyan/5 pb-1 text-[10px] text-slate-400">
              <span>QUERY DOMAIN</span>
              <span>TYPE</span>
              <span>STATUS</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-slate-300 truncate max-w-[140px] sm:max-w-none">suspicious-malicious-server.biz</span>
              <span className="text-yellow-400 shrink-0">AAAA</span>
              <span className="text-red-500 font-bold shrink-0">[BLOCKED]</span>
            </div>
            <div className="flex justify-between gap-2">
              <span className="text-slate-300 truncate max-w-[140px] sm:max-w-none">dns.google.com</span>
              <span className="text-cyan shrink-0">A</span>
              <span className="text-green-400 shrink-0">[RESOLVED]</span>
            </div>
          </div>
        </div>
      )
    }

    if (title.toLowerCase().includes('website') || title.toLowerCase().includes('course')) {
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#0d081f] to-[#06040d] border-b border-purple-500/10 p-3 select-none">
          {/* Browser UI header */}
          <div className="mb-3 flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-[9px] text-purple-300">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-500" />
            <span className="truncate">https://deva-course-portal.local/dashboard</span>
          </div>
          {/* Mock Dashboard Layout */}
          <div className="grid grid-cols-4 gap-2">
            {/* Sidebar */}
            <div className="col-span-1 h-20 rounded bg-white/5 p-1 space-y-1">
              <div className="h-1.5 w-full rounded bg-purple-500/40" />
              <div className="h-1.5 w-4/5 rounded bg-white/10" />
              <div className="h-1.5 w-3/4 rounded bg-white/10" />
            </div>
            {/* Main Content */}
            <div className="col-span-3 h-20 rounded bg-white/5 p-2 text-left">
              <div className="h-3 w-1/2 rounded bg-purple-500/30 mb-2" />
              <div className="grid grid-cols-2 gap-1.5">
                <div className="h-10 rounded bg-white/5 border border-white/5" />
                <div className="h-10 rounded bg-white/5 border border-white/5" />
              </div>
            </div>
          </div>
        </div>
      )
    }

    if (title.toLowerCase().includes('spam')) {
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#071b12] to-[#030d08] border-b border-emerald-500/10 p-4 font-mono text-[10px] text-emerald-400 select-none">
          {/* Terminal Window Header */}
          <div className="mb-3 flex items-center justify-between border-b border-emerald-500/15 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/40" />
              <span className="h-2 w-2 rounded-full bg-emerald-500/20" />
            </div>
            <span className="text-[9px] text-emerald-400/60 uppercase tracking-widest">spam_classifier.py</span>
            <div className="w-10" />
          </div>
          {/* Email Classification List */}
          <div className="space-y-1.5 text-left text-xs">
            <div className="flex justify-between border-b border-emerald-500/5 pb-1 text-[10px] text-slate-400">
              <span>EMAIL SUBJECT</span>
              <span>CLASSIFICATION</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300 truncate max-w-[170px]">Verify your credentials now!</span>
              <span className="text-red-400 font-bold">[SPAM - 99.8%]</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300 truncate max-w-[170px]">Meeting link for tomorrow's review</span>
              <span className="text-emerald-400 font-bold">[CLEAN - 0.2%]</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-300 truncate max-w-[170px]">Claim your free rewards prize</span>
              <span className="text-red-400 font-bold">[SPAM - 98.6%]</span>
            </div>
          </div>
        </div>
      )
    }

    if (title.toLowerCase().includes('recon')) {
      return (
        <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#08131e] to-[#04090f] border-b border-blue-500/10 p-4 font-mono text-[10px] text-blue-400 select-none">
          {/* Terminal Window Header */}
          <div className="mb-3 flex items-center justify-between border-b border-blue-500/15 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-blue-500/70" />
              <span className="h-2 w-2 rounded-full bg-blue-500/40" />
              <span className="h-2 w-2 rounded-full bg-blue-500/20" />
            </div>
            <span className="text-[9px] text-blue-400/60 uppercase tracking-widest">recon_scanner.sh</span>
            <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
          {/* Logs */}
          <div className="space-y-1.5 text-left text-xs">
            <p className="text-slate-400">$ python recon.py -d victim-site.com</p>
            <p className="text-blue-300">[+] Enumerating subdomains...</p>
            <p className="text-slate-300">&gt; dev.victim-site.com [104.22.4.11]</p>
            <p className="text-slate-300">&gt; Scanning open ports: 22/tcp [OPEN], 80/tcp [OPEN], 443/tcp [OPEN]</p>
          </div>
        </div>
      )
    }

    // Vulnerability Scan Tool
    return (
      <div className="relative h-44 w-full overflow-hidden rounded-t-2xl bg-gradient-to-br from-[#1b1007] to-[#0d0803] border-b border-amber/10 p-4 font-mono text-[10px] text-amber select-none">
        {/* Terminal Header */}
        <div className="mb-3 flex items-center justify-between border-b border-amber/15 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-red-500" />
            <span className="h-2 w-2 rounded-full bg-yellow-500" />
            <span className="h-2 w-2 rounded-full bg-green-500" />
          </div>
          <span className="text-[9px] text-amber/60 uppercase tracking-widest">owasp_scanner.py</span>
          <div className="w-10" />
        </div>
        {/* Logs */}
        <div className="space-y-1 text-left text-xs">
          <p className="text-slate-400">Scanning endpoint: /v1/auth/login</p>
          <p className="text-red-400 font-bold">[!] SQL Injection vulnerability discovered!</p>
          <p className="text-yellow-400">[!] XSS payload successfully triggered.</p>
          <p className="text-green-400">[i] Scan completed. Vulnerability report generated.</p>
        </div>
      </div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="glass-panel flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#0a0914]/40"
    >
      <div className="flex flex-col">
        {/* Top Visual Mockup */}
        {renderMockupHeader()}

        <div className="p-6 text-left">
          {/* Tech stack tags */}
          <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/5 bg-white/5 px-2.5 py-1 text-[10px] font-semibold text-slate-300 dark:text-slate-300 light:text-slate-600 light:border-black/5"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900">
            {title}
          </h3>

          {/* Description */}
          <p className="mt-3 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
            {description}
          </p>
        </div>
      </div>

      {/* Links at the bottom */}
      <div className="flex items-center gap-4 px-6 pb-6 pt-2">
        <a
          href={github || profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-lg text-slate-400 transition hover:text-cyan cursor-pointer"
          title="View Source on GitHub"
        >
          <RiGithubLine />
        </a>
        <a
          href={github || profile.github}
          target="_blank"
          rel="noreferrer"
          className="text-lg text-slate-400 transition hover:text-cyan cursor-pointer"
          title="View Live/Code"
        >
          <RiArrowRightUpLine />
        </a>
      </div>
    </motion.article>
  )
}
