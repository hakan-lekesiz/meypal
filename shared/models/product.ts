import type { SiteRoute } from "@/shared/config"

export interface ProductDetail {
  id: string
  route: SiteRoute
  categoryRoute: SiteRoute
  titleKey: string
  categoryKey: string
  badgeKey?: string
  scientificName?: string
  image: string
  gallery?: Array<{
    src: string
    altKey: string
    titleKey?: string
    aspectRatio?: "square" | "landscape" | "portrait"
  }>
  features?: Array<{
    icon: string
    titleKey: string
    descriptionKey: string
  }>
  extra?: Record<string, unknown>
}
