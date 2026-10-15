import { isLocale, locales, type Locale } from "@/shared/config"
import { HomePage } from "@/shared/pages/home"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { createPageMetadata, getHomeStructuredData, JsonLd } from "@/shared/utils"

export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale = routeLocale as Locale
  setRequestLocale(locale)

  return createPageMetadata({
    locale,
    route: "home",
    isAbsoluteTitle: true,
  })
}

export default async function Home({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale = routeLocale as Locale
  setRequestLocale(locale)

  const structuredData = await getHomeStructuredData(locale)

  return (
    <>
      <JsonLd data={structuredData} />
      <HomePage locale={locale} />
    </>
  )
}
