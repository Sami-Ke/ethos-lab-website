import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import LottieAnimation from "./lottie-animation"

export default function AnimatedHero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <div className="mb-4">
          <span className="text-lg font-medium text-blue-400">無限進步・勇於創新</span>
        </div>

        {/* AI/Tech 動畫 */}
        <div className="mb-8">
          <LottieAnimation
            src="https://lottie.host/4d0d5c2b-8b5e-4c8a-9c4a-2e8f7b1a3d6e/9KjBxXzQqM.json"
            className="w-64 h-64 mx-auto"
            loop={true}
            autoplay={true}
            speed={0.8}
          />
        </div>

        <h1 className="bg-gradient-to-br from-white from-30% via-white/90 to-white/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          AI 數位轉型
          <br />
          <span className="text-blue-400">加速器</span>
        </h1>
        <p className="mx-auto max-w-[42rem] leading-normal text-gray-300 sm:text-xl sm:leading-8">
          Ethos Lab
          致力於成為台灣產業升級與數位轉型的關鍵推手，專注智慧流程自動化與決策數據可視化，協助企業打通數據孤島、優化營運流程，實現降本增效與管理創新。
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          探索解決方案
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" size="lg" asChild>
          <Link href="/consultation">預約免費諮詢</Link>
        </Button>
      </div>
    </section>
  )
}
