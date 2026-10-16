import type { ProductDetail } from "../product"

export const eggplantProduct: ProductDetail = {
  id: "eggplant",
  route: "eggplant",
  categoryRoute: "vegetables",
  titleKey: "navigation.eggplant",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Solanum melongena",
  image: "/images/products/eggplant/cropped-pat.fw_.png",
  intro: {
    titleKey: "products.eggplant.intro.title",
    descriptionKey: "products.eggplant.intro.description",
  },
  varieties: [
    {
      id: "oval-siyah",
      name: "products.eggplant.varieties.ovalSiyah.name",
      tag: "products.eggplant.varieties.ovalSiyah.tag",
      description: "products.eggplant.varieties.ovalSiyah.description",
      image: "/images/products/eggplant/patlcan11.fw_.png",
      imageAlt: "products.eggplant.varieties.ovalSiyah.name",
    },
    {
      id: "oval-beyaz",
      name: "products.eggplant.varieties.ovalBeyaz.name",
      tag: "products.eggplant.varieties.ovalBeyaz.tag",
      description: "products.eggplant.varieties.ovalBeyaz.description",
      image: "/images/products/eggplant/patlıcanqqq.fw_.png",
      imageAlt: "products.eggplant.varieties.ovalBeyaz.name",
    },
    {
      id: "uzun-silindirik",
      name: "products.eggplant.varieties.uzunSilindirik.name",
      tag: "products.eggplant.varieties.uzunSilindirik.tag",
      description: "products.eggplant.varieties.uzunSilindirik.description",
      image: "/images/products/eggplant/patssssss.fw_.png",
      imageAlt: "products.eggplant.varieties.uzunSilindirik.name",
    },
    {
      id: "oval-cizgili",
      name: "products.eggplant.varieties.ovalCizgili.name",
      tag: "products.eggplant.varieties.ovalCizgili.tag",
      description: "products.eggplant.varieties.ovalCizgili.description",
      image: "/images/products/eggplant/patlws.fw_.png",
      imageAlt: "products.eggplant.varieties.ovalCizgili.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/eggplant/cropped-pat.fw_.png",
      altKey: "products.eggplant.gallery.freshEggplantAlt",
      titleKey: "products.eggplant.gallery.freshEggplantTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/eggplant/images-8.jpg",
      altKey: "products.eggplant.gallery.glossyEggplantAlt",
      titleKey: "products.eggplant.gallery.glossyEggplantTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/eggplant/image-4.png",
      altKey: "products.eggplant.gallery.harvestEggplantAlt",
      titleKey: "products.eggplant.gallery.harvestEggplantTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.eggplant.features.fiber.title",
      descriptionKey: "products.eggplant.features.fiber.description",
    },
    {
      icon: "FaLeaf",
      titleKey: "products.eggplant.features.spineless.title",
      descriptionKey: "products.eggplant.features.spineless.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.eggplant.features.whiteFlesh.title",
      descriptionKey: "products.eggplant.features.whiteFlesh.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.eggplant.features.shelfLife.title",
      descriptionKey: "products.eggplant.features.shelfLife.description",
    },
  ],
}
