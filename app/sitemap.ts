import type { MetadataRoute } from "next"
import { getSiteLink, locales, siteLinks, siteOrigin, type SiteRoute } from "@/shared/config"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(siteLinks) as SiteRoute[]
  const languageAlternates = (route: SiteRoute) => ({
    languages: Object.fromEntries(
      locales.map((locale) => [locale, `${siteOrigin}${getSiteLink(route, locale)}`]),
    ),
  })

  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: `${siteOrigin}${getSiteLink(route, locale)}`,
      alternates: languageAlternates(route),
    })),
  )
}
