import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { setRequestLocale } from "next-intl/server"
import { getTranslator } from "@/i18n/i18n"
import { type Locale, isLocale, locales } from "@/shared/config"
import { fruitsCategory } from "@/shared/models"
import { CategoryListingPage } from "@/shared/pages/plp"
import { JsonLd, createPageMetadata, getCategoryStructuredData } from "@/shared/utils"

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
    route: fruitsCategory.route,
  })
}

export default async function FruitsListingPage({ params }: PageProps) {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  setRequestLocale(locale)

  const t = await getTranslator(locale)
  const structuredData = await getCategoryStructuredData(locale, {
    name: t(fruitsCategory.titleKey),
    description: t(`metadata.${fruitsCategory.route}.description`),
    route: fruitsCategory.route,
    products: fruitsCategory.products.map((p) => ({
      name: t(p.titleKey),
      route: p.route,
      image: p.image,
    })),
  })

  return (
    <>
      <JsonLd data={structuredData} />
      <CategoryListingPage category={fruitsCategory} locale={locale} />
    </>
  )
}
