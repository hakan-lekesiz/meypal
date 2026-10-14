import Link from "next/link"
import { FaChevronDown } from "react-icons/fa6"
import type { getTranslator } from "@/i18n/i18n"
import { getSiteLink, type Locale } from "@/shared/config"

type Translate = Awaited<ReturnType<typeof getTranslator>>

type NavigationItem = {
  label: string
  route: string
  children?: readonly NavigationItem[]
}

type NavigationLinksProps = {
  items: readonly NavigationItem[]
  locale: Locale
  t: Translate
  mobile?: boolean
}

const navLinkClass =
  "whitespace-nowrap text-[0.83rem] font-semibold text-[#1e293b] no-underline transition-colors duration-[160ms] hover:text-[#006894]"
const dropdownLinkClass =
  "block rounded-[0.45rem] px-3 py-[0.65rem] text-[0.85rem] text-[#334155] no-underline transition-colors duration-[160ms] hover:bg-[#006894]/8 hover:text-[#006894]"

export function NavigationLinks({ items, locale, t, mobile = false }: NavigationLinksProps) {
  return (
    <ul
      className={
        mobile
          ? "m-0 list-none p-0"
          : "m-0 flex list-none items-center gap-[clamp(0.75rem,1.45vw,1.5rem)] p-0"
      }
    >
      {items.map((item) => (
        <li
          className={`group relative ${mobile ? "border-b border-[#f1f5f9] last:border-b-0" : ""}`}
          key={item.route}
        >
          <div className={`flex items-center gap-[0.35rem] ${mobile ? "min-h-12" : "min-h-11"}`}>
            <Link
              className={`${navLinkClass} ${mobile ? "flex-1 text-[0.95rem]" : ""}`}
              href={getSiteLink(item.route, locale)}
            >
              {t(item.label)}
            </Link>
            {item.children && (
              <FaChevronDown
                aria-hidden="true"
                className={`text-[#94a3b8] transition-transform duration-[160ms] group-hover:rotate-180 group-hover:text-[#006894] group-focus-within:rotate-180 ${mobile ? "hidden" : ""}`}
                size={10}
              />
            )}
          </div>
          {item.children && (
            <ul
              className={`m-0 list-none p-0 ${
                mobile
                  ? "static block min-w-0 rounded-none border-0 bg-transparent pb-[0.6rem] pl-[0.8rem] shadow-none"
                  : "absolute left-[-1rem] top-[calc(100%-1px)] hidden min-w-[210px] rounded-xl border border-[#e2e8f0] bg-white p-[0.55rem] shadow-[0_16px_40px_rgb(0_104_148_/_12%)] group-hover:block group-focus-within:block"
              }`}
            >
              {item.children.map((child) => (
                <li key={child.route}>
                  <Link
                    className={`${dropdownLinkClass} ${mobile ? "px-[0.65rem] py-[0.55rem] text-[#64748b] hover:text-[#006894]" : ""}`}
                    href={getSiteLink(child.route, locale)}
                  >
                    {t(child.label)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
