import type { ProductDetail } from "../product"

export const grapeProduct: ProductDetail = {
  id: "grape",
  route: "grape",
  categoryRoute: "fruits",
  titleKey: "navigation.grape",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Vitis vinifera",
  image: "/images/products/grape/cropped-1923296-wq0wyO.jpg",
  intro: {
    titleKey: "products.grape.intro.title",
    descriptionKey: "products.grape.intro.description",
  },
  varieties: [
    {
      id: "pembe-gemre",
      name: "products.grape.varieties.pembeGemre.name",
      tag: "products.grape.varieties.pembeGemre.tag",
      description: "products.grape.varieties.pembeGemre.description",
      image: "/images/products/grape/2015128115427545.jpg",
      imageAlt: "products.grape.varieties.pembeGemre.name",
    },
    {
      id: "super-asma",
      name: "products.grape.varieties.superAsma.name",
      tag: "products.grape.varieties.superAsma.tag",
      description: "products.grape.varieties.superAsma.description",
      image: "/images/products/grape/beyaz-uzum-ile-siyah-uzum-arasindaki-fark-nedir.jpeg",
      imageAlt: "products.grape.varieties.superAsma.name",
    },
    {
      id: "trakya-ilkeren",
      name: "products.grape.varieties.trakyaIlkeren.name",
      tag: "products.grape.varieties.trakyaIlkeren.tag",
      description: "products.grape.varieties.trakyaIlkeren.description",
      image: "/images/products/grape/cropped-1923296-wq0wyO.jpg",
      imageAlt: "products.grape.varieties.trakyaIlkeren.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/grape/cropped-1923296-wq0wyO.jpg",
      altKey: "products.grape.gallery.freshGrapesAlt",
      titleKey: "products.grape.gallery.freshGrapesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/grape/1426958422.jpg",
      altKey: "products.grape.gallery.bunchGrapesAlt",
      titleKey: "products.grape.gallery.bunchGrapesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/grape/2015128115427545.jpg",
      altKey: "products.grape.gallery.redGrapesAlt",
      titleKey: "products.grape.gallery.redGrapesTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.grape.features.antioxidant.title",
      descriptionKey: "products.grape.features.antioxidant.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.grape.features.climate.title",
      descriptionKey: "products.grape.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.grape.features.sweetJuicy.title",
      descriptionKey: "products.grape.features.sweetJuicy.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.grape.features.storage.title",
      descriptionKey: "products.grape.features.storage.description",
    },
  ],
}
