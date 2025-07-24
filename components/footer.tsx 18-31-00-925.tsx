import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <h2 className="font-bold">Ethos Lab</h2>
          <p className="text-sm text-muted-foreground">無限進步・勇於創新</p>
          <p className="text-sm text-muted-foreground">台灣產業 AI 化與數位革新中，最值得信賴的賦能者與長期夥伴</p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-12 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">服務項目</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  數據整合與自動化
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  AI 智慧營運
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground transition-colors hover:text-primary">
                  Shopify OMO 整合
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">公司資訊</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#team" className="text-muted-foreground transition-colors hover:text-primary">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  合作夥伴
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground transition-colors hover:text-primary">
                  聯絡我們
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">聯絡方式</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p>台灣</p>
              <p>數位轉型諮詢</p>
              <p>AI 解決方案</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Ethos Lab. All rights reserved. 無限進步・勇於創新
        </p>
      </div>
    </footer>
  )
}
