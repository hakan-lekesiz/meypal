import { Footer } from "./footer"
import Header from "./header"
import type { Locale, SiteRoute } from "@/shared/config"

type MainLayoutProps = {
  children: React.ReactNode
  locale: Locale
  currentRoute: SiteRoute
}

export async function MainLayout({ children, locale, currentRoute }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header currentRoute={currentRoute} locale={locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </div>
  )
}
