import Link from "next/link"
import { useId } from "react"
import { FaArrowRight, FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6"
import { getTranslator } from "@/i18n/i18n"
import {
  contactConfig,
  footerCompanyLinks,
  footerProductLinks,
  getSiteLink,
  type Locale,
} from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>
type FooterLink = {
  label: string
  route: string
}

function FooterLinks({
  links,
  locale,
  t,
}: {
  links: readonly FooterLink[]
  locale: Locale
  t: Translate
}) {
  return (
    <ul className="m-0 grid list-none gap-[0.7rem] p-0">
      {links.map((link) => (
        <li key={link.route}>
          <Link
            className="text-[0.85rem] text-[#b7c9bb] no-underline transition-colors duration-[160ms] hover:text-[#f4c45f]"
            href={getSiteLink(link.route, locale)}
          >
            {t(link.label)}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export async function Footer({ locale }: { locale: Locale }) {
  const ctaTitleId = useId()
  const t = await getTranslator(locale)

  return (
    <footer className="bg-[#123b2a] py-12 pb-5 text-[#e7efe8] max-[600px]:pt-6">
      <div className="grid-wrapper flex flex-col">
        <section
          aria-labelledby={ctaTitleId}
          className="flex min-h-[210px] items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#1b5a3d] bg-[linear-gradient(90deg,_#1b5a3d_5%,_rgb(27_90_61_/_95%)_44%,_rgb(27_90_61_/_25%)_100%),url('/images/fruits/fruit-basket.jpg')] bg-cover bg-center px-[clamp(1.5rem,5vw,4rem)] py-9 max-[600px]:min-h-0 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-5 max-[600px]:bg-[linear-gradient(90deg,_rgb(27_90_61_/_94%),_rgb(27_90_61_/_78%)),url('/images/fruits/fruit-basket.jpg')] max-[600px]:px-[1.35rem] max-[600px]:py-7"
        >
          <div className="max-w-[540px]">
            <span className="text-xs font-bold uppercase tracking-[0.13em] text-[#f4c45f]">
              {t("footer.eyebrow")}
            </span>
            <h2
              className="my-[0.6rem] mb-[0.45rem] text-[clamp(1.55rem,3vw,2.25rem)] font-bold leading-[1.2] tracking-[-0.04em] text-white"
              id={ctaTitleId}
            >
              {t("footer.ctaTitle")}
            </h2>
            <p className="m-0 text-[0.92rem] leading-[1.6] text-white/80">
              {t("footer.ctaDescription")}
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center justify-center gap-[0.6rem] rounded-full bg-white px-[1.2rem] py-[0.9rem] text-[0.9rem] font-bold text-[#174d35] no-underline transition-[background-color,transform] duration-[160ms] hover:-translate-y-px hover:bg-[#f5ead0]"
            href={getSiteLink("contact", locale)}
          >
            {t("footer.ctaButton")} <FaArrowRight aria-hidden="true" />
          </Link>
        </section>

        <div className="grid grid-cols-[1.35fr_0.8fr_0.9fr_1.4fr] gap-[clamp(1.5rem,4vw,4rem)] py-[3.25rem] pb-10 max-[900px]:grid-cols-2 max-[900px]:gap-x-12 max-[900px]:gap-y-9 max-[600px]:grid-cols-2 max-[600px]:gap-x-5 max-[600px]:gap-y-8 max-[600px]:py-9">
          <div className="max-[600px]:col-span-full">
            <Link
              aria-label={t("header.homeLabel")}
              className="inline-flex items-center gap-[0.65rem] text-[1.45rem] font-bold tracking-[-0.06em] text-white no-underline"
              href={getSiteLink("home", locale)}
            >
              <span
                aria-hidden="true"
                className="grid h-[38px] w-[38px] place-items-center rounded-full bg-[#f4c45f] text-base tracking-[-0.04em] text-[#174d35]"
              >
                M
              </span>
              <span>Meypal</span>
            </Link>
            <p className="mt-4 max-w-[290px] text-[0.88rem] leading-[1.75] text-[#b7c9bb] max-[600px]:max-w-[360px]">
              {t("footer.brandDescription")}
            </p>
          </div>

          <nav aria-label={t("footer.company")}>
            <h3 className="mb-[1.1rem] mt-0 text-[0.92rem] font-bold text-white">
              {t("footer.company")}
            </h3>
            <FooterLinks links={footerCompanyLinks} locale={locale} t={t} />
          </nav>

          <nav aria-label={t("footer.products")}>
            <h3 className="mb-[1.1rem] mt-0 text-[0.92rem] font-bold text-white">
              {t("footer.products")}
            </h3>
            <FooterLinks links={footerProductLinks} locale={locale} t={t} />
          </nav>

          <div className="max-[600px]:col-span-full">
            <h3 className="mb-[1.1rem] mt-0 text-[0.92rem] font-bold text-white">
              {t("footer.contact")}
            </h3>
            <address className="grid gap-[0.85rem] not-italic">
              <a
                className="grid grid-cols-[16px_1fr] items-start gap-[0.7rem] text-[0.84rem] leading-[1.6] text-[#b7c9bb] no-underline transition-colors duration-[160ms] hover:text-white"
                href={contactConfig.mapUrl}
              >
                <FaLocationDot aria-hidden="true" className="mt-[0.2rem] text-[#f4c45f]" />
                <span>{t("footer.address")}</span>
              </a>
              <a
                className="grid grid-cols-[16px_1fr] items-start gap-[0.7rem] text-[0.84rem] leading-[1.6] text-[#b7c9bb] no-underline transition-colors duration-[160ms] hover:text-white"
                href={contactConfig.phoneUrl}
              >
                <FaPhone aria-hidden="true" className="mt-[0.2rem] text-[#f4c45f]" />
                <span>{t("footer.phone")}</span>
              </a>
              <a
                className="grid grid-cols-[16px_1fr] items-start gap-[0.7rem] text-[0.84rem] leading-[1.6] text-[#b7c9bb] no-underline transition-colors duration-[160ms] hover:text-white"
                href={contactConfig.emailUrl}
              >
                <FaEnvelope aria-hidden="true" className="mt-[0.2rem] text-[#f4c45f]" />
                <span>{t("header.email")}</span>
              </a>
            </address>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-[1.15rem] text-[0.78rem] text-[#91a997] max-[600px]:items-start max-[600px]:flex-col">
          <span>{t("footer.copyright", { year: new Date().getFullYear() })}</span>
          <Link
            className="text-[#b7c9bb] no-underline transition-colors duration-[160ms] hover:text-[#f4c45f]"
            href={getSiteLink("contact", locale)}
          >
            {t("navigation.contact")}
          </Link>
        </div>
      </div>
    </footer>
  )
}
