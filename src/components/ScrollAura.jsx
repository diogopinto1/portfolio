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
      
      // Show aura when scrolled more than 5% (much earlier)
      setIsVisible(progress > 0.05)
    }

    // Show aura immediately on page load
    setIsVisible(true)
    setScrollProgress(0.3) // Start with some base intensity

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-20">
      {/* Main aura gradient - more subtle */}
      <div 
        className="absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: 0.4 + scrollProgress * 0.3, // More subtle base opacity
          background: `linear-gradient(
            to top,
            rgba(74, 222, 128, ${0.03 + scrollProgress * 0.08}) 0%,
            rgba(34, 197, 94, ${0.02 + scrollProgress * 0.05}) 30%,
            rgba(16, 185, 129, ${0.01 + scrollProgress * 0.03}) 60%,
            transparent 100%
          )`
        }}
      />
      
      {/* Animated glow effect - more subtle */}
      <div 
        className="absolute inset-0 transition-opacity duration-700"
        style={{
          opacity: 0.2 + scrollProgress * 0.4, // More subtle glow
          background: `radial-gradient(
            ellipse at center bottom,
            rgba(74, 222, 128, ${0.04 + scrollProgress * 0.08}) 0%,
            rgba(34, 197, 94, ${0.02 + scrollProgress * 0.05}) 40%,
            transparent 70%
          )`,
          animation: 'auraPulse 4s ease-in-out infinite' // Slower pulse
        }}
      />
      
      {/* Floating particles at bottom - more subtle */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-nature-green-400 rounded-full"
            style={{
              left: `${15 + i * 15}%`,
              bottom: '0px',
              animation: `particleFloat ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.2 + scrollProgress * 0.4 // More subtle particles
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollAura
