"use client"

import type React from "react"

import { useState } from "react"

interface SVGAnimationProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  autoplay?: boolean
}

export default function SVGAnimation({ children, className = "", hover = false, autoplay = true }: SVGAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(autoplay)

  const handleMouseEnter = () => {
    if (hover) setIsPlaying(true)
  }

  const handleMouseLeave = () => {
    if (hover) setIsPlaying(false)
  }

  return (
    <div
      className={`${className} ${isPlaying ? "animate" : "paused"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
