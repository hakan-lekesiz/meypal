import type { ProductDetail } from "../product"

export const cherryProduct: ProductDetail = {
  id: "cherry",
  route: "cherry",
  categoryRoute: "fruits",
  titleKey: "navigation.cherry",
  categoryKey: "navigation.fruits",
  badgeKey: "navigation.fruits",
  scientificName: "Prunus avium",
  image: "/images/products/cherry/kiraz-1.jpg",
  gallery: [
    {
      src: "/images/products/cherry/kiraz-1.jpg",
      altKey: "products.cherry.gallery.freshCherriesAlt",
      titleKey: "products.cherry.gallery.freshCherriesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/cherry/images-12.jpg",
      altKey: "products.cherry.gallery.crateCherriesAlt",
      titleKey: "products.cherry.gallery.crateCherriesTitle",
      aspectRatio: "landscape",
    },
    {
      src: "/images/products/cherry/indir-1.jpg",
      altKey: "products.cherry.gallery.ripeCherriesAlt",
      titleKey: "products.cherry.gallery.ripeCherriesTitle",
      aspectRatio: "portrait",
    },
  ],
  features: [
    {
      icon: "FaHeartPulse",
      titleKey: "products.cherry.features.antioxidant.title",
      descriptionKey: "products.cherry.features.antioxidant.description",
    },
    {
      icon: "FaEarthAmericas",
      titleKey: "products.cherry.features.exportLeader.title",
      descriptionKey: "products.cherry.features.exportLeader.description",
    },
    {
      icon: "FaWineGlass",
      titleKey: "products.cherry.features.firmJuicy.title",
      descriptionKey: "products.cherry.features.firmJuicy.description",
    },
    {
      icon: "FaSnowflake",
      titleKey: "products.cherry.features.coldChain.title",
      descriptionKey: "products.cherry.features.coldChain.description",
    },
  ],
}
