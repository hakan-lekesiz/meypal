"use client"

import { useState } from "react"
import Image from "next/image"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6"
import type { Swiper as SwiperClass } from "swiper"
import { Autoplay, EffectFade, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

export type HeroSlide = {
  badge: string
  title: string
  description: string
  image: string
}

type HeroSectionProps = {
  slides: HeroSlide[]
  prevLabel: string
  nextLabel: string
}

export function HeroSection({ slides, prevLabel, nextLabel }: HeroSectionProps) {
  const [swiperInstance, setSwiperInstance] = useState<SwiperClass | null>(null)

  return (
    <section
      aria-label={slides[0]?.title ?? "Meypal"}
      className="relative w-full overflow-hidden bg-[#002f43]"
    >
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        className="hero-swiper h-[400px] lg:h-[80vh] lg:min-h-[600px] lg:max-h-[820px]"
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={slides.length > 1}
        modules={[Autoplay, EffectFade, Pagination]}
        onSwiper={setSwiperInstance}
        pagination={{
          clickable: true,
        }}
        speed={900}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="relative h-full w-full" key={slide.image}>
            {/* Full-bleed background image */}
            <div className="absolute inset-0">
              <Image
                alt={slide.title}
                className="h-full w-full object-cover"
                fill
                loading={index === 0 ? "eager" : "lazy"}
                priority={index === 0}
                sizes="100vw"
                src={slide.image}
              />
              {/* Refined gradient overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f43]/65 via-[#002f43]/20 to-transparent max-md:from-[#002f43]/70 max-md:via-[#002f43]/40 max-md:to-[#002f43]/15" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f43]/40 via-transparent to-black/10" />
            </div>

            {/* Slide Content */}
            <div className="relative z-10 flex h-full items-center">
              <div className="grid-wrapper">
                <div className="max-w-2xl text-white">
                  {/* Eyebrow badge */}
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#F58220]/40 bg-[#F58220]/10 px-4 py-1.5 text-xs font-bold text-[#F58220] backdrop-blur-md shadow-xs">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#F58220] opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#F58220]" />
                    </span>
                    <span>{slide.badge}</span>
                  </div>

                  {/* Headline */}
                  {index === 0 ? (
                    <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h1>
                  ) : (
                    <h2 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                      {slide.title}
                    </h2>
                  )}

                  {/* Description */}
                  <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base md:text-lg">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <button
        aria-label={prevLabel}
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/90 backdrop-blur-md transition-all duration-200 hover:border-[#F58220] hover:bg-[#F58220] hover:text-white max-sm:hidden md:left-8 md:h-12 md:w-12"
        onClick={() => swiperInstance?.slidePrev()}
        type="button"
      >
        <FaChevronLeft aria-hidden="true" className="text-sm md:text-base" />
      </button>

      <button
        aria-label={nextLabel}
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/25 text-white/90 backdrop-blur-md transition-all duration-200 hover:border-[#F58220] hover:bg-[#F58220] hover:text-white max-sm:hidden md:right-8 md:h-12 md:w-12"
        onClick={() => swiperInstance?.slideNext()}
        type="button"
      >
        <FaChevronRight aria-hidden="true" className="text-sm md:text-base" />
      </button>
    </section>
  )
}
