import type { ProductDetail } from "../product"

export const potatoProduct: ProductDetail = {
  id: "potato",
  route: "potato",
  categoryRoute: "vegetables",
  titleKey: "navigation.potato",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Solanum tuberosum",
  image: "/images/products/potato/AN440-Potatoes-732x549-thumb.jpg",
  gallery: [
    {
      src: "/images/products/potato/AN440-Potatoes-732x549-thumb.jpg",
      altKey: "products.potato.gallery.freshPotatoesAlt",
      titleKey: "products.potato.gallery.freshPotatoesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/potato/y.jpg",
      altKey: "products.potato.gallery.washedPotatoesAlt",
      titleKey: "products.potato.gallery.washedPotatoesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/potato/images-19.jpg",
      altKey: "products.potato.gallery.harvestPotatoesAlt",
      titleKey: "products.potato.gallery.harvestPotatoesTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.potato.features.potassium.title",
      descriptionKey: "products.potato.features.potassium.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.potato.features.soil.title",
      descriptionKey: "products.potato.features.soil.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.potato.features.versatile.title",
      descriptionKey: "products.potato.features.versatile.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.potato.features.exportStorage.title",
      descriptionKey: "products.potato.features.exportStorage.description",
    },
  ],
}
