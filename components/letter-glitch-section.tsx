"use client"

import { useRef, useEffect } from 'react'
import LetterGlitch from './letter-glitch'

export default function LetterGlitchSection() {
  return (
    <section className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
      {/* Letter Glitch Background */}
      <div className="absolute inset-0">
        <LetterGlitch
          glitchColors={['#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444']}
          glitchSpeed={60}
          outerVignette={true}
          centerVignette={true}
          smooth={true}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="text-center px-4">
          <div className="mb-6 space-y-2">
            <div className="inline-block px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30">
              <span className="text-blue-300 text-sm font-medium">AI TRANSFORMATION</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-6">
            數位轉型
            <br />
            <span className="text-blue-400">新時代</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            運用前沿技術打造智慧企業生態系統
            <br />
            讓每一個決策都基於數據洞察
          </p>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  )
}