import Navbar from "@/components/navbar"
import ConsultationForm from "@/components/consultation-form"
import ConsultationInfo from "@/components/consultation-info"
import Footer from "@/components/footer"

export default function ConsultationPage() {
  return (
    <div className="relative min-h-screen">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-br from-white from-30% via-white/90 to-white/70 bg-clip-text text-transparent">
              預約免費諮詢
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              讓我們了解您的需求，為您量身打造最適合的數位轉型解決方案
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ConsultationForm />
            <ConsultationInfo />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
