import { useId } from "react"
import Image from "next/image"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function CitrusShowcaseSection({ locale, t }: { locale: Locale; t: Translate }) {
  const headingId = useId()
  const categories = [
    {
      title: t("home.citrusShowcase.citrus.title"),
      subtitle: t("home.citrusShowcase.citrus.subtitle"),
      description: t("home.citrusShowcase.citrus.description"),
      image: "/images/fruits/citrus-mandarin.jpeg",
      route: "citrus",
      badge: locale === "tr" ? "Narenciye" : "Citrus",
    },
    {
      title: t("home.citrusShowcase.fruits.title"),
      subtitle: t("home.citrusShowcase.fruits.subtitle"),
      description: t("home.citrusShowcase.fruits.description"),
      image: "/images/fruits/grapes.jpg",
      route: "fruits",
      badge: locale === "tr" ? "Yaş Meyve" : "Fresh Fruit",
    },
    {
      title: t("home.citrusShowcase.vegetables.title"),
      subtitle: t("home.citrusShowcase.vegetables.subtitle"),
      description: t("home.citrusShowcase.vegetables.description"),
      image: "/images/fruits/hero-fruits.jpg",
      route: "vegetables",
      badge: locale === "tr" ? "Taze Sebze" : "Vegetables",
    },
    {
      title: t("home.citrusShowcase.productLines.title"),
      subtitle: t("home.citrusShowcase.productLines.subtitle"),
      description: t("home.citrusShowcase.productLines.description"),
      image: "/images/fruits/fresh-fruit-basket.jpg",
      route: "productLines",
      badge: locale === "tr" ? "Özel Seri" : "Special",
    },
  ]

  return (
    <section aria-labelledby={headingId} className="bg-[#f8fafc] py-16 md:py-24">
      <div className="grid-wrapper">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#F58220]">
              {t("home.citrusShowcase.badge")}
            </span>
            <h2
              className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl md:text-4xl"
              id={headingId}
            >
              {t("home.citrusShowcase.title")}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#64748b] sm:text-base">
              {t("home.citrusShowcase.description")}
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#006894] bg-white px-6 py-2.5 text-sm font-bold text-[#006894] shadow-xs transition-all duration-200 hover:bg-[#006894] hover:text-white"
            href={getSiteLink("citrus", locale)}
          >
            <span>{t("home.citrusShowcase.ctaExplore")}</span>
            <FaArrowRight aria-hidden="true" className="text-xs" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white text-inherit no-underline shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              href={getSiteLink(category.route, locale)}
              key={category.route}
            >
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <Image
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-108"
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  src={category.image}
                  width={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#006894] shadow-sm backdrop-blur-xs">
                  {category.badge}
                </span>
                <div className="absolute bottom-3 left-4 right-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-xs">{category.title}</h3>
                  <p className="line-clamp-1 text-xs text-white/90">{category.subtitle}</p>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-5">
                <p className="line-clamp-3 text-xs leading-relaxed text-[#64748b]">
                  {category.description}
                </p>

                <div className="mt-5 flex items-center gap-1.5 text-xs font-bold text-[#006894] transition-colors group-hover:text-[#F58220]">
                  <span>{locale === "tr" ? "İncele" : "Explore"}</span>
                  <FaArrowRight
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
