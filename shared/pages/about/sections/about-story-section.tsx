import { useId } from "react"
import Image from "next/image"
import { FaCalendarCheck, FaClock, FaSeedling, FaUsers } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function AboutStorySection({ locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()

  const highlights = [
    {
      icon: FaUsers,
      iconColor: "text-[#006894] bg-[#006894]/10",
      title: locale === "tr" ? "3 Kuşaklık Aile Şirketi" : "3-Generation Family Business",
      description:
        locale === "tr"
          ? "70 yılı aşkın köklü tecrübe ve güvenle nesilden nesile aktarılan tarımsal uzmanlık."
          : "Over 70 years of rooted agricultural expertise and trust passed down through generations.",
    },
    {
      icon: FaClock,
      iconColor: "text-[#F58220] bg-[#F58220]/10",
      title: locale === "tr" ? "12 Ay Kesintisiz İhracat" : "12-Month Year-Round Export",
      description:
        locale === "tr"
          ? "Ülkemizin dört bir yanından yılın 12 ayı kesintisiz tedarik ve uluslararası sevkiyat."
          : "Year-round uninterrupted supply and international shipments across all regions of Turkey.",
    },
    {
      icon: FaSeedling,
      iconColor: "text-emerald-600 bg-emerald-500/10",
      title: locale === "tr" ? "Dalından İlk Günkü Tazelik" : "Day-One Orchard Freshness",
      description:
        locale === "tr"
          ? "Akdeniz'in en seçkin meyve ve sebzeleri titiz kalite kontrolüyle sofralara taşınır."
          : "Finest Mediterranean fruits and vegetables delivered to tables with rigorous quality control.",
    },
  ]

  return (
    <section aria-labelledby={headingId} className="bg-white py-16 md:py-24">
      <div className="grid-wrapper">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Visual Showcase Side */}
          <div className="relative order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto max-w-[500px]">
              <div className="overflow-hidden rounded-3xl border border-[#e2e8f0] shadow-xl">
                <Image
                  alt={t("about.story.title")}
                  className="h-[380px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[480px]"
                  height={800}
                  sizes="(max-width: 1024px) 100vw, 500px"
                  src="/images/fruits/fruit-basket.jpg"
                  width={1200}
                />
              </div>

              {/* Founding Year Badge */}
              <div className="absolute -bottom-5 left-3 rounded-2xl border border-white/80 bg-white p-3.5 shadow-xl sm:-bottom-8 sm:-left-6 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#006894] text-white sm:h-12 sm:w-12">
                    <FaCalendarCheck aria-hidden="true" className="text-xl sm:text-2xl" />
                  </div>
                  <div>
                    <span className="text-xl font-black text-[#0f172a] sm:text-2xl">1945</span>
                    <p className="text-xs font-semibold text-[#64748b]">
                      {locale === "tr" ? "Kuruluş Yılı" : "Established"}
                    </p>
                  </div>
                </div>
              </div>

              {/* 3 Generations Badge */}
              <div className="absolute right-3 -top-5 rounded-2xl border border-white/80 bg-[#002f43] p-3.5 text-white shadow-xl sm:-right-6 sm:-top-6 sm:p-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F58220]">
                  {locale === "tr" ? "3 Kuşaklık Miras" : "3-Gen Heritage"}
                </span>
                <p className="mt-0.5 text-xs font-semibold text-white/80">
                  {locale === "tr" ? "Aile Şirketi Güveni" : "Family Enterprise"}
                </p>
              </div>
            </div>
          </div>

          {/* Text & Highlights Side */}
          <div className="order-1 lg:order-2 lg:col-span-7">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#c2410c]">
              {t("about.story.badge")}
            </span>

            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
              id={headingId}
            >
              {t("about.story.title")}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[#334155] sm:text-lg">
              {t("about.story.paragraph1")}
            </p>

            <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">
              {t("about.story.paragraph2")}
            </p>

            {/* 3 Highlights List */}
            <div className="mt-8 grid gap-4 sm:grid-cols-1">
              {highlights.map((item) => {
                const IconComponent = item.icon
                return (
                  <div
                    className="flex items-start gap-4 rounded-2xl border border-[#e2e8f0] bg-slate-50/60 p-4 transition-all hover:border-[#006894]/30 hover:bg-white hover:shadow-md"
                    key={item.title}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.iconColor}`}
                    >
                      <IconComponent aria-hidden="true" className="text-lg" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#0f172a]">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#64748b]">{item.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
