import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ethos Lab
          </span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="/#services" className="transition-colors hover:text-blue-400 text-gray-300">
            服務項目
          </Link>
          <Link href="/#solutions" className="transition-colors hover:text-blue-400 text-gray-300">
            解決方案
          </Link>
          <Link href="/team" className="transition-colors hover:text-blue-400 text-gray-300">
            團隊介紹
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="sm" asChild>
            <Link href="/consultation">免費諮詢</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
