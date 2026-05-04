"use client"

const news = [
  { id: 1, title: "ALTERGX SE ADAPTA AL ESQUEMA DE LA REAL", subtitle: "La Directiva piensa que fue una decision acertada", date: "10 JUN 2026", featured: true, icons: ["RA.png"], tag: "FICHAJE" },
  { id: 2, title: "THEREALBRACHO FICHADO POR BARCHA FC", subtitle: "Barcha FC realiza el fichaje estrella del torneo con el Jugador Generacional", date: "19 ABR 2026", featured: true, icons: ["BF.png"], tag: "FICHAJE" },
  { id: 3, title: "GANGSTA SE CONVIERTE EN EL MAXIMO GOLEADOR", subtitle: "Gangsta supera la cifra de los 10 mil goles", date: "5 JUN 2026", featured: false, icons: ["PX.png"], tag: "GOLEADOR" },
  { id: 4, title: "DAN RECHAZA MASHINE CITY POR CHICORID", subtitle: "Dan1615 prioriza su fichaje por Chicorid", date: "3 JUN 2026", featured: false, icons: ["CD.png", "MC.png"], tag: "TRASPASO" },
  { id: 5, title: "PAMTITA FICHA POR AJAJAX PERO CLUBES LO SIGUEN", subtitle: "Berserk Dortmund vigila y Pamtita está atento", date: "1 JUN 2026", featured: false, icons: ["AJ.png", "BD.png"], tag: "INCERTIDUMBRE" },
  { id: 6, title: "The RLC 26 ESTA CERCA", subtitle: "El Torneo 2v2 más esperado está llegando", date: "28 MAY 2026", featured: false, icons: ["tecnico.png"], tag: "EVENTO" },
  { id: 7, title: "WILLICRAFT400 PUEDE FICHAR POR LA REAL EN EL FUTURO?", subtitle: "ReAl se ha interesado por sumar a sus filas a otro Jugador", date: "25 MAY 2026", featured: false, icons: ["RA.png", "AR.png"], tag: "RUMOR" },
  { id: 8, title: "JOSUASCA CAIDA EN PICADA", subtitle: "Los números de JosuaSCA caen y con él su valor", date: "22 MAY 2026", featured: false, icons: ["PX.png"], tag: "RUMOR" },
]

export function StadiumsSection() {
  return (
    <section id="sedes" className="py-32 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">ÚLTIMAS NOTICIAS</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.9]">
            ÚLTIMAS<br />NOTICIAS
          </h2>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Las noticias más recientes sobre fichajes, renovaciones y movimientos de jugadores y clubes para RL26.
            </p>
          </div>
        </div>

        {/* Featured Stadiums */}
        <div className="grid lg:grid-cols-2 gap-4 mb-4">
{news.filter(s => s.featured).map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative aspect-[16/9] border border-border/20 bg-card/20 overflow-hidden hover-lift"
            >
              {/* Background placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-card/20" />
              <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }}
              />

              {/* Featured Badge */}
              <div className="absolute top-6 left-6">
                <span className="text-[10px] tracking-[0.3em] text-foreground/50">{newsItem.tag}</span>
              </div>

              {/* Icon Row */}
              <div className="absolute top-6 right-6 flex items-center gap-2">
                {newsItem.icons.map((icon) => (
                  <div key={icon} className="w-10 h-10 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center overflow-hidden">
                    <img
                      src={`/acces/${icon}`}
                      alt={icon.replace('.png', '').replace(/([A-Z])/g, ' $1').trim()}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                ))}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <h3 className="text-xl lg:text-2xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-3 line-clamp-2">
                  {newsItem.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  {newsItem.icons.map((icon) => (
                    <span
                      key={`tag-${icon}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground"
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
                <p className="text-[11px] tracking-[0.1em] text-muted-foreground line-clamp-2">
                  {newsItem.subtitle}
                </p>
                <p className="text-[9px] tracking-[0.2em] text-muted-foreground/70 mt-4">
                  {newsItem.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Other Stadiums */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
{news.filter(s => !s.featured).map((newsItem) => (
            <div
              key={newsItem.id}
              className="group relative border border-border/20 bg-card/20 p-6 hover-lift transition-all duration-400"
            >
              {/* Number */}
              <span className="text-5xl font-[family-name:var(--font-bebas)] text-foreground/5 absolute top-4 right-4">
                {String(newsItem.id).padStart(2, "0")}
              </span>

              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-2">
                  {newsItem.icons.slice(0, 2).map((icon) => (
                    <div key={icon} className="w-10 h-10 rounded-2xl border border-border/30 bg-secondary/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={`/acces/${icon}`}
                        alt={icon.replace('.png', '')}
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                  {newsItem.tag}
                </span>
              </div>

              <div className="relative">
                <h3 className="text-lg font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-2 line-clamp-2">
                  {newsItem.title}
                </h3>
                <p className="text-[10px] tracking-[0.2em] text-muted-foreground line-clamp-1">
                  {newsItem.subtitle}
                </p>
                <p className="text-[9px] tracking-[0.2em] text-muted-foreground/70 mt-3">
                  {newsItem.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
