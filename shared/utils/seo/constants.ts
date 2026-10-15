import { siteOrigin } from "@/shared/config"

export const getBaseUrl = (): string => process.env.PROJECT_URL ?? siteOrigin

export const GEO_METADATA = {
  "geo.region": "TR-33",
  "geo.placename": "Mersin, Türkiye",
  "geo.position": "36.7997;34.6300",
  ICBM: "36.7997, 34.6300",
} as const

export const DEFAULT_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
} as const

export const COMPANY_INFO = {
  name: "Meypal",
  legalName: "Meypal Dış Ticaret",
  alternateNames: ["Meypal Dış Ticaret", "Meypal Export", "Meypal Citrus"],
  foundingDate: "1945",
  email: "info@meypal.com.tr",
  telephone: "+90 324 238 04 38",
  priceRange: "$$",
  currenciesAccepted: "USD, EUR, TRY",
  paymentAccepted: "Bank Transfer, Letter of Credit (L/C)",
  foundingLocation: {
    "@type": "Place",
    name: "Mersin, Türkiye",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Camişerif Mah., 5232 Sk., Buğdaycı İşhanı, Kat: 2, No: 11",
    addressLocality: "Akdeniz",
    addressRegion: "Mersin",
    postalCode: "33060",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.7997,
    longitude: 34.63,
  },
  hasMap: "https://maps.google.com/?q=Cami%C5%9Ferif+Mahallesi+Mersin",
  areaServed: [
    { "@type": "Country", name: "Turkey" },
    { "@type": "AdministrativeArea", name: "European Union" },
    { "@type": "Country", name: "Russia" },
    { "@type": "AdministrativeArea", name: "Middle East" },
  ],
  knowsLanguage: ["tr", "en"],
  slogan: {
    tr: "1945'ten bu yana 3 kuşaktır tarladan sofranıza taze ve güvenilir tedarik",
    en: "Fresh and reliable supply from farm to table across 3 generations since 1945",
  },
  disambiguatingDescription: {
    tr: "1945 yılında Mersin'de kurulan, 3 kuşaktır yaş sebze, meyve ve narenciye üretimi ve uluslararası ihracatı yapan Türk tarım ve dış ticaret şirketi.",
    en: "A Turkish agricultural and export company established in Mersin in 1945, producing and exporting fresh citrus, fruits, and vegetables globally across 3 generations.",
  },
  knowsAbout: {
    tr: [
      "Narenciye İhracatı (Portakal, Mandalina, Limon, Greyfurt)",
      "Yaş Meyve ve Sebze İhracatı",
      "Soğuk Zincir Lojistiği ve Soğuk Hava Depoculuğu",
      "Akdeniz ve Çukurova Tarımı",
      "Global GAP ve İyi Tarım Uygulamaları",
      "Tarımsal Paketleme ve Tasnifleme",
      "Uluslararası Yaş Meyve Sebze Dış Ticareti",
    ],
    en: [
      "Citrus Export (Orange, Mandarin, Lemon, Grapefruit)",
      "Fresh Fruits and Vegetables Export",
      "Cold Chain Logistics and Cold Storage",
      "Mediterranean and Cukurova Agriculture",
      "Global GAP and Good Agricultural Practices",
      "Fresh Produce Packaging and Grading",
      "International Agricultural Trade",
    ],
  },
  contactPoints: [
    {
      "@type": "ContactPoint",
      telephone: "+90 324 238 04 38",
      contactType: "sales",
      email: "info@meypal.com.tr",
      areaServed: ["Turkey", "European Union", "Russia", "Middle East"],
      availableLanguage: ["Turkish", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+90 324 238 04 38",
      contactType: "customer support",
      email: "info@meypal.com.tr",
      availableLanguage: ["Turkish", "English"],
    },
  ],
  offerCatalog: {
    tr: {
      name: "Meypal Ürün Hatları",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Narenciye",
          itemListElement: ["Portakal", "Mandalina", "Limon", "Greyfurt"],
        },
        {
          "@type": "OfferCatalog",
          name: "Taze Meyveler",
          itemListElement: [
            "Nar",
            "Üzüm",
            "Ayva",
            "Kiraz",
            "Şeftali",
            "İncir",
            "Kayısı",
            "Karpuz",
            "Kavun",
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Yaş Sebzeler",
          itemListElement: [
            "Domates",
            "Biber",
            "Salatalık",
            "Patlıcan",
            "Lahana",
            "Soğan",
            "Patates",
            "Sarımsak",
          ],
        },
      ],
    },
    en: {
      name: "Meypal Product Lines",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Citrus Fruits",
          itemListElement: ["Orange", "Mandarin", "Lemon", "Grapefruit"],
        },
        {
          "@type": "OfferCatalog",
          name: "Fresh Fruits",
          itemListElement: [
            "Pomegranate",
            "Grape",
            "Quince",
            "Cherry",
            "Peach",
            "Fig",
            "Apricot",
            "Watermelon",
            "Melon",
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Fresh Vegetables",
          itemListElement: [
            "Tomato",
            "Pepper",
            "Cucumber",
            "Eggplant",
            "Cabbage",
            "Onion",
            "Potato",
            "Garlic",
          ],
        },
      ],
    },
  },
} as const
