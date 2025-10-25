import React, { useEffect, useState } from 'react'

const ScrollAura = () => {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      
      setScrollProgress(progress)
      
      // Show aura when scrolled more than 20%
      setIsVisible(progress > 0.2)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-20">
      {/* Main aura gradient */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{
          opacity: scrollProgress * 0.8,
          background: `linear-gradient(
            to top,
            rgba(74, 222, 128, ${0.1 + scrollProgress * 0.2}) 0%,
            rgba(34, 197, 94, ${0.05 + scrollProgress * 0.15}) 30%,
            rgba(16, 185, 129, ${0.02 + scrollProgress * 0.1}) 60%,
            transparent 100%
          )`
        }}
      />
      
      {/* Animated glow effect */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-700"
        style={{
          opacity: scrollProgress * 0.6,
          background: `radial-gradient(
            ellipse at center bottom,
            rgba(74, 222, 128, ${0.15 + scrollProgress * 0.25}) 0%,
            rgba(34, 197, 94, ${0.08 + scrollProgress * 0.15}) 40%,
            transparent 70%
          )`,
          animation: 'auraPulse 3s ease-in-out infinite'
        }}
      />
      
      {/* Floating particles at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-nature-green-400 rounded-full opacity-0"
            style={{
              left: `${10 + i * 12}%`,
              bottom: '0px',
              animation: `particleFloat ${2 + i * 0.3}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              opacity: scrollProgress * 0.7
            }}
          />
        ))}
      </div>
      
      {/* Subtle border glow */}
      <div 
        className="absolute top-0 left-0 right-0 h-px opacity-0 transition-opacity duration-500"
        style={{
          opacity: scrollProgress * 0.9,
          background: `linear-gradient(
            90deg,
            transparent 0%,
            rgba(74, 222, 128, 0.8) 20%,
            rgba(34, 197, 94, 1) 50%,
            rgba(74, 222, 128, 0.8) 80%,
            transparent 100%
          )`,
          boxShadow: `0 0 10px rgba(74, 222, 128, ${0.3 + scrollProgress * 0.4})`
        }}
      />
    </div>
  )
}

export default ScrollAura
