"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Clock, Send } from "lucide-react"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    position: "",
    industry: "",
    employeeCount: "",
    consultationType: "",
    preferredTime: "",
    currentChallenges: "",
    goals: "",
    budget: "",
    timeline: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 模擬提交過程
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="bg-gray-800 border-gray-700">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">諮詢申請已送出！</h3>
            <p className="text-gray-300">感謝您的申請，我們將在 24 小時內與您聯繫，安排最適合的諮詢時間。</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <p className="text-sm text-gray-300">
              <strong className="text-white">接下來的步驟：</strong>
              <br />
              1. 我們的顧問將主動聯繫您
              <br />
              2. 安排 30-60 分鐘的深度諮詢
              <br />
              3. 提供客製化的解決方案建議
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Calendar className="w-5 h-5 text-primary" />
          諮詢申請表單
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 基本資訊 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">基本資訊</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name" className="text-gray-300">
                  姓名 *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-gray-300">
                  電子郵件 *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone" className="text-gray-300">
                  聯絡電話 *
                </Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                  required
                />
              </div>
              <div>
                <Label htmlFor="position" className="text-gray-300">
                  職位
                </Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => handleInputChange("position", e.target.value)}
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
          </div>

          {/* 公司資訊 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">公司資訊</h3>

            <div>
              <Label htmlFor="company" className="text-gray-300">
                公司名稱 *
              </Label>
              <Input
                id="company"
                value={formData.company}
                onChange={(e) => handleInputChange("company", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="industry" className="text-gray-300">
                  產業別
                </Label>
                <Select onValueChange={(value) => handleInputChange("industry", value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="請選擇產業" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="manufacturing">製造業</SelectItem>
                    <SelectItem value="retail">零售業</SelectItem>
                    <SelectItem value="logistics">運輸物流</SelectItem>
                    <SelectItem value="finance">金融服務</SelectItem>
                    <SelectItem value="healthcare">醫療保健</SelectItem>
                    <SelectItem value="education">教育</SelectItem>
                    <SelectItem value="government">政府機關</SelectItem>
                    <SelectItem value="other">其他</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="employeeCount" className="text-gray-300">
                  員工人數
                </Label>
                <Select onValueChange={(value) => handleInputChange("employeeCount", value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="請選擇規模" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="1-10">1-10 人</SelectItem>
                    <SelectItem value="11-50">11-50 人</SelectItem>
                    <SelectItem value="51-200">51-200 人</SelectItem>
                    <SelectItem value="201-500">201-500 人</SelectItem>
                    <SelectItem value="500+">500+ 人</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* 諮詢需求 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">諮詢需求</h3>

            <div>
              <Label htmlFor="consultationType" className="text-gray-300">
                主要諮詢項目 *
              </Label>
              <Select onValueChange={(value) => handleInputChange("consultationType", value)}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="請選擇諮詢項目" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="data-integration">數據整合與自動化</SelectItem>
                  <SelectItem value="ai-operations">AI 智慧營運</SelectItem>
                  <SelectItem value="shopify-omo">Shopify OMO 電商整合</SelectItem>
                  <SelectItem value="custom-solution">客製化專案</SelectItem>
                  <SelectItem value="digital-transformation">整體數位轉型規劃</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="currentChallenges" className="text-gray-300">
                目前面臨的挑戰
              </Label>
              <Textarea
                id="currentChallenges"
                value={formData.currentChallenges}
                onChange={(e) => handleInputChange("currentChallenges", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
                placeholder="請描述您目前在營運、流程或數據管理上遇到的主要問題..."
              />
            </div>

            <div>
              <Label htmlFor="goals" className="text-gray-300">
                期望達成的目標
              </Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => handleInputChange("goals", e.target.value)}
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
                placeholder="請描述您希望透過數位轉型達成的具體目標..."
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="budget" className="text-gray-300">
                  預算範圍
                </Label>
                <Select onValueChange={(value) => handleInputChange("budget", value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="請選擇預算範圍" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="under-50k">50 萬以下</SelectItem>
                    <SelectItem value="50k-100k">50-100 萬</SelectItem>
                    <SelectItem value="100k-300k">100-300 萬</SelectItem>
                    <SelectItem value="300k-500k">300-500 萬</SelectItem>
                    <SelectItem value="over-500k">500 萬以上</SelectItem>
                    <SelectItem value="discuss">面議</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline" className="text-gray-300">
                  期望時程
                </Label>
                <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="請選擇時程" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-700 border-gray-600">
                    <SelectItem value="immediate">立即開始</SelectItem>
                    <SelectItem value="1-3months">1-3 個月內</SelectItem>
                    <SelectItem value="3-6months">3-6 個月內</SelectItem>
                    <SelectItem value="6-12months">6-12 個月內</SelectItem>
                    <SelectItem value="over-1year">一年以上</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="preferredTime" className="text-gray-300">
                偏好諮詢時間
              </Label>
              <Select onValueChange={(value) => handleInputChange("preferredTime", value)}>
                <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                  <SelectValue placeholder="請選擇偏好時間" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600">
                  <SelectItem value="morning">上午 (9:00-12:00)</SelectItem>
                  <SelectItem value="afternoon">下午 (13:00-17:00)</SelectItem>
                  <SelectItem value="evening">晚上 (18:00-21:00)</SelectItem>
                  <SelectItem value="flexible">時間彈性</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* 同意條款 */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={formData.agreeToTerms}
              onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
              className="border-gray-600"
            />
            <Label htmlFor="terms" className="text-sm text-gray-300">
              我同意 Ethos Lab 使用我提供的資訊進行諮詢服務，並遵守隱私權政策
            </Label>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting || !formData.agreeToTerms}>
            {isSubmitting ? (
              <>
                <Clock className="w-4 h-4 mr-2 animate-spin" />
                送出中...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                提交諮詢申請
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
