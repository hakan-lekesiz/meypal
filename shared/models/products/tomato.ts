import type { ProductDetail } from "../product"

export const tomatoProduct: ProductDetail = {
  id: "tomato",
  route: "tomato",
  categoryRoute: "vegetables",
  titleKey: "navigation.tomato",
  categoryKey: "navigation.vegetables",
  badgeKey: "navigation.vegetables",
  scientificName: "Solanum lycopersicum",
  image: "/images/products/tomato/salkımm.png",
  intro: {
    titleKey: "products.tomato.intro.title",
    descriptionKey: "products.tomato.intro.description",
  },
  varieties: [
    {
      id: "intermediate-salkim",
      name: "products.tomato.varieties.intermediateSalkim.name",
      tag: "products.tomato.varieties.intermediateSalkim.tag",
      description: "products.tomato.varieties.intermediateSalkim.description",
      image: "/images/products/tomato/image-33.png",
      imageAlt: "products.tomato.varieties.intermediateSalkim.name",
    },
    {
      id: "intermediate-tekli",
      name: "products.tomato.varieties.intermediateTekli.name",
      tag: "products.tomato.varieties.intermediateTekli.tag",
      description: "products.tomato.varieties.intermediateTekli.description",
      image: "/images/products/tomato/image-37.png",
      imageAlt: "products.tomato.varieties.intermediateTekli.name",
    },
    {
      id: "beef-kirmizi-pembe",
      name: "products.tomato.varieties.beef.name",
      tag: "products.tomato.varieties.beef.tag",
      description: "products.tomato.varieties.beef.description",
      image: "/images/products/tomato/image-36.png",
      imageAlt: "products.tomato.varieties.beef.name",
    },
    {
      id: "ceri",
      name: "products.tomato.varieties.ceri.name",
      tag: "products.tomato.varieties.ceri.tag",
      description: "products.tomato.varieties.ceri.description",
      image: "/images/products/tomato/image-24.png",
      imageAlt: "products.tomato.varieties.ceri.name",
    },
  ],
  gallery: [
    {
      src: "/images/products/tomato/salkımm.png",
      altKey: "products.tomato.gallery.vineTomatoesAlt",
      titleKey: "products.tomato.gallery.vineTomatoesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/tomato/image-35.png",
      altKey: "products.tomato.gallery.freshTomatoesAlt",
      titleKey: "products.tomato.gallery.freshTomatoesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/tomato/image-20.png",
      altKey: "products.tomato.gallery.greenhouseTomatoesAlt",
      titleKey: "products.tomato.gallery.greenhouseTomatoesTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.tomato.features.lycopene.title",
      descriptionKey: "products.tomato.features.lycopene.description",
    },
    {
      icon: "FaSun",
      titleKey: "products.tomato.features.greenhouse.title",
      descriptionKey: "products.tomato.features.greenhouse.description",
    },
    {
      icon: "FaShieldHalved",
      titleKey: "products.tomato.features.resistance.title",
      descriptionKey: "products.tomato.features.resistance.description",
    },
    {
      icon: "FaBoxOpen",
      titleKey: "products.tomato.features.exportCaliber.title",
      descriptionKey: "products.tomato.features.exportCaliber.description",
    },
  ],
}
