"use client"

const awards = [
  {
    award: 'Mejor Jugador Del Mes',
    player: 'DAN1615',
    team: 'Mashine City',
    logo: 'MC.png',
    dorsal: '#11',
    position: 'CENTER FORWARD',
    stat: 'RENDIMIENTO',
    percentage: '+68.5%',
    value: '94.5',
    isBestPlayer: true,
    runnersUp: [
      { player: 'ZEstebanPVP', value: '92.6', team: 'Bastard Munchen' },
      { player: 'AlterGX', value: '91.1', team: 'Re Al' },
    ],
  },
  {
    award: 'Asistidor Del Mes',
    player: 'AlterGX',
    team: 'Re Al',
    logo: 'RA.png',
    dorsal: '#10',
    position: 'Midfielder Offensive',
    stat: 'ASISTENCIAS',
    percentage: '+6.78%',
    value: '244',
    runnersUp: [
      { player: 'ZEstebanPVP', value: '227', team: 'Bastard Munchen' },
      { player: 'Willicraft400', value: '149', team: 'Arsenali' },
    ],
  },
  {
    award: 'Goleador Del Mes',
    player: 'Dan1615',
    team: 'Mashine City',
    logo: 'MC.png',
    dorsal: '#7',
    position: 'CENTER FORWARD',
    stat: 'GOLES',
    percentage: '+12.11%',
    value: '737',
    runnersUp: [
      { player: 'ElGangsta_07', value: '621', team: 'PXG' },
      { player: 'ZEstebanPVP', value: '567', team: 'Bastard Munchen' },
    ],
  },
  {
    award: 'Salvador Del Mes',
    player: 'AlterGX',
    team: 'Re Al',
    logo: 'RA.png',
    dorsal: '#10',
    position: 'Midfielder Defensive',
    stat: 'SALVADAS',
    percentage: '+6.30%',
    value: '313',
    runnersUp: [
      { player: 'Dan1615', value: '291', team: 'Mashine City' },
      { player: 'ElGangsta_07', value: '248', team: 'PXG' },
    ],
  },
  {
    award: 'Mayor MVP´s Del Mes',
    player: 'Willicraft400',
    team: 'Arsenali',
    logo: 'AR.png',
    dorsal: '#40',
    position: 'MIDFIELDER Defensive',
    stat: 'MVP',
    percentage: '+18.54%',
    value: '114',
    runnersUp: [
      { player: 'AlterGX', value: '101', team: 'Re Al' },
      { player: 'ZEstebanPVP', value: '84', team: 'Bastard Munchen' },
    ],
  },
]

function AwardCard({ award, isWide = false }: { award: typeof awards[0], isWide?: boolean }) {
  return (
    <div className={`group relative w-full overflow-hidden border transition-all duration-500 flex flex-col ${isWide ? 'lg:col-span-2 lg:min-h-[34rem]' : 'lg:min-h-[32rem]'}`}
      style={{ 
        borderColor: award.isBestPlayer ? 'rgba(210, 180, 140, 0.4)' : 'rgba(255, 255, 255, 0.08)',
        backgroundColor: award.isBestPlayer ? 'rgba(210, 180, 140, 0.05)' : 'rgba(255, 255, 255, 0.02)'
      }}
    >
      {/* Technical Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(rgba(210, 180, 140, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(210, 180, 140, 0.3) 1px, transparent 1px)`, 
          backgroundSize: '30px 30px' 
        }} 
      />
      
      {/* Trofeo superpuesto */}
      <div className="absolute right-0 top-0 bottom-0 opacity-[0.06] group-hover:opacity-[0.12] transition-all duration-700 pointer-events-none"
        style={{
          backgroundImage: 'url("/acces/trophy.png")',
          backgroundSize: isWide ? 'auto 70%' : 'auto 65%',
          backgroundPosition: isWide ? 'right -10px center' : 'right -5px center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(1.3) sepia(0.4)',
          width: isWide ? '40%' : '35%',
        }}
      />
      
      {/* Efecto de brillo dorado */}
      {award.isBestPlayer && (
        <div className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 70% 30%, rgba(210, 180, 140, 0.15) 0%, transparent 60%)',
          }}
        />
      )}
      
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background: award.isBestPlayer 
            ? 'linear-gradient(90deg, rgba(210, 180, 140, 0.8), rgba(210, 180, 140, 0.4), transparent)'
            : 'linear-gradient(90deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.05), transparent)'
        }}
      />

      <div className={`relative z-10 p-8 flex flex-col h-full ${isWide ? 'lg:p-12' : 'lg:p-10'}`}>
        {/* Header Metadata */}
        <div className="flex items-center justify-between mb-8 lg:mb-10">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#D2B48C] rounded-full animate-pulse" />
            <span className="text-[11px] tracking-[0.5em] text-[#D2B48C]/80 uppercase font-mono">
              CAFALA_METRICS
            </span>
          </div>
          {award.isBestPlayer && (
            <span className="text-[10px] tracking-[0.3em] text-[#D2B48C] font-mono border border-[#D2B48C]/30 px-3 py-1 bg-[#D2B48C]/5 whitespace-nowrap">
              ★ PLAYER OF THE MONTH
            </span>
          )}
          {!award.isBestPlayer && (
            <span className="text-[10px] tracking-[0.3em] text-[#D2B48C]/50 font-mono">
              REF_M01_AWARD
            </span>
          )}
        </div>

        {/* Main Content */}
        {isWide ? (
          // Layout para card ancha (Mejor Jugador)
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-12">
            {/* Info del jugador */}
            <div className="lg:w-[55%] mb-8 lg:mb-0">
              <span className="inline-block border px-4 py-1.5 text-[10px] uppercase tracking-[0.4em] mb-8 transition-transform group-hover:-translate-y-1"
                style={{
                  borderColor: 'rgba(210, 180, 140, 0.5)',
                  backgroundColor: 'rgba(210, 180, 140, 0.15)',
                  color: '#D2B48C'
                }}
              >
                {award.award}
              </span>
              <h3 className="text-7xl lg:text-[8rem] xl:text-[9rem] font-[family-name:var(--font-bebas)] tracking-tight leading-[0.85] mb-6 transition-transform duration-500 group-hover:translate-x-2 text-[#D2B48C]">
                {award.player}
              </h3>
              <p className="text-[11px] lg:text-sm tracking-[0.5em] uppercase opacity-60 text-white/70">
                {award.position}
              </p>
            </div>

            {/* Stats y Runners Up - Layout vertical */}
            <div className="lg:w-[45%] flex flex-col gap-4">
              {/* Stats principales */}
              <div className="border p-6 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20"
                style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.4em] text-[#D2B48C]/70 uppercase">Dorsal</span>
                  <span className="text-4xl lg:text-5xl font-[family-name:var(--font-bebas)] text-white/90">{award.dorsal}</span>
                </div>
              </div>
              <div className="border p-6 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20"
                style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.4em] text-[#D2B48C]/70 uppercase">{award.stat}</span>
                  <span className="text-4xl lg:text-5xl font-[family-name:var(--font-bebas)] text-white/90">{award.value}</span>
                </div>
              </div>
              <div className="border p-6 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20"
                style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.4em] text-[#D2B48C]/70 uppercase">Delta %</span>
                  <span className="text-4xl lg:text-5xl font-[family-name:var(--font-bebas)] text-[#D2B48C]">{award.percentage}</span>
                </div>
              </div>
              
              {/* Runners Up - Top 2 y Top 3 */}
              {award.runnersUp && (
                <div className="border p-5 transition-colors bg-black/10"
                  style={{ borderColor: 'rgba(210, 180, 140, 0.15)' }}>
                  <span className="text-[8px] tracking-[0.3em] text-[#D2B48C]/50 uppercase block mb-4">
                    Runners Up
                  </span>
                  <div className="space-y-3">
                    {award.runnersUp.map((runner, idx) => (
                      <div key={idx} className="flex items-center justify-between group/runner">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-[10px] font-mono text-[#D2B48C]/40 w-5 flex-shrink-0">
                            {idx === 0 ? '#2' : '#3'}
                          </span>
                          <span className="text-xs lg:text-sm text-white/60 truncate group-hover/runner:text-white/80 transition-colors">
                            {runner.player}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                          <span className="text-[10px] text-[#D2B48C]/30 font-mono">
                            {runner.team}
                          </span>
                          <span className="text-sm lg:text-base font-[family-name:var(--font-bebas)] text-white/40 group-hover/runner:text-white/60 transition-colors tabular-nums">
                            {runner.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // Layout para cards normales
          <div className="flex-1 flex flex-col">
            <div className="mb-8 lg:mb-10">
              <span className="inline-block border px-4 py-1.5 text-[10px] uppercase tracking-[0.4em] mb-8 transition-transform group-hover:-translate-y-1"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                {award.award}
              </span>
              <h3 className="text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.85] mb-6 transition-transform duration-500 group-hover:translate-x-2 text-white">
                {award.player}
              </h3>
              <p className="text-[11px] tracking-[0.5em] uppercase opacity-60 text-white/70">
                {award.position}
              </p>
            </div>

            <div className="mt-auto space-y-5">
              {/* Stats Grid - 3 columnas */}
              <div className="grid grid-cols-3 gap-px border"
                style={{ 
                  borderColor: 'rgba(255, 255, 255, 0.08)',
                  backgroundColor: 'rgba(210, 180, 140, 0.05)'
                }}
              >
                <div className="p-5 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20">
                  <span className="text-[9px] tracking-[0.4em] text-[#D2B48C]/70 block mb-2 uppercase">Dorsal</span>
                  <span className="text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-white/90">{award.dorsal}</span>
                </div>
                <div className="p-5 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20">
                  <span className="text-[9px] tracking-[0.4em] text-[#D2B48C]/70 block mb-2 uppercase">{award.stat}</span>
                  <span className="text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-white/90">{award.value}</span>
                </div>
                <div className="p-5 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20">
                  <span className="text-[9px] tracking-[0.4em] text-[#D2B48C]/70 block mb-2 uppercase">Delta %</span>
                  <span className="text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-green-500/80">{award.percentage}</span>
                </div>
              </div>

              {/* Runners Up - Top 2 y Top 3 */}
              {award.runnersUp && (
                <div className="border p-4 transition-colors bg-black/10"
                  style={{ borderColor: 'rgba(210, 180, 140, 0.15)' }}>
                  <span className="text-[8px] tracking-[0.3em] text-[#D2B48C]/50 uppercase block mb-3">
                    Runners Up
                  </span>
                  <div className="space-y-2.5">
                    {award.runnersUp.map((runner, idx) => (
                      <div key={idx} className="flex items-center justify-between group/runner">
                        <div className="flex items-center gap-3 min-w-0">
                          <span className="text-[10px] font-mono text-[#D2B48C]/40 w-5 flex-shrink-0">
                            {idx === 0 ? '#2' : '#3'}
                          </span>
                          <span className="text-xs text-white/60 truncate group-hover/runner:text-white/80 transition-colors">
                            {runner.player}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0 ml-3">
                          <span className="text-[10px] text-[#D2B48C]/30 font-mono">
                            {runner.team}
                          </span>
                          <span className="text-sm font-[family-name:var(--font-bebas)] text-white/40 group-hover/runner:text-white/60 transition-colors tabular-nums">
                            {runner.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Footer Info */}
        <div className="mt-8 lg:mt-10 pt-6 lg:pt-8 border-t flex items-center justify-between"
          style={{ borderColor: 'rgba(210, 180, 140, 0.15)' }}
        >
          <div className="flex items-center gap-4 lg:gap-5 min-w-0">
            <div className={`flex-shrink-0 border bg-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden
              ${isWide ? 'w-14 h-14 lg:w-16 lg:h-16' : 'w-12 h-12 lg:w-14 lg:h-14'}`}
              style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}
            >
              <img
                src={`/acces/${award.logo}`}
                alt={`${award.team} logo`}
                className="w-[80%] h-[80%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[9px] tracking-[0.3em] text-[#D2B48C]/70 uppercase mb-1">Club Oficial</p>
              <p className={`font-[family-name:var(--font-bebas)] tracking-widest text-white truncate
                ${isWide ? 'text-base lg:text-lg' : 'text-sm lg:text-base'}`}>
                {award.team}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end flex-shrink-0 ml-4">
            <div className="h-px w-10 mb-2 group-hover:w-14 transition-all duration-500"
              style={{ backgroundColor: 'rgba(210, 180, 140, 0.2)' }}
            />
            <span className="text-[9px] tracking-[0.4em] uppercase text-[#D2B48C]/70 whitespace-nowrap">
              Verified By CAFALA_AI
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function AwardsSection() {
  const bestPlayer = awards.find(a => a.isBestPlayer);
  const otherAwards = awards.filter(a => !a.isBestPlayer);

  return (
    <section id="premios" className="py-24 md:py-32 px-6 lg:px-12 relative"
      style={{ 
        background: 'linear-gradient(180deg, rgba(139, 90, 43, 0.05) 0%, rgba(0, 0, 0, 0.95) 15%, rgba(0, 0, 0, 0.95) 85%, rgba(139, 90, 43, 0.05) 100%)'
      }}
    >
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b"
          style={{ borderColor: 'rgba(210, 180, 140, 0.15)' }}
        >
          <div className="w-24 md:w-28 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(210, 180, 140, 0.4), transparent)' }}
          />
          <span className="text-[11px] md:text-sm tracking-[0.5em] text-[#D2B48C]/80 uppercase font-medium">
            PREMIOS DEL MES
          </span>
          <div className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(210, 180, 140, 0.2), transparent)' }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-24">
          <div>
            <h2 className="text-[4rem] md:text-6xl lg:text-[7rem] xl:text-8xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.85] md:leading-[0.9]"
              style={{ 
                background: 'linear-gradient(90deg, #FFFFFF 0%, #D2B48C 50%, #FFFFFF 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              PREMIOS
              <br className="hidden lg:block" />
              <span>DEL MES</span>
            </h2>
          </div>
          <div className="flex items-end lg:items-center">
            <p className="text-[#D2B48C]/80 text-base lg:text-lg leading-relaxed max-w-lg lg:max-w-xl">
              Los jugadores más destacados del mes por su rendimiento excepcional en sus posiciones especializadas.
            </p>
          </div>
        </div>

        {/* Divisor Patrocinador - Cafala Café */}
        <div className="relative mb-16 lg:mb-20">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t-2" style={{ borderColor: 'rgba(210, 180, 140, 0.3)' }} />
          </div>
          <div className="relative flex justify-center">
            <div className="px-10 lg:px-14 py-5 lg:py-7 flex flex-col items-center gap-4"
              style={{ 
                backgroundColor: '#F5F0E8',
                border: '2px solid rgba(210, 180, 140, 0.4)',
                boxShadow: '0 4px 20px rgba(139, 90, 43, 0.15)'
              }}
            >
              <img 
                src="/acces/cafala-logo.png" 
                alt="Cafala Café" 
                className="h-12 lg:h-14 w-auto object-contain"
              />
              <div className="text-center">
                <p className="text-[11px] lg:text-sm tracking-[0.4em] uppercase font-medium text-[#8B5A2B]/80">
                  Cafala Players
                </p>
                <p className="text-[16px] lg:text-lg font-[family-name:var(--font-bebas)] tracking-[0.3em] text-[#5C3A1E] uppercase">
                  Of The Month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Grid - Más ancho */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 max-w-7xl mx-auto">
          {/* Mejor Jugador del Mes - Card ancha */}
          {bestPlayer && (
            <AwardCard award={bestPlayer} isWide={true} />
          )}
          
          {/* Resto de premios */}
          {otherAwards.map((award, idx) => (
            <AwardCard key={idx} award={award} />
          ))}
        </div>

        {/* Nota de patrocinio */}
        <div className="mt-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#D2B48C]/50">
            Powered by <span className="text-[#D2B48C]/70 font-medium">Cafala Café</span>
          </p>
        </div>
      </div>
    </section>
  )
}