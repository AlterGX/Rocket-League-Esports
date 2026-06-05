"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { usePathname } from "next/navigation"

const nationsLinks = [
  { href: "#participantes", label: "Clubes" },
  { href: "#plantillas", label: "Plantillas" },
  { href: "#posiciones", label: "Posiciones" },
  { href: "#calendario", label: "Calendario" },
  { href: "#bracket", label: "Bracket" },
  { href: "#estadios", label: "Estadios" },
]

const homeLinks = [
  { href: "#torneo", label: "Introducción" },
  { href: "#equipos", label: "Equipos" },
  { href: "#ofertas", label: "Ofertas" },
  { href: "#top9", label: "Top 10" },
  { href: "#premios", label: "Premios" },
  { href: "#sedes", label: "Noticias" },
]

export function Navbar() {
  const pathname = usePathname()
  const isNations = pathname === "/rl-natiosn"
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = isNations ? nationsLinks : homeLinks

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? isNations
            ? "bg-[#020617]/85 backdrop-blur-xl border-b border-blue-500/20"
            : "bg-background/80 backdrop-blur-xl border-b border-border/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="relative group flex items-center">
            <Image 
              src={isNations ? "/acces/RL26Trophy.png" : "/rl26.png"} 
              alt="RL26 Logo" 
              width={isNations ? 45 : 100} 
              height={40} 
              className={isNations ? "h-12 w-auto object-contain" : "h-10 w-auto"} 
            />
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground/50 transition-all duration-500 group-hover:w-full" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`relative text-[13px] tracking-[0.2em] transition-colors duration-300 py-2 hover-border ${
                  isNations
                    ? "text-slate-400 hover:text-blue-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:block">
            {isNations ? (
              <a
                href="/"
                className="text-[13px] tracking-[0.2em] px-6 py-3 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all duration-400"
              >
                VOLVER AL INICIO
              </a>
            ) : (
              <a
                href="/rl-natiosn"
                className="text-[13px] tracking-[0.2em] px-6 py-3 border border-foreground/20 text-foreground hover:bg-foreground hover:text-background transition-all duration-400"
              >
                RL NATIONS
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-8 space-y-1 border-t border-border/20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 text-[15px] tracking-[0.2em] transition-colors duration-300 ${
                  isNations
                    ? "text-slate-400 hover:text-blue-400"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label.toUpperCase()}
              </a>
            ))}
            <div className="pt-6">
              {isNations ? (
                <a
                  href="/"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-[13px] tracking-[0.2em] px-6 py-3 border border-blue-500/20 text-blue-400 hover:bg-blue-600 hover:text-white transition-all"
                >
                  VOLVER AL INICIO
                </a>
              ) : (
                <a
                  href="/rl-natiosn"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-[13px] tracking-[0.2em] px-6 py-3 border border-foreground/20 text-foreground"
                >
                  RL NATIONS
                </a>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
