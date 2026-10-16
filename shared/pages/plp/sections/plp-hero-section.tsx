import { useId } from "react"
import Link from "next/link"
import { FaChevronRight, FaLeaf, FaShieldHalved, FaSnowflake, FaSun } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"
import type { CategoryDetail } from "@/shared/models"

type Translate = Awaited<ReturnType<typeof getTranslator>>

interface PlpHeroSectionProps {
  category: CategoryDetail
  locale: Locale
  t: Translate
}

export function PlpHeroSection({ category, locale, t }: PlpHeroSectionProps) {
  const headingId = useId()
  const subtitle = category.subtitleKey ? t(category.subtitleKey) : undefined
  const badgeText = category.badgeKey ? t(category.badgeKey) : t("categories.common.breadcrumb")

  const quickBadges = [
    {
      icon: FaLeaf,
      text: t("categories.common.freshGuarantee"),
    },
    {
      icon: FaShieldHalved,
      text: t("categories.common.qualityStandards"),
    },
    {
      icon: FaSnowflake,
      text: t("categories.common.coldChain"),
    },
    {
      icon: FaSun,
      text: t("categories.common.origin"),
    },
  ]

  return (
    <section
      aria-labelledby={headingId}
      className="relative overflow-hidden pt-8 pb-12 md:pt-12 md:pb-16"
    >
      {/* Subtle Background Glow Accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-1/2 h-96 w-96 translate-x-1/2 rounded-full bg-gradient-to-br from-[#F58220]/5 via-[#006894]/5 to-transparent blur-3xl"
      />

      <div className="grid-wrapper relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label={t("categories.common.breadcrumb")}
            className="mb-6 flex items-center justify-center gap-2 text-xs font-medium text-[#64748b] sm:text-sm"
          >
            <Link
              className="transition-colors hover:text-[#006894]"
              href={getSiteLink("home", locale)}
            >
              {t("navigation.home")}
            </Link>
            <FaChevronRight aria-hidden="true" className="text-[10px] text-slate-400" />
            <span className="font-semibold text-[#006894]">{t(category.titleKey)}</span>
          </nav>

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#feecd9] bg-[#fff4ec] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#F58220]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F58220]" />
            <span>{badgeText}</span>
          </div>

          {/* Main Title */}
          <h1
            className="mt-4 text-3xl font-black tracking-tight text-[#0f172a] sm:text-4xl md:text-5xl"
            id={headingId}
          >
            {t(category.titleKey)}
          </h1>

          {/* Subtitle / Tagline */}
          {subtitle && (
            <p className="mt-3 text-lg font-semibold text-[#006894] sm:text-xl">{subtitle}</p>
          )}

          {/* Editorial Description */}
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base md:text-lg">
            {t(category.descriptionKey)}
          </p>

          {/* Quick Quality & Origin Feature Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
            {quickBadges.map((badge) => {
              const IconComponent = badge.icon
              return (
                <div
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#334155] shadow-xs transition-colors hover:border-[#006894]/30"
                  key={badge.text}
                >
                  <IconComponent aria-hidden="true" className="text-[12px] text-[#F58220]" />
                  <span>{badge.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
