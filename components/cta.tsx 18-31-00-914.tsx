import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">準備開始您的數位轉型之旅？</h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          加入眾多信賴 Ethos Lab 的企業行列，讓我們協助您打通數據孤島、優化營運流程，實現降本增效與管理創新。
        </p>
        <div className="flex gap-4 mt-4">
          <Button size="lg" asChild>
            <Link href="/consultation">預約免費諮詢</Link>
          </Button>
          <Button variant="outline" size="lg">
            了解更多服務
          </Button>
        </div>
      </div>
    </section>
  )
}
