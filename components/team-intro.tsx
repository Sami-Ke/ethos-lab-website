export default function TeamIntro() {
  return (
    <section className="container mx-auto px-4 py-24 max-w-4xl text-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-white from-30% via-white/90 to-white/70 bg-clip-text text-transparent">
          團隊介紹
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Ethos Lab 的誕生，來自對台灣產業現場長期的深度觀察，以及對數位轉型與產業升級的共同信念。
        </p>
        <div className="bg-gray-800 p-8 rounded-lg mt-12">
          <h2 className="text-2xl font-bold text-white mb-4">我們的使命</h2>
          <p className="text-gray-300 leading-relaxed">
            運用
            AI、自動化、數據與顧問服務，協助台灣產業和政府單位解決流程瓶頸、釋放數據價值，提升經營效率和營收表現，帶動產業升級與永續發展。我們堅持以信任為基礎，和客戶一起討論、共同想辦法，攜手創造實際價值、一起成長。
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-white mb-4">團隊組成</h2>
          <p className="text-gray-300 leading-relaxed">
            團隊由擁有豐富創業經歷、長期服務各行各業的市場實踐者，以及專精數位自動化、數據分析的技術專家所組成。從創業初期，我們就堅信，唯有結合品格信任、持續創新與團隊協作，才能為產業帶來真正的改變。
          </p>
        </div>
      </div>
    </section>
  )
}
