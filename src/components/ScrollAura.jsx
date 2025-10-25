import React from 'react'

const ScrollAura = () => {
  // Always visible with constant subtle intensity
  const baseIntensity = 0.4

  return (
    <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-20">
      {/* Main aura gradient - constant subtle intensity */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: baseIntensity,
          background: `linear-gradient(
            to top,
            rgba(74, 222, 128, 0.08) 0%,
            rgba(34, 197, 94, 0.05) 30%,
            rgba(16, 185, 129, 0.03) 60%,
            transparent 100%
          )`
        }}
      />
      
      {/* Animated glow effect - constant subtle */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: baseIntensity * 0.6,
          background: `radial-gradient(
            ellipse at center bottom,
            rgba(74, 222, 128, 0.06) 0%,
            rgba(34, 197, 94, 0.04) 40%,
            transparent 70%
          )`,
          animation: 'auraPulse 4s ease-in-out infinite'
        }}
      />
      
      {/* Floating particles at bottom - constant subtle */}
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
              opacity: 0.3 // Constant subtle opacity
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollAura
