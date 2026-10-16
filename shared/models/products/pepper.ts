import type { ProductDetail } from "../product"

export const pepperProduct: ProductDetail = {
  id: "pepper",
  route: "pepper",
  categoryRoute: "vegetables",
  titleKey: "navigation.pepper",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Capsicum annuum",
  image: "/images/products/pepper/cropped-biberr.fw_.png",
  gallery: [
    {
      src: "/images/products/pepper/cropped-biberr.fw_.png",
      altKey: "products.pepper.gallery.freshPeppersAlt",
      titleKey: "products.pepper.gallery.freshPeppersTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/pepper/biverrrr.fw_.png",
      altKey: "products.pepper.gallery.colorfulPeppersAlt",
      titleKey: "products.pepper.gallery.colorfulPeppersTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/pepper/biverr.fw_.png",
      altKey: "products.pepper.gallery.crispPeppersAlt",
      titleKey: "products.pepper.gallery.crispPeppersTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.pepper.features.vitaminC.title",
      descriptionKey: "products.pepper.features.vitaminC.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.pepper.features.greenhouse.title",
      descriptionKey: "products.pepper.features.greenhouse.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.pepper.features.crispSweet.title",
      descriptionKey: "products.pepper.features.crispSweet.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.pepper.features.exportStandards.title",
      descriptionKey: "products.pepper.features.exportStandards.description",
    },
  ],
}
