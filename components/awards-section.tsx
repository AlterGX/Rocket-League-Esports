"use client"

const awards = [
  {
    award: 'Asistidor Del Mes',
    player: 'ZEstebanPvP',
    team: 'Bastard Munchen',
    logo: 'BM.png',
    dorsal: '#15',
    position: 'CENTER FORWARD',
    stat: 'ASISTENCIAS',
    percentage: '+61.40%',
    value: '221',
  },
  {
    award: 'Goleador Del Mes',
    player: 'ZEstebanPvP',
    team: 'Bastard Munchen',
    logo: 'BM.png',
    dorsal: '#15',
    position: 'CENTER FORWARD',
    stat: 'GOLES',
    percentage: '+54,20%',
    value: '733',
  },
  {
    award: 'Salvador Del Mes',
    player: 'Willicraft400',
    team: 'Arsenali',
    logo: 'AR.png',
    dorsal: '#40',
    position: 'Midfielder Defensive',
    stat: 'SALVADAS',
    percentage: '+39.1%',
    value: '396',
  },
  {
    award: 'Mayor MVP´s Del Mes',
    player: 'Willicraft400',
    team: 'Arsenali',
    logo: 'AR.png',
    dorsal: '#40',
    position: 'MIDFIELDER Defensive',
    stat: 'MVP',
    percentage: '+38.2%',
    value: '170',
  },
]

function AwardCard({ award }: { award: typeof awards[0] }) {
  return (
    <div className="group relative w-full overflow-hidden border border-border/10 bg-card/10 transition-all duration-500 hover:border-foreground/30 h-auto lg:h-[26rem] flex flex-col">
      {/* Technical Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none"
        style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-foreground/20 via-foreground/5 to-transparent" />

      <div className="relative z-10 p-6 lg:p-10 flex flex-col h-full">
        {/* Header Metadata */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.5em] text-foreground/70 uppercase font-mono">
              RL26_METRICS
            </span>
          </div>
          <span className="text-[9px] tracking-[0.3em] text-muted-foreground/50 font-mono">REF_M01_AWARD</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <div className="mb-8">
            <span className="inline-block border border-foreground/20 bg-foreground/5 px-3 py-1 text-[9px] uppercase tracking-[0.4em] text-foreground/80 mb-6 transition-transform group-hover:-translate-y-1">
              {award.award}
            </span>
            <h3 className="text-5xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.8] mb-4 transition-transform duration-500 group-hover:translate-x-2">
              {award.player}
            </h3>
            <p className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase opacity-60">
              {award.position}
            </p>
          </div>

          {/* Stats Readout */}
          <div className="grid grid-cols-3 gap-px bg-border/10 border border-border/10 mt-auto">
            <div className="bg-background/40 p-4 transition-colors group-hover:bg-white/[0.02]">
              <span className="text-[8px] tracking-[0.4em] text-muted-foreground block mb-2 uppercase">Dorsal</span>
              <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground/90">{award.dorsal}</span>
            </div>
            <div className="bg-background/40 p-4 transition-colors group-hover:bg-white/[0.02]">
              <span className="text-[8px] tracking-[0.4em] text-muted-foreground block mb-2 uppercase">{award.stat}</span>
              <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground/90">{award.value}</span>
            </div>
            <div className="bg-background/40 p-4 transition-colors group-hover:bg-white/[0.02]">
              <span className="text-[8px] tracking-[0.4em] text-muted-foreground block mb-2 uppercase">Delta %</span>
              <span className="text-2xl font-[family-name:var(--font-bebas)] text-green-500/80">{award.percentage}</span>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-10 pt-6 border-t border-border/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 border border-border/20 bg-secondary/10 flex items-center justify-center p-1.5 transition-transform group-hover:scale-110">
              <img
                src={`/acces/${award.logo}`}
                alt={`${award.team} logo`}
                className="w-full h-full object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div>
              <p className="text-[8px] tracking-[0.3em] text-muted-foreground uppercase mb-0.5">Club Oficial</p>
              <p className="text-xs font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{award.team}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="h-px w-8 bg-foreground/20 mb-2 group-hover:w-12 transition-all duration-500" />
            <span className="text-[8px] tracking-[0.4em] text-muted-foreground uppercase">Verified By RL26_AI</span>
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
