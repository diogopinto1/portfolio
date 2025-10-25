import React, { useEffect, useState } from 'react'
import { Mouse } from 'lucide-react'

const ScrollMouseIcon = () => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      // Hide when scrolled more than 50 pixels
      if (window.pageYOffset > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
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
