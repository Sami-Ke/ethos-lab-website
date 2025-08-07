"use client"

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  velocity: { x: number; y: number }
  alpha: number
  targetAlpha: number
}

interface GalaxyBackgroundProps {
  starCount?: number
  starColor?: string
  backgroundColor?: string
  speed?: number
  mouseInteraction?: boolean
}

export default function GalaxyBackground({
  starCount = 100,
  starColor = '#3b82f6',
  backgroundColor = 'transparent',
  speed = 0.5,
  mouseInteraction = true
}: GalaxyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const starsRef = useRef<Star[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
    }

    // Initialize stars
    const initStars = () => {
      starsRef.current = []
      for (let i = 0; i < starCount; i++) {
        starsRef.current.push({
          x: Math.random() * canvas.width / window.devicePixelRatio,
          y: Math.random() * canvas.height / window.devicePixelRatio,
          size: Math.random() * 2 + 0.5,
          velocity: {
            x: (Math.random() - 0.5) * speed,
            y: (Math.random() - 0.5) * speed
          },
          alpha: Math.random() * 0.8 + 0.2,
          targetAlpha: Math.random() * 0.8 + 0.2
        })
      }
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseInteraction) return
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    // Animation loop
    const animate = () => {
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio)

      starsRef.current.forEach(star => {
        // Mouse interaction
        if (mouseInteraction) {
          const dx = mouseRef.current.x - star.x
          const dy = mouseRef.current.y - star.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            const force = (maxDistance - distance) / maxDistance
            star.x -= (dx / distance) * force * 2
            star.y -= (dy / distance) * force * 2
            star.targetAlpha = Math.min(1, star.alpha + force * 0.5)
          } else {
            star.targetAlpha = Math.max(0.2, star.targetAlpha - 0.01)
          }
        }

        // Update position
        star.x += star.velocity.x
        star.y += star.velocity.y

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width / window.devicePixelRatio
        if (star.x > canvas.width / window.devicePixelRatio) star.x = 0
        if (star.y < 0) star.y = canvas.height / window.devicePixelRatio
        if (star.y > canvas.height / window.devicePixelRatio) star.y = 0

        // Update alpha
        star.alpha += (star.targetAlpha - star.alpha) * 0.1

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = starColor.includes('#') 
          ? `${starColor}${Math.floor(star.alpha * 255).toString(16).padStart(2, '0')}`
          : `rgba(${starColor}, ${star.alpha})`
        ctx.fill()

        // Add glow effect
        if (star.alpha > 0.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = starColor.includes('#') 
            ? `${starColor}${Math.floor(star.alpha * 50).toString(16).padStart(2, '0')}`
            : `rgba(${starColor}, ${star.alpha * 0.2})`
          ctx.fill()
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    initStars()
    animate()

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas()
      initStars()
    })
    
    if (mouseInteraction) {
      canvas.addEventListener('mousemove', handleMouseMove)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener('resize', () => {
        resizeCanvas()
        initStars()
      })
      if (mouseInteraction) {
        canvas.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [starCount, starColor, backgroundColor, speed, mouseInteraction])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{
        background: backgroundColor === 'transparent' ? 'transparent' : backgroundColor
      }}
    />
  )
}