import { CheckCircle, Heart, Users, Lightbulb, TrendingUp, Target } from "lucide-react"

const coreValues = [
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "品格與信任",
    description: "以誠信為本，信任彼此，堅持長遠的價值觀，打造值得依賴的團隊。",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "人才至上",
    description: "找對人比做什麼更重要，重視價值觀和潛力，並讓人才成為推動團隊進步的關鍵力量。",
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-primary" />,
    title: "創意擇優",
    description: "鼓勵極度坦誠與透明的溝通，讓最好的想法勝出，充分發揮集體智慧。",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "持續進化",
    description: "把組織視為持續優化的機器，勇於自我檢視、學習、改進。",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "領導共創",
    description: "領導者凝聚願景，啟發夥伴潛力，讓團隊合作創造超越個人的成就，共同追求卓越與共榮。",
  },
]

const teamCulture = [
  "開放坦誠 - 每個人都能自在表達意見，敢於挑戰主管，討論問題不繞彎、不藏私",
  "透明共享 - 重要資訊、決策過程對全體公開，團隊運作如同玻璃屋",
  "尊重專業 - 以事論事，鼓勵討論，真正專業、有經驗的人能影響關鍵決策",
  "勇於創新 - 我們相信實驗精神，不怕失敗，每一次嘗試都是成長機會",
  "團隊共好 - 成就團隊就是成就自己，大家互相協助、一起進步",
]

export default function CoreValues() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto space-y-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">核心價值</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            我們相信，真正的卓越來自團隊的合作與共創。Ethos Lab 持續以以下價值作為團隊行動的指引
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-4">
                {value.icon}
                <h3 className="text-xl font-semibold text-white">{value.title}</h3>
              </div>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-800 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">團隊文化實踐</h3>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Ethos Lab 重視每位成員的聲音與才華，我們相信好的團隊文化是成就卓越的關鍵。我們的日常實踐包括：
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teamCulture.map((culture, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-300">{culture}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-center mt-8 italic">
            在這樣的文化裡，每位夥伴都能盡情發揮專長，和團隊一起追求無限進步、勇於創新。
          </p>
        </div>
      </div>
    </section>
  )
}
