import { Zap, Users, TrendingUp, Building } from "lucide-react"
import LottieAnimation from "./lottie-animation"

const solutions = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "製造業智慧工廠",
    description: "串聯產線、供應鏈與ERP，導入智慧工廠及數據儀表板，提升彈性與決策效率。",
    animation: "https://lottie.host/embed/e8h6g2j5-1f7i-8g3e-2h9j-5i6d7e8f9g0h/opqrstuvwx.json",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "零售全通路整合",
    description: "全通路數據分析、會員與庫存整合、自動化客服與AI推薦系統。",
    animation: "https://lottie.host/embed/f9i7h3k6-2g8j-9h4f-3i0k-6j7e8f9g0h1i/yzabcdefgh.json",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "政府數位治理",
    description: "推動跨局處資料平台、決策KPI監控及AI輔助公文/政策自動化。",
    animation: "https://lottie.host/embed/g0j8i4l7-3h9k-0i5g-4j1l-7k8f9g0h1i2j/ijklmnopqr.json",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "運輸物流優化",
    description: "整合車隊、訂單、倉儲系統，強化調度效率與數據決策能力。",
    animation: "https://lottie.host/embed/h1k9j5m8-4i0l-1j6h-5k2m-8l9g0h1i2j3k/stuvwxyzab.json",
  },
]

const techStack = [
  "Google Cloud Console",
  "Gemini AI",
  "Anthropic Claude",
  "Ragic 雲端資料庫",
  "BotBonnie 社群機器人",
  "Shopify 電商平台",
  "Miro 協作平台",
  "ClickUp 專案管理",
]

export default function AnimatedSolutions() {
  return (
    <section id="solutions" className="py-20 bg-gray-900">
      <div className="container mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">產業解決方案</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            深耕台灣產業場景，提供從規劃、導入到教育訓練與長期優化的一站式陪跑協助
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="mb-4 relative">
                {solution.icon}
                {/* 懸停時顯示的動畫 */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <LottieAnimation
                    src={solution.animation}
                    className="w-12 h-12"
                    loop={true}
                    autoplay={false}
                    speed={1}
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-md relative overflow-hidden">
          {/* 背景動畫 */}
          <div className="absolute top-0 right-0 opacity-10">
            <LottieAnimation
              src="https://lottie.host/embed/i2l0k6n9-5j1m-2k7i-6l3n-9m0h1i2j3k4l/cdefghijkl.json"
              className="w-32 h-32"
              loop={true}
              autoplay={true}
              speed={0.3}
            />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl font-bold text-center mb-6 text-white">技術整合夥伴</h3>
            <p className="text-center text-gray-300 mb-8">
              採用「整合優先、自研補強」策略，結合市場領先的雲端、AI、資料庫、SaaS 及自動化工具
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors duration-200"
                >
                  <span className="text-sm font-medium text-center text-white">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
