import React, { useEffect, useState } from 'react'
import { Mouse } from 'lucide-react'

const ScrollMouseIcon = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.pageYOffset
      
      if (scrollY > 50) {
        // Smooth fade out when scrolling down
        const fadeOut = Math.max(0, 1 - (scrollY - 50) / 100)
        setOpacity(fadeOut)
        
        if (scrollY > 150) {
          setIsVisible(false)
        }
      } else {
        // Smooth fade in when at top
        setIsVisible(true)
        setOpacity(1)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none transition-opacity duration-500 ease-in-out"
      style={{ opacity }}
    >
      <div className="flex flex-col items-center space-y-2 mouse-scroll">
        <div className="w-6 h-10 border-2 border-nature-green-400 rounded-full flex justify-center nature-glow">
          <div className="w-1 h-2 bg-nature-green-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <span className="text-xs text-nature-green-400 font-mono">scroll</span>
      </div>
    </div>
  )
}

export default ScrollMouseIcon
