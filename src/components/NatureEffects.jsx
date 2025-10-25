import React, { useEffect, useRef } from 'react'

const NatureEffects = () => {
  const canvasRef = useRef(null)
  const animationRef = useRef(null)
  const particlesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    let animationId

    // Mouse tracking
    const handleMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

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
        this.vx = (Math.random() - 0.5) * 0.3 // Slower horizontal movement
        this.vy = Math.random() * 0.4 + 0.2 // Slower vertical speed
        this.size = Math.random() * 3 + 1.5 // Slightly smaller particles
        this.life = 100
        this.decay = Math.random() * 0.008 + 0.005 // Slower decay for longer visibility
        this.type = Math.random() > 0.6 ? 'leaf' : 'particle' // More leaves (40% vs 30%)
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.08 // Slower rotation
        this.color = this.getRandomGreenColor()
        this.windEffect = Math.random() * 0.01 + 0.005 // Reduced wind effect
        this.mouseInfluence = 0 // Mouse influence strength
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
        // Calculate distance to mouse
        const dx = mouseRef.current.x - this.x
        const dy = mouseRef.current.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        // Mouse influence (push effect)
        if (distance < 150) { // Influence radius
          const force = (150 - distance) / 150 // Force decreases with distance
          const angle = Math.atan2(dy, dx)
          const pushStrength = force * 0.02 // Adjust push strength
          
          this.vx += Math.cos(angle) * pushStrength
          this.vy += Math.sin(angle) * pushStrength
        }

        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed
        this.life -= this.decay

        // Reduced wind effect with sine wave
        const windStrength = Math.sin(Date.now() * 0.0005 + this.x * 0.005) * this.windEffect
        this.vx += windStrength
        this.vx += (Math.random() - 0.5) * 0.01 // Reduced random wind gusts

        // Add slight gravity effect
        this.vy += 0.0005

        // Damping to prevent particles from moving too fast
        this.vx *= 0.998
        this.vy *= 0.998

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
      for (let i = 0; i < 80; i++) { // Reduced from 120 to 80 for less density
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

    // Handle resize and mouse movement
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
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
