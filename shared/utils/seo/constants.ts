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
  foundingDate: "1935",
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
    streetAddress: "Camişerif Mah., 5232 Sk., Buğdaycı Apartmanı, Kat: 2, No: 11",
    addressLocality: "Akdeniz",
    addressRegion: "Mersin",
    postalCode: "33060",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.8026,
    longitude: 34.6319,
  },
  hasMap: "https://maps.app.goo.gl/yr6ZMNja3AWu9gAx6",
  sameAs: [
    "https://maps.app.goo.gl/yr6ZMNja3AWu9gAx6",
    "https://www.linkedin.com/in/hakan-lekesiz/",
  ],
  areaServed: [
    { "@type": "Country", name: "Turkey" },
    { "@type": "AdministrativeArea", name: "European Union" },
    { "@type": "Country", name: "Russia" },
    { "@type": "AdministrativeArea", name: "Middle East" },
  ],
  knowsLanguage: ["tr", "en"],
  slogan: {
    tr: "1935'ten bu yana 3 kuşaktır tarladan sofranıza taze ve güvenilir tedarik",
    en: "Fresh and reliable supply from farm to table across 3 generations since 1935",
  },
  disambiguatingDescription: {
    tr: "1935 yılında Mersin'de kurulan, 3 kuşaktır yaş sebze, meyve ve narenciye üretimi ve uluslararası ihracatı yapan Türk tarım ve dış ticaret şirketi.",
    en: "A Turkish agricultural and export company established in Mersin in 1935, producing and exporting fresh citrus, fruits, and vegetables globally across 3 generations.",
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
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Portakal" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Mandalina" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Limon" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Greyfurt" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Taze Meyveler",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Nar" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Üzüm" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ayva" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kiraz" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Şeftali" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "İncir" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kayısı" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Karpuz" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Kavun" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Yaş Sebzeler",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Domates" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Biber" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Salatalık" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Patlıcan" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lahana" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Soğan" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Patates" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Sarımsak" } },
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
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Orange" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Mandarin" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Lemon" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Grapefruit" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Fresh Fruits",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pomegranate" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Grape" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Quince" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cherry" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Peach" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Fig" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Apricot" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Watermelon" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Melon" } },
          ],
        },
        {
          "@type": "OfferCatalog",
          name: "Fresh Vegetables",
          itemListElement: [
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Tomato" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Pepper" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cucumber" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Eggplant" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Cabbage" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Onion" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Potato" } },
            { "@type": "Offer", itemOffered: { "@type": "Product", name: "Garlic" } },
          ],
        },
      ],
    },
  },
} as const
