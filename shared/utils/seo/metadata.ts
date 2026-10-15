import { getTranslator } from "@/i18n/i18n"
import { type Locale, PAGES, type SiteRoute, siteOrigin } from "@/shared/config"
import type { Metadata } from "next"
import { DEFAULT_ROBOTS, GEO_METADATA, getBaseUrl } from "./constants"

export function createRootLayoutMetadata(locale: Locale): Metadata {
  const isTr = locale === "tr"
  const defaultTitle = isTr
    ? "Meypal | Yaş Sebze, Meyve ve Narenciye Üretim & İhracatı"
    : "Meypal | Fresh Fruits, Vegetables & Citrus Production & Export"
  const defaultDescription = isTr
    ? "1945'ten bu yana 3 kuşaktır yaş sebze, meyve ve narenciye ihracatında güvenilir çözüm ortağınız. Akdeniz'in taze mahsullerini 12 ay boyunca dünyaya ulaştırıyoruz."
    : "Your trusted partner in fresh fruit, vegetable, and citrus export across 3 generations since 1945. Delivering Mediterranean quality produce worldwide all 12 months."

  return {
    metadataBase: new URL(siteOrigin),
    title: {
      default: defaultTitle,
      template: "%s | Meypal",
    },
    description: defaultDescription,
    applicationName: "Meypal",
    authors: [{ name: "Meypal", url: siteOrigin }],
    creator: "Meypal",
    publisher: "Meypal",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: [
        { url: "/favicon/favicon.ico" },
        { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    manifest: "/favicon/site.webmanifest",
    robots: DEFAULT_ROBOTS,
    openGraph: {
      type: "website",
      siteName: "Meypal",
      locale: isTr ? "tr_TR" : "en_US",
      alternateLocale: isTr ? ["en_US"] : ["tr_TR"],
      images: [
        {
          url: "/images/home/opengraph-image.png",
          width: 1200,
          height: 630,
          alt: "Meypal",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/images/home/opengraph-image.png"],
    },
    other: {
      ...GEO_METADATA,
    },
  }
}

export type PageMetadataOptions = {
  locale: Locale
  route: SiteRoute
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  isAbsoluteTitle?: boolean
  overrides?: Partial<Metadata>
}

export async function createPageMetadata({
  locale,
  route,
  title: customTitle,
  description: customDescription,
  keywords: customKeywords,
  image,
  isAbsoluteTitle = false,
  overrides,
}: PageMetadataOptions): Promise<Metadata> {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()

  const title = customTitle ?? t(`metadata.${route}.title`)
  const description = customDescription ?? t(`metadata.${route}.description`)
  const keywords =
    customKeywords ??
    t(`metadata.${route}.keywords`)
      .split(",")
      .map((keyword) => keyword.trim())

  const pagePath = PAGES[route]
  const url = new URL(pagePath[locale], baseUrl).toString()
  const trUrl = new URL(pagePath.tr, baseUrl).toString()
  const enUrl = new URL(pagePath.en, baseUrl).toString()

  const ogImage = image ?? `/images/${route}/opengraph-image.png`

  return {
    title: isAbsoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    authors: [{ name: "Meypal", url: siteOrigin }],
    creator: "Meypal",
    publisher: "Meypal",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: url,
      languages: {
        tr: trUrl,
        en: enUrl,
        "x-default": trUrl,
      },
    },
    robots: DEFAULT_ROBOTS,
    openGraph: {
      title,
      description,
      url,
      siteName: "Meypal",
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
    other: {
      ...GEO_METADATA,
    },
    ...overrides,
  }
}
