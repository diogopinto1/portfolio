import React, { useState, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(scrollTop / docHeight, 1)
      
      setScrollProgress(progress)
      
      // Hide when scrolled more than 10%
      setIsVisible(progress < 0.1)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none">
      <div className="flex flex-col items-center space-y-2">
        {/* Mouse icon */}
        <div className="relative">
          {/* Mouse body */}
          <div className="w-8 h-12 border-2 border-nature-green-400 rounded-full flex flex-col items-center justify-center relative overflow-hidden">
            {/* Scroll wheel */}
            <div 
              className="w-1 h-2 bg-nature-green-400 rounded-full animate-bounce"
              style={{
                animationDuration: '2s',
                animationDelay: '0.5s'
              }}
            />
            {/* Mouse glow effect */}
            <div className="absolute inset-0 rounded-full bg-nature-green-400/10 animate-pulse" />
          </div>
          
          {/* Mouse cable */}
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-nature-green-400/60" />
        </div>

        {/* Scroll text */}
        <div className="text-center">
          <p className="text-xs text-nature-green-400 font-medium mb-1 animate-pulse">
            Scroll
          </p>
          <div className="flex items-center space-x-1">
            <ChevronDown 
              size={12} 
              className="text-nature-green-400 animate-bounce"
              style={{
                animationDuration: '1.5s',
                animationDelay: '0.2s'
              }}
            />
            <ChevronDown 
              size={12} 
              className="text-nature-green-400 animate-bounce"
              style={{
                animationDuration: '1.5s',
                animationDelay: '0.4s'
              }}
            />
            <ChevronDown 
              size={12} 
              className="text-nature-green-400 animate-bounce"
              style={{
                animationDuration: '1.5s',
                animationDelay: '0.6s'
              }}
            />
          </div>
        </div>

        {/* Progress indicator */}
        <div className="w-1 h-16 bg-nature-green-400/20 rounded-full overflow-hidden">
          <div 
            className="w-full bg-gradient-to-t from-nature-green-400 to-transparent rounded-full transition-all duration-300"
            style={{
              height: `${scrollProgress * 100}%`
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default ScrollIndicator
