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
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = Math.random() * 0.5 + 0.2
        this.size = Math.random() * 3 + 1
        this.life = 100
        this.decay = Math.random() * 0.02 + 0.005
        this.type = Math.random() > 0.7 ? 'leaf' : 'particle'
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.1
        this.color = this.getRandomGreenColor()
      }

      getRandomGreenColor() {
        const greens = [
          'rgba(74, 222, 128, 0.6)',
          'rgba(34, 197, 94, 0.5)',
          'rgba(16, 185, 129, 0.4)',
          'rgba(5, 150, 105, 0.3)',
          'rgba(134, 239, 172, 0.4)'
        ]
        return greens[Math.floor(Math.random() * greens.length)]
      }

      update() {
        this.x += this.vx
        this.y += this.vy
        this.rotation += this.rotationSpeed
        this.life -= this.decay

        // Add some wind effect
        this.vx += (Math.random() - 0.5) * 0.01

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
        ctx.ellipse(0, 0, this.size * 2, this.size, 0, 0, Math.PI * 2)
        ctx.fill()
        
        // Add leaf vein
        ctx.strokeStyle = this.color
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.moveTo(0, -this.size)
        ctx.lineTo(0, this.size)
        ctx.stroke()
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
      for (let i = 0; i < 50; i++) {
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
