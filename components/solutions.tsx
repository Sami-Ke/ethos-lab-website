import { Zap, Users, TrendingUp, Building } from "lucide-react"

const solutions = [
  {
    icon: <Building className="h-8 w-8 text-primary" />,
    title: "製造業智慧工廠",
    description: "串聯產線、供應鏈與ERP，導入智慧工廠及數據儀表板，提升彈性與決策效率。",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "零售全通路整合",
    description: "全通路數據分析、會員與庫存整合、自動化客服與AI推薦系統。",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "政府數位治理",
    description: "推動跨局處資料平台、決策KPI監控及AI輔助公文/政策自動化。",
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "運輸物流優化",
    description: "整合車隊、訂單、倉儲系統，強化調度效率與數據決策能力。",
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

export default function Solutions() {
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
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
              <p className="text-gray-300">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">技術整合夥伴</h3>
          <p className="text-center text-gray-300 mb-8">
            採用「整合優先、自研補強」策略，結合市場領先的雲端、AI、資料庫、SaaS 及自動化工具
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-3 bg-gray-700 rounded-lg">
                <span className="text-sm font-medium text-center text-white">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
