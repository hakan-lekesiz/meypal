import type { ProductDetail } from "../product"

export const figProduct: ProductDetail = {
  id: "fig",
  route: "fig",
  categoryRoute: "fruits",
  titleKey: "navigation.fig",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Ficus carica",
  image: "/images/products/fig/cropped-incir1.fw_-1.png",
  gallery: [
    {
      src: "/images/products/fig/cropped-incir1.fw_-1.png",
      altKey: "products.fig.gallery.freshFigsAlt",
      titleKey: "products.fig.gallery.freshFigsTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/fig/cropped-incir1.fw_.png",
      altKey: "products.fig.gallery.slicedFigAlt",
      titleKey: "products.fig.gallery.slicedFigTitle",
      aspectRatio: "landscape",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.fig.features.nutritional.title",
      descriptionKey: "products.fig.features.nutritional.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.fig.features.mediterranean.title",
      descriptionKey: "products.fig.features.mediterranean.description",
    },
    {
      icon: "FaLeaf",
      titleKey: "products.fig.features.fiber.title",
      descriptionKey: "products.fig.features.fiber.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.fig.features.premiumExport.title",
      descriptionKey: "products.fig.features.premiumExport.description",
    },
  ],
}
