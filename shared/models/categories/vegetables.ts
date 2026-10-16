import type { CategoryDetail } from "../category"
import {
  cabbageProduct,
  cucumberProduct,
  eggplantProduct,
  garlicProduct,
  onionProduct,
  pepperProduct,
  potatoProduct,
  tomatoProduct,
} from "../products"

export const vegetablesCategory: CategoryDetail = {
  id: "vegetables",
  route: "vegetables",
  titleKey: "navigation.vegetables",
  subtitleKey: "categories.vegetables.subtitle",
  badgeKey: "categories.vegetables.badge",
  descriptionKey: "categories.vegetables.description",
  heroImage: "/images/fruits/seasonal-fruits.jpg",
  products: [
    tomatoProduct,
    cucumberProduct,
    eggplantProduct,
    pepperProduct,
    cabbageProduct,
    onionProduct,
    potatoProduct,
    garlicProduct,
  ],
}
