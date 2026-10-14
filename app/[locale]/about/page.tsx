import { getTranslator } from "@/i18n/i18n"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { isLocale, PAGES, siteOrigin, type Locale } from "@/shared/config"
import { AboutPage } from "@/shared/pages/about"

type PageProps = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: routeLocale } = await params
  if (!isLocale(routeLocale)) notFound()

  const locale: Locale = routeLocale
  const t = await getTranslator(locale)
  const title = t("metadata.about.title")
  const description = t("metadata.about.description")
  const url = new URL(PAGES.about[locale], process.env.PROJECT_URL ?? siteOrigin).toString()

  return {
    title,
    description,
    keywords: t("metadata.about.keywords")
      .split(",")
      .map((keyword) => keyword.trim()),
    openGraph: {
      title,
      description,
      url,
      siteName: "Meypal",
      images: [
        {
          url: "/images/about/opengraph-image.png",
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
      images: ["/images/about/opengraph-image.png"],
    },
    alternates: {
      canonical: url,
    },
  }
}

export default async function About({ params }: PageProps) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  return <AboutPage locale={locale} />
}
