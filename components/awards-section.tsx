"use client"

const awards = [
  {
    award: 'Mediocampista Del Mes',
    player: 'ALTERGX',
    team: 'REAL',
    logo: 'RA.png',
    dorsal: '#10',
    position: 'MIDFIELDER OFFENSIVE',
    stat: 'ASISTENCIAS',
    percentage: '+48.30%',
    value: '1122',
  },
  {
    award: 'Delantero Del Mes',
    player: 'ELGANGSTA_07',
    team: 'PXG',
    logo: 'PX.png',
    dorsal: '#7',
    position: 'RIGHT WINGER',
    stat: 'GOLES',
    percentage: '+46,50%',
    value: '3357',
  },
  {
    award: 'Defensor Del Mes',
    player: 'THEREALBRACHO',
    team: 'BARCHA FC',
    logo: 'BF.png',
    dorsal: '#9',
    position: 'CENTER FORWARD',
    stat: 'SALVADAS',
    percentage: '+64%',
    value: '1456',
  },
  {
    award: 'MVP Del Mes',
    player: 'ALTERGX',
    team: 'REAL',
    logo: 'RA.png',
    dorsal: '#10',
    position: 'MIDFIELDER OFFENSIVE',
    stat: 'MVP',
    percentage: '+49%',
    value: '508',
  },
]

function AwardCard({ award }: { award: typeof awards[0] }) {
  return (
    <div className="relative w-full overflow-hidden rounded-none border border-border/20 bg-background/80 shadow-lg shadow-black/5 h-[24rem] lg:h-[22rem]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.14),transparent_23%)]" />
      <div className="absolute -right-14 top-6 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -left-14 bottom-8 h-36 w-36 rounded-full bg-white/20 blur-3xl" />

      <div className="relative z-10 flex min-h-0 flex-col p-4 lg:p-5">
        <div className="flex items-center justify-start gap-2 mb-4">
          <span className="inline-flex rounded-none border border-foreground/10 bg-foreground/5 px-2.5 py-1 text-[9px] uppercase tracking-[0.35em] text-foreground/90">
            {award.award}
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.45em] text-muted-foreground/80 mb-2">
            {award.position}
          </p>
          <h3 className="text-3xl sm:text-4xl font-[family-name:var(--font-bebas)] uppercase tracking-[0.08em] text-foreground leading-tight">
            {award.player}
          </h3>

          <div className="mt-4 grid w-full grid-cols-1 md:grid-cols-3 gap-3 border border-border/30 bg-background/80 px-5 py-5 text-center shadow-[inset_0_0_0_1px_rgba(255,255,255,0.03)]">
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Dorsal</span>
              <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground mt-1">{award.dorsal}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Estadística</span>
              <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground mt-1">{award.value}</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Porcentaje</span>
              <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground mt-1">{award.percentage}</span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center border border-border/30 bg-background/80 shadow-sm">
              <img
                src={`/acces/${award.logo}`}
                alt={`${award.team} logo`}
                className="h-7 w-7 object-contain"
              />
            </div>
            <div>
              <p className="text-[8px] uppercase tracking-[0.35em] text-muted-foreground">Equipo</p>
              <p className="text-sm font-semibold text-foreground">{award.team}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">Medida</p>
            <p className="text-sm font-semibold text-foreground">{award.stat}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AwardsSection() {
  return (
    <section id="premios" className="py-24 md:py-32 px-6 lg:px-12 bg-gradient-to-b from-secondary/10 via-background/5 to-secondary/10">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b border-border/20">
          <div className="w-20 md:w-24 h-px bg-gradient-to-r from-foreground/20 to-transparent" />
          <span className="text-[10px] md:text-xs tracking-[0.5em] text-muted-foreground/80 uppercase font-medium">
            PREMIOS DEL MES
          </span>
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-24">
          <div>
            <h2 className="text-[3.5rem] md:text-5xl lg:text-[6rem] xl:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85] md:leading-[0.9] bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text">
              PREMIOS
              <br className="hidden lg:block" />
              <span className="text-foreground">DEL MES</span>
            </h2>
          </div>
          <div className="flex items-end lg:items-center">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-xl">
              Los jugadores más destacados del mes por su rendimiento excepcional en sus posiciones especializadas.
            </p>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {awards.map((award, idx) => (
            <AwardCard key={idx} award={award} />
          ))}
        </div>
      </div>
    </section>
  )
}

