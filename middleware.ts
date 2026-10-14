import createMiddleware from "next-intl/middleware"
import { type NextRequest, NextResponse } from "next/server"
import { routing } from "./i18n/routing"
import { PAGES } from "./shared/config"

const handleI18nRouting = createMiddleware(routing)

const enRoutes = Object.values(PAGES).map((p) => p.en)
const trRoutes = Object.values(PAGES).map((p) => p.tr)

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // /en/... rotalarını /... rotalarına kalıcı yönlendir (/en hariç)
  if (pathname.startsWith("/en/") && pathname !== "/en") {
    const stripped = pathname.replace(/^\/en/, "")
    if (enRoutes.includes(stripped as any)) {
      const url = request.nextUrl.clone()
      url.pathname = stripped
      return NextResponse.redirect(url, 308)
    }
  }

  // İngilizce anasayfa (/en) doğrudan rewrite edilerek render edilir
  if (pathname === "/en") {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-next-intl-locale", "en")
    const response = NextResponse.rewrite(new URL("/en", request.url), {
      request: {
        headers: requestHeaders,
      },
    })
    response.headers.set("x-next-intl-locale", "en")
    response.cookies.set("NEXT_LOCALE", "en", { path: "/", sameSite: "lax" })
    return response
  }

  // Pathname üzerinden dili kesinleştirerek next-intl'e aktar
  const isEn = enRoutes.includes(pathname as any)
  const isTr = trRoutes.includes(pathname as any)

  if (isEn) {
    request.cookies.set("NEXT_LOCALE", "en")
    request.headers.set("accept-language", "en")
  } else if (isTr) {
    request.cookies.set("NEXT_LOCALE", "tr")
    request.headers.set("accept-language", "tr")
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: ["/", "/(tr|en)/:path*", "/((?!_next|_vercel|api|.*\\..*).*)"],
}
