import type { ProductDetail } from "../product"

export const cabbageProduct: ProductDetail = {
  id: "cabbage",
  route: "cabbage",
  categoryRoute: "vegetables",
  titleKey: "navigation.cabbage",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Brassica oleracea var. capitata",
  image: "/images/products/cabbage/lahanap.jpg",
  intro: {
    titleKey: "products.cabbage.intro.title",
    descriptionKey: "products.cabbage.intro.description",
  },
  varieties: [
    {
      id: "franklin",
      name: "products.cabbage.varieties.franklin.name",
      tag: "products.cabbage.varieties.franklin.tag",
      description: "products.cabbage.varieties.franklin.description",
      image: "/images/products/cabbage/cropped-hibrit-lahana-tohumu-basik-700x600-1.jpg",
      imageAlt: "products.cabbage.varieties.franklin.name",
    },
    {
      id: "ramada",
      name: "products.cabbage.varieties.ramada.name",
      tag: "products.cabbage.varieties.ramada.tag",
      description: "products.cabbage.varieties.ramada.description",
      image: "/images/products/cabbage/cropped-ramada.jpg",
      imageAlt: "products.cabbage.varieties.ramada.name",
    },
    {
      id: "nautic",
      name: "products.cabbage.varieties.nautic.name",
      tag: "products.cabbage.varieties.nautic.tag",
      description: "products.cabbage.varieties.nautic.description",
      image: "/images/products/cabbage/cropped-nautıc.jpg",
      imageAlt: "products.cabbage.varieties.nautic.name",
    },
    {
      id: "ducati",
      name: "products.cabbage.varieties.ducati.name",
      tag: "products.cabbage.varieties.ducati.tag",
      description: "products.cabbage.varieties.ducati.description",
      image: "/images/products/cabbage/cropped-DUCATI.jpg",
      imageAlt: "products.cabbage.varieties.ducati.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/cabbage/lahanap.jpg",
      altKey: "products.cabbage.gallery.freshCabbageAlt",
      titleKey: "products.cabbage.gallery.freshCabbageTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/cabbage/cropped-hibrit-lahana-tohumu-basik-700x600-2.jpg",
      altKey: "products.cabbage.gallery.fieldCabbageAlt",
      titleKey: "products.cabbage.gallery.fieldCabbageTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/cabbage/lahana-suyu-nasil-icilir1.jpg",
      altKey: "products.cabbage.gallery.harvestCabbageAlt",
      titleKey: "products.cabbage.gallery.harvestCabbageTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.cabbage.features.vitaminC.title",
      descriptionKey: "products.cabbage.features.vitaminC.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.cabbage.features.winterResistant.title",
      descriptionKey: "products.cabbage.features.winterResistant.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.cabbage.features.tightHeads.title",
      descriptionKey: "products.cabbage.features.tightHeads.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.cabbage.features.storageLife.title",
      descriptionKey: "products.cabbage.features.storageLife.description",
    },
  ],
}
