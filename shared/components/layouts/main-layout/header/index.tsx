import Link from "next/link"
import Image from "next/image"
import { FaArrowRight, FaBars, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6"
import { getTranslator } from "@/i18n/i18n"
import {
  contactConfig,
  getSiteLink,
  locales,
  navigationConfig,
  type Locale,
  type SiteRoute,
} from "@/shared/config"
import { NavigationLinks } from "./navigation-links"

const topBarLinkClass =
  "inline-flex items-center gap-2 text-inherit no-underline transition-colors duration-[160ms] hover:text-[#F58220]"
const languageLinkClass =
  "rounded-[0.35rem] px-[0.4rem] py-1 text-[0.7rem] font-bold text-inherit no-underline [&[aria-current=page]]:bg-white/20 [&[aria-current=page]]:text-[#F58220]"
const contactLinkClass =
  "inline-flex shrink-0 items-center justify-center gap-[0.65rem] rounded-full bg-[#F58220] px-[1.2rem] py-[0.8rem] text-[0.85rem] font-semibold text-white no-underline shadow-[0_4px_14px_rgb(245_130_32_/_30%)] transition-[background-color,transform] duration-[160ms] hover:-translate-y-px hover:bg-[#dc6e11]"

export default async function Header({
  locale,
  currentRoute,
}: {
  locale: Locale
  currentRoute: SiteRoute
}) {
  const t = await getTranslator(locale)

  return (
    <>
      <div className="bg-[#005073] text-xs text-white max-[700px]:hidden">
        <div className="grid-wrapper flex min-h-[38px] items-center justify-end gap-7 [&_svg]:text-[#F58220]">
          <a className={topBarLinkClass} href={contactConfig.mapUrl}>
            <FaLocationDot aria-hidden="true" />
            <span>{t("header.address")}</span>
          </a>
          <a className={topBarLinkClass} href={contactConfig.phoneUrl}>
            <FaPhone aria-hidden="true" />
            <span>{t("header.phone")}</span>
          </a>
          <a className={topBarLinkClass} href={contactConfig.emailUrl}>
            <FaEnvelope aria-hidden="true" />
            <span>{t("header.email")}</span>
          </a>
          <nav
            aria-label={t("header.language")}
            className="ml-2 inline-flex items-center gap-[0.35rem]"
          >
            {locales.map((language) => (
              <Link
                aria-current={language === locale ? "page" : undefined}
                className={languageLinkClass}
                href={getSiteLink(currentRoute, language)}
                key={language}
                lang={language}
              >
                {language.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-[#e2e8f0] bg-white shadow-sm">
        <div className="grid-wrapper flex min-h-[86px] items-center justify-between gap-6 max-[700px]:min-h-[72px]">
          <Link
            aria-label={t("header.homeLabel")}
            className="inline-flex shrink-0 items-center no-underline"
            href={getSiteLink("home", locale)}
          >
            <Image
              alt="Meypal"
              className="h-14 w-auto object-contain max-[700px]:h-10"
              height={251}
              priority
              src="/logo.png"
              width={572}
            />
          </Link>

          <nav aria-label={t("header.mainMenu")} className="ml-auto max-[1199px]:hidden">
            <NavigationLinks items={navigationConfig} locale={locale} t={t} />
          </nav>

          <Link
            className={`${contactLinkClass} max-[1199px]:hidden`}
            href={getSiteLink("contact", locale)}
          >
            <span>{t("navigation.contact")}</span>
            <FaArrowRight aria-hidden="true" className="shrink-0" />
          </Link>

          <details className="group hidden max-[1199px]:block">
            <summary
              aria-label={t("header.openMenu")}
              className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-lg text-xl text-[#006894] marker:hidden transition-colors hover:bg-[#006894]/10 [&::-webkit-details-marker]:hidden group-open:text-[#F58220]"
            >
              <FaBars aria-hidden="true" />
            </summary>
            <div className="absolute left-0 right-0 top-full max-h-[calc(100dvh-124px)] overflow-y-auto border-t border-[#e2e8f0] bg-white px-[max(1.25rem,calc((100vw-1472px)/2))] py-[0.8rem] shadow-[0_18px_28px_rgb(0_104_148_/_12%)]">
              <nav aria-label={t("header.mobileMenu")}>
                <NavigationLinks items={navigationConfig} locale={locale} mobile t={t} />
              </nav>
              <Link
                className="my-2 flex w-full items-center justify-center gap-[0.65rem] rounded-full bg-[#F58220] px-4 py-[0.85rem] text-[0.85rem] font-semibold text-white no-underline shadow-[0_4px_14px_rgb(245_130_32_/_30%)] transition-[background-color,transform] duration-[160ms] hover:-translate-y-px hover:bg-[#dc6e11]"
                href={getSiteLink("contact", locale)}
              >
                <span>{t("header.mobileContact")}</span>
                <FaArrowRight aria-hidden="true" className="shrink-0" />
              </Link>
              <nav
                aria-label={t("header.language")}
                className="my-3 flex justify-center gap-[0.35rem] [&_a]:rounded-[0.35rem] [&_a]:bg-[#f1f5f9] [&_a]:px-3 [&_a]:py-2 [&_a]:text-[0.7rem] [&_a]:font-bold [&_a]:text-[#1e293b] [&_a]:no-underline [&_a[aria-current=page]]:bg-[#006894] [&_a[aria-current=page]]:text-white"
              >
                {locales.map((language) => (
                  <Link
                    aria-current={language === locale ? "page" : undefined}
                    href={getSiteLink(currentRoute, language)}
                    key={language}
                    lang={language}
                  >
                    {language.toUpperCase()}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </header>
    </>
  )
}
