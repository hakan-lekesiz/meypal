"use client"

import type { ReactNode } from "react"
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import { createTheme, ThemeProvider as MuiThemeProvider, CssBaseline } from "@mui/material"
import { EmotionCacheProvider } from "./emotion-cache"
export type PaletteMode = "light" | "dark"

const STORAGE_KEY = "ui-theme"

type ThemeContextValue = {
  mode: PaletteMode
  setMode: (mode: PaletteMode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

// const getPreferredMode = (): PaletteMode => {
//   if (typeof window === 'undefined') return 'light';
//   const stored = window.localStorage.getItem(STORAGE_KEY) as PaletteMode | null;
//   if (stored && ['light', 'dark'].includes(stored)) return stored;
//   return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
// };

/**
 * Renkler `:root` (styles.css) içinde CSS variable olarak tanımlı.
 * Bileşenler `sx` ile `var(--ui-…)` üzerinden okuyor — MUI palette'e gerek yok.
 * Burada sadece typography & shape tutuluyor.
 */
const createEasyTheme = (mode: PaletteMode) =>
  createTheme({
    palette: { mode },
    typography: { fontFamily: '"Inter", sans-serif' },
    shape: { borderRadius: 8 },
  })

export const ThemeProvider = ({
  children,
  initialMode = "light",
}: {
  children: ReactNode
  initialMode?: PaletteMode
}) => {
  const [mode, setModeState] = useState<PaletteMode>(() => initialMode)

  useEffect(() => {
    //setModeState(getPreferredMode())
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, mode)
      document.documentElement.setAttribute("data-ui-theme", mode)
    }
  }, [mode])

  const setMode = useCallback((next: PaletteMode) => setModeState(next), [])
  const toggleMode = useCallback(
    () => setModeState((prev) => (prev === "light" ? "dark" : "light")),
    [],
  )

  const theme = useMemo(() => createEasyTheme(mode), [mode])
  const value = useMemo<ThemeContextValue>(
    () => ({ mode, setMode, toggleMode }),
    [mode, setMode, toggleMode],
  )

  return (
    <ThemeContext.Provider value={value}>
      <EmotionCacheProvider>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </MuiThemeProvider>
      </EmotionCacheProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider")
  return ctx
}
