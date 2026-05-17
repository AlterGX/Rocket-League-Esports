"use client"

const phases = [
  {
    number: "01",
    title: "PARTIDOS DEL MES",
    description: "Juega partidos en Rocket League Para Aumentar tus Estadisticas.",
    detail: "Aprovecha el Mes w"
  },
  {
    number: "02", 
    title: "FINAL DEL MES Y CARGA DE DATOS",
    description: "Despues de un mes, se solicitaran y cargaran los datos para que la IA los procese.",
    detail: "IA Utilizada - Gemini Pro 2.0"
  },
  {
    number: "03",
    title: "ACTUALIZACIÓN DE MERCADO",
    description: "Despues de la carga de datos, los primeros dias del mes se actualizara la pagina.",
    detail: "NUveas Stats, Valores y Ofertas"
  },
]

export function TournamentInfo() {
  return (
    <section id="torneo" className="py-16 lg:py-32 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-px bg-foreground/20" />
              <span className="text-[10px] tracking-[0.5em] text-muted-foreground">FORMATO DE VALORES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.9]">
              HORA DE SUBIR<br />TU NIVEL
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Despues de un mes de Juego se cargaran todos los datos como Goles, Asistencias, MVP´s y Salvadas
              a Una IA previamente entrenada la cual se encargara de dar nuevos Valores y crear oferas
              de los Equipos hacia los Jugadores.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-24 py-12 border-y border-border/20">
          {[
            { value: "10", label: "EQUIPOS" },
            { value: "10", label: "JUGADORES" },
            { value: "+10", label: "OFERTAS" },
            { value: "1:1", label: "ACTUALIZACIÓN MENSUAL" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <span className="text-4xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] text-foreground">
                {stat.value}
              </span>
              <p className="text-[10px] tracking-[0.4em] text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Phases */}
        <div className="space-y-0">
          {phases.map((phase, index) => (
            <div 
              key={phase.number}
              className="group grid grid-cols-1 lg:grid-cols-[100px_1fr_1fr] gap-4 lg:gap-8 py-8 lg:py-12 border-b border-border/20 hover:bg-secondary/10 transition-colors duration-500 lg:-mx-12 px-0 lg:px-12"
            >
              <div className="text-5xl lg:text-6xl font-[family-name:var(--font-bebas)] text-foreground/10 group-hover:text-foreground/20 transition-colors">
                {phase.number}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-4">
                  {phase.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {phase.description}
                </p>
              </div>
              <div className="flex items-center lg:justify-end">
                <span className="px-4 py-2 border border-border/30 text-[11px] tracking-[0.2em] text-muted-foreground">
                  {phase.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
