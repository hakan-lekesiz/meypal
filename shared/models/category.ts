import type { SiteRoute } from "@/shared/config"
import type { ProductDetail } from "./product"

export interface CategoryDetail {
  id: string
  route: SiteRoute
  titleKey: string
  subtitleKey?: string
  badgeKey?: string
  descriptionKey: string
  heroImage?: string
  products: ProductDetail[]
}
