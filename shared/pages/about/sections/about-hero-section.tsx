import Image from "next/image"
import Link from "next/link"
import { FaChevronRight } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function AboutHeroSection({ locale, t }: { locale: Locale; t: Translate }) {
  const stats = [
    {
      value: t("about.hero.stats.founded"),
      label: t("about.hero.stats.foundedLabel"),
    },
    {
      value: t("about.hero.stats.experience"),
      label: t("about.hero.stats.experienceLabel"),
    },
    {
      value: t("about.hero.stats.generations"),
      label: t("about.hero.stats.generationsLabel"),
    },
    {
      value: t("about.hero.stats.supply"),
      label: t("about.hero.stats.supplyLabel"),
    },
  ]

  return (
    <section className="relative overflow-hidden py-16 text-white md:py-24">
      {/* Background Image with Lightened Overlay */}
      <div className="absolute inset-0">
        <Image
          alt={t("about.hero.imageAlt")}
          className="h-full w-full object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/images/fruits/fresh-fruit-basket.jpg"
        />
        {/* Maximum brightness overlay: very light tint preserving image clarity while keeping text readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#002f43]/45 via-[#002f43]/15 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#002f43]/30 via-transparent to-transparent" />
      </div>

      {/* Decorative ambient glows */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#F58220]/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />

      <div className="grid-wrapper relative z-10">
        {/* Breadcrumb Navigation */}
        <nav
          aria-label="Breadcrumb"
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#002f43]/60 px-3.5 py-1 text-xs font-medium text-white/90 backdrop-blur-md"
        >
          <Link
            className="transition-colors hover:text-[#F58220]"
            href={getSiteLink("home", locale)}
          >
            {t("navigation.home")}
          </Link>
          <FaChevronRight aria-hidden="true" className="text-[10px] text-white/50" />
          <span className="text-white/70">{t("about.breadcrumb")}</span>
          <FaChevronRight aria-hidden="true" className="text-[10px] text-white/50" />
          <span aria-current="page" className="font-semibold text-[#F58220]">
            {t("about.title")}
          </span>
        </nav>

        {/* Hero Content */}
        <div className="max-w-3xl">
          <div>
            <span className="inline-block rounded-full border border-[#F58220]/30 bg-[#002f43]/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#F58220] shadow-sm backdrop-blur-md">
              {t("about.hero.badge")}
            </span>
          </div>

          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-white drop-shadow-md sm:text-4xl md:text-5xl lg:text-6xl">
            {t("about.hero.title")}
          </h1>

          <p className="mt-6 text-base font-medium leading-relaxed text-white drop-shadow-sm sm:text-lg">
            {t("about.hero.description")}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-12 grid grid-cols-2 gap-3.5 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              className="rounded-2xl border border-white/20 bg-[#002f43]/60 p-4 text-center shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#F58220]/50 hover:bg-[#002f43]/80 sm:p-6"
              key={stat.label}
            >
              <div className="text-2xl font-black tracking-tight text-[#F58220] sm:text-3xl lg:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-semibold text-white/90 sm:text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
