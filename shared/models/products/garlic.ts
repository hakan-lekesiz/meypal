import type { ProductDetail } from "../product"

export const garlicProduct: ProductDetail = {
  id: "garlic",
  route: "garlic",
  categoryRoute: "vegetables",
  titleKey: "navigation.garlic",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Allium sativum",
  image: "/images/products/garlic/3sa.jpg",
  gallery: [
    {
      src: "/images/products/garlic/3sa.jpg",
      altKey: "products.garlic.gallery.freshGarlicAlt",
      titleKey: "products.garlic.gallery.freshGarlicTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/garlic/riimg-suc8.jpg",
      altKey: "products.garlic.gallery.whiteGarlicAlt",
      titleKey: "products.garlic.gallery.whiteGarlicTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/garlic/4sa.jpg",
      altKey: "products.garlic.gallery.harvestGarlicAlt",
      titleKey: "products.garlic.gallery.harvestGarlicTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.garlic.features.allicin.title",
      descriptionKey: "products.garlic.features.allicin.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.garlic.features.origin.title",
      descriptionKey: "products.garlic.features.origin.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.garlic.features.pungent.title",
      descriptionKey: "products.garlic.features.pungent.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.garlic.features.storage.title",
      descriptionKey: "products.garlic.features.storage.description",
    },
  ],
}
