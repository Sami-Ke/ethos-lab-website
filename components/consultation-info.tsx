import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Users, CheckCircle, Phone, Mail, MapPin } from "lucide-react"

const consultationProcess = [
  {
    step: "1",
    title: "提交申請",
    description: "填寫諮詢表單，告訴我們您的需求與挑戰",
  },
  {
    step: "2",
    title: "需求分析",
    description: "我們的顧問將在 24 小時內聯繫您，進行初步需求討論",
  },
  {
    step: "3",
    title: "深度諮詢",
    description: "安排 30-60 分鐘的專業諮詢，深入了解您的業務場景",
  },
  {
    step: "4",
    title: "方案建議",
    description: "提供客製化的解決方案建議與實施規劃",
  },
]

const benefits = [
  "免費專業諮詢，無任何隱藏費用",
  "資深顧問一對一深度分析",
  "客製化解決方案建議",
  "產業最佳實務分享",
  "技術可行性評估",
  "投資報酬率分析",
]

export default function ConsultationInfo() {
  return (
    <div className="space-y-6">
      {/* 諮詢流程 */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            諮詢流程
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {consultationProcess.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                {item.step}
              </div>
              <div>
                <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 諮詢優勢 */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            免費諮詢包含
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* 聯絡資訊 */}
      <Card className="bg-gray-800 border-gray-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Phone className="w-5 h-5 text-primary" />
            聯絡我們
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-gray-300 text-sm">contact@ethoslab.tw</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-gray-300 text-sm">+886-2-xxxx-xxxx</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-gray-300 text-sm">台灣</span>
          </div>
          <div className="mt-4 p-4 bg-gray-700 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-white font-medium">服務時間</span>
            </div>
            <p className="text-gray-300 text-sm">
              週一至週五：09:00 - 18:00
              <br />
              週六：10:00 - 16:00
              <br />
              週日及國定假日：休息
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 緊急聯絡 */}
      <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
        <CardContent className="p-6 text-center">
          <h3 className="text-white font-semibold mb-2">急需協助？</h3>
          <p className="text-gray-300 text-sm mb-4">如果您有緊急的數位轉型需求，歡迎直接聯繫我們</p>
          <a
            href="tel:+886-2-xxxx-xxxx"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium"
          >
            <Phone className="w-4 h-4" />
            立即致電
          </a>
        </CardContent>
      </Card>
    </div>
  )
}
