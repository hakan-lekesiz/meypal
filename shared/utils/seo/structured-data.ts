import { getTranslator } from "@/i18n/i18n"
import { type Locale, PAGES, type SiteRoute, siteOrigin } from "@/shared/config"
import { COMPANY_INFO, getBaseUrl } from "./constants"

export function getCorporateStructuredData(locale: Locale) {
  const baseUrl = siteOrigin

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "WholesaleStore"],
        "@id": `${baseUrl}/#organization`,
        name: COMPANY_INFO.name,
        legalName: COMPANY_INFO.legalName,
        alternateName: COMPANY_INFO.alternateNames,
        url: baseUrl,
        logo: `${baseUrl}/logo.png`,
        image: `${baseUrl}/images/home/opengraph-image.jpg`,
        slogan: COMPANY_INFO.slogan[locale],
        disambiguatingDescription: COMPANY_INFO.disambiguatingDescription[locale],
        description:
          locale === "tr"
            ? "1945'ten bu yana 3 kuşaktır yaş sebze, meyve ve narenciye üretimi ve ihracatı."
            : "Fresh fruits, vegetables, and citrus production and export since 1945 across 3 generations.",
        foundingDate: COMPANY_INFO.foundingDate,
        foundingLocation: COMPANY_INFO.foundingLocation,
        email: COMPANY_INFO.email,
        telephone: COMPANY_INFO.telephone,
        priceRange: COMPANY_INFO.priceRange,
        currenciesAccepted: COMPANY_INFO.currenciesAccepted,
        paymentAccepted: COMPANY_INFO.paymentAccepted,
        address: COMPANY_INFO.address,
        geo: COMPANY_INFO.geo,
        hasMap: COMPANY_INFO.hasMap,
        sameAs: COMPANY_INFO.sameAs,
        areaServed: COMPANY_INFO.areaServed,
        knowsLanguage: COMPANY_INFO.knowsLanguage,
        knowsAbout: COMPANY_INFO.knowsAbout[locale],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          ...COMPANY_INFO.offerCatalog[locale],
        },
        contactPoint: COMPANY_INFO.contactPoints,
      },
    ],
  }
}

export async function getHomeStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = siteOrigin
  const description = t("metadata.home.description")

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: COMPANY_INFO.name,
        alternateName: COMPANY_INFO.alternateNames,
        description,
        publisher: { "@id": `${baseUrl}/#organization` },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
    ],
  }
}

export async function getAboutStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.about[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.about.title"),
        description: t("metadata.about.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.about"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getMissionStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.mission[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const aboutUrl = new URL(PAGES.about[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.mission.title"),
        description: t("metadata.mission.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.company"),
            item: aboutUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("navigation.mission"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getVisionStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.vision[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const aboutUrl = new URL(PAGES.about[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.vision.title"),
        description: t("metadata.vision.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.company"),
            item: aboutUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("navigation.vision"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getReadyToEatStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.readyToEat[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const productLinesUrl = new URL(PAGES.productLines[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.readyToEat.title"),
        description: t("metadata.readyToEat.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.productLines"),
            item: productLinesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("navigation.readyToEat"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getOrganicStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.organic[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const productLinesUrl = new URL(PAGES.productLines[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.organic.title"),
        description: t("metadata.organic.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.productLines"),
            item: productLinesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("navigation.organic"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getExcitingFlavorsStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.excitingFlavors[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const productLinesUrl = new URL(PAGES.productLines[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.excitingFlavors.title"),
        description: t("metadata.excitingFlavors.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.productLines"),
            item: productLinesUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("navigation.excitingFlavors"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getProductLinesStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.productLines[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.productLines.title"),
        description: t("metadata.productLines.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.productLines"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export function createBreadcrumbListSchema(
  items: Array<{ name: string; url: string }>,
  pageUrl: string,
) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export async function getCatalogStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.catalog[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.catalog.title"),
        description: t("metadata.catalog.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.catalog"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getGalleryStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.gallery[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const aboutUrl = new URL(PAGES.about[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.gallery.title"),
        description: t("metadata.gallery.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.company"),
            item: aboutUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: t("navigation.gallery"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export async function getContactStructuredData(locale: Locale) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES.contact[locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ContactPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: t("metadata.contact.title"),
        description: t("metadata.contact.description"),
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: t("navigation.contact"),
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export type ProductStructuredDataInput = {
  name: string
  description?: string
  image?: string
  route: SiteRoute
  categoryRoute: SiteRoute
  categoryName: string
}

export async function getProductStructuredData(
  locale: Locale,
  product: ProductStructuredDataInput,
) {
  const t = await getTranslator(locale)
  const baseUrl = siteOrigin
  const pageUrl = new URL(PAGES[product.route][locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()
  const categoryUrl = new URL(PAGES[product.categoryRoute][locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ItemPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: product.name,
        description: product.description,
        about: { "@id": `${baseUrl}/#organization` },
        mainEntity: {
          "@type": "Product",
          "@id": `${pageUrl}/#product`,
          name: product.name,
          description: product.description,
          image: product.image ? new URL(product.image, baseUrl).toString() : undefined,
          category: product.categoryName,
          brand: {
            "@type": "Brand",
            name: COMPANY_INFO.name,
          },
        },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: product.categoryName,
            item: categoryUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: product.name,
            item: pageUrl,
          },
        ],
      },
    ],
  }
}

export type CategoryStructuredDataInput = {
  name: string
  description?: string
  route: SiteRoute
  image?: string
  products: Array<{
    name: string
    route: SiteRoute
    image?: string
  }>
}

export async function getCategoryStructuredData(
  locale: Locale,
  category: CategoryStructuredDataInput,
) {
  const t = await getTranslator(locale)
  const baseUrl = getBaseUrl()
  const pageUrl = new URL(PAGES[category.route][locale], baseUrl).toString()
  const homeUrl = new URL(PAGES.home[locale], baseUrl).toString()

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}/#webpage`,
        url: pageUrl,
        name: category.name,
        description: category.description,
        about: { "@id": `${baseUrl}/#organization` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: {
          "@type": "WebSite",
          "@id": `${baseUrl}/#website`,
          name: COMPANY_INFO.name,
          url: baseUrl,
        },
        inLanguage: locale === "tr" ? "tr-TR" : "en-US",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: category.products.length,
          itemListElement: category.products.map((prod, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: new URL(PAGES[prod.route][locale], baseUrl).toString(),
            name: prod.name,
            image: prod.image ? new URL(prod.image, baseUrl).toString() : undefined,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: t("navigation.home"),
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: category.name,
            item: pageUrl,
          },
        ],
      },
    ],
  }
}
