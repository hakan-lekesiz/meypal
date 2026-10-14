"use client"

import { type JSX, useState, type ReactNode } from "react"
import createCache from "@emotion/cache"
import { CacheProvider } from "@emotion/react"
import { useServerInsertedHTML } from "next/navigation"

/**
 * Next.js App Router + Emotion (MUI) SSR uyumluluğu.
 *
 * Emotion, varsayılan olarak <style> tag'lerini component ağacına inline enjekte eder.
 * Bu, client tarafındaki React ağacıyla eşleşmediği için hydration hatası oluşturur.
 *
 * Bu provider, Emotion stillerini `useServerInsertedHTML` ile <head>'e taşır
 * ve inline enjeksiyonu engeller.
 *
 * @see https://mui.com/material-ui/integrations/nextjs/#app-router
 */
export function EmotionCacheProvider({ children }: { children: ReactNode }) {
  const [registry] = useState(() => {
    const cache = createCache({ key: "css" })
    cache.compat = true

    const prevInsert = cache.insert
    let inserted: { name: string; isGlobal: boolean }[] = []

    cache.insert = (...args) => {
      const [selector, serialized] = args

      if (cache.inserted[serialized.name] === undefined) {
        inserted.push({
          name: serialized.name,
          isGlobal: selector === "",
        })
      }

      return prevInsert(...args)
    }

    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }

    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const inserted = registry.flush()
    if (inserted.length === 0) return null

    let styles = ""
    let globalStyles = ""

    for (const { name, isGlobal } of inserted) {
      const style = registry.cache.inserted[name]
      if (typeof style === "string") {
        if (isGlobal) {
          globalStyles += style
        } else {
          styles += style
        }
      }
    }

    const result: JSX.Element[] = []

    if (globalStyles) {
      result.push(
        <style
          key="global"
          data-emotion={`${registry.cache.key}-global`}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Emotion SSR style injection
          dangerouslySetInnerHTML={{ __html: globalStyles }}
        />,
      )
    }

    if (styles) {
      result.push(
        <style
          key="scoped"
          data-emotion={registry.cache.key}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: Emotion SSR style injection
          dangerouslySetInnerHTML={{ __html: styles }}
        />,
      )
    }

    return <>{result}</>
  })

  return <CacheProvider value={registry.cache}>{children}</CacheProvider>
}
