import { useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight, FaAward, FaCalendarCheck, FaSeedling, FaSitemap } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function AboutCompanySection({ locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()
  const pillars = [
    {
      icon: FaSeedling,
      iconColor: "text-emerald-600 bg-emerald-500/10",
      title: t("home.aboutCompany.pillar1.title"),
      description: t("home.aboutCompany.pillar1.description"),
    },
    {
      icon: FaSitemap,
      iconColor: "text-[#006894] bg-[#006894]/10",
      title: t("home.aboutCompany.pillar2.title"),
      description: t("home.aboutCompany.pillar2.description"),
    },
    {
      icon: FaAward,
      iconColor: "text-[#F58220] bg-[#F58220]/10",
      title: t("home.aboutCompany.pillar3.title"),
      description: t("home.aboutCompany.pillar3.description"),
    },
  ]

  return (
    <section aria-labelledby={headingId} className="py-16 md:py-24">
      <div className="grid-wrapper">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image & Trust Side */}
          <div className="reveal relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-[500px]">
              <div className="overflow-hidden rounded-3xl border border-[#e2e8f0] shadow-xl">
                <Image
                  alt={t("home.aboutCompany.title")}
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[460px]"
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  src="/images/fruits/fruit-basket.jpg"
                  width={1200}
                />
              </div>

              {/* Founding Year Badge */}
              <div className="animate-float absolute -bottom-4 left-2 rounded-2xl border border-white/80 bg-white p-3.5 shadow-xl sm:-bottom-8 sm:-left-6 sm:p-5">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#006894] text-white sm:h-12 sm:w-12">
                    <FaCalendarCheck aria-hidden="true" className="text-lg sm:text-xl" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-[#0f172a] sm:text-2xl">
                      {t("home.aboutCompany.establishedYear")}
                    </span>
                    <p className="text-xs font-semibold text-[#64748b]">
                      {t("home.aboutCompany.establishedLabel")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Family Business Badge */}
              <div className="animate-float-delayed absolute -top-4 right-2 rounded-2xl border border-white/80 bg-[#002f43] p-3 text-white shadow-xl sm:-right-6 sm:-top-6 sm:p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
                  {locale === "tr" ? "3 Kuşaklık Miras" : "3-Gen Heritage"}
                </span>
                <p className="mt-0.5 text-xs font-semibold text-white/80">
                  {locale === "tr" ? "Aile Şirketi Güveni" : "Family Enterprise"}
                </p>
              </div>
            </div>
          </div>

          {/* Text & Pillars Side */}
          <div className="reveal reveal-delay-2 order-1 lg:order-2 lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
              {t("home.aboutCompany.badge")}
            </span>
            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
              id={headingId}
            >
              {t("home.aboutCompany.title")}
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">
              {t("home.aboutCompany.paragraph1")}
            </p>

            <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base">
              {t("home.aboutCompany.paragraph2")}
            </p>

            {/* 3 Pillars */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {pillars.map((pillar) => {
                const Icon = pillar.icon
                return (
                  <div
                    className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] p-4 transition-all duration-200 hover:border-[#006894]/30 hover:bg-white hover:shadow-md"
                    key={pillar.title}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${pillar.iconColor}`}
                    >
                      <Icon aria-hidden="true" className="text-lg" />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-[#0f172a]">{pillar.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-[#64748b]">
                      {pillar.description}
                    </p>
                  </div>
                )
              })}
            </div>

            <div className="mt-8">
              <Link
                className="inline-flex items-center gap-2 rounded-full bg-[#006894] px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-[#005073] hover:shadow-md"
                href={getSiteLink("about", locale)}
              >
                <span>{t("home.aboutCompany.ctaMore")}</span>
                <FaArrowRight aria-hidden="true" className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
