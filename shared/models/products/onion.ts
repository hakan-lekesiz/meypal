import type { ProductDetail } from "../product"

export const onionProduct: ProductDetail = {
  id: "onion",
  route: "onion",
  categoryRoute: "vegetables",
  titleKey: "navigation.onion",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Allium cepa",
  image: "/images/products/onion/ssssdsd.jpg",
  gallery: [
    {
      src: "/images/products/onion/ssssdsd.jpg",
      altKey: "products.onion.gallery.freshOnionsAlt",
      titleKey: "products.onion.gallery.freshOnionsTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/onion/dssss.jpg",
      altKey: "products.onion.gallery.yellowOnionsAlt",
      titleKey: "products.onion.gallery.yellowOnionsTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/onion/mer.jpg",
      altKey: "products.onion.gallery.redOnionsAlt",
      titleKey: "products.onion.gallery.redOnionsTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.onion.features.quercetin.title",
      descriptionKey: "products.onion.features.quercetin.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.onion.features.climate.title",
      descriptionKey: "products.onion.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.onion.features.flavor.title",
      descriptionKey: "products.onion.features.flavor.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.onion.features.exportStorage.title",
      descriptionKey: "products.onion.features.exportStorage.description",
    },
  ],
}
