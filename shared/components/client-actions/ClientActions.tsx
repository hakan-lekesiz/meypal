"use client"

import { useEffect, type ReactNode } from "react"
import { usePathname } from "next/navigation"

type ClientActionsProps = {
  children?: ReactNode
}

export function ClientActions({ children }: ClientActionsProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    const scrollToHash = () => {
      const hash = window.location.hash
      if (hash && hash.length > 1) {
        try {
          const el = document.querySelector(hash)
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        } catch {
          // Geçersiz CSS selector veya bulunamayan element durumunda sessizce geç
        }
      }
    }

    // Rota değiştiğinde DOM'un hazır olması için kısa gecikmeyle çalıştır
    const timeoutId = setTimeout(scrollToHash, 50)

    // Sayfa içi hash değişimlerini dinle
    window.addEventListener("hashchange", scrollToHash)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener("hashchange", scrollToHash)
    }
  }, [pathname])

  return <>{children}</>
}
