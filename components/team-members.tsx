import Image from "next/image"

const teamMembers = [
  {
    name: "柯兆聲 (Sami)",
    role: "聯合創辦人 & CEO",
    image: "/images/team/sami.jpg",
    description: "專注整合、系統化、結構規劃以及解決方案提供。精通於流程自動化、CRM 系統、SEO 與數據分析。",
    expertise: ["專案管理與執行落地", "流程自動化", "CRM 系統", "SEO 與數據分析"],
  },
  {
    name: "鄭宇哲 (MØMO)",
    role: "聯合創辦人 & CSO",
    image: "/images/team/momo.jpg",
    description:
      "多年的跨產業品牌、營運與管理經驗，擅長市場策略、商業開發與資源整合，專注於為產業夥伴設計全方位數位升級方案。",
    expertise: ["策略與市場導向", "品牌營運", "商業開發", "資源整合"],
  },
  {
    name: "LYF",
    role: "聯合創辦人 & CTO",
    image: "/images/team/lyf.jpg",
    description:
      "精通多種程式語言與自動化開發技術，專注於複雜系統設計與技術架構整合，確保每一項解決方案具備前瞻性與實用性。",
    expertise: ["技術創新與產品落地", "系統架構設計", "自動化開發", "技術整合"],
  },
]

export default function TeamMembers() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">核心團隊</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            三位核心成員緊密合作，從需求訪談、方案規劃到開發上線與後續優化，皆以協作分工方式執行
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg">
              <div className="text-center mb-6">
                <div className="w-40 h-40 relative overflow-hidden rounded-full border-4 border-primary/30 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 160px"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>

              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>

                <div>
                  <h4 className="text-white font-semibold mb-2">專業領域</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">團隊協作理念</h3>
          <p className="text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            團隊同時橫跨數位行銷、數據分析、自動化流程、系統開發等多元專業，能靈活應對產業轉型各階段挑戰，實現策略與執行的無縫接軌。讓每個專案都能結合市場洞察、技術力與執行力，為客戶量身打造最適合的數位升級方案。
          </p>
        </div>
      </div>
    </section>
  )
}
