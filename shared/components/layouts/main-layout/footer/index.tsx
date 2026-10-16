import Link from "next/link"
import Image from "next/image"
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
            className="text-[0.85rem] text-[#c2d7e5] no-underline transition-colors duration-[160ms] hover:text-[#F58220]"
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
  const ctaTitleId = "footer-cta-title"
  const t = await getTranslator(locale)

  return (
    <footer className="bg-[#002f43] py-12 pb-5 text-[#e7efe8] max-[600px]:pt-6">
      <div className="grid-wrapper flex flex-col">
        <section
          aria-labelledby={ctaTitleId}
          className="flex min-h-[210px] items-center justify-between gap-8 overflow-hidden rounded-2xl border border-white/10 bg-[#006894] bg-[linear-gradient(90deg,_#004e70_5%,_rgb(0_104_148_/_95%)_44%,_rgb(0_104_148_/_30%)_100%),url('/images/fruits/fruit-basket.jpg')] bg-cover bg-center px-[clamp(1.5rem,5vw,4rem)] py-9 max-[600px]:min-h-0 max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-5 max-[600px]:bg-[linear-gradient(90deg,_rgb(0_78_112_/_95%),_rgb(0_104_148_/_85%)),url('/images/fruits/fruit-basket.jpg')] max-[600px]:px-[1.35rem] max-[600px]:py-7"
        >
          <div className="max-w-[540px]">
            <span className="text-xs font-bold uppercase tracking-[0.13em] text-[#F58220]">
              {t("footer.eyebrow")}
            </span>
            <h2
              className="my-[0.6rem] mb-[0.45rem] text-[clamp(1.55rem,3vw,2.25rem)] font-bold leading-[1.2] tracking-[-0.04em] text-white"
              id={ctaTitleId}
            >
              {t("footer.ctaTitle")}
            </h2>
            <p className="m-0 text-[0.92rem] leading-[1.6] text-white/85">
              {t("footer.ctaDescription")}
            </p>
          </div>
          <Link
            className="inline-flex shrink-0 items-center justify-center gap-[0.6rem] rounded-full bg-[#F58220] px-[1.3rem] py-[0.9rem] text-[0.9rem] font-bold text-white no-underline shadow-[0_4px_16px_rgb(245_130_32_/_35%)] transition-[background-color,transform] duration-[160ms] hover:-translate-y-px hover:bg-[#dc6e11]"
            href={getSiteLink("contact", locale)}
          >
            {t("footer.ctaButton")} <FaArrowRight aria-hidden="true" />
          </Link>
        </section>

        <div className="grid grid-cols-[1.35fr_0.8fr_0.9fr_1.4fr] gap-[clamp(1.5rem,4vw,4rem)] py-[3.25rem] pb-10 max-[900px]:grid-cols-2 max-[900px]:gap-x-12 max-[900px]:gap-y-9 max-[600px]:grid-cols-2 max-[600px]:gap-x-5 max-[600px]:gap-y-8 max-[600px]:py-9">
          <div className="max-[600px]:col-span-full">
            <Link
              aria-label={t("header.homeLabel")}
              className="inline-flex items-center rounded-xl bg-white px-3 py-2 no-underline shadow-sm transition-transform duration-[160ms] hover:-translate-y-px"
              href={getSiteLink("home", locale)}
            >
              <Image
                alt="Meypal"
                className="h-10 w-auto object-contain max-[600px]:h-8"
                height={251}
                src="/logo.png"
                width={572}
              />
            </Link>
            <p className="mt-4 max-w-[290px] text-[0.88rem] leading-[1.75] text-[#b4cddc] max-[600px]:max-w-[360px]">
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
                className="grid grid-cols-[16px_1fr] items-start gap-[0.7rem] text-[0.84rem] leading-[1.6] text-[#c2d7e5] no-underline transition-colors duration-[160ms] hover:text-[#F58220]"
                href={contactConfig.mapUrl}
                target="_blank"
              >
                <FaLocationDot aria-hidden="true" className="mt-[0.2rem] text-[#F58220]" />
                <span>{t("footer.address")}</span>
              </a>
              <a
                className="grid grid-cols-[16px_1fr] items-start gap-[0.7rem] text-[0.84rem] leading-[1.6] text-[#c2d7e5] no-underline transition-colors duration-[160ms] hover:text-[#F58220]"
                href={contactConfig.phoneUrl}
              >
                <FaPhone aria-hidden="true" className="mt-[0.2rem] text-[#F58220]" />
                <span>{t("footer.phone")}</span>
              </a>
              <a
                className="grid grid-cols-[16px_1fr] items-start gap-[0.7rem] text-[0.84rem] leading-[1.6] text-[#c2d7e5] no-underline transition-colors duration-[160ms] hover:text-[#F58220]"
                href={contactConfig.emailUrl}
              >
                <FaEnvelope aria-hidden="true" className="mt-[0.2rem] text-[#F58220]" />
                <span>{t("header.email")}</span>
              </a>
            </address>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-[1.15rem] text-[0.78rem] text-[#8eaebd] max-[600px]:flex-col max-[600px]:items-end max-[600px]:gap-1">
          <span>{t("footer.copyright")}</span>
          <div className="flex flex-wrap items-center gap-4 max-[600px]:gap-3">
            <a
              className="text-[0.72rem] text-[#8eaebd]/70 no-underline transition-colors duration-[160ms] hover:text-[#c2d7e5]"
              href="https://www.linkedin.com/in/hakan-lekesiz/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Powered By Hakan Lekesiz
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
