import type { ProductDetail } from "../product"

export const apricotProduct: ProductDetail = {
  id: "apricot",
  route: "apricot",
  categoryRoute: "fruits",
  titleKey: "navigation.apricot",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Prunus armeniaca",
  image: "/images/products/apricot/cropped-kayısı_.fw_.png",
  intro: {
    titleKey: "products.apricot.intro.title",
    descriptionKey: "products.apricot.intro.description",
  },
  varieties: [
    {
      id: "hasanbey",
      name: "products.apricot.varieties.hasanbey.name",
      tag: "products.apricot.varieties.hasanbey.tag",
      description: "products.apricot.varieties.hasanbey.description",
      image: "/images/products/apricot/kayıs.jpg",
      imageAlt: "products.apricot.varieties.hasanbey.name",
    },
    {
      id: "hacihaliloglu",
      name: "products.apricot.varieties.hacihaliloglu.name",
      tag: "products.apricot.varieties.hacihaliloglu.tag",
      description: "products.apricot.varieties.hacihaliloglu.description",
      image: "/images/products/apricot/kayısıa.jpg",
      imageAlt: "products.apricot.varieties.hacihaliloglu.name",
    },
    {
      id: "alyanak-salak",
      name: "products.apricot.varieties.alyanak.name",
      tag: "products.apricot.varieties.alyanak.tag",
      description: "products.apricot.varieties.alyanak.description",
      image: "/images/products/apricot/kayisi-1.jpg",
      imageAlt: "products.apricot.varieties.alyanak.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/apricot/cropped-kayısı_.fw_.png",
      altKey: "products.apricot.gallery.freshApricotsAlt",
      titleKey: "products.apricot.gallery.freshApricotsTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/apricot/kayıs.jpg",
      altKey: "products.apricot.gallery.ripeApricotsAlt",
      titleKey: "products.apricot.gallery.ripeApricotsTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/apricot/kayısıa.jpg",
      altKey: "products.apricot.gallery.harvestApricotsAlt",
      titleKey: "products.apricot.gallery.harvestApricotsTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.apricot.features.vitamins.title",
      descriptionKey: "products.apricot.features.vitamins.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.apricot.features.climate.title",
      descriptionKey: "products.apricot.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.apricot.features.sweetJuicy.title",
      descriptionKey: "products.apricot.features.sweetJuicy.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.apricot.features.exportStorage.title",
      descriptionKey: "products.apricot.features.exportStorage.description",
    },
  ],
}
