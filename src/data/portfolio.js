import {
  RiBugLine,
  RiDatabase2Line,
  RiFingerprintLine,
  RiRadarLine,
  RiSearchEyeLine,
  RiShieldCheckLine,
  RiTerminalBoxLine,
} from 'react-icons/ri'

export const profile = {
  name: 'DEVA M S',
  role: 'Cyber Security Engineer',
  location: 'Dindigul, Tamil Nadu',
  email: 'msdeva2506@gmail.com',
  phone: '9080357467',
  github: 'https://github.com/devams07',
  githubLabel: 'devams07',
  linkedIn: 'https://www.linkedin.com/in/deva07',
}

export const stats = [
  { label: 'Projects Built', value: '04' },
  { label: 'Certifications', value: '08' },
  { label: 'Focus Areas', value: 'Cyber Security / Web Security / Threat Monitoring' },
]

export const projects = [
  {
    title: 'Ransomware Honeypot',
    category: 'Cyber Security',
    description:
      'Built a ransomware honeypot system to monitor file system activity and simulate real-world ransomware attacks, detecting malicious behavior and preventing file damage.',
    features: [
      'Monitored file system activity and simulated real-world ransomware attacks',
      'Detected malicious encryption behavior and automatically isolated the attacking process',
      'Restored encrypted files from secure backups and removed malicious files to recover the system state',
    ],
    tech: ['Python', 'Automation', 'File Security', 'Incident Response'],
    icon: RiFingerprintLine,
    github: 'https://github.com/devams07/Ransomware-Honeypot.git',
  },
  {
    title: 'DNS Traffic Monitoring & Analysis',
    category: 'Network Security',
    description:
      'Built a DNS Traffic Monitoring & Analysis Tool to monitor DNS requests, analyze network traffic, and identify suspicious or malicious domain activity.',
    features: [
      'Monitored DNS requests and analyzed network traffic',
      'Identified suspicious or malicious domain activity for basic threat detection and security analysis',
    ],
    tech: ['Wireshark', 'Python', 'Threat Detection', 'Network Security'],
    icon: RiRadarLine,
    github: 'https://github.com/devams07/DNS-Monitor.git',
  },
  {
    title: 'Website Development Project',
    category: 'Web Development',
    description:
      'Built a full-stack course website with authentication, course pages, and a real-time news section using external API integration.',
    features: [
      'Implemented secure user authentication with hashed passwords and session-based login management',
      'Developed backend using Node.js and EJS with MySQL database for storing user and application data',
      'Built a responsive frontend using HTML, CSS, and JavaScript',
    ],
    tech: ['Node.js', 'EJS', 'MySQL', 'JavaScript', 'CSS'],
    icon: RiDatabase2Line,
    github: 'https://github.com/devams07/CourZeo.git',
  },
  {
    title: 'Web Application Penetration Testing Tool',
    category: 'Penetration Testing',
    description:
      'Built a basic web application penetration testing tool to detect vulnerabilities such as SQLi, XSS, SSRF, broken access control, and outdated software.',
    features: [
      'Detected vulnerabilities including SQL Injection (SQLi), Cross-Site Scripting (XSS), SSRF, and broken access control',
      'Implemented automated scanning techniques including payload injection and endpoint probing',
      'Designed modular testing components to perform targeted vulnerability checks',
    ],
    tech: ['Python', 'Penetration Testing', 'OWASP Top 10', 'Web Security'],
    icon: RiBugLine,
    github: 'https://github.com/devams07/WAPT.git',
  },
  {
    title: 'Spam Detector',
    category: 'Cyber Security',
    description:
      'Developed a machine learning spam detection system that filters out malicious emails and phishing attempts based on text classification and pattern recognition.',
    features: [
      'Implemented text pre-processing and TF-IDF vectorization to analyze email body content',
      'Trained classification models to distinguish between legitimate messages and spam/phishing emails',
      'Designed a simple dashboard to paste email text and test the detection model in real-time',
    ],
    tech: ['Python', 'Machine Learning', 'NLP', 'Email Security'],
    icon: RiShieldCheckLine,
    github: 'https://github.com/devams07/spam-detector.git',
  },
  {
    title: 'Reconnaissance Tool',
    category: 'Penetration Testing',
    description:
      'Built an automated reconnaissance tool designed to perform active and passive gathering of target information, including subdomains, open ports, and DNS records.',
    features: [
      'Performed automated subdomain enumeration and DNS record gathering',
      'Scanned open ports and identified active services and OS banners on target hosts',
      'Integrated WHOIS lookups and threat intelligence APIs to harvest target metadata',
    ],
    tech: ['Python', 'Nmap', 'API Integration', 'OSINT'],
    icon: RiRadarLine,
    github: 'https://github.com/devams07/RECON-TOOL.git',
  },
]

export const certifications = [
  'Fundamental of CyberSecurity (Zscaler)',
  'Fundamental of AI Security (Zscaler)',
  'Fundamental of Network for Cyber Professionals (Zscaler)',
  'Web Security (Infosys Springboard)',
  'Network Security Essentials (Infosys Springboard)',
  'Introduction to Cloud Computing (Infosys Springboard)',
  'Introduction to Digital Forensics (Cyber 5w Academy)',
  'Introduction to Cybersecurity (Cisco)',
]

export const education = [
  {
    title: 'B.E.CSE (Cyber Security)',
    institution: 'SSM Institute of Engineering & Technology',
    detail: 'CGPA : 7.4',
  },
  {
    title: 'Higher Secondary (11th-12th)',
    institution: 'Swami Vivekananda Higher Secondary School',
    detail: '81%',
  },
]

export const highlights = [
  {
    title: 'Cyber Security',
    text: 'Focused on threat monitoring, vulnerability scanning, and improving threat detection and incident response skills.',
    icon: RiSearchEyeLine,
  },
  {
    title: 'Web Application Security',
    text: 'Proficient in analyzing web application vulnerabilities and developing secure web systems with robust authentication mechanisms.',
    icon: RiShieldCheckLine,
  },
  {
    title: 'Network & Automation',
    text: 'Adept at monitoring network traffic, analyzing DNS requests, and automating security tasks with Python scripts.',
    icon: RiTerminalBoxLine,
  },
]
