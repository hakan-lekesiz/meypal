export const locales = ["tr", "en"] as const

export type Locale = (typeof locales)[number]
export type SiteRoute = keyof typeof PAGES

export const defaultLocale: Locale = "tr"
export const siteOrigin = "https://meypal.com.tr"

export const PAGES = {
  home: { tr: "/", en: "/en" },
  about: { tr: "/hakkimizda", en: "/about" },
  mission: { tr: "/misyon", en: "/mission" },
  vision: { tr: "/vizyon", en: "/vision" },
  contact: { tr: "/iletisim", en: "/contact" },
  citrus: { tr: "/narenciye", en: "/citrus" },
  orange: { tr: "/narenciye/portakal", en: "/citrus/orange" },
  mandarin: { tr: "/narenciye/mandalina", en: "/citrus/mandarin" },
  grapefruit: { tr: "/narenciye/greyfurt", en: "/citrus/grapefruit" },
  lemon: { tr: "/narenciye/limon", en: "/citrus/lemon" },
  fruits: { tr: "/meyve", en: "/fruit" },
  peach: { tr: "/meyve/seftali", en: "/fruit/peach" },
  cherry: { tr: "/meyve/kiraz", en: "/fruit/cherry" },
  quince: { tr: "/meyve/ayva", en: "/fruit/quince" },
  fig: { tr: "/meyve/incir", en: "/fruit/fig" },
  pomegranate: { tr: "/meyve/nar", en: "/fruit/pomegranate" },
  grape: { tr: "/meyve/uzum", en: "/fruit/grape" },
  apricot: { tr: "/meyve/kayisi", en: "/fruit/apricot" },
  watermelon: { tr: "/meyve/karpuz", en: "/fruit/watermelon" },
  melon: { tr: "/meyve/kavun", en: "/fruit/melon" },
  vegetables: { tr: "/sebze", en: "/vegetables" },
  tomato: { tr: "/sebze/domates", en: "/vegetables/tomato" },
  cucumber: { tr: "/sebze/salatalik", en: "/vegetables/cucumber" },
  eggplant: { tr: "/sebze/patlican", en: "/vegetables/eggplant" },
  pepper: { tr: "/sebze/biber", en: "/vegetables/pepper" },
  cabbage: { tr: "/sebze/lahana", en: "/vegetables/cabbage" },
  onion: { tr: "/sebze/sogan", en: "/vegetables/onion" },
  potato: { tr: "/sebze/patates", en: "/vegetables/potato" },
  garlic: { tr: "/sebze/sarimsak", en: "/vegetables/garlic" },
  productLines: { tr: "/meypal-urun-hatlari", en: "/product-lines" },
  readyToEat: { tr: "/kullanima-hazir-urunler", en: "/ready-to-eat" },
  organic: { tr: "/organik", en: "/organic" },
  excitingFlavors: { tr: "/heyecan-verici-tatlar", en: "/exciting-flavors" },
  catalog: { tr: "/e-katalog", en: "/e-catalog" },
  gallery: { tr: "/galeri", en: "/gallery" },
} as const satisfies Record<string, Record<Locale, string>>

export const CONFIG = {
  locales,
  defaultLocale,
  pathnames: PAGES,
} as const

export const siteLinks = PAGES

export const navigationConfig = [
  { label: "navigation.home", route: "home" },
  {
    label: "navigation.company",
    route: "about",
    children: [
      { label: "navigation.about", route: "about" },
      { label: "navigation.mission", route: "mission" },
      { label: "navigation.vision", route: "vision" },
      { label: "navigation.gallery", route: "gallery" },
    ],
  },
  {
    label: "navigation.citrus",
    route: "citrus",
    children: [
      { label: "navigation.orange", route: "orange" },
      { label: "navigation.mandarin", route: "mandarin" },
      { label: "navigation.grapefruit", route: "grapefruit" },
      { label: "navigation.lemon", route: "lemon" },
    ],
  },
  {
    label: "navigation.fruits",
    route: "fruits",
    children: [
      { label: "navigation.peach", route: "peach" },
      { label: "navigation.cherry", route: "cherry" },
      { label: "navigation.quince", route: "quince" },
      { label: "navigation.fig", route: "fig" },
      { label: "navigation.pomegranate", route: "pomegranate" },
      { label: "navigation.grape", route: "grape" },
      { label: "navigation.apricot", route: "apricot" },
      { label: "navigation.watermelon", route: "watermelon" },
      { label: "navigation.melon", route: "melon" },
    ],
  },
  {
    label: "navigation.vegetables",
    route: "vegetables",
    children: [
      { label: "navigation.tomato", route: "tomato" },
      { label: "navigation.cucumber", route: "cucumber" },
      { label: "navigation.eggplant", route: "eggplant" },
      { label: "navigation.pepper", route: "pepper" },
      { label: "navigation.cabbage", route: "cabbage" },
      { label: "navigation.onion", route: "onion" },
      { label: "navigation.potato", route: "potato" },
      { label: "navigation.garlic", route: "garlic" },
    ],
  },
  {
    label: "navigation.productLines",
    route: "productLines",
    children: [
      { label: "navigation.readyToEat", route: "readyToEat" },
      { label: "navigation.organic", route: "organic" },
      { label: "navigation.excitingFlavors", route: "excitingFlavors" },
    ],
  },
  { label: "navigation.catalog", route: "catalog" },
] as const satisfies readonly NavigationItem[]

export const footerCompanyLinks = [
  { label: "navigation.about", route: "about" },
  { label: "navigation.mission", route: "mission" },
  { label: "navigation.vision", route: "vision" },
  { label: "navigation.gallery", route: "gallery" },
  { label: "navigation.contact", route: "contact" },
] as const satisfies readonly NavigationLink[]

export const footerProductLinks = [
  { label: "navigation.citrus", route: "citrus" },
  { label: "navigation.fruits", route: "fruits" },
  { label: "navigation.vegetables", route: "vegetables" },
  { label: "navigation.productLines", route: "productLines" },
  { label: "navigation.catalog", route: "catalog" },
] as const satisfies readonly NavigationLink[]

export const contactConfig = {
  mapUrl: "https://maps.app.goo.gl/yr6ZMNja3AWu9gAx6",
  maps: {
    mersinHq: "https://maps.app.goo.gl/yr6ZMNja3AWu9gAx6",
    antalyaBranch: "https://maps.app.goo.gl/vUj6jpzVGtVdk5VZ7",
    londonUk: "https://maps.app.goo.gl/ZUAVnt23n6ZjBrEW7",
  },
  phoneUrl: "tel:+903242380438",
  emailUrl: "mailto:info@meypal.com.tr",
} as const

export const pageTitleKeys: Record<string, string> = {
  home: "home.title",
  about: "about.title",
  mission: "navigation.mission",
  vision: "navigation.vision",
  citrus: "navigation.citrus",
  orange: "navigation.orange",
  mandarin: "navigation.mandarin",
  grapefruit: "navigation.grapefruit",
  lemon: "navigation.lemon",
  fruits: "navigation.fruits",
  peach: "navigation.peach",
  cherry: "navigation.cherry",
  quince: "navigation.quince",
  fig: "navigation.fig",
  pomegranate: "navigation.pomegranate",
  grape: "navigation.grape",
  apricot: "navigation.apricot",
  watermelon: "navigation.watermelon",
  melon: "navigation.melon",
  vegetables: "navigation.vegetables",
  tomato: "navigation.tomato",
  cucumber: "navigation.cucumber",
  eggplant: "navigation.eggplant",
  pepper: "navigation.pepper",
  cabbage: "navigation.cabbage",
  onion: "navigation.onion",
  potato: "navigation.potato",
  garlic: "navigation.garlic",
  productLines: "navigation.productLines",
  readyToEat: "navigation.readyToEat",
  organic: "navigation.organic",
  excitingFlavors: "navigation.excitingFlavors",
  catalog: "navigation.catalog",
  contact: "navigation.contact",
  gallery: "navigation.gallery",
}

type NavigationItem = {
  label: string
  route: string
  children?: readonly NavigationItem[]
}

type NavigationLink = {
  label: string
  route: string
}

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value)
}

export function getSiteLink(route: string, locale: Locale): string {
  const page = PAGES[route as SiteRoute]
  if (!page) return locale === "tr" ? "/" : "/en"
  return page[locale] ?? (locale === "tr" ? "/" : "/en")
}
