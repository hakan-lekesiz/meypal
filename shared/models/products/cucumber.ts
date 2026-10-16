import type { ProductDetail } from "../product"

export const cucumberProduct: ProductDetail = {
  id: "cucumber",
  route: "cucumber",
  categoryRoute: "vegetables",
  titleKey: "navigation.cucumber",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Cucumis sativus",
  image: "/images/products/cucumber/hıarrr.png",
  gallery: [
    {
      src: "/images/products/cucumber/hıarrr.png",
      altKey: "products.cucumber.gallery.freshCucumbersAlt",
      titleKey: "products.cucumber.gallery.freshCucumbersTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/cucumber/cropped-hıyar2.fw_-1.png",
      altKey: "products.cucumber.gallery.crispCucumbersAlt",
      titleKey: "products.cucumber.gallery.crispCucumbersTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/cucumber/hı.fw_.png",
      altKey: "products.cucumber.gallery.snackCucumbersAlt",
      titleKey: "products.cucumber.gallery.snackCucumbersTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.cucumber.features.hydration.title",
      descriptionKey: "products.cucumber.features.hydration.description",
    },
    {
      icon: "FaLeaf",
      titleKey: "products.cucumber.features.blueleaf.title",
      descriptionKey: "products.cucumber.features.blueleaf.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.cucumber.features.crispSnack.title",
      descriptionKey: "products.cucumber.features.crispSnack.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.cucumber.features.exportQuality.title",
      descriptionKey: "products.cucumber.features.exportQuality.description",
    },
  ],
}
