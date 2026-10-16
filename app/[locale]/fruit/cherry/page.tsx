import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslator } from "@/i18n/i18n"
import { type Locale, isLocale, locales } from "@/shared/config"
import { cherryProduct } from "@/shared/models"
import { ProductDetailPage } from "@/shared/pages/pdp"
import { JsonLd, createPageMetadata, getProductStructuredData } from "@/shared/utils"

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
    route: cherryProduct.route,
  })
}

export default async function CherryDetailPage({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  const t = await getTranslator(locale)
  const structuredData = await getProductStructuredData(locale, {
    name: t(cherryProduct.titleKey),
    description: t(`metadata.${cherryProduct.route}.description`),
    route: cherryProduct.route,
    categoryRoute: cherryProduct.categoryRoute,
    categoryName: t(cherryProduct.categoryKey),
    image: cherryProduct.image,
  })

  return (
    <>
      <JsonLd data={structuredData} />
      <ProductDetailPage locale={locale} product={cherryProduct} />
    </>
  )
}
