import React, { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [elements, setElements] = useState([])

  useEffect(() => {
    // Create floating elements
    const createElements = () => {
      const newElements = []
      for (let i = 0; i < 20; i++) {
        newElements.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 0.5 + 0.1,
          direction: Math.random() * Math.PI * 2,
          opacity: Math.random() * 0.3 + 0.1,
          type: Math.random() > 0.5 ? 'circle' : 'dot'
        })
      }
      setElements(newElements)
    }

    createElements()

    // Animation loop
    const animate = () => {
      setElements(prevElements => 
        prevElements.map(element => {
          const newX = element.x + Math.cos(element.direction) * element.speed
          const newY = element.y + Math.sin(element.direction) * element.speed
          
          return {
            ...element,
            x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
            y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY
          }
        })
      )
    }

    const interval = setInterval(animate, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-5 overflow-hidden">
      {elements.map(element => (
        <div
          key={element.id}
          className={`absolute ${
            element.type === 'circle' 
              ? 'rounded-full border border-nature-green-400/20' 
              : 'bg-nature-green-400/30 rounded-sm'
          }`}
          style={{
            left: element.x,
            top: element.y,
            width: element.size,
            height: element.size,
            opacity: element.opacity,
            transform: `rotate(${element.direction * 57.3}deg)`
          }}
        />
      ))}
    </div>
  )
}

export default FloatingElements
