import type { ProductDetail } from "../product"

export const grapefruitProduct: ProductDetail = {
  id: "grapefruit",
  route: "grapefruit",
  categoryRoute: "citrus",
  titleKey: "navigation.grapefruit",
  categoryKey: "navigation.citrus",
  badgeKey: "navigation.citrus",
  scientificName: "Citrus paradisi",
  image: "/images/products/grapefruit/gre.jpg",
  intro: {
    titleKey: "products.grapefruit.intro.title",
    descriptionKey: "products.grapefruit.intro.description",
  },
  varieties: [
    {
      id: "star-ruby",
      name: "products.grapefruit.varieties.starRuby.name",
      tag: "products.grapefruit.varieties.starRuby.tag",
      description: "products.grapefruit.varieties.starRuby.description",
      image: "/images/products/grapefruit/greyfurtt.jpg",
      imageAlt: "products.grapefruit.varieties.starRuby.name",
    },
    {
      id: "riored",
      name: "products.grapefruit.varieties.riored.name",
      tag: "products.grapefruit.varieties.riored.tag",
      description: "products.grapefruit.varieties.riored.description",
      image: "/images/products/grapefruit/gress.jpg",
      imageAlt: "products.grapefruit.varieties.riored.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/grapefruit/gre.jpg",
      altKey: "products.grapefruit.gallery.freshGrapefruitAlt",
      titleKey: "products.grapefruit.gallery.freshGrapefruitTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/grapefruit/greyfurtt.jpg",
      altKey: "products.grapefruit.gallery.starRubyAlt",
      titleKey: "products.grapefruit.gallery.starRubyTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/grapefruit/gress.jpg",
      altKey: "products.grapefruit.gallery.harvestAlt",
      titleKey: "products.grapefruit.gallery.harvestTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.grapefruit.features.vitaminC.title",
      descriptionKey: "products.grapefruit.features.vitaminC.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.grapefruit.features.climate.title",
      descriptionKey: "products.grapefruit.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.grapefruit.features.antioxidant.title",
      descriptionKey: "products.grapefruit.features.antioxidant.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.grapefruit.features.exportStorage.title",
      descriptionKey: "products.grapefruit.features.exportStorage.description",
    },
  ],
}
