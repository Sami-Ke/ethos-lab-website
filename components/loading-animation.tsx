"use client"

import LottieAnimation from "./lottie-animation"

export default function LoadingAnimation() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="text-center">
        <LottieAnimation
          src="https://lottie.host/embed/j3m1l7o0-6k2n-3l8j-7m4o-0n1i2j3k4l5m/mnopqrstuv.json"
          className="w-32 h-32 mx-auto mb-4"
          loop={true}
          autoplay={true}
          speed={1}
        />
        <p className="text-white text-lg">載入中...</p>
      </div>
    </div>
  )
}
