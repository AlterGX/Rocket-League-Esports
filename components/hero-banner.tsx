"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronDown } from "lucide-react"

const slides = [
  {
    id: 1,
    subtitle: "Rocket Market Transfers",
    title: "DESCUBRE LA\nNUEVA TABLA",
    description: "Ofertas De Clubes y Valores.",
  },
  {
    id: 2,
    subtitle: "Checa las estadisticas mensuales",
    title: "UNA NUEVA\nINTERFAZ",
    description: "Nuevo Diseño, Nuevas Novedades.",
  },
  {
    id: 3,
    subtitle: "10 Jugadores De Rocket",
    title: "JUGADORES\nDE ROCKET LEAGUE",
    description: "Actualizaciones de Mes a Mes.",
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextSlide = useCallback(() => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setTimeout(() => setIsAnimating(false), 800)
  }, [isAnimating])

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const slide = slides[currentSlide]

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center px-6 lg:px-16 max-w-[1600px] mx-auto">
        <div className="max-w-4xl">
          {/* Subtitle */}
          <div 
            key={`subtitle-${currentSlide}`}
            className="overflow-hidden mb-6"
          >
            <p className="text-[11px] sm:text-xs tracking-[0.5em] text-muted-foreground animate-reveal-up">
              {slide.subtitle}
            </p>
          </div>

          {/* Main Title */}
          <div 
            key={`title-${currentSlide}`}
            className="overflow-hidden mb-8"
          >
            <h1 className="text-[clamp(3.5rem,15vw,12rem)] font-[family-name:var(--font-bebas)] leading-[0.85] tracking-[-0.02em] text-foreground whitespace-pre-line animate-reveal-up stagger-2">
              {slide.title}
            </h1>
          </div>

          {/* Description */}
          <div 
            key={`desc-${currentSlide}`}
            className="overflow-hidden mb-12"
          >
            <p className="text-muted-foreground text-base sm:text-lg max-w-md animate-reveal-up stagger-3">
              {slide.description}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-reveal-up stagger-4">
            <a
              href="#torneo"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[13px] tracking-[0.2em] transition-all duration-400 hover:bg-foreground/90"
            >
              EXPLORAR
              <span className="w-4 h-px bg-background/50 transition-all duration-300 group-hover:w-6" />
            </a>
            <a
              href="#calendario"
              className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-[13px] tracking-[0.2em] transition-all duration-400 hover:border-foreground/40"
            >
              JUGADORES
            </a>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-28 left-6 lg:left-16 flex items-center gap-6">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true)
                  setCurrentSlide(index)
                  setTimeout(() => setIsAnimating(false), 800)
                }
              }}
              className={`relative h-px transition-all duration-500 ${
                index === currentSlide ? "w-16 bg-foreground" : "w-6 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
          <span className="ml-2 text-[11px] text-muted-foreground number-display tracking-wider">
            {String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-subtle-float">
          <span className="text-[10px] tracking-[0.4em] text-muted-foreground">SCROLL</span>
          <ChevronDown size={14} className="text-muted-foreground" strokeWidth={1} />
        </div>
      </div>

      {/* Side decoration */}
      <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-8">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
        <span className="text-[10px] tracking-[0.4em] text-muted-foreground [writing-mode:vertical-rl] rotate-180">
          Rocket League Market 2026
        </span>
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-foreground/10 to-transparent" />
      </div>
    </section>
  )
}
