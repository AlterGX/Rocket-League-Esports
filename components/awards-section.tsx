"use client"

const awards = [
  {
    award: 'Mejor Jugador Del Mes',
    player: 'ZEstebanPvP',
    team: 'Bastard Munchen',
    logo: 'BM.png',
    dorsal: '#15',
    position: 'CENTER FORWARD',
    stat: 'RENDIMIENTO',
    percentage: '+65.0%',
    value: '90.2',
    isBestPlayer: true,
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
  },
  {
    award: 'Goleador Del Mes',
    player: 'ElGangsta_07',
    team: 'PXG',
    logo: 'PXG.png',
    dorsal: '#7',
    position: 'CENTER FORWARD',
    stat: 'GOLES',
    percentage: '+5,49%',
    value: '621',
  },
  {
    award: 'Salvador Del Mes',
    player: 'AlterGX',
    team: 'Re Al',
    logo: 'RA.png',
    dorsal: '#10',
    position: 'Midfielder Offensive',
    stat: 'SALVADAS',
    percentage: '+6.30%',
    value: '313',
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
  },
]

function AwardCard({ award, isWide = false }: { award: typeof awards[0], isWide?: boolean }) {
  return (
    <div className={`group relative w-full overflow-hidden border transition-all duration-500 flex flex-col ${isWide ? 'lg:col-span-2 lg:min-h-[32rem]' : 'lg:min-h-[30rem]'}`}
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

      <div className={`relative z-10 p-6 flex flex-col h-full ${isWide ? 'lg:p-10' : 'lg:p-8'}`}>
        {/* Header Metadata */}
        <div className="flex items-center justify-between mb-6 lg:mb-8">
          <div className="flex items-center gap-3">
            <div className="w-1.5 h-1.5 bg-[#D2B48C] rounded-full animate-pulse" />
            <span className="text-[10px] tracking-[0.5em] text-[#D2B48C]/80 uppercase font-mono">
              CAFALA_METRICS
            </span>
          </div>
          {award.isBestPlayer && (
            <span className="text-[9px] tracking-[0.3em] text-[#D2B48C] font-mono border border-[#D2B48C]/30 px-2 py-0.5 bg-[#D2B48C]/5 whitespace-nowrap">
              ★ PLAYER OF THE MONTH
            </span>
          )}
          {!award.isBestPlayer && (
            <span className="text-[9px] tracking-[0.3em] text-[#D2B48C]/50 font-mono">
              REF_M01_AWARD
            </span>
          )}
        </div>

        {/* Main Content */}
        {isWide ? (
          // Layout para card ancha (Mejor Jugador)
          <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-8">
            {/* Info del jugador */}
            <div className="lg:w-[55%] mb-6 lg:mb-0">
              <span className="inline-block border px-3 py-1 text-[9px] uppercase tracking-[0.4em] mb-6 transition-transform group-hover:-translate-y-1"
                style={{
                  borderColor: 'rgba(210, 180, 140, 0.5)',
                  backgroundColor: 'rgba(210, 180, 140, 0.15)',
                  color: '#D2B48C'
                }}
              >
                {award.award}
              </span>
              <h3 className="text-6xl lg:text-[7rem] xl:text-[8rem] font-[family-name:var(--font-bebas)] tracking-tight leading-[0.85] mb-4 transition-transform duration-500 group-hover:translate-x-2 text-[#D2B48C]">
                {award.player}
              </h3>
              <p className="text-[10px] lg:text-xs tracking-[0.5em] uppercase opacity-60 text-white/70">
                {award.position}
              </p>
            </div>

            {/* Stats - Layout vertical */}
            <div className="lg:w-[45%] flex flex-col gap-3">
              <div className="border p-5 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20"
                style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.4em] text-[#D2B48C]/70 uppercase">Dorsal</span>
                  <span className="text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-white/90">{award.dorsal}</span>
                </div>
              </div>
              <div className="border p-5 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20"
                style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.4em] text-[#D2B48C]/70 uppercase">{award.stat}</span>
                  <span className="text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-white/90">{award.value}</span>
                </div>
              </div>
              <div className="border p-5 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20"
                style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}>
                <div className="flex items-center justify-between">
                  <span className="text-[8px] tracking-[0.4em] text-[#D2B48C]/70 uppercase">Porcentaje %</span>
                  <span className="text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-[#D2B48C]">{award.percentage}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Layout para cards normales
          <div className="flex-1 flex flex-col">
            <div className="mb-6 lg:mb-8">
              <span className="inline-block border px-3 py-1 text-[9px] uppercase tracking-[0.4em] mb-6 transition-transform group-hover:-translate-y-1"
                style={{
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  color: 'rgba(255, 255, 255, 0.8)'
                }}
              >
                {award.award}
              </span>
              <h3 className="text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.85] mb-4 transition-transform duration-500 group-hover:translate-x-2 text-white">
                {award.player}
              </h3>
              <p className="text-[10px] tracking-[0.5em] uppercase opacity-60 text-white/70">
                {award.position}
              </p>
            </div>

            {/* Stats Grid - 3 columnas */}
            <div className="grid grid-cols-3 gap-px border mt-auto"
              style={{ 
                borderColor: 'rgba(255, 255, 255, 0.08)',
                backgroundColor: 'rgba(210, 180, 140, 0.05)'
              }}
            >
              <div className="p-4 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20">
                <span className="text-[8px] tracking-[0.4em] text-[#D2B48C]/70 block mb-2 uppercase">Dorsal</span>
                <span className="text-2xl lg:text-3xl font-[family-name:var(--font-bebas)] text-white/90">{award.dorsal}</span>
              </div>
              <div className="p-4 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20">
                <span className="text-[8px] tracking-[0.4em] text-[#D2B48C]/70 block mb-2 uppercase">{award.stat}</span>
                <span className="text-2xl lg:text-3xl font-[family-name:var(--font-bebas)] text-white/90">{award.value}</span>
              </div>
              <div className="p-4 transition-colors group-hover:bg-[#D2B48C]/[0.05] bg-black/20">
                <span className="text-[8px] tracking-[0.4em] text-[#D2B48C]/70 block mb-2 uppercase">Delta %</span>
                <span className="text-2xl lg:text-3xl font-[family-name:var(--font-bebas)] text-green-500/80">{award.percentage}</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer Info - Siempre visible y espaciado */}
        <div className="mt-8 lg:mt-10 pt-5 lg:pt-6 border-t flex items-center justify-between"
          style={{ borderColor: 'rgba(210, 180, 140, 0.15)' }}
        >
          <div className="flex items-center gap-3 lg:gap-4 min-w-0">
            <div className={`flex-shrink-0 border bg-secondary/10 flex items-center justify-center transition-transform group-hover:scale-110 overflow-hidden
              ${isWide ? 'w-12 h-12 lg:w-14 lg:h-14' : 'w-10 h-10 lg:w-12 lg:h-12'}`}
              style={{ borderColor: 'rgba(210, 180, 140, 0.2)' }}
            >
              <img
                src={`/acces/${award.logo}`}
                alt={`${award.team} logo`}
                className="w-[80%] h-[80%] object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[8px] tracking-[0.3em] text-[#D2B48C]/70 uppercase mb-0.5">Club Oficial</p>
              <p className={`font-[family-name:var(--font-bebas)] tracking-widest text-white truncate
                ${isWide ? 'text-sm lg:text-base' : 'text-xs lg:text-sm'}`}>
                {award.team}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end flex-shrink-0 ml-4">
            <div className="h-px w-8 mb-2 group-hover:w-12 transition-all duration-500"
              style={{ backgroundColor: 'rgba(210, 180, 140, 0.2)' }}
            />
            <span className="text-[8px] tracking-[0.4em] uppercase text-[#D2B48C]/70 whitespace-nowrap">
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
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8 pb-8 border-b"
          style={{ borderColor: 'rgba(210, 180, 140, 0.15)' }}
        >
          <div className="w-20 md:w-24 h-px"
            style={{ background: 'linear-gradient(90deg, rgba(210, 180, 140, 0.4), transparent)' }}
          />
          <span className="text-[10px] md:text-xs tracking-[0.5em] text-[#D2B48C]/80 uppercase font-medium">
            PREMIOS DEL MES
          </span>
          <div className="flex-1 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(210, 180, 140, 0.2), transparent)' }}
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20 lg:mb-24">
          <div>
            <h2 className="text-[3.5rem] md:text-5xl lg:text-[6rem] xl:text-7xl font-[family-name:var(--font-bebas)] tracking-tight leading-[0.85] md:leading-[0.9]"
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
            <div className="px-8 lg:px-12 py-4 lg:py-6 flex flex-col items-center gap-3"
              style={{ 
                backgroundColor: '#F5F0E8',
                border: '2px solid rgba(210, 180, 140, 0.4)',
                boxShadow: '0 4px 20px rgba(139, 90, 43, 0.15)'
              }}
            >
              <img 
                src="/acces/cafala-logo.png" 
                alt="Cafala Café" 
                className="h-10 lg:h-12 w-auto object-contain"
              />
              <div className="text-center">
                <p className="text-[10px] lg:text-xs tracking-[0.4em] uppercase font-medium text-[#8B5A2B]/80">
                  Cafala Players
                </p>
                <p className="text-[14px] lg:text-base font-[family-name:var(--font-bebas)] tracking-[0.3em] text-[#5C3A1E] uppercase">
                  Of The Month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 max-w-6xl mx-auto">
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
        <div className="mt-12 text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#D2B48C]/50">
            Powered by <span className="text-[#D2B48C]/70 font-medium">Cafala Café</span>
          </p>
        </div>
      </div>
    </section>
  )
}