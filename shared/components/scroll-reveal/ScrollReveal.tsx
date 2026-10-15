"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

export function ScrollReveal() {
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return

    const items = document.querySelectorAll(".reveal")
    if (!items.length) return

    if (!("IntersectionObserver" in window)) {
      for (const item of items) {
        item.classList.add("in-view")
      }
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    )

    for (const item of items) {
      const rect = item.getBoundingClientRect()
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        item.classList.add("in-view")
      } else {
        observer.observe(item)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [pathname])

  return null
}
