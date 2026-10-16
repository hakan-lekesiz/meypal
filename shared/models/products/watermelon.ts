import type { ProductDetail } from "../product"

export const watermelonProduct: ProductDetail = {
  id: "watermelon",
  route: "watermelon",
  categoryRoute: "fruits",
  titleKey: "navigation.watermelon",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Citrullus lanatus",
  image: "/images/products/watermelon/cropped-karr.fw_.png",
  intro: {
    titleKey: "products.watermelon.intro.title",
    descriptionKey: "products.watermelon.intro.description",
  },
  varieties: [
    {
      id: "crimson-sweet",
      name: "products.watermelon.varieties.crimsonSweet.name",
      tag: "products.watermelon.varieties.crimsonSweet.tag",
      description: "products.watermelon.varieties.crimsonSweet.description",
      image: "/images/products/watermelon/cropped-karr.fw_.png",
      imageAlt: "products.watermelon.varieties.crimsonSweet.name",
    },
    {
      id: "sugar-baby",
      name: "products.watermelon.varieties.sugarBaby.name",
      tag: "products.watermelon.varieties.sugarBaby.tag",
      description: "products.watermelon.varieties.sugarBaby.description",
      image: "/images/products/watermelon/2502119_810x458.jpg",
      imageAlt: "products.watermelon.varieties.sugarBaby.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/watermelon/cropped-karr.fw_.png",
      altKey: "products.watermelon.gallery.freshWatermelonAlt",
      titleKey: "products.watermelon.gallery.freshWatermelonTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/watermelon/2502119_810x458.jpg",
      altKey: "products.watermelon.gallery.slicedWatermelonAlt",
      titleKey: "products.watermelon.gallery.slicedWatermelonTitle",
      aspectRatio: "landscape",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.watermelon.features.lycopene.title",
      descriptionKey: "products.watermelon.features.lycopene.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.watermelon.features.climate.title",
      descriptionKey: "products.watermelon.features.climate.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.watermelon.features.hydration.title",
      descriptionKey: "products.watermelon.features.hydration.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.watermelon.features.convenience.title",
      descriptionKey: "products.watermelon.features.convenience.description",
    },
  ],
}
