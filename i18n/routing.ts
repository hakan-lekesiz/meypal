import { defineRouting } from "next-intl/routing"
import { CONFIG } from "@/shared/config"

export const routing = defineRouting({
  locales: CONFIG.locales,
  defaultLocale: CONFIG.defaultLocale,
  localePrefix: "never",
  localeDetection: true,
  pathnames: {
    "/": {
      tr: "/",
      en: "/en",
    },
    "/about": {
      tr: "/hakkimizda",
      en: "/about",
    },
    "/mission": {
      tr: "/misyon",
      en: "/mission",
    },
    "/vision": {
      tr: "/vizyon",
      en: "/vision",
    },
    "/contact": {
      tr: "/iletisim",
      en: "/contact",
    },
    "/citrus": {
      tr: "/narenciye",
      en: "/citrus",
    },
    "/citrus/orange": {
      tr: "/narenciye/portakal",
      en: "/citrus/orange",
    },
    "/citrus/mandarin": {
      tr: "/narenciye/mandalina",
      en: "/citrus/mandarin",
    },
    "/citrus/grapefruit": {
      tr: "/narenciye/greyfurt",
      en: "/citrus/grapefruit",
    },
    "/citrus/lemon": {
      tr: "/narenciye/limon",
      en: "/citrus/lemon",
    },
    "/fruit": {
      tr: "/meyve",
      en: "/fruit",
    },
    "/fruit/peach": {
      tr: "/meyve/seftali",
      en: "/fruit/peach",
    },
    "/fruit/cherry": {
      tr: "/meyve/kiraz",
      en: "/fruit/cherry",
    },
    "/fruit/quince": {
      tr: "/meyve/ayva",
      en: "/fruit/quince",
    },
    "/fruit/fig": {
      tr: "/meyve/incir",
      en: "/fruit/fig",
    },
    "/fruit/pomegranate": {
      tr: "/meyve/nar",
      en: "/fruit/pomegranate",
    },
    "/fruit/grape": {
      tr: "/meyve/uzum",
      en: "/fruit/grape",
    },
    "/fruit/apricot": {
      tr: "/meyve/kayisi",
      en: "/fruit/apricot",
    },
    "/fruit/watermelon": {
      tr: "/meyve/karpuz",
      en: "/fruit/watermelon",
    },
    "/fruit/melon": {
      tr: "/meyve/kavun",
      en: "/fruit/melon",
    },
    "/vegetables": {
      tr: "/sebze",
      en: "/vegetables",
    },
    "/vegetables/tomato": {
      tr: "/sebze/domates",
      en: "/vegetables/tomato",
    },
    "/vegetables/cucumber": {
      tr: "/sebze/salatalik",
      en: "/vegetables/cucumber",
    },
    "/vegetables/eggplant": {
      tr: "/sebze/patlican",
      en: "/vegetables/eggplant",
    },
    "/vegetables/pepper": {
      tr: "/sebze/biber",
      en: "/vegetables/pepper",
    },
    "/vegetables/cabbage": {
      tr: "/sebze/lahana",
      en: "/vegetables/cabbage",
    },
    "/vegetables/onion": {
      tr: "/sebze/sogan",
      en: "/vegetables/onion",
    },
    "/vegetables/potato": {
      tr: "/sebze/patates",
      en: "/vegetables/potato",
    },
    "/vegetables/garlic": {
      tr: "/sebze/sarimsak",
      en: "/vegetables/garlic",
    },
    "/product-lines": {
      tr: "/meypal-urun-hatlari",
      en: "/product-lines",
    },
    "/ready-to-eat": {
      tr: "/kullanima-hazir-urunler",
      en: "/ready-to-eat",
    },
    "/organic": {
      tr: "/organik",
      en: "/organic",
    },
    "/exciting-flavors": {
      tr: "/heyecan-verici-tatlar",
      en: "/exciting-flavors",
    },
    "/e-catalog": {
      tr: "/e-katalog",
      en: "/e-catalog",
    },
  },
})
