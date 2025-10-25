import React, { useEffect, useRef } from 'react'

const NatureEffects = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Resize canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Particle class
    class Particle {
      constructor() {
        this.reset()
        this.y = Math.random() * canvas.height
        this.life = Math.random() * 100
      }

      reset() {
        this.x = Math.random() * canvas.width
        this.y = -10
        this.vx = (Math.random() - 0.5) * 0.8 // Increased horizontal movement
        this.vy = Math.random() * 0.8 + 0.3 // Increased vertical speed
        this.size = Math.random() * 4 + 1.5 // Larger particles
        this.life = 100
        this.decay = Math.random() * 0.015 + 0.008 // Slower decay for longer visibility
        this.type = Math.random() > 0.6 ? 'leaf' : 'particle' // More leaves (40% vs 30%)
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.15 // More rotation
        this.color = this.getRandomGreenColor()
        this.windEffect = Math.random() * 0.02 + 0.01 // Wind effect strength
      }

      getRandomGreenColor() {
        const greens = [
          'rgba(74, 222, 128, 0.7)',
          'rgba(34, 197, 94, 0.6)',
          'rgba(16, 185, 129, 0.5)',
          'rgba(5, 150, 105, 0.4)',
          'rgba(134, 239, 172, 0.5)',
          'rgba(22, 163, 74, 0.4)',
          'rgba(59, 130, 246, 0.3)', // Slight blue tint
          'rgba(168, 85, 247, 0.2)'  // Slight purple tint
        ]
        return greens[Math.floor(Math.random() * greens.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed
        this.life -= this.decay

        // Enhanced wind effect with sine wave
        const windStrength = Math.sin(Date.now() * 0.001 + this.x * 0.01) * this.windEffect
        this.vx += windStrength
        this.vx += (Math.random() - 0.5) * 0.02 // Random wind gusts

        // Add slight gravity effect
        this.vy += 0.001

        if (this.life <= 0 || this.y > canvas.height + 10) {
          this.reset()
        }
      }

      draw() {
        ctx.save()
        ctx.globalAlpha = this.life / 100
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        if (this.type === 'leaf') {
          this.drawLeaf()
        } else {
          this.drawParticle()
        }

        ctx.restore()
      }

      drawLeaf() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        
        // Draw more realistic leaf shape
        const leafWidth = this.size * 2.5
        const leafHeight = this.size * 1.5
        
        ctx.ellipse(0, 0, leafWidth, leafHeight, 0, 0, Math.PI * 2)
        ctx.fill()
        
        // Add leaf veins
        ctx.strokeStyle = this.color
        ctx.lineWidth = 0.8
        ctx.globalAlpha = (this.life / 100) * 0.8
        
        // Main vein
        ctx.beginPath()
        ctx.moveTo(0, -leafHeight)
        ctx.lineTo(0, leafHeight)
        ctx.stroke()
        
        // Side veins
        ctx.beginPath()
        ctx.moveTo(-leafWidth * 0.3, -leafHeight * 0.5)
        ctx.lineTo(-leafWidth * 0.7, -leafHeight * 0.2)
        ctx.moveTo(leafWidth * 0.3, -leafHeight * 0.5)
        ctx.lineTo(leafWidth * 0.7, -leafHeight * 0.2)
        ctx.moveTo(-leafWidth * 0.3, leafHeight * 0.5)
        ctx.lineTo(-leafWidth * 0.7, leafHeight * 0.2)
        ctx.moveTo(leafWidth * 0.3, leafHeight * 0.5)
        ctx.lineTo(leafWidth * 0.7, leafHeight * 0.2)
        ctx.stroke()
        
        ctx.globalAlpha = this.life / 100
      }

      drawParticle() {
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(0, 0, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = []
      for (let i = 0; i < 120; i++) { // Increased from 50 to 120
        particlesRef.current.push(new Particle())
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach(particle => {
        particle.update()
        particle.draw()
      })

      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    resizeCanvas()
    initParticles()
    animate()

    // Handle resize
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ background: 'transparent' }}
    />
  )
}

export default NatureEffects
