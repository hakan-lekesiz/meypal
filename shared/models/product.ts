import type { SiteRoute } from "@/shared/config"

export interface ProductVarietyItem {
  id: string
  name: string
  tag?: string
  description: string
  image: string
  imageAlt?: string
}

export interface ProductDetail {
  id: string
  route: SiteRoute
  categoryRoute: SiteRoute
  titleKey: string
  categoryKey: string
  badgeKey?: string
  scientificName?: string
  image: string
  intro?: {
    titleKey?: string
    descriptionKey: string
    image?: string
  }
  varieties?: ProductVarietyItem[]
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
