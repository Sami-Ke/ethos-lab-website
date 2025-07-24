import { DataFlowIcon, AIBrainIcon, EcommerceIcon, CustomSolutionIcon } from "./custom-svg-icons"
import SVGAnimation from "./svg-animation"

const features = [
  {
    name: "數據整合與自動化",
    description: "整合分散數據，建立標準化資料流與集中化數據平台，透過流程自動化工具顯著降低人工重工與錯誤率。",
    icon: DataFlowIcon,
  },
  {
    name: "AI 智慧營運",
    description: "將生成式 AI 與機器學習模型導入企業核心流程，升級數據分析、營運決策及顧客服務。",
    icon: AIBrainIcon,
  },
  {
    name: "Shopify OMO 智慧電商整合",
    description: "協助品牌快速搭建線上+線下全通路數位生態，串接門市、電商、社群及會員數據。",
    icon: EcommerceIcon,
  },
  {
    name: "客製化專案",
    description: "針對製造、醫療、教育、政府等具複雜流程的產業，提供完整的客製化解決方案。",
    icon: CustomSolutionIcon,
  },
]

export default function FeaturesWithCustomSVG() {
  return (
    <section id="services" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">核心服務項目</h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          一站式 AI 數位轉型解決方案，協助台灣產業打通數據孤島、優化營運流程
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="group relative overflow-hidden rounded-lg border border-gray-700 bg-gray-800 p-8 hover:border-primary/50 transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <SVGAnimation hover={true} className="text-primary">
                <feature.icon className="h-12 w-12" />
              </SVGAnimation>
              <h3 className="font-bold text-white">{feature.name}</h3>
            </div>
            <p className="text-gray-300">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
