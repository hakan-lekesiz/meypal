import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslator } from "@/i18n/i18n"
import { type Locale, isLocale, locales } from "@/shared/config"
import { pepperProduct } from "@/shared/models"
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
    route: pepperProduct.route,
  })
}

export default async function PepperDetailPage({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  const t = await getTranslator(locale)
  const structuredData = await getProductStructuredData(locale, {
    name: t(pepperProduct.titleKey),
    description: t(`metadata.${pepperProduct.route}.description`),
    route: pepperProduct.route,
    categoryRoute: pepperProduct.categoryRoute,
    categoryName: t(pepperProduct.categoryKey),
    image: pepperProduct.image,
  })

  return (
    <>
      <JsonLd data={structuredData} />
      <ProductDetailPage locale={locale} product={pepperProduct} />
    </>
  )
}
