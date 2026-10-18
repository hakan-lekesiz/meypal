export interface GalleryItem {
  src: string
  alt: {
    tr: string
    en: string
  }
  isVideo: boolean
}

export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/10.jpeg",
    alt: {
      tr: "Kabak sevkiyatı ve paketleme",
      en: "Zucchini packaging and dispatch",
    },
    isVideo: false,
  },
  {
    src: "/images/gallery/20.jpeg",
    alt: {
      tr: "Biber hasadı ve tarla operasyonu",
      en: "Pepper harvesting and field operations",
    },
    isVideo: false,
  },
  {
    src: "/images/fruits/fresh-fruit-basket.jpg",
    alt: {
      tr: "Akdeniz Taze Meyve Hasadı",
      en: "Mediterranean Fresh Fruit Harvest",
    },
    isVideo: false,
  },
  {
    src: "/images/fruits/grapes.jpg",
    alt: {
      tr: "Taze Bağ Üzümleri",
      en: "Fresh Vineyard Table Grapes",
    },
    isVideo: false,
  },
  {
    src: "/images/fruits/citrus-mandarin.jpeg",
    alt: {
      tr: "Dalından Taze Akdeniz Mandalinaları",
      en: "Fresh Mediterranean Mandarins on Branch",
    },
    isVideo: false,
  },
  {
    src: "/images/fruits/hero-fruits.jpg",
    alt: {
      tr: "Doğal Akdeniz Meyve Çeşitleri",
      en: "Natural Mediterranean Fruit Varieties",
    },
    isVideo: false,
  },
  {
    src: "/images/fruits/seasonal-fruits.jpg",
    alt: {
      tr: "Mevsimlik Taze Meyveler",
      en: "Seasonal Fresh Fruits",
    },
    isVideo: false,
  },
  {
    src: "/images/fruits/fruit-basket.jpg",
    alt: {
      tr: "Taze Meyve Sepeti ve Sunum",
      en: "Fresh Fruit Selection and Display",
    },
    isVideo: false,
  },
  {
    src: "/images/products/orange/36139714-fruits-wallpapers.jpg",
    alt: {
      tr: "Dalında Taze Portakallar",
      en: "Fresh Oranges on Tree",
    },
    isVideo: false,
  },
  {
    src: "/images/products/pomegranate/cropped-32323.jpg",
    alt: {
      tr: "Taze Hicaz Nar Taneleri",
      en: "Fresh Ruby Hicaz Pomegranate Arils",
    },
    isVideo: false,
  },
  {
    src: "/images/products/tomato/salkımm.png",
    alt: {
      tr: "Taze Salkım Domatesler",
      en: "Fresh Vine Cluster Tomatoes",
    },
    isVideo: false,
  },
]
