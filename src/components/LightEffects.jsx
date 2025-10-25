import React, { useEffect, useState } from 'react'

const LightEffects = () => {
  const [lights, setLights] = useState([])

  useEffect(() => {
    // Create moving light effects
    const createLights = () => {
      const newLights = []
      for (let i = 0; i < 3; i++) {
        newLights.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 200 + 100,
          intensity: Math.random() * 0.1 + 0.05,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: i === 0 ? 'rgba(74, 222, 128, 0.1)' : 
                 i === 1 ? 'rgba(34, 197, 94, 0.08)' : 
                 'rgba(16, 185, 129, 0.06)'
        })
      }
      setLights(newLights)
    }

    createLights()

    // Animation loop
    const animate = () => {
      setLights(prevLights => 
        prevLights.map(light => {
          const newX = light.x + light.speedX
          const newY = light.y + light.speedY
          
          return {
            ...light,
            x: Math.max(0, Math.min(window.innerWidth, newX)),
            y: Math.max(0, Math.min(window.innerHeight, newY)),
            speedX: newX > window.innerWidth || newX < 0 ? -light.speedX : light.speedX,
            speedY: newY > window.innerHeight || newY < 0 ? -light.speedY : light.speedY
          }
        })
      )
    }

    const interval = setInterval(animate, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {lights.map(light => (
        <div
          key={light.id}
          className="absolute rounded-full blur-3xl"
          style={{
            left: light.x - light.size / 2,
            top: light.y - light.size / 2,
            width: light.size,
            height: light.size,
            background: `radial-gradient(circle, ${light.color} 0%, transparent 70%)`,
            opacity: light.intensity
          }}
        />
      ))}
    </div>
  )
}

export default LightEffects
