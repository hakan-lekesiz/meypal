import { isLocale, locales, type Locale } from "@/shared/config"
import { AboutPage } from "@/shared/pages/about"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { createPageMetadata, getAboutStructuredData, JsonLd } from "@/shared/utils"

export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  return createPageMetadata({
    locale,
    route: "about",
  })
}

export default async function About({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  const structuredData = await getAboutStructuredData(locale)

  return (
    <>
      <JsonLd data={structuredData} />
      <AboutPage locale={locale} />
    </>
  )
}
