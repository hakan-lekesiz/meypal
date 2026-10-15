import { getTranslator } from "@/i18n/i18n"
import { MainLayout } from "@/shared/components/layouts"
import type { Locale } from "@/shared/config"
import {
  AboutCompanySection,
  CitrusShowcaseSection,
  CoreValuesSection,
  HeroSection,
  type HeroSlide,
  MissionStatsSection,
  OperationCtaSection,
} from "./sections"

export async function HomePage({ locale }: { locale: Locale }) {
  const t = await getTranslator(locale)

  const slides: HeroSlide[] = [
    {
      badge: t("home.hero.slides.0.badge"),
      title: t("home.hero.slides.0.title"),
      description: t("home.hero.slides.0.description"),
      image: "/images/fruits/hero-fruits.jpg",
    },
    {
      badge: t("home.hero.slides.1.badge"),
      title: t("home.hero.slides.1.title"),
      description: t("home.hero.slides.1.description"),
      image: "/images/fruits/citrus-mandarin.jpeg",
    },
    {
      badge: t("home.hero.slides.2.badge"),
      title: t("home.hero.slides.2.title"),
      description: t("home.hero.slides.2.description"),
      image: "/images/fruits/fresh-fruit-basket.jpg",
    },
  ]

  return (
    <MainLayout currentRoute="home" locale={locale}>
      <HeroSection
        nextLabel={t("home.hero.nextSlide")}
        prevLabel={t("home.hero.prevSlide")}
        slides={slides}
      />
      <CoreValuesSection locale={locale} t={t} />
      <CitrusShowcaseSection locale={locale} t={t} />
      <MissionStatsSection locale={locale} t={t} />
      <AboutCompanySection locale={locale} t={t} />
      <OperationCtaSection locale={locale} t={t} />
    </MainLayout>
  )
}
