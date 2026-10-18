"use client"

import { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import { FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6"
import type { Locale } from "@/shared/config"
import type { GalleryItem } from "./data"

interface GalleryGridProps {
  items: GalleryItem[]
  locale: Locale
  labels: {
    close: string
    prev: string
    next: string
  }
}

export function GalleryGrid({ items, locale, labels }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleOpen = (index: number) => {
    setSelectedIndex(index)
  }

  const handleClose = useCallback(() => {
    setSelectedIndex(null)
  }, [])

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + items.length) % items.length))
  }, [items.length])

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % items.length))
  }, [items.length])

  useEffect(() => {
    if (selectedIndex === null) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        handlePrev()
      } else if (event.key === "ArrowRight") {
        handleNext()
      } else if (event.key === "Escape") {
        handleClose()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex, handleNext, handlePrev, handleClose])

  const currentItem = selectedIndex !== null ? items[selectedIndex] : null

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {items.map((item, index) => {
          const itemAlt = item.alt[locale]
          return (
            <div
              className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              key={`${item.src}-${index}`}
              onClick={() => handleOpen(index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleOpen(index)
                }
              }}
              role="button"
              tabIndex={0}
            >
              {item.isVideo ? (
                <video
                  aria-label={itemAlt}
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  src={item.src}
                >
                  <track kind="captions" />
                </video>
              ) : (
                <Image
                  alt={itemAlt}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  src={item.src}
                />
              )}
            </div>
          )
        })}
      </div>

      <Dialog
        fullWidth
        maxWidth="lg"
        onClose={handleClose}
        open={selectedIndex !== null}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: "rgba(0, 0, 0, 0.88)",
              backdropFilter: "blur(6px)",
            },
          },
          paper: {
            sx: {
              backgroundColor: "transparent",
              boxShadow: "none",
              overflow: "visible",
              margin: { xs: 1.5, sm: 3 },
            },
          },
        }}
      >
        <DialogContent
          sx={{
            p: 0,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "visible",
          }}
        >
          {currentItem && (
            <>
              {/* Close Button */}
              <button
                aria-label={labels.close}
                className="absolute -top-12 right-0 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white transition-colors hover:bg-white/30 focus:outline-none sm:-right-4 sm:-top-12"
                onClick={handleClose}
                type="button"
              >
                <FaXmark className="text-xl" />
              </button>

              {/* Main Media Container */}
              <div className="relative flex aspect-4/3 max-h-[75vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-2xl bg-black/40">
                {currentItem.isVideo ? (
                  <video
                    aria-label={currentItem.alt[locale]}
                    autoPlay
                    className="max-h-[75vh] w-full object-contain"
                    controls
                    playsInline
                    src={currentItem.src}
                  >
                    <track kind="captions" />
                  </video>
                ) : (
                  <Image
                    alt={currentItem.alt[locale]}
                    className="object-contain"
                    fill
                    priority
                    sizes="(max-width: 1200px) 90vw, 1000px"
                    src={currentItem.src}
                  />
                )}
              </div>

              {/* Navigation Controls (At the bottom) */}
              <div className="mt-5 flex items-center justify-center gap-6">
                <button
                  aria-label={labels.prev}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-[#F58220] focus:outline-none"
                  onClick={handlePrev}
                  type="button"
                >
                  <FaChevronLeft className="text-lg" />
                </button>
                <button
                  aria-label={labels.next}
                  className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-105 hover:bg-[#F58220] focus:outline-none"
                  onClick={handleNext}
                  type="button"
                >
                  <FaChevronRight className="text-lg" />
                </button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
