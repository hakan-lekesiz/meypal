import Link from "next/link"
import { FaArrowRight, FaBars, FaEnvelope, FaLeaf, FaLocationDot, FaPhone } from "react-icons/fa6"
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
  "inline-flex items-center gap-2 text-inherit no-underline transition-colors duration-[160ms] hover:text-[#f5bd52]"
const languageLinkClass =
  "rounded-[0.35rem] px-[0.4rem] py-1 text-[0.7rem] font-bold text-inherit no-underline [&[aria-current=page]]:bg-white/15 [&[aria-current=page]]:text-[#f5bd52]"
const contactLinkClass =
  "inline-flex shrink-0 items-center justify-center gap-[0.65rem] rounded-full bg-[#39804e] px-[1.1rem] py-[0.8rem] text-[0.85rem] font-semibold text-white no-underline transition-[background-color,transform] duration-[160ms] hover:-translate-y-px hover:bg-[#28683c]"

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
      <div className="bg-[#174d35] text-xs text-white max-[700px]:hidden">
        <div className="grid-wrapper flex min-h-[38px] items-center justify-end gap-7 [&_svg]:text-[#f5bd52]">
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

      <header className="sticky top-0 z-40 border-b border-[#e9eee9] bg-white/95 backdrop-blur-xl">
        <div className="grid-wrapper flex min-h-[86px] items-center justify-between gap-6 max-[700px]:min-h-[72px]">
          <Link
            aria-label={t("header.homeLabel")}
            className="inline-flex shrink-0 items-center gap-[0.65rem] text-[#174d35] no-underline"
            href={getSiteLink("home", locale)}
          >
            <span
              aria-hidden="true"
              className="grid h-[42px] w-[42px] place-items-center rounded-full bg-[#edf5ed] text-xl text-[#39804e] max-[700px]:h-[38px] max-[700px]:w-[38px]"
            >
              <FaLeaf />
            </span>
            <span className="flex flex-col leading-none">
              <strong className="text-[1.65rem] font-bold tracking-[-0.07em] max-[700px]:text-2xl">
                Meypal
              </strong>
              <span className="mt-[0.35rem] text-[0.63rem] tracking-[0.02em] text-[#778276]">
                {t("header.tagline")}
              </span>
            </span>
          </Link>

          <nav aria-label={t("header.mainMenu")} className="ml-auto max-[1199px]:hidden">
            <NavigationLinks items={navigationConfig} locale={locale} t={t} />
          </nav>

          <Link
            className={`${contactLinkClass} max-[1199px]:hidden`}
            href={getSiteLink("contact", locale)}
          >
            {t("navigation.contact")} <FaArrowRight aria-hidden="true" />
          </Link>

          <details className="group hidden max-[1199px]:block">
            <summary className="inline-flex min-h-11 cursor-pointer list-none items-center gap-[0.55rem] text-[0.9rem] font-semibold text-[#174d35] marker:hidden [&::-webkit-details-marker]:hidden group-open:text-[#39804e]">
              <FaBars aria-hidden="true" />
              <span>{t("header.openMenu")}</span>
            </summary>
            <div className="absolute left-0 right-0 top-full max-h-[calc(100dvh-124px)] overflow-y-auto border-t border-[#e9eee9] bg-white px-[max(1.25rem,calc((100vw-1472px)/2))] py-[0.8rem] shadow-[0_18px_28px_rgb(24_48_31_/_12%)]">
              <nav aria-label={t("header.mobileMenu")}>
                <NavigationLinks items={navigationConfig} locale={locale} t={t} mobile />
              </nav>
              <Link
                className="my-2 block w-full rounded-full bg-[#39804e] px-4 py-[0.85rem] text-center text-[0.85rem] font-semibold text-white no-underline transition-[background-color,transform] duration-[160ms] hover:-translate-y-px hover:bg-[#28683c]"
                href={getSiteLink("contact", locale)}
              >
                {t("header.mobileContact")} <FaArrowRight aria-hidden="true" />
              </Link>
              <nav
                aria-label={t("header.language")}
                className="my-3 flex justify-center gap-[0.35rem] [&_a]:rounded-[0.35rem] [&_a]:bg-[#f3f7f2] [&_a]:px-3 [&_a]:py-2 [&_a]:text-[0.7rem] [&_a]:font-bold [&_a]:text-[#174d35] [&_a]:no-underline [&_a[aria-current=page]]:text-[#39804e]"
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
