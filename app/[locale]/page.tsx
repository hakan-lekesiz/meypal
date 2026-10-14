import { getTranslator } from "@/i18n/i18n"
import type { Metadata } from "next"
import { isLocale, PAGES, siteOrigin, type Locale } from "@/shared/config"
import { HomePage } from "@/shared/pages/home"
import { notFound } from "next/dist/client/components/navigation"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale = routeLocale // Default to the first locale if routeLocale is undefined
  const t = await getTranslator(locale as Locale)
  const title = t("metadata.home.title")
  const description = t("metadata.home.description")
  const url = new URL(
    PAGES.home[locale as Locale],
    process.env.PROJECT_URL ?? siteOrigin,
  ).toString()

  return {
    title,
    description,
    keywords: t("metadata.home.keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    openGraph: {
      title,
      description,
      url,
      siteName: "Meypal",
      images: [
        {
          url: "/images/home/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: locale === "tr" ? "tr_TR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/home/opengraph-image.png"],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <HomePage locale={locale} />
}
