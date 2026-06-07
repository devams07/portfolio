import { useState, useEffect, useMemo } from 'react'

export default function SpaceBackground() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const starsCount = isMobile ? 35 : 120
  const shootingStarsCount = isMobile ? 0 : 60

  const stars = useMemo(() => {
    return Array.from({ length: starsCount }, (_, index) => ({
      id: index,
      top: `${(index * 13.7) % 100}%`,
      left: `${(index * 29.3) % 100}%`,
      size: (index % 7 === 0) ? 'w-[3px] h-[3px]' : (index % 3 === 0) ? 'w-[2px] h-[2px]' : 'w-[1px] h-[1px]',
      opacity: 0.15 + (index % 5) * 0.18,
      delay: `${(index % 8) * 0.7}s`,
      duration: `${4 + (index % 6) * 1.2}s`,
    }))
  }, [starsCount])

  const shootingStars = useMemo(() => {
    return Array.from({ length: shootingStarsCount }, (_, index) => {
      const top = `${(index * 4.7) % 85}%`
      const left = `${10 + (index * 9.3) % 85}%`
      const delay = `${index * 0.6 + (index % 3) * 0.3}s`
      const duration = `${3.5 + (index % 4) * 1.2}s`
      return { id: index, top, left, delay, duration }
    })
  }, [shootingStarsCount])

  return (
    <div className="starry-sky fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Dense Star Field */}
      {stars.map((star) => (
        <span
          key={star.id}
          className={`${star.size} absolute rounded-full bg-white dark:bg-white/90`}
          style={{
            top: star.top,
            left: star.left,
            opacity: star.opacity,
            animation: `twinkle ${star.duration} ease-in-out infinite alternate`,
            animationDelay: star.delay,
          }}
        />
      ))}

      {/* Shooting Stars */}
      <div className="absolute inset-0 overflow-hidden dark:block hidden">
        {shootingStars.map((star) => (
          <span
            key={star.id}
            className="shooting-star"
            style={{
              top: star.top,
              left: star.left,
              '--star-delay': star.delay,
              '--star-duration': star.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}
