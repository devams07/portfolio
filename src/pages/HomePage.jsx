import { useEffect, useState } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import Navbar from '../components/Navbar'
import ScrollProgress from '../components/ScrollProgress'
import SpaceBackground from '../components/SpaceBackground'
import AboutSection from '../sections/AboutSection'
import CertificationsSection from '../sections/CertificationsSection'
import ContactSection from '../sections/ContactSection'
import EducationSection from '../sections/EducationSection'
import HeroSection from '../sections/HeroSection'
import ProjectsSection from '../sections/ProjectsSection'
import SkillsSection from '../sections/SkillsSection'

export default function HomePage() {
  const [showLoader, setShowLoader] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowLoader(false), 1300)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <>
      <LoadingScreen show={showLoader} />
      <ScrollProgress />
      <main id="top" className="relative">
        {/* Immersive Space Background */}
        <SpaceBackground />

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-cyan/12 blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-[-8rem] h-80 w-80 rounded-full bg-amber/10 blur-3xl" />
        </div>

        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <CertificationsSection />
          <ContactSection />
        </div>
      </main>
    </>
  )
}
