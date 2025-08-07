import Navbar from "@/components/navbar"
import AnimatedHero from "@/components/animated-hero"
import LetterGlitchSection from "@/components/letter-glitch-section"
import AnimatedFeatures from "@/components/animated-features"
import AnimatedSolutions from "@/components/animated-solutions"
import CTA from "@/components/cta"
import Footer from "@/components/footer"
import { Galaxy } from "react-stars-particles"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Galaxy Background Animation */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <Galaxy
          quantity={100}
          staticity={50}
          ease={50}
          size={0.4}
          refresh={1}
          color="#3b82f6"
          vx={0}
          vy={0}
        />
      </div>

      {/* Background gradients overlay */}
      <div className="pointer-events-none fixed inset-0 z-[1]">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <AnimatedHero />
        <LetterGlitchSection />
        <AnimatedFeatures />
        <AnimatedSolutions />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}
