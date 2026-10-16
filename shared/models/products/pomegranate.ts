import type { ProductDetail } from "../product"

export const pomegranateProduct: ProductDetail = {
  id: "pomegranate",
  route: "pomegranate",
  categoryRoute: "fruits",
  titleKey: "navigation.pomegranate",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Punica granatum",
  image: "/images/products/pomegranate/narty.fw_.png",
  intro: {
    titleKey: "products.pomegranate.intro.title",
    descriptionKey: "products.pomegranate.intro.description",
  },
  varieties: [
    {
      id: "hicaz-nar",
      name: "products.pomegranate.varieties.hicazNar.name",
      tag: "products.pomegranate.varieties.hicazNar.tag",
      description: "products.pomegranate.varieties.hicazNar.description",
      image: "/images/products/pomegranate/cropped-32323.jpg",
      imageAlt: "products.pomegranate.varieties.hicazNar.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/pomegranate/narty.fw_.png",
      altKey: "products.pomegranate.gallery.freshPomegranatesAlt",
      titleKey: "products.pomegranate.gallery.freshPomegranatesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/pomegranate/nn.jpg",
      altKey: "products.pomegranate.gallery.openedPomegranateAlt",
      titleKey: "products.pomegranate.gallery.openedPomegranateTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/pomegranate/cropped-nnnn.jpg",
      altKey: "products.pomegranate.gallery.orchardPomegranateAlt",
      titleKey: "products.pomegranate.gallery.orchardPomegranateTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.pomegranate.features.antioxidant.title",
      descriptionKey: "products.pomegranate.features.antioxidant.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.pomegranate.features.climate.title",
      descriptionKey: "products.pomegranate.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.pomegranate.features.tartSweet.title",
      descriptionKey: "products.pomegranate.features.tartSweet.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.pomegranate.features.storage.title",
      descriptionKey: "products.pomegranate.features.storage.description",
    },
  ],
}
