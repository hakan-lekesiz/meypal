import type { getTranslator } from "@/i18n/i18n"
import type { Locale } from "@/shared/config"
import Image from "next/image"
import { FaFilePdf } from "react-icons/fa6"

type Translate = Awaited<ReturnType<typeof getTranslator>>

export function CatalogDownloadSection({ locale, t }: { locale: Locale; t: Translate }) {
  const isTr = locale === "tr"
  const pdfHref = isTr
    ? "/images/catalog/tr_meypal_katalog.pdf"
    : "/images/catalog/en_meypal_catalog.pdf"
  const pdfDownloadName = isTr ? "tr_meypal_katalog.pdf" : "en_meypal_catalog.pdf"

  return (
    <section className="relative overflow-hidden py-12 md:py-20 lg:py-24">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9]/50 to-white"
      />

      <div className="grid-wrapper">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Headings & Download Card */}
          <div className="flex flex-col lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0f172a] sm:text-sm">
              {t("catalog.eyebrow")}
            </span>

            <h1 className="mt-2 font-serif text-4xl font-bold italic tracking-tight text-[#004e70] sm:text-5xl md:text-6xl">
              {t("catalog.title")}
            </h1>

            <p className="mt-6 text-sm leading-relaxed text-[#64748b] sm:text-base">
              {t("catalog.description")}
            </p>

            {/* Download Card matching the visual in the screenshot */}
            <div className="mt-8 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgb(0_104_148_/_6%)] transition-shadow hover:shadow-[0_12px_40px_rgb(0_104_148_/_10%)] sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  {/* PDF Icon Badge */}
                  <div className="flex h-14 w-12 flex-col items-center justify-center rounded-lg border border-red-200 bg-red-50/70 p-1 text-red-600 shadow-xs">
                    <FaFilePdf aria-hidden="true" className="text-xl" />
                    <span className="mt-0.5 text-[9px] font-bold tracking-wider text-red-700">
                      PDF
                    </span>
                  </div>

                  {/* Title & File Info */}
                  <div>
                    <a
                      className="text-lg font-bold text-[#1e293b] underline decoration-slate-300 underline-offset-4 transition-colors hover:text-[#006894]"
                      download={pdfDownloadName}
                      href={pdfHref}
                    >
                      {t("catalog.downloadBox.title")}
                    </a>
                    <div className="mt-1 flex items-center gap-1.5 text-xs text-[#64748b]">
                      <span aria-hidden="true">🗎</span>
                      <span>{t("catalog.downloadBox.fileInfo")}</span>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <a
                  className="inline-flex items-center justify-center rounded-md bg-[#3b82f6] px-5 py-2.5 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:bg-[#2563eb] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[#3b82f6] focus:ring-offset-2"
                  download={pdfDownloadName}
                  href={pdfHref}
                >
                  {t("catalog.downloadBox.button")}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Catalog Image Showcase */}
          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,104,148,0.15)]">
              <div className="relative aspect-[1329/854] w-full">
                <Image
                  alt={t("catalog.title")}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                  height={854}
                  priority
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  src="/images/catalog/mey.jpg"
                  width={1329}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
