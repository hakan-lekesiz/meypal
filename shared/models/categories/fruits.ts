import type { CategoryDetail } from "../category"
import {
  apricotProduct,
  cherryProduct,
  figProduct,
  grapeProduct,
  melonProduct,
  peachProduct,
  pomegranateProduct,
  quinceProduct,
  watermelonProduct,
} from "../products"

export const fruitsCategory: CategoryDetail = {
  id: "fruits",
  route: "fruits",
  titleKey: "navigation.fruits",
  subtitleKey: "categories.fruits.subtitle",
  badgeKey: "categories.fruits.badge",
  descriptionKey: "categories.fruits.description",
  heroImage: "/images/fruits/hero-fruits.jpg",
  products: [
    quinceProduct,
    cherryProduct,
    figProduct,
    peachProduct,
    pomegranateProduct,
    grapeProduct,
    apricotProduct,
    watermelonProduct,
    melonProduct,
  ],
}
