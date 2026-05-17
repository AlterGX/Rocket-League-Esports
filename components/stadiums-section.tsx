"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

const news = [
  { id: 1, title: "ALTERGX SE ADAPTA AL ESQUEMA DE LA REAL", subtitle: "La Directiva piensa que fue una decision acertada", date: "10 JUN 2026", featured: true, icons: ["RA.png"], tag: "FICHAJE" },
  { id: 2, title: "THEREALBRACHO FICHADO POR BARCHA FC", subtitle: "Barcha FC realiza el fichaje estrella del torneo con el Jugador Generacional", date: "19 ABR 2026", featured: true, icons: ["BF.png"], tag: "FICHAJE" },
  { id: 3, title: "GANGSTA SE CONVIERTE EN EL MAXIMO GOLEADOR", subtitle: "Gangsta supera la cifra de los 10 mil goles", date: "5 JUN 2026", featured: false, icons: ["PX.png"], tag: "GOLEADOR" },
  { id: 4, title: "DAN RECHAZA MASHINE CITY POR CHICORID", subtitle: "Dan1615 prioriza su fichaje por Chicorid", date: "3 JUN 2026", featured: false, icons: ["CD.png", "MC.png"], tag: "TRASPASO" },
  { id: 5, title: "PAMTITA FICHA POR AJAJAX PERO CLUBES LO SIGUEN", subtitle: "Berserk Dortmund vigila y Pamtita está atento", date: "1 JUN 2026", featured: false, icons: ["AJ.png", "BD.png"], tag: "INCERTIDUMBRE" },
  { id: 6, title: "The RL NATIONS 26 ESTA CERCA", subtitle: "El Torneo 2v2 más esperado está llegando", date: "28 MAY 2026", featured: false, icons: ["RL26Trophy.png"], tag: "MUNDIAL" },
  { id: 7, title: "WILLICRAFT400 PUEDE FICHAR POR LA REAL EN EL FUTURO?", subtitle: "ReAl se ha interesado por sumar a sus filas a otro Jugador", date: "25 MAY 2026", featured: false, icons: ["RA.png", "AR.png"], tag: "RUMOR" },
  { id: 8, title: "JOSUASCA CAIDA EN PICADA", subtitle: "Los números de JosuaSCA caen y con él su valor", date: "22 MAY 2026", featured: false, icons: ["MU.png"], tag: "RUMOR" },
]

export function StadiumsSection() {
  const [selectedNews, setSelectedNews] = useState<typeof news[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="sedes" className="py-16 lg:py-32 px-6 lg:px-12 bg-secondary/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase">Mercado & Noticas</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85]">
            NOTICIAS DEL<br />MERCADO
          </h2>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Análisis en tiempo real de los movimientos, ofertas activas y traspasos oficiales dentro de la liga RL26.
            </p>
          </div>
        </div>

        {/* Featured Stadiums */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
{news.filter(s => s.featured).map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative aspect-square sm:aspect-[16/9] border border-border/10 bg-card/10 overflow-hidden cursor-pointer transition-all duration-700 hover:border-foreground/40"
              onClick={() => { setSelectedNews(newsItem); setIsOpen(true) }}
            >
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 via-transparent to-transparent opacity-50 group-hover:scale-110 transition-transform duration-1000" />
              
              {/* Subtle Scanline Effect on Hover */}
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_50%)] bg-[length:100%_4px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <span className="text-[10px] tracking-[0.3em] text-foreground/50 animate-fade-wave">{newsItem.tag}</span>
              </div>

              {/* Icon Row */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                {newsItem.icons.map((icon) => (
                  <div key={icon} className="w-10 h-10 border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:-translate-y-1">
                    <img
                      src={`/acces/${icon}`}
                      alt={icon.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="overflow-hidden mb-4">
                  <div className="inline-flex animate-marquee whitespace-nowrap gap-10 text-[10px] uppercase tracking-[0.35em] text-muted-foreground/70">
                    <span>{newsItem.title} · {newsItem.date} · {newsItem.tag}</span>
                    <span>{newsItem.subtitle} · {newsItem.date} · {newsItem.tag}</span>
                  </div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-4 line-clamp-2 transition-transform duration-500 group-hover:translate-x-2">
                  {newsItem.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {newsItem.icons.map((icon) => (
                    <span
                      key={`tag-${icon}`}
                      className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80"
                    >
                      <img
                        src={`/acces/${icon}`}
                        alt={icon.replace('.png', '')}
                        className="w-4 h-4 object-contain"
                      />
                      {icon.replace('.png', '').toUpperCase()}
                    </span>
                  ))}
                </div>
                <p className="text-xs tracking-wide text-muted-foreground/70 line-clamp-2 max-w-md">
                  {newsItem.subtitle}
                </p>
                <div className="mt-6 flex items-center gap-4">
                   <div className="h-px w-8 bg-foreground/20 group-hover:w-12 transition-all duration-500" />
                   <p className="text-[9px] tracking-[0.2em] text-muted-foreground/50 uppercase">{newsItem.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Stadiums */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
{news.filter(s => !s.featured).map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative border border-border/10 bg-card/5 p-6 lg:p-8 transition-all duration-500 cursor-pointer hover:bg-card/10 hover:border-foreground/20"
              onClick={() => { setSelectedNews(newsItem); setIsOpen(true) }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 100% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)` }} 
              />
              
              {/* Number */}
              <span className="text-5xl font-[family-name:var(--font-bebas)] text-foreground/5 absolute top-6 right-8 group-hover:text-foreground/10 transition-colors">
                {String(newsItem.id).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-3 mb-4">
                {newsItem.icons.slice(0, 1).map((icon) => (
                  <div key={icon} className="w-8 h-8 border border-border/30 bg-secondary/10 flex items-center justify-center p-1.5 transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={`/acces/${icon}`}
                      alt={icon.replace('.png', '')}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
                <span className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase">
                  {newsItem.tag}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-3 line-clamp-1 group-hover:text-foreground transition-colors">
                  {newsItem.title}
                </h3>
                <p className="text-[10px] tracking-wide text-muted-foreground/60 line-clamp-1">
                  {newsItem.subtitle}
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-[1px] w-4 bg-foreground/10" />
                  <p className="text-[8px] tracking-[0.3em] text-muted-foreground/40">{newsItem.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl border border-border/20 bg-background/95 backdrop-blur-xl p-0 overflow-hidden shadow-2xl animate-pop-open rounded-none">
          <DialogTitle className="sr-only">Detalle de la noticia</DialogTitle>
          {selectedNews && (
            <div className="relative overflow-hidden">
              {/* Fondo decorativo con rejilla */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
              />
              
              {/* Header Técnico */}
              <div className="relative z-10 border-b border-border/10 bg-secondary/10 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
                  <span className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono">Reporte De Noticias // ID_{String(selectedNews.id).padStart(3, '0')}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] tracking-[0.3em] text-muted-foreground/50 font-mono uppercase hidden sm:inline">{selectedNews.tag}</span>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="w-6 h-6 flex items-center justify-center border border-border/20 hover:bg-foreground hover:text-background transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>

              <div className="relative z-10 grid gap-0 lg:grid-cols-[1fr_350px]">
                <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-border/10">
                <div className="space-y-6">
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.9]">
                    {selectedNews.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-muted-foreground border-l-2 border-border/20 pl-6">
                    {selectedNews.subtitle}
                  </p>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border border-border/10 bg-secondary/5 p-5">
                      <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Fecha de Emisión</p>
                      <p className="text-2xl font-[family-name:var(--font-bebas)] text-foreground">
                        {selectedNews.date}
                      </p>
                    </div>
                    <div className="border border-border/10 bg-secondary/5 p-5">
                      <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Clasificación</p>
                      <p className="text-2xl font-[family-name:var(--font-bebas)] text-foreground">
                        {selectedNews.tag}
                      </p>
                    </div>
                  </div>
                </div>
                </div>

                <div className="p-8 lg:p-12 space-y-8 bg-secondary/5">
                  <div className="space-y-4">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Entidades Vinculadas</p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {selectedNews.icons.map((icon) => (
                        <div key={icon} className="inline-flex min-w-[9rem] items-center gap-3 rounded-none border border-border/10 bg-background/90 px-4 py-3 shadow-sm">
                          <img src={`/acces/${icon}`} alt={icon.replace('.png', '')} className="w-8 h-8 object-contain" />
                          <span className="text-sm font-semibold text-foreground">{icon.replace('.png', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground font-mono">ANALYSIS_LOGS</p>
                    <ul className="space-y-4 text-xs text-muted-foreground/80">
                      <li className="flex gap-4">
                        <div className="w-1 h-1 bg-foreground/30 mt-1.5 flex-shrink-0" />
                        <span>Impacto proyectado en la tabla de posiciones: ALTO.</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1 h-1 bg-foreground/30 mt-1.5 flex-shrink-0" />
                        <span>Verificación de datos completada por RL26_AI.</span>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1 h-1 bg-foreground/30 mt-1.5 flex-shrink-0" />
                        <span>Fuentes oficiales de la liga confirmadas.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
