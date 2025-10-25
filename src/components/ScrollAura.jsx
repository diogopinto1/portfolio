import React from 'react'

const ScrollAura = () => {
  // Very subtle intensity to avoid interfering with footer
  const baseIntensity = 0.1

  return (
    <div className="fixed bottom-0 left-0 right-0 h-16 pointer-events-none z-20">
      {/* Very subtle aura gradient */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: baseIntensity,
          background: `linear-gradient(
            to top,
            rgba(74, 222, 128, 0.02) 0%,
            rgba(34, 197, 94, 0.01) 30%,
            transparent 60%
          )`
        }}
      />
      
      {/* Very subtle floating particles */}
      <div className="absolute bottom-0 left-0 right-0 h-8 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-nature-green-400 rounded-full"
            style={{
              left: `${20 + i * 30}%`,
              bottom: '0px',
              animation: `particleFloat ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
              opacity: 0.1 // Very subtle opacity
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default ScrollAura
