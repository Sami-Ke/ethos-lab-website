"use client"

import { useEffect, useRef } from "react"
import lottie, { type AnimationItem } from "lottie-web"

interface LottieAnimationProps {
  src: string
  className?: string
  loop?: boolean
  autoplay?: boolean
  speed?: number
}

export default function LottieAnimation({
  src,
  className = "",
  loop = true,
  autoplay = true,
  speed = 1,
}: LottieAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<AnimationItem | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // 載入動畫
    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop,
      autoplay,
      path: src,
    })

    // 設定播放速度
    if (animationRef.current) {
      animationRef.current.setSpeed(speed)
    }

    // 清理函數
    return () => {
      if (animationRef.current) {
        animationRef.current.destroy()
      }
    }
  }, [src, loop, autoplay, speed])

  return <div ref={containerRef} className={className} />
}
