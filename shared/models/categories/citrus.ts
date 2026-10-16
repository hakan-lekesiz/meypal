import type { CategoryDetail } from "../category"
import { grapefruitProduct, lemonProduct, mandarinProduct, orangeProduct } from "../products"

export const citrusCategory: CategoryDetail = {
  id: "citrus",
  route: "citrus",
  titleKey: "navigation.citrus",
  subtitleKey: "categories.citrus.subtitle",
  badgeKey: "categories.citrus.badge",
  descriptionKey: "categories.citrus.description",
  heroImage: "/images/fruits/citrus-mandarin.jpeg",
  products: [orangeProduct, mandarinProduct, lemonProduct, grapefruitProduct],
}
