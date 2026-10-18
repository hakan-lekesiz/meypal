import { isLocale, locales, type Locale } from "@/shared/config"
import { GalleryPage } from "@/shared/pages/gallery"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import type { Metadata } from "next"
import { createPageMetadata, getGalleryStructuredData, JsonLd } from "@/shared/utils"

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
    route: "gallery",
  })
}

export default async function Page({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  const structuredData = await getGalleryStructuredData(locale)

  return (
    <>
      <JsonLd data={structuredData} />
      <GalleryPage locale={locale} />
    </>
  )
}
