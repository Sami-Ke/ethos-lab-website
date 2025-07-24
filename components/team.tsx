import { CheckCircle } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "柯兆聲 (Sami)",
    role: "聯合創辦人 & CEO",
    image: "/images/team/sami.png",
    description: "專注整合、系統化、結構規劃以及解決方案提供。精通於流程自動化、CRM 系統、SEO 與數據分析。",
  },
  {
    name: "鄭宇哲 (MØMO)",
    role: "聯合創辦人 & CSO",
    image: "/images/team/momo.png",
    description:
      "多年的跨產業品牌、營運與管理經驗，擅長市場策略、商業開發與資源整合，專注於為產業夥伴設計全方位數位升級方案。",
  },
  {
    name: "LYF",
    role: "聯合創辦人 & CTO",
    image: "/images/team/lyf.png",
    description:
      "精通多種程式語言與自動化開發技術，專注於複雜系統設計與技術架構整合，確保每一項解決方案具備前瞻性與實用性。",
  },
]

const coreValues = [
  "品格與信任 - 以誠信為本，信任彼此，堅持長遠的價值觀",
  "人才至上 - 找對人比做什麼更重要，重視價值觀和潛力",
  "創意擇優 - 鼓勵極度坦誠與透明的溝通，讓最好的想法勝出",
  "持續進化 - 把組織視為持續優化的機器，勇於自我檢視、學習、改進",
  "領導共創 - 領導者凝聚願景，啟發夥伴潛力，讓團隊合作創造超越個人的成就",
]

export default function Team() {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">核心團隊</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            由擁有豐富創業經歷、長期服務各行各業的市場實踐者，以及專精數位自動化、數據分析的技術專家所組成
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center">
              <div className="mb-6 w-40 h-40 relative overflow-hidden rounded-full border-4 border-primary/30">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 160px"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{member.name}</h3>
              <p className="text-primary font-medium mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">核心價值</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coreValues.map((value, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
