import type { ProductDetail } from "../product"

export const melonProduct: ProductDetail = {
  id: "melon",
  route: "melon",
  categoryRoute: "fruits",
  titleKey: "navigation.melon",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Cucumis melo",
  image: "/images/products/melon/cropped-shutterstock_306772649_grande.jpg",
  gallery: [
    {
      src: "/images/products/melon/cropped-shutterstock_306772649_grande.jpg",
      altKey: "products.melon.gallery.freshMelonAlt",
      titleKey: "products.melon.gallery.freshMelonTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/melon/83-1.jpg",
      altKey: "products.melon.gallery.slicedMelonAlt",
      titleKey: "products.melon.gallery.slicedMelonTitle",
      aspectRatio: "landscape",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.melon.features.vitamins.title",
      descriptionKey: "products.melon.features.vitamins.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.melon.features.climate.title",
      descriptionKey: "products.melon.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.melon.features.aroma.title",
      descriptionKey: "products.melon.features.aroma.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.melon.features.shelfLife.title",
      descriptionKey: "products.melon.features.shelfLife.description",
    },
  ],
}
