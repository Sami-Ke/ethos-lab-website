import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ethos Lab - 無限進步・勇於創新 | AI數位轉型加速器",
  description:
    "Ethos Lab 致力於成為台灣產業升級與數位轉型的關鍵推手，專注智慧流程自動化與決策數據可視化，協助企業打通數據孤島、優化營運流程。",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
