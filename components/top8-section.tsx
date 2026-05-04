"use client"

const getTeamLogo = (team: string) => {
  const logoMap: Record<string, string> = {
    "ReAl": "RA.png",
    "Barcha FC": "BF.png",
    "PXG": "PX.png",
    "Chelsky": "CH.png",
    "Bastard Munchen": "BM.png",
    "Arsenali": "AR.png",
    "Chicorid": "CD.png",
    "Mashine City": "MC.png",
    "Ajajax": "AJ.png",
    "Berserk Dortmund": "BD.png",
    "Ubers": "UB.png",
  };
  return logoMap[team] || "default.png";
};

const top9Players = [
  {
    rank: 1,
    name: "AlterGX ",
    team: "ReAl",
    dorsal: "10",
    stats: { goals: 8116, assists: 3401, saves: 4685, mvp: 1545 },
    marketValue: "310.000.00M",
  },
  {
    rank: 2,
    name: "TheRealbracho",
    team: "Barcha FC",
    dorsal: "9",
    stats: { goals: 6310, assists: 2358, saves: 3732, mvp: 1145 },
    marketValue: "300.000.000M",
  },
  {
    rank: 3,
    name: "ElGangsta_07",
    team: "PXG",
    dorsal: "7",
    stats: { goals: 10575, assists: 1377, saves: 3481, mvp: 565 },
    marketValue: "255.000.000M",
  },
  {
    rank: 4,
    name: "Dan1615",
    team: "Chicorid",
    dorsal: "11",
    stats: { goals: 5567, assists: 1677, saves: 1593, mvp: 543 },
    marketValue: "220.000.000M",
  },
  {
    rank: 5,
    name: "Willicraft400",
    team: "Arsenali",
    dorsal: "40",
    stats: { goals: 2856, assists: 723, saves: 1014, mvp: 445 },
    marketValue: "170.000.000M",
  },
  {
    rank: 6,
    name: "Skarto1",
    team: "Chelsky",
    dorsal: "8",
    stats: { goals: 2481, assists: 411, saves: 1327, mvp: 267 },
    marketValue: "155.000.000M",
  },
  {
    rank: 7,
    name: "Drakrad404",
    team: "Ubers",
    dorsal: "6",
    stats: { goals: 1891, assists: 572, saves: 927, mvp: 234 },
    marketValue: "125.000.000M",
  },
  {
    rank: 8,
    name: "zEstebanPVP",
    team: "Berserk Dortmund",
    dorsal: "15",
    stats: { goals: 1319, assists: 365, saves: 417, mvp: 135 },
    marketValue: "50.000.000M",
  },
  {
    rank: 9,
    name: "JosuaSCA",
    team: "PXG",
    dorsal: "20",
    stats: { goals: 1217, assists: 425, saves: 312, mvp: 135 },
    marketValue: "45.000.000M",
  },
  {
    rank: 10,
    name: "Pamtita",
    team: "Ajajax",
    dorsal: "4",
    stats: { goals: 239, assists: 201, saves: 192, mvp: 11 },
    marketValue: "35.000.000M",
  },
]

function PlayerCard({ player }: { player: typeof top9Players[0] }) {
  return (
<div className="group relative border border-border/20 bg-card/20 hover:bg-card/40 transition-all duration-500 hover-lift flex flex-col">
      {/* Car Image Area - Top */}
      <div className="relative w-full h-24 border-b border-border/20 bg-secondary/20 flex items-center justify-center overflow-hidden">
        {/* Rank Badge */}
        <div className="absolute top-4 left-4 z-10">
          <span className={`text-4xl font-[family-name:var(--font-bebas)] ${
            player.rank === 1 ? "text-foreground" :
            player.rank === 2 ? "text-foreground/70" :
            player.rank === 3 ? "text-foreground/50" :
            "text-foreground/30"
}`}>
            #{player.rank}
          </span>
        </div>
        
        {/* Dorsal watermark */}
        <span className="text-[80px] font-[family-name:var(--font-poppins)] text-foreground/[0.04] select-none">
          {player.dorsal}
        </span>

        {/* Top 3 accent */}
        {player.rank <= 3 && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        )}
      </div>

      {/* Content - Bottom */}
      <div className="flex-1 p-6 flex flex-col">
        {/* Player Info */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/70">#{player.dorsal}</span>
            <div className="w-4 h-px bg-border/40" />
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground/70">{player.team.toUpperCase()}</span>
            <div className="w-6 h-6 border border-border/30 flex items-center justify-center bg-secondary/20">
              <img
                src={`/acces/${getTeamLogo(player.team)}`}
                alt={`${player.team} logo`}
                className="w-full h-full object-contain p-0.5"
              />
            </div>
          </div>
          <h3 className="flex items-center gap-2 text-2xl sm:text-3xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground">
            {player.name.toUpperCase()}
          </h3>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/70 font-[family-name:var(--font-bebas)]">
            {player.rank === 1 ? 'Midfielder Offensive' : player.rank === 2 ? 'Center Forward' : player.rank === 3 ? 'Left Winger' : player.rank === 4 ? 'Right Winger' : player.rank === 5 ? 'Midfielder Defensive' : player.rank === 6 ? 'Forward' : player.rank === 7 ? 'Midfielder' : player.rank === 8 ? 'Center Forward' : player.rank === 9 ? 'Right Back' : 'Center Back'}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { label: "GOLES", value: player.stats.goals },
            { label: "ASISTENCIAS", value: player.stats.assists },
            { label: "SALVADAS", value: player.stats.saves },
            { label: "MVP", value: player.stats.mvp },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-3 border border-border/10 bg-secondary/10">
              <span className="text-xl sm:text-2xl font-[family-name:var(--font-bebas)] text-foreground block">
                {stat.value}
              </span>
              <p className="text-[7px] tracking-[0.15em] text-muted-foreground mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Market Value - Bottom */}
        <div className="mt-auto pt-4 border-t border-border/10 flex items-center justify-between">
          <span className="text-[9px] tracking-[0.2em] text-muted-foreground">Net Worth €</span>
          <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">€{player.marketValue}</span>
        </div>
      </div>
    </div>
  )
}

export function Top8Section() {
  const row1 = top9Players.slice(0, 3) // Top 1, 2, 3
  const row2 = top9Players.slice(3, 6) // Top 4, 5, 6
  const row3 = top9Players.slice(6, 9) // Top 7, 8, 9
  const row4 = top9Players.slice(9)   // Top 10

  return (
    <section id="top9" className="py-32 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">RANKING OFICIAL</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.9]">
            TOP 10<br />JUGADORES
          </h2>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Metricas, estadísticas y valor de mercado de todos los jugadores.
            </p>
          </div>
        </div>

        {/* Row 1: Top 1, 2, 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row1.map((player) => (
            <PlayerCard key={player.rank} player={player} />
          ))}
        </div>

        {/* Row 2: Top 4, 5, 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row2.map((player) => (
            <PlayerCard key={player.rank} player={player} />
          ))}
        </div>

        {/* Row 3: Top 7, 8, 9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row3.map((player) => (
            <PlayerCard key={player.rank} player={player} />
          ))}
        </div>

        {/* Row 4: Top 10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {row4.map((player) => (
            <PlayerCard key={player.rank} player={player} />
          ))}
        </div>
      </div>
    </section>
  )
}
