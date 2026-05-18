"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

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
    "Mashine United": "MU.png",
    "Ubers": "UB.png",
  };
  return logoMap[team] || "default.png";
};

const getTeamCardBg = (team: string) => {
  const bgMap: Record<string, string> = {
    "ReAl": "bg-white",
    "Barcha FC": "bg-red-900",
    "PXG": "bg-blue-800",
    "Chelsky": "bg-blue-800",
    "Bastard Munchen": "bg-red-900",
    "Arsenali": "bg-red-600",
    "Chicorid": "bg-blue-800",
    "Mashine City": "bg-orange-500",
    "Ajajax": "bg-red-400",
    "Berserk Dortmund": "bg-yellow-400",
    "Mashine United": "bg-red-700",
    "Ubers": "bg-white",
  };
  return bgMap[team] || "bg-secondary/20";
};

const getLeagueLogo = (team: string) => {
  const leagueMap: Record<string, string> = {
    "ReAl": "laliga.png",
    "Barcha FC": "laliga.png",
    "PXG": "ligue1.png",
    "Chelsky": "premier.png",
    "Bastard Munchen": "bundesliga.jpg",
    "Arsenali": "premier.png",
    "Chicorid": "laliga.png",
    "Mashine City": "premier.png",
    "Ajajax": "eredivisie.png",
    "Berserk Dortmund": "bundesliga.jpg",
    "Ubers": "seriea.png",
  };
  return leagueMap[team] || "";
};

const top9Players = [
  {
    rank: 1,
    name: "AlterGX ",
    team: "ReAl",
    dorsal: "10",
    stats: { goals: 8116, assists: 3401, saves: 4685, mvp: 1545 },
    marketValue: "310.000.00M",
    position: "Midfielder Offensive",
    statsIncrease: { goals: { percent: "+12.5%", total: "+1014" }, assists: { percent: "+15.3%", total: "+572" }, saves: { percent: "+8.7%", total: "+389" }, mvp: { percent: "+22.1%", total: "+341" } },
    percentage: "98.5%",
    country: "Inglaterra",
    countryLogo: "EN.png",
    palmares: ["Campeon 2024, Campeon 2025, MVP Campeon 2026"]
  },
  {
    rank: 2,
    name: "TheRealbracho",
    team: "Barcha FC",
    dorsal: "9",
    stats: { goals: 6310, assists: 2358, saves: 3732, mvp: 1145 },
    marketValue: "300.000.000M",
    position: "Center Forward",
    statsIncrease: { goals: { percent: "+18.2%", total: "+1122" }, assists: { percent: "+9.4%", total: "+334" }, saves: { percent: "+11.6%", total: "+506" }, mvp: { percent: "+14.8%", total: "+205" } },
    percentage: "95.2%",
    country: "Francia",
    countryLogo: "FR.png",
    palmares: ["Campeon 2024, MVP Campeon 2025, Campeon 2026"]
  },
  {
    rank: 3,
    name: "ElGangsta_07",
    team: "PXG",
    dorsal: "7",
    stats: { goals: 10575, assists: 1377, saves: 3481, mvp: 565 },
    marketValue: "255.000.000M",
    position: "Left Winger",
    statsIncrease: { goals: { percent: "+25.1%", total: "+2118" }, assists: { percent: "+6.8%", total: "+116" }, saves: { percent: "+7.2%", total: "+245" }, mvp: { percent: "+9.3%", total: "+43" } },
    percentage: "92.8%",
    country: "Alemania",
    countryLogo: "GR.png",
    palmares: ["Campeon 2024, Campeon 2025, MVP Campeon 2024"]
  },
  {
    rank: 4,
    name: "Dan1615",
    team: "Chicorid",
    dorsal: "11",
    stats: { goals: 5567, assists: 1677, saves: 1593, mvp: 543 },
    marketValue: "220.000.000M",
    position: "Right Winger",
    statsIncrease: { goals: { percent: "+14.7%", total: "+778" }, assists: { percent: "+12.1%", total: "+227" }, saves: { percent: "+5.9%", total: "+112" }, mvp: { percent: "+16.4%", total: "+75" } },
    percentage: "89.6%",
    country: "Japon",
    countryLogo: "JP.png",
    palmares: ["Campeon 2025, Campeon 2026"]
  },
  {
    rank: 5,
    name: "Willicraft400",
    team: "Arsenali",
    dorsal: "40",
    stats: { goals: 2856, assists: 723, saves: 1014, mvp: 445 },
    marketValue: "170.000.000M",
    position: "Midfielder Defensive",
    statsIncrease: { goals: { percent: "+9.3%", total: "+434" }, assists: { percent: "+18.7%", total: "+127" }, saves: { percent: "+13.2%", total: "+141" }, mvp: { percent: "+11.5%", total: "+63" } },
    percentage: "87.4%",
    country: "Inglaterra",
    countryLogo: "EN.png",
    palmares: [""]
  },
  {
    rank: 6,
    name: "Skarto1",
    team: "Chelsky",
    dorsal: "8",
    stats: { goals: 2481, assists: 411, saves: 1327, mvp: 267 },
    marketValue: "155.000.000M",
    position: "Center Back",
    statsIncrease: { goals: { percent: "+11.8%", total: "+279" }, assists: { percent: "+7.6%", total: "+29" }, saves: { percent: "+19.4%", total: "+252" }, mvp: { percent: "+8.9%", total: "+19" } },
    percentage: "84.1%",
    country: "Francia",
    countryLogo: "FR.png",
    palmares: [""]
  },
  {
    rank: 7,
    name: "Drakrad404",
    team: "Bastard Munchen",
    dorsal: "6",
    stats: { goals: 1891, assists: 572, saves: 927, mvp: 234 },
    marketValue: "125.000.000M",
    position: "Midfielder Box-to-Box",
    statsIncrease: { goals: { percent: "+13.4%", total: "+253" }, assists: { percent: "+15.9%", total: "+91" }, saves: { percent: "+10.7%", total: "+99" }, mvp: { percent: "+12.3%", total: "+30" } },
    percentage: "81.7%",
    country: "Japon",
    countryLogo: "JP.png",
    palmares: [""]
  },
  {
    rank: 8,
    name: "zEstebanPVP",
    team: "Berserk Dortmund",
    dorsal: "15",
    stats: { goals: 1319, assists: 365, saves: 417, mvp: 135 },
    marketValue: "50.000.000M",
    position: "Center Forward",
    statsIncrease: { goals: { percent: "+16.2%", total: "+219" }, assists: { percent: "+9.1%", total: "+42" }, saves: { percent: "+6.4%", total: "+27" }, mvp: { percent: "+14.7%", total: "+19" } },
    percentage: "78.3%",
    country: "Brasil",
    countryLogo: "BR.png",
    palmares: [""]
  },
  {
    rank: 9,
    name: "JosuaSCA",
    team: "Mashine United",
    dorsal: "20",
    stats: { goals: 1217, assists: 425, saves: 312, mvp: 135 },
    marketValue: "45.000.000M",
    position: "Right Back",
    statsIncrease: { goals: { percent: "+8.9%", total: "+107" }, assists: { percent: "+11.3%", total: "+57" }, saves: { percent: "+7.8%", total: "+24" }, mvp: { percent: "+9.6%", total: "+15" } },
    percentage: "75.9%",
    country: "Francia",
    countryLogo: "FR.png",
    palmares: [""]
  },
  {
    rank: 10,
    name: "Pamtita",
    team: "Ajajax",
    dorsal: "4",
    stats: { goals: 239, assists: 201, saves: 192, mvp: 11 },
    marketValue: "35.000.000M",
    position: "Center Back",
    statsIncrease: { goals: { percent: "+5.2%", total: "+13" }, assists: { percent: "+8.4%", total: "+17" }, saves: { percent: "+12.1%", total: "+23" }, mvp: { percent: "+6.7%", total: "+0" } },
    percentage: "72.5%",
    country: "Alemania",
    countryLogo: "GR.png",
    palmares: [""]
  },
]

function PlayerCard({ player, onClick }: { player: typeof top9Players[0], onClick: () => void }) {
  return (
    <div 
      className="group relative border border-border/10 bg-card/10 overflow-hidden cursor-pointer transition-all duration-500 hover:border-foreground/20 flex flex-col" 
      onClick={onClick}
    >
      {/* Fondo decorativo con rejilla */}
      <div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700" 
        style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      {/* Car Image Area - Top */}
      <div className="relative w-full h-24 border-b border-border/20 bg-secondary/20 flex items-center justify-center overflow-hidden z-10">
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
        <span className="text-[80px] font-[family-name:var(--font-poppins)] text-foreground/[0.1] select-none">
          {player.dorsal}
        </span>

        {/* Top 3 accent */}
        {player.rank <= 3 && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        )}
      </div>

      {/* Content - Bottom */}
      <div className="flex-1 p-6 flex flex-col z-10 transform group-hover:translate-y-[-5px] transition-transform duration-500">
        {/* Player Info */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/70">#{player.dorsal}</span>
            <div className="w-4 h-px bg-border/40" />
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground/70">{player.team.toUpperCase()}</span>
            <div className="flex items-center gap-2">
              {/* Selección */}
              <div className="w-8 h-8 border border-border/30 flex items-center justify-center bg-background/50 shadow-sm relative z-10">
                <img
                  src={`/acces/${player.countryLogo}`}
                  alt={`${player.country} logo`}
                  className="w-full h-full object-contain p-1.5"
                />
              </div>
              {/* Club */}
              <div className={`w-8 h-8 border border-border/30 flex items-center justify-center relative ${getTeamCardBg(player.team)}`}>
                <img
                  src={`/acces/${getTeamLogo(player.team)}`}
                  alt={`${player.team} logo`}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              {/* Liga */}
              {getLeagueLogo(player.team) && (
                <div className="w-8 h-8 border border-border/30 flex items-center justify-center bg-secondary/10">
                  <img
                    src={`/acces/${getLeagueLogo(player.team)}`}
                    alt="League logo"
                    className="w-5 h-5 object-contain opacity-60"
                  />
                </div>
              )}
            </div>
          </div>
          <h3 className="flex items-center gap-2 text-2xl sm:text-3xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground">
            {player.name.toUpperCase()}
          </h3>
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/70 font-[family-name:var(--font-bebas)] uppercase">
            {player.position}
          </p>
          <div className="h-px w-0 group-hover:w-full bg-foreground/20 mt-4 transition-all duration-700" />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {[
            { label: "GOLES", value: player.stats.goals, percent: player.statsIncrease.goals.percent },
            { label: "ASISTENCIAS", value: player.stats.assists, percent: player.statsIncrease.assists.percent },
            { label: "SALVADAS", value: player.stats.saves, percent: player.statsIncrease.saves.percent },
            { label: "MVP", value: player.stats.mvp, percent: player.statsIncrease.mvp.percent },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-2.5 border border-border/10 bg-secondary/10">
              <span className="text-xl sm:text-2xl font-[family-name:var(--font-bebas)] text-foreground block">
                {stat.value}
              </span>
              <span className="text-[8px] text-green-500 font-mono font-bold leading-none">{stat.percent}</span>
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
  const [selectedPlayer, setSelectedPlayer] = useState<typeof top9Players[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

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
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
            RANKING OFICIAL
          </span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="relative">
            <span className="absolute -top-12 -left-4 text-[100px] font-[family-name:var(--font-bebas)] text-foreground/[0.03] select-none whitespace-nowrap pointer-events-none hidden lg:block uppercase">
              PERFORMANCE
            </span>
            <h2 className="relative text-6xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85]">
              TOP 10<br /><span className="text-foreground/40 italic">JUGADORES</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg border-l border-border/20 pl-8">
              Este es el Ranking Oficial realizado por la IA, en el se muestran Estadisticsa, Porcentajes de Rendimiento, Valores de Mercado junto a los Palmarés del Top 10 jugadores de Rocket League Esports en la actualidad. Haz click en cada jugador para ver su reporte detallado de rendimiento.
            </p>
          </div>
        </div>

        {/* Row 1: Top 1, 2, 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row1.map((player) => (
            <PlayerCard key={player.rank} player={player} onClick={() => { setSelectedPlayer(player); setIsOpen(true); }} />
          ))}
        </div>

        {/* Row 2: Top 4, 5, 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row2.map((player) => (
            <PlayerCard key={player.rank} player={player} onClick={() => { setSelectedPlayer(player); setIsOpen(true); }} />
          ))}
        </div>

        {/* Row 3: Top 7, 8, 9 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {row3.map((player) => (
            <PlayerCard key={player.rank} player={player} onClick={() => { setSelectedPlayer(player); setIsOpen(true); }} />
          ))}
        </div>

        {/* Row 4: Top 10 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {row4.map((player) => (
            <PlayerCard key={player.rank} player={player} onClick={() => { setSelectedPlayer(player); setIsOpen(true); }} />
          ))}
        </div>
      </div>

      {/* Player Detail Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl w-[95vw] sm:w-full border border-border/20 bg-background/95 backdrop-blur-xl p-0 overflow-y-auto max-h-[90vh] lg:overflow-hidden shadow-2xl animate-pop-open rounded-none">
          <DialogTitle className="sr-only">Detalle del Jugador</DialogTitle>
          {selectedPlayer && (
            <div className="relative">
              {/* Fondo decorativo con rejilla */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
              />
              
              {/* Header Técnico */}
              <div className="relative z-10 border-b border-border/10 bg-secondary/10 px-6 sm:px-8 py-3 sm:py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-muted-foreground font-mono">Reporte De Rendimiento // ID_{String(selectedPlayer.rank).padStart(3, '0')}</span>
                </div>
                <span className="text-[9px] tracking-[0.3em] text-muted-foreground/50 font-mono uppercase">RANK_{selectedPlayer.rank}</span>
              </div>

              <div className="relative z-10 grid gap-0 lg:grid-cols-[1fr_350px]">
                {/* Main Content Area */}
                <div className="p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-border/10">
                  <div className="space-y-8 sm:space-y-10">
                    {/* Profile Header */}
                    <div className="flex flex-col md:flex-row md:items-center gap-6 sm:gap-10">
                      <div className="relative flex-shrink-0">
                        {/* Club Logo Main Container */}
                        <div className="w-28 h-28 sm:w-32 sm:h-32 border border-border/20 flex items-center justify-center p-6 bg-secondary/5 relative overflow-hidden shadow-xl">
                          <div className={`absolute inset-0 opacity-10 ${getTeamCardBg(selectedPlayer.team)}`} />
                          <img src={`/acces/${getTeamLogo(selectedPlayer.team)}`} alt="" className="w-full h-full object-contain relative z-10" />
                        </div>
                        {/* Country Flag Badge Overlay */}
                        <div className="absolute -bottom-2 -right-2 w-10 h-10 sm:w-12 sm:h-12 border border-border/20 bg-background flex items-center justify-center p-2 shadow-2xl z-20">
                          <img src={`/acces/${selectedPlayer.countryLogo}`} alt={selectedPlayer.country} className="w-full h-full object-contain" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] sm:tracking-[0.4em] text-muted-foreground uppercase font-mono">{selectedPlayer.country.toUpperCase()} // {selectedPlayer.team}</span>
                          <div className="w-1 h-1 bg-foreground/20 rounded-full" />
                          <span className="text-[11px] tracking-[0.4em] text-foreground/40 font-mono">DORSAL #{selectedPlayer.dorsal}</span>
                        </div>
                        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85]">
                          {selectedPlayer.name.toUpperCase()}
                        </h2>
                        <p className="text-[11px] tracking-[0.5em] text-muted-foreground uppercase mt-2">{selectedPlayer.position}</p>
                      </div>
                    </div>

                    {/* Market & Performance Grid */}
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="border border-border/10 bg-secondary/5 p-5 sm:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-[8px]">VAL_REF_01</div>
                        <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Valor de Mercado</p>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-foreground">
                          €{selectedPlayer.marketValue}
                        </p>
                      </div>
                      <div className="border border-border/10 bg-secondary/5 p-5 sm:p-6 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-[8px]">PERF_IDX_A</div>
                        <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground mb-3">Rendimiento Global</p>
                        <div className="flex items-baseline gap-3">
                          <p className="text-2xl sm:text-3xl lg:text-4xl font-[family-name:var(--font-bebas)] text-foreground">{selectedPlayer.percentage}</p>
                          <span className="text-[10px] text-green-500 font-bold font-mono">+2.4% <span className="text-[8px] text-muted-foreground/40 uppercase">INDEX</span></span>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Stats with Deltas */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Métricas de Temporada</p>
                        <div className="flex-1 h-px bg-border/10" />
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                          { label: "Goles", value: selectedPlayer.stats.goals, delta: selectedPlayer.statsIncrease.goals },
                          { label: "Asistencias", value: selectedPlayer.stats.assists, delta: selectedPlayer.statsIncrease.assists },
                          { label: "Salvadas", value: selectedPlayer.stats.saves, delta: selectedPlayer.statsIncrease.saves },
                          { label: "MVP", value: selectedPlayer.stats.mvp, delta: selectedPlayer.statsIncrease.mvp },
                        ].map((stat) => (
                          <div key={stat.label} className="group/stat border border-border/10 bg-card/5 p-5 transition-colors hover:bg-card/10">
                            <span className="text-[8px] tracking-[0.3em] text-muted-foreground block mb-3 uppercase font-mono">{stat.label}</span>
                            <span className="text-xl sm:text-2xl lg:text-3xl font-[family-name:var(--font-bebas)] text-foreground block group-hover/stat:translate-x-1 transition-transform">
                              {stat.value}
                            </span>
                            <div className="mt-4 pt-3 border-t border-border/10 flex items-center justify-between">
                              <span className="text-[10px] text-green-500 font-bold font-mono">{stat.delta.percent}</span>
                              <span className="text-[9px] text-muted-foreground/60 font-mono">{stat.delta.total}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Area */}
                <div className="p-6 sm:p-10 lg:p-12 space-y-8 sm:space-y-10 bg-secondary/5">
                  {/* Palmares Section */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Palmarés Histórico</p>
                      <div className="flex-1 h-px bg-border/10" />
                    </div>
                    <div className="space-y-4">
                      {selectedPlayer.palmares[0].split(',').map((achievement, idx) => (
                        <div key={idx} className="flex items-start gap-4 group/item p-3 border border-border/5 bg-background/20 hover:border-foreground/10 transition-colors">
                          <div className="w-1.5 h-1.5 bg-foreground/40 mt-1 flex-shrink-0" />
                          <span className="text-[10px] tracking-widest text-muted-foreground/80 uppercase leading-relaxed font-medium">
                            {achievement.trim()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* League Info */}
                  <div className="pt-8 border-t border-border/10 flex items-center justify-between">
                     <div className="flex items-center gap-3">
                        <img src={`/acces/${getLeagueLogo(selectedPlayer.team)}`} alt="" className="w-6 h-6 object-contain opacity-50" />
                        <span className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">Liga Oficial</span>
                     </div>
                     <div className="h-px w-8 bg-foreground/10" />
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
