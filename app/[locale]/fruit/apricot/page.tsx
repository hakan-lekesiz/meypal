import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslator } from "@/i18n/i18n"
import { type Locale, isLocale, locales } from "@/shared/config"
import { apricotProduct } from "@/shared/models"
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
    route: apricotProduct.route,
  })
}

export default async function ApricotDetailPage({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  const t = await getTranslator(locale)
  const structuredData = await getProductStructuredData(locale, {
    name: t(apricotProduct.titleKey),
    description: t(`metadata.${apricotProduct.route}.description`),
    route: apricotProduct.route,
    categoryRoute: apricotProduct.categoryRoute,
    categoryName: t(apricotProduct.categoryKey),
    image: apricotProduct.image,
  })

  return (
    <>
      <JsonLd data={structuredData} />
      <ProductDetailPage locale={locale} product={apricotProduct} showAlternatingList />
    </>
  )
}
