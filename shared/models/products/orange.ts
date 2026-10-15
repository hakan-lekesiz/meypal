import type { ProductDetail } from "../product"

export const orangeProduct: ProductDetail = {
  id: "orange",
  route: "orange",
  categoryRoute: "citrus",
  titleKey: "navigation.orange",
  categoryKey: "navigation.citrus",
  badgeKey: "navigation.citrus",
  scientificName: "Citrus sinensis",
  image: "/images/products/orange/cropped-maxresdefault.jpg",
  gallery: [
    {
      src: "/images/products/orange/cropped-maxresdefault.jpg",
      altKey: "products.orange.gallery.freshOrangesAlt",
      titleKey: "products.orange.gallery.freshOrangesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/orange/Sikmalik-Portakal.jpg",
      altKey: "products.orange.gallery.juicingOrangesAlt",
      titleKey: "products.orange.gallery.juicingOrangesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/orange/36139714-fruits-wallpapers.jpg",
      altKey: "products.orange.gallery.orchardHarvestAlt",
      titleKey: "products.orange.gallery.orchardHarvestTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.orange.features.vitaminC.title",
      descriptionKey: "products.orange.features.vitaminC.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.orange.features.climate.title",
      descriptionKey: "products.orange.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.orange.features.juicy.title",
      descriptionKey: "products.orange.features.juicy.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.orange.features.versatile.title",
      descriptionKey: "products.orange.features.versatile.description",
    },
  ],
}
