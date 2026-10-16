import type { ProductDetail } from "../product"

export const quinceProduct: ProductDetail = {
  id: "quince",
  route: "quince",
  categoryRoute: "fruits",
  titleKey: "navigation.quince",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Cydonia oblonga",
  image: "/images/products/quince/ayva-3-1.jpg",
  gallery: [
    {
      src: "/images/products/quince/ayva-3-1.jpg",
      altKey: "products.quince.gallery.freshQuinceAlt",
      titleKey: "products.quince.gallery.freshQuinceTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/quince/436989.jpg",
      altKey: "products.quince.gallery.slicedQuinceAlt",
      titleKey: "products.quince.gallery.slicedQuinceTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/quince/images-16.jpg",
      altKey: "products.quince.gallery.basketQuinceAlt",
      titleKey: "products.quince.gallery.basketQuinceTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.quince.features.immune.title",
      descriptionKey: "products.quince.features.immune.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.quince.features.climate.title",
      descriptionKey: "products.quince.features.climate.description",
    },
    {
      icon: "FaAppleWhole",
      titleKey: "products.quince.features.aroma.title",
      descriptionKey: "products.quince.features.aroma.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.quince.features.storage.title",
      descriptionKey: "products.quince.features.storage.description",
    },
  ],
}
