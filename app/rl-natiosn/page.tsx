"use client"

import { useState } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

function HeroTournament() {
  return (
    <section className="relative min-h-[92vh] pt-20 overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.03)_0%,_transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-16 pt-24 pb-16">
        {/* Botón de retorno al inicio con estilo de logo */}
        <div className="mb-12 animate-reveal-up">
          <a href="/" className="inline-flex items-center gap-6 group">
            <span className="text-2xl font-[family-name:var(--font-bebas)] tracking-[0.3em] text-foreground">
              RL26
            </span>
            <div className="h-px w-8 bg-foreground/20 group-hover:w-16 group-hover:bg-foreground/50 transition-all duration-500" />
            <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase group-hover:text-foreground transition-colors">
              VOLVER AL INICIO
            </span>
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-center">
          <div className="max-w-3xl">
            <p className="text-[11px] sm:text-xs tracking-[0.5em] text-muted-foreground animate-reveal-up">
              TORNEO PRINCIPAL
            </p>
            <h1 className="mt-6 text-[clamp(3.5rem,10vw,9.5rem)] font-[family-name:var(--font-bebas)] leading-[0.85] tracking-[-0.02em] text-foreground animate-reveal-up stagger-1">
              RL NATIONS
            </h1>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed animate-reveal-up stagger-2">
              Formato moderno: todos contra todos para definir a los 4 mejores, luego
              semifinales y final.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-reveal-up stagger-3">
              <a
                href="#participantes"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[13px] tracking-[0.2em] transition-all duration-400 hover:bg-foreground/90"
              >
                VER SELECCIONES
                <span className="w-4 h-px bg-background/50 transition-all duration-300 group-hover:w-6" />
              </a>
              <a
                href="#posiciones"
                className="inline-flex items-center justify-center px-8 py-4 border border-foreground/20 text-foreground text-[13px] tracking-[0.2em] transition-all duration-400 hover:border-foreground/40"
              >
                TABLA DE POSICIONES
              </a>
            </div>
          </div>

          {/* Imagen del Trofeo RL26 */}
          <div className="hidden lg:block animate-reveal-up stagger-4">
            <img 
              src="/acces/RL26Trophy.png" 
              alt="RL26 Trophy" 
              className="w-full max-w-[450px] object-contain drop-shadow-[0_0_80px_rgba(255,255,255,0.1)] hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

type Selection = {
  id: string
  name: string
  abbr: string
  group: string
  players: [string, string]
  logo: string
  winProbability?: number
}

const selections: Selection[] = [
  {
    id: "1",
    name: "Argentina",
    abbr: "ARG",
    logo: "ARG.png",
    players: ["Por definir", "Por definir"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "2",
    name: "Brasil",
    abbr: "BRA",
    logo: "BR.png",
    players: ["TheRealBracho", "ZestebanPvP"],
    group: "B",
    winProbability: 0,
  },
  {
    id: "3",
    name: "Japon",
    abbr: "JPN",
    logo: "JP.png",
    players: ["Dan1615", "Drakkard"],
    group: "B",
    winProbability: 0,
  },
  {
    id: "4",
    name: "Marruecos",
    abbr: "MAR",
    logo: "MR.png",
    players: ["Por definir", "Por definir"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "5",
    name: "Alemania",
    abbr: "GER",
    logo: "GR.png",
    players: ["ElGangsta_07", "Pamtita"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "6",
    name: "Portugal",
    abbr: "POR",
    logo: "PR.png",
    players: ["Por definir", "Por definir"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "7",
    name: "Francia",
    abbr: "FRA",
    logo: "FR.png",
    players: ["Skkart01", "JosuaSCA"],
    group: "B",
    winProbability: 0,
  },
  {
    id: "8",
    name: "Inglaterra",
    abbr: "ENG",
    logo: "EN.png",
    players: ["AlterGX", "Willicraft400"],
    group: "B",
    winProbability: 0,
  },
]

const stadiums = [
  { id: "1", name: "DFH STADIUM", type: "CIRCUITO CENTRAL", tag: "MAIN ARENA", image: "DFH.png" },
  { id: "2", name: "MANNFIELD", type: "PARQUE PÚBLICO", tag: "PRO FIELD", image: "Mannfield.png" },
  { id: "3", name: "CHAMPIONS FIELD", type: "ESTADIO ELITE", tag: "GLOBAL", image: "ChampionsField.png" },
  { id: "4", name: "PARC DE PARIS", type: "DISTRITO URBANO", tag: "STREET", image: "/public/PARIS.png" },
  { id: "5", name: "BECKWITH PARK", type: "CAMPO DE ENTRENAMIENTO", tag: "LOCAL", image: "BECKWITH.PNG" },
  { id: "6", name: "VIVA LA VIDA", type: "PLAYA CALIDA", tag: "BEACH", image: "VIVA.PNG" },
  { id: "7", name: "BOOSTFIELD MALL", type: "CENTRO MODERNO", tag: "FUTURE", image: "BOOST.PNG" },
  { id: "8", name: "NEO TOKYO", type: "SECTOR CYBERPUNK", tag: "FUTURE", image: "NEO.png" },
]

const standingsA = [
  { pos: 1, team: "Alemania", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
  { pos: 2, team: "Argentina", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
  { pos: 3, team: "Marruecos", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
  { pos: 4, team: "Portugal", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
]

const standingsB = [
  { pos: 1, team: "Brasil", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
  { pos: 2, team: "Francia", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
  { pos: 3, team: "Inglaterra", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
  { pos: 4, team: "Japon", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 }, // Reset points
]

function SelectionsGrid() {
  return (
    <section id="participantes" className="py-24 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">
            SELECCIONES
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {selections.map((team) => (
            <div
              key={team.id}
              className="group relative aspect-square border border-border/20 bg-card/20 flex items-center justify-center hover-lift hover-glow cursor-pointer overflow-hidden transition-all duration-500"
            >
              <img
                src={`/acces/${team.logo}`}
                alt={`${team.name} logo`}
                className="w-3/4 h-3/4 object-contain transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay for text on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-end p-4">
                <h3 className="text-lg font-[family-name:var(--font-bebas)] tracking-wide text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {team.name.toUpperCase()}
                </h3>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground font-[family-name:var(--font-bebas)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                  {team.abbr}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplatesTwoPlayers() {
  const [isAlterGxDialogOpen, setIsAlterGxDialogOpen] = useState(false);
  const [isBrachoDialogOpen, setIsBrachoDialogOpen] = useState(false);
  const [isZestebanDialogOpen, setIsZestebanDialogOpen] = useState(false);
  const [isWillicraftDialogOpen, setIsWillicraftDialogOpen] = useState(false);
  const [isSkkartDialogOpen, setIsSkkartDialogOpen] = useState(false);
  const [isDrakkardDialogOpen, setIsDrakkardDialogOpen] = useState(false);
  const [isDan1615DialogOpen, setIsDan1615DialogOpen] = useState(false);
  const [isJosuaSCADialogOpen, setIsJosuaSCADialogOpen] = useState(false);
  const [isPamtitaDialogOpen, setIsPamtitaDialogOpen] = useState(false);
  const [isElGangstaDialogOpen, setIsElGangstaDialogOpen] = useState(false);

  type Player = {
    name: string;
    team: string;
    clubLogo: string;
    country: string;
    countryLogo: string;
    dorsal: string;
    position: string;
    marketValue: string;
    achievements: string[];
    stats: { goals: number; assists: number; saves: number; mvp: number };
    analysis: string;
    mvpProbability: number;
    championshipProbability: number;
  };

  const alterGxData: Player = {
    name: "AlterGX",
    team: "ReAl",
    clubLogo: "RA.png",
    country: "Inglaterra",
    countryLogo: "EN.png",
    dorsal: "10",
    position: "Midfielder Offensive",
    marketValue: "310.000.000M",
    achievements: ["Triple Campeón RL26", "Líder de Asistencias 2025", "MVP de Temporada Regular"],
    stats: { goals: 8116, assists: 3401, saves: 4685, mvp: 1545 },
    analysis: "AlterGX no es solo un jugador, es el motor táctico de Inglaterra. Con una precisión de pase del 94% y una lectura de juego que anticipa las rotaciones rivales en milisegundos, su impacto trasciende las estadísticas básicas. Es el arquitecto de la ofensiva y el primer bastión de la defensa en transiciones rápidas.",
    mvpProbability: 92,
    championshipProbability: 85,
  };

  const theRealBrachoData: Player = {
    name: "TheRealBracho",
    team: "Barcha FC",
    clubLogo: "BF.png",
    country: "Brasil",
    countryLogo: "BR.png",
    dorsal: "9",
    position: "Center Forward",
    marketValue: "300.000.000M",
    achievements: ["Bota de Oro 2025", "Campeón Mundial 2v2", "Recordman de Hat-tricks"],
    stats: { goals: 6310, assists: 2358, saves: 3732, mvp: 1145 },
    analysis: "TheRealBracho encarna la potencia pura del Rocket League brasileño. Su habilidad para convertir ángulos imposibles en goles espectaculares lo convierte en el 'clutch player' por excelencia. Bajo presión, su rendimiento aumenta un 15%, siendo el jugador con más goles en los últimos 30 segundos de partido en la historia del torneo.",
    mvpProbability: 88,
    championshipProbability: 80,
  };

  const zestebanPvPData: Player = {
    name: "ZestebanPvP",
    team: "Berserk Dortmund",
    clubLogo: "BD.png",
    country: "Brasil",
    countryLogo: "BR.png",
    dorsal: "15",
    position: "Center Forward",
    marketValue: "50.000.000M",
    achievements: ["Muro de Hierro 2025", "Campeón Sudamericano", "Líder de Salvadas"],
    stats: { goals: 2105, assists: 1890, saves: 7210, mvp: 840 },
    analysis: "ZestebanPvP es un Jugador de la nueva generación. Su capacidad de posicionamiento ofensivo es exacto, es uno de los jugadores con mayor efectividad en tiros al area.",
    mvpProbability: 75,
    championshipProbability: 80,
  };

  const willicraft400Data: Player = {
    name: "Willicraft400",
    team: "Arsenali",
    clubLogo: "AR.png",
    country: "Inglaterra",
    countryLogo: "EN.png",
    dorsal: "40",
    position: "Midfielder Defensive",
    marketValue: "170.000.000M",
    achievements: ["Maestro de Rotaciones", "Campeón Europeo RL26", "Jugador Revelación"],
    stats: { goals: 4520, assists: 5100, saves: 3200, mvp: 980 },
    analysis: "Willicraft400 es el nexo perfecto entre defensa y ataque. Su inteligencia táctica le permite estar siempre en el lugar correcto. Inglattera depende de su visión de juego para mantener la presión constante sobre el rival.",
    mvpProbability: 82,
    championshipProbability: 85,
  };

  const skkart01Data: Player = {
    name: "Skkart01",
    team: "Chelsky",
    clubLogo: "CH.png",
    country: "Francia",
    countryLogo: "FR.png",
    dorsal: "8",
    position: "Forward",
    marketValue: "155.000.000M",
    achievements: ["Campeón Major 2025", "MVP Final de Liga", "Top Sniper"],
    stats: { goals: 5200, assists: 2100, saves: 1800, mvp: 750 },
    analysis: "Skkart01 es la definición de eficiencia frente a la portería. Su capacidad para encontrar huecos en defensas cerradas lo convierte en la principal amenaza ofensiva de Francia.",
    mvpProbability: 80,
    championshipProbability: 70,
  };

  const dan1615Data: Player = {
    name: "Dan1615",
    team: "Chicorid",
    clubLogo: "CD.png",
    country: "Japon",
    countryLogo: "JP.png",
    dorsal: "11",
    position: "Right Winger",
    marketValue: "220.000.000M",
    achievements: ["MVP Asia-Pacific 2025", "Campeón de Invierno", "Top Goles Aéreos"],
    stats: { goals: 6200, assists: 1900, saves: 2100, mvp: 920 },
    analysis: "Dan1615 es el pilar de la ofensiva japonesa. Su dominio del juego y su precisión en el remate lo sitúan como uno de los jugadores más temidos. Su capacidad para generar peligro de la nada sera vital para las aspiraciones de su selección.",
    mvpProbability: 85,
    championshipProbability: 40,
  };

  const drakkardData: Player = {
    name: "Drakkard",
    team: "Bastard Munchen",
    clubLogo: "BM.png",
    country: "Japon",
    countryLogo: "JP.png",
    dorsal: "6",
    position: "Midfielder Box To Box",
    marketValue: "125.000.000M",
    achievements: ["Capitán del Año", "Líder de Intercepciones", "Campeón 3v3"],
    stats: { goals: 1500, assists: 3800, saves: 6200, mvp: 610 },
    analysis: "Tras su llegada a la selección nipona, Drakkard aporta versatilidad que puede llegarle a servir a Japon. Su equilibrio sera fundamental para esta Copa Del Mundo.",
    mvpProbability: 72,
    championshipProbability: 40,
  };

  const josuaSCAData: Player = {
    name: "JosuaSCA",
    team: "Mashine United",
    clubLogo: "MU.png",
    country: "Francia",
    countryLogo: "FR.png",
    dorsal: "20",
    position: "Right Back",
    marketValue: "45.000.000M",
    achievements: ["Campeón de Liga", "Estratega del Año", "Maestro del Balón"],
    stats: { goals: 3200, assists: 4500, saves: 2800, mvp: 890 },
    analysis: "JosuaSCA se basa en la defensa proactiva. Su habilidad para defender ha sido clave en algunos momentos a pesar de su caida en rendimiento general, ahora busca redimirse en el mundial.",
    mvpProbability: 78,
    championshipProbability: 70,
  };

  const pamtitaData: Player = {
    name: "Pamtita",
    team: "Ajajax",
    clubLogo: "AJ.png", // Assuming Chicorid uses the same logo as Chelsky for now, or you can provide a new one
    country: "Alemania",
    countryLogo: "GR.png",
    dorsal: "4",
    position: "Center Back",
    marketValue: "35.000.000M",
    achievements: ["Asistente del Año 2025", "Campeón de Copa Nacional", "Visión de Juego Excepcional"],
    stats: { goals: 3100, assists: 6000, saves: 2500, mvp: 1100 },
    analysis: "Pamtita actuara como la defensa de Alemania, con su capacidad  para leer y detener jugadas. Seran claves para el rendimiento de la selección Alemana.",
    mvpProbability: 85,
    championshipProbability: 85,
  };

  const elGangstaData: Player = {
    name: "ElGangsta",
    team: "PXG",
    clubLogo: "PX.png",
    country: "Alemania",
    countryLogo: "GR.png",
    dorsal: "7",
    position: "Left Winger",
    marketValue: "255.000.000M",
    achievements: ["Goleador Prolífico", "Héroe de Partidos Clave", "Campeón de Liga"],
    stats: { goals: 7800, assists: 2900, saves: 1200, mvp: 1300 },
    analysis: "ElGangsta es el finalizador por excelencia de Alemania. Su instinto goleador y su habilidad para definir en situaciones de alta presión lo convierten en una amenaza constante para cualquier defensa.",
    mvpProbability: 88,
    championshipProbability: 85,
  };

  const PlayerDetailDialog = ({ player, isOpen, onOpenChange }: { player: Player, isOpen: boolean, onOpenChange: (open: boolean) => void }) => (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full border border-border/10 bg-background p-0 overflow-y-auto max-h-[90vh] rounded-none shadow-2xl">
        <DialogTitle className="sr-only">Perfil de {player.name}</DialogTitle>
        <div className="relative">
          {/* Technical Background */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
          />

          <div className="relative">
            {/* Header section */}
            <div className="bg-secondary/10 p-6 sm:p-10 border-b border-border/10">
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
                <div className="w-20 h-20 border border-border/20 bg-background flex items-center justify-center p-4 shadow-xl">
                  <img src={`/acces/${player.countryLogo}`} alt={player.country} className="w-full h-full object-contain" />
                </div>
                <div>
                  <span className="text-[10px] tracking-[0.3em] sm:tracking-[0.5em] text-muted-foreground mb-2 block font-mono uppercase">Player_Report // WC_2026</span>
                  <h2 className="text-5xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-none animate-reveal-up">
                    {player.name.toUpperCase()}
                  </h2>
                </div>
              </div>
            </div>

            {/* Data Grid */}
            <div className="grid grid-cols-3 gap-px bg-border/10">
              <div className="bg-background p-6">
                <span className="text-[8px] tracking-[0.4em] text-muted-foreground block mb-2 uppercase">Club Actual</span>
                <div className="flex items-center gap-2">
                  <img src={`/acces/${player.clubLogo}`} alt={player.team} className="w-4 h-4 object-contain" />
                  <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">{player.team.toUpperCase()}</span>
                </div>
              </div>
              <div className="bg-background p-6">
                <span className="text-[8px] tracking-[0.4em] text-muted-foreground block mb-2 uppercase">Dorsal</span>
                <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground">#{player.dorsal}</span>
              </div>
              <div className="bg-background p-6">
                <span className="text-[8px] tracking-[0.4em] text-muted-foreground block mb-2 uppercase">Posición</span>
                <span className="text-xs font-bold text-foreground">{player.position.toUpperCase().replace(' ', '_')}</span>
              </div>
            </div>

            {/* Analysis Section */}
            <div className="p-6 sm:p-10 space-y-6 bg-secondary/5">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-foreground/20" />
                <span className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase">Análisis Predictivo de Victoria</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed animate-reveal-up stagger-1">
                {player.analysis}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="plantillas" className="py-20 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">
            PLANTILLAS OFICIALES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {selections.map((s) => (
            <div
              key={s.id}
              className="border border-border/20 bg-card/20 flex flex-col transition-all duration-500 hover:bg-card/30"
            >
              <div className="flex items-center gap-3 px-4 py-3 bg-secondary/10 border-b border-border/10">
                <img src={`/acces/${s.logo}`} alt="" className="w-5 h-5 object-contain" />
                <span className="text-sm font-[family-name:var(--font-bebas)] tracking-widest text-foreground">
                  {s.name.toUpperCase()}
                </span>
              </div>
              <div className="p-4 space-y-2">
                {s.players.map((p, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span 
                      className={`text-xs tracking-wide ${p === "AlterGX" || p === "TheRealBracho" || p === "ZestebanPvP" || p === "Willicraft400" || p === "Skkart01" || p === "Drakkard" || p === "Dan1615" || p === "JosuaSCA" || p === "ElGangsta_07" || p === "Pamtita" ? "text-foreground font-medium cursor-pointer hover:text-foreground/80 transition-all underline underline-offset-4 decoration-foreground/20" : "text-muted-foreground"}`}
                      onClick={() => p === "AlterGX" ? setIsAlterGxDialogOpen(true) :
                                       p === "TheRealBracho" ? setIsBrachoDialogOpen(true) :
                                       p === "ZestebanPvP" ? setIsZestebanDialogOpen(true) :
                                       p === "Willicraft400" ? setIsWillicraftDialogOpen(true) : 
                                       p === "Skkart01" ? setIsSkkartDialogOpen(true) : 
                                       p === "Drakkard" ? setIsDrakkardDialogOpen(true) : 
                                       p === "Dan1615" ? setIsDan1615DialogOpen(true) : 
                                       p === "JosuaSCA" ? setIsJosuaSCADialogOpen(true) :
                                       p === "ElGangsta_07" ? setIsElGangstaDialogOpen(true) :
                                       p === "Pamtita" ? setIsPamtitaDialogOpen(true) : null}
                    >
                      {p}
                    </span>
                    <span className="text-[10px] text-foreground/30 font-mono">0{idx + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <PlayerDetailDialog player={alterGxData} isOpen={isAlterGxDialogOpen} onOpenChange={setIsAlterGxDialogOpen} />
      <PlayerDetailDialog player={theRealBrachoData} isOpen={isBrachoDialogOpen} onOpenChange={setIsBrachoDialogOpen} />
      <PlayerDetailDialog player={zestebanPvPData} isOpen={isZestebanDialogOpen} onOpenChange={setIsZestebanDialogOpen} />
      <PlayerDetailDialog player={willicraft400Data} isOpen={isWillicraftDialogOpen} onOpenChange={setIsWillicraftDialogOpen} />
      <PlayerDetailDialog player={skkart01Data} isOpen={isSkkartDialogOpen} onOpenChange={setIsSkkartDialogOpen} />
      <PlayerDetailDialog player={drakkardData} isOpen={isDrakkardDialogOpen} onOpenChange={setIsDrakkardDialogOpen} />
      <PlayerDetailDialog player={dan1615Data} isOpen={isDan1615DialogOpen} onOpenChange={setIsDan1615DialogOpen} />
      <PlayerDetailDialog player={josuaSCAData} isOpen={isJosuaSCADialogOpen} onOpenChange={setIsJosuaSCADialogOpen} />
      <PlayerDetailDialog player={pamtitaData} isOpen={isPamtitaDialogOpen} onOpenChange={setIsPamtitaDialogOpen} />
      <PlayerDetailDialog player={elGangstaData} isOpen={isElGangstaDialogOpen} onOpenChange={setIsElGangstaDialogOpen} />
    </section>
  )
}

function StandingsTable() {
  return (
    <section id="posiciones" className="py-20 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">
            TABLA DE POSICIONES
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[ {name: "GRUPO A", data: standingsA}, {name: "GRUPO B", data: standingsB} ].map((group) => (
            <div key={group.name} className="overflow-hidden border border-border/10 bg-card/20">
              <div className="bg-secondary/10 px-6 py-4 border-b border-border/10">
                <h3 className="text-xl font-[family-name:var(--font-bebas)] tracking-[0.2em] text-foreground">
                  {group.name}
                </h3>
              </div>
              <div className="grid grid-cols-6 gap-2 px-6 py-3 text-[10px] tracking-[0.2em] text-muted-foreground border-b border-border/5">
                <div className="col-span-1">POS</div>
                <div className="col-span-2">PAÍS</div>
                <div className="col-span-1 text-center">PJ</div>
                <div className="col-span-1 text-center">V/E/D</div>
                <div className="col-span-1 text-right">PTS</div>
              </div>
              <div className="divide-y divide-border/5">
                {group.data.map((r) => (
                  <div
                    key={r.team}
                    className={`grid grid-cols-6 gap-2 px-6 py-4 items-center transition-colors hover:bg-white/5 ${
                      r.pos <= 2 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    <div className="col-span-1">
                      <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground/50">
                        {String(r.pos).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center gap-3">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <img
                          src={`/acces/${selections.find((s) => s.name === r.team)?.logo ?? "default.png"}`}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <span className="text-[11px] tracking-wider text-foreground font-medium">{r.team.toUpperCase()}</span>
                    </div>
                    <div className="col-span-1 text-center text-[11px] text-muted-foreground">{r.pj}</div>
                    <div className="col-span-1 text-center text-[10px] text-muted-foreground">
                      {r.pg}/{r.pe}/{r.pp}
                    </div>
                    <div className="col-span-1 text-right">
                      <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground tracking-tight">
                        {r.pts}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm text-muted-foreground">
          * El top 2 de cada grupo clasifica a la fase final.
        </p>
      </div>
    </section>
  )
}

const getSelectionLogo = (teamName: string) => {
  const selection = selections.find((s) => s.name === teamName);
  return selection ? `/acces/${selection.logo}` : "default.png";
};

function MatchSchedule() {
  const fixtures = [
    {
      date: "Sábado 16 Mayo",
      period: "Noche",
      matches: [
        { time: "20:00", home: "Argentina", away: "Marruecos", stadium: "DFH STADIUM", group: "A" },
        { time: "21:30", home: "Brasil", away: "Japon", stadium: "MANNFIELD", group: "B" },
      ]
    },
    {
      date: "Domingo 17 Mayo",
      period: "Mañana",
      matches: [
        { time: "10:00", home: "Alemania", away: "Portugal", stadium: "CHAMPIONS FIELD", group: "A" },
        { time: "11:30", home: "Francia", away: "Inglaterra", stadium: "PARC DE PARIS", group: "B" },
      ]
    },
    {
      date: "Sábado 23 Mayo",
      period: "Noche",
      matches: [
        { time: "20:00", home: "Argentina", away: "Alemania", stadium: "NEO TOKYO", group: "A" },
        { time: "21:30", home: "Brasil", away: "Francia", stadium: "BECKWITH PARK", group: "B" },
      ]
    },
    {
      date: "Domingo 24 Mayo",
      period: "Mañana",
      matches: [
        { time: "10:00", home: "Marruecos", away: "Portugal", stadium: "VIVA LA VIDA", group: "A" },
        { time: "11:30", home: "Japon", away: "Inglaterra", stadium: "BOOSTFIELD MALL", group: "B" },
      ]
    },
    {
      date: "Sábado 30 Mayo",
      period: "Noche",
      matches: [
        { time: "20:00", home: "Argentina", away: "Portugal", stadium: "DFH STADIUM", group: "A" },
        { time: "21:30", home: "Brasil", away: "Inglaterra", stadium: "MANNFIELD", group: "B" },
      ]
    },
    {
      date: "Domingo 31 Mayo",
      period: "Mañana",
      matches: [
        { time: "10:00", home: "Marruecos", away: "Alemania", stadium: "CHAMPIONS FIELD", group: "A" },
        { time: "11:30", home: "Japon", away: "Francia", stadium: "NEO TOKYO", group: "B" },
      ]
    }
  ];

  return (
    <section id="calendario" className="py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase font-mono">
            CALENDARIO FASE DE GRUPOS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fixtures.map((day, idx) => (
            <div key={idx} className="border border-border/10 bg-card/10 overflow-hidden group">
              <div className="bg-secondary/10 px-6 py-4 border-b border-border/10 flex justify-between items-center">
                <div>
                  <h4 className="text-lg font-[family-name:var(--font-bebas)] tracking-wider text-foreground">{day.date.toUpperCase()}</h4>
                  <p className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">{day.period}</p>
                </div>
                <div className="px-2 py-1 bg-foreground/5 border border-foreground/10 text-[9px] font-mono text-foreground/40">
                  FECHA 0{idx + 1}
                </div>
              </div>
              <div className="p-6 space-y-6">
                {day.matches.map((match, mIdx) => (
                  <div key={mIdx} className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono text-muted-foreground/60">{match.time} HRS</span>
                      <span className="text-[9px] tracking-[0.2em] text-foreground/40 bg-foreground/5 px-2">GRUPO {match.group}</span>
                    </div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <div className="flex-1 text-right">
                        <div className="inline-flex items-center gap-2">
                          <img
                            src={getSelectionLogo(match.home)}
                            alt={`${match.home} logo`}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-sm font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{match.home.toUpperCase()}</span>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] font-mono text-foreground/20">VS</span>
                        <span className="text-[8px] font-bold text-green-500/50 tracking-tighter">BO3</span>
                      </div>
                      <div className="flex-1 text-left">
                        <div className="inline-flex items-center gap-2">
                          <span className="text-sm font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{match.away.toUpperCase()}</span>
                          <img
                            src={getSelectionLogo(match.away)}
                            alt={`${match.away} logo`}
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-1 h-1 bg-foreground/20 rounded-full" />
                      <span className="text-[8px] tracking-[0.3em] text-muted-foreground uppercase">{match.stadium}</span>
                    </div>
                    {mIdx === 0 && <div className="mt-6 h-px bg-border/5" />}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TournamentBracket() {
  return (
    <section className="py-24 px-6 lg:px-12" id="bracket">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">
            FASE FINAL
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          {/* Semifinales */}
          <div className="flex flex-col gap-20 w-full max-w-[320px]">
            {[1, 2].map((i) => (
              <div key={i} className="relative group">
                <div className="text-[9px] tracking-[0.4em] text-muted-foreground mb-3 text-center uppercase">Semi-Final {i}</div>
                <div className="space-y-1">
                  <div className="border border-border/20 bg-card/20 p-4 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.3em] text-muted-foreground/40 font-[family-name:var(--font-bebas)]">TBD</span>
                    <div className="w-4 h-4 bg-secondary/20 border border-border/10" />
                  </div>
                  <div className="border border-border/20 bg-card/20 p-4 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.3em] text-muted-foreground/40 font-[family-name:var(--font-bebas)]">TBD</span>
                    <div className="w-4 h-4 bg-secondary/20 border border-border/10" />
                  </div>
                </div>
                <div className="hidden lg:block absolute top-[60%] -right-12 w-12 h-px bg-border/40" />
              </div>
            ))}
          </div>

          {/* Connector para LG */}
          <div className="hidden lg:block w-px h-[280px] bg-border/20 relative mx-12">
            <div className="absolute top-1/2 left-0 w-12 h-px bg-border/20" />
          </div>

          {/* Final */}
          <div className="w-full max-w-[340px]">
            <div className="relative">
              <div className="text-center mb-6">
                <span className="text-[10px] tracking-[0.6em] text-foreground/50 font-bold">GRAN FINAL</span>
              </div>
              <div className="border-2 border-foreground/20 bg-foreground/5 p-8 space-y-4 shadow-[0_0_50px_rgba(255,255,255,0.02)]">
                <div className="flex items-center justify-between border-b border-border/20 pb-4">
                  <span className="text-sm tracking-[0.4em] text-foreground/60 font-[family-name:var(--font-bebas)]">FINALISTA A</span>
                  <div className="w-8 h-8 bg-secondary/10 border border-border/20" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm tracking-[0.4em] text-foreground/60 font-[family-name:var(--font-bebas)]">FINALISTA B</span>
                  <div className="w-8 h-8 bg-secondary/10 border border-border/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StadiumsGrid() {
  return (
    <section id="estadios" className="py-32 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase">
            SEDES DEL CAMPEONATO
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stadiums.map((s) => (
            <div
              key={s.id}
              className="group relative aspect-[16/10] border border-border/10 bg-card/10 overflow-hidden transition-all duration-500 hover:border-foreground/20"
            >
              {/* Imagen de fondo vertical */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={`/acces/${s.image}`} 
                  alt={s.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-85 group-hover:opacity-100"
                />
                {/* Overlay gradiente para legibilidad */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              </div>

              {/* Fondo decorativo con rejilla */}
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700 z-10" 
                style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-[10px] font-mono text-muted-foreground">ID_{s.id.padStart(3, '0')}</span>
                  <div className="w-2 h-2 bg-foreground/30 rounded-full animate-pulse" />
                </div>
                
                <div className="transform group-hover:translate-y-[-5px] transition-transform duration-500">
                  <span className="text-[9px] tracking-[0.4em] text-muted-foreground mb-3 block opacity-60">{s.tag}</span>
                  <h3 className="text-4xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.8]">
                    {s.name}
                  </h3>
                  <div className="h-px w-0 group-hover:w-full bg-foreground/20 mt-4 transition-all duration-700" />
                  <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-4 opacity-0 group-hover:opacity-100 transition-all duration-700 delay-75 uppercase">
                    {s.type}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WorldCupProbabilities() {
  return (
    <section id="probabilidades" className="py-24 px-6 lg:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase font-mono">
            PROBABILIDADES_CAMPEÓN_RL26
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="relative">
            <span className="absolute -top-12 -left-4 text-[100px] font-[family-name:var(--font-bebas)] text-foreground/[0.03] select-none whitespace-nowrap pointer-events-none hidden lg:block uppercase">
              ANÁLISIS
            </span>
            <h2 className="relative text-6xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85]">
              QUIÉN <br /><span className="text-foreground/40 italic">GANARÁ</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg border-l border-border/20 pl-8">
              Un análisis predictivo basado en el rendimiento histórico, la forma actual de los jugadores clave y la sinergia del equipo, para determinar las probabilidades de cada selección de levantar la copa.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {selections.map((team) => (
            <div
              key={team.id}
              className="group relative border border-border/10 bg-card/10 overflow-hidden transition-all duration-500 hover:border-foreground/20"
            >
              {/* Fondo decorativo con rejilla */}
              <div
                className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700"
                style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }}
              />

              <div className="relative z-10 p-6 flex flex-col items-center text-center h-full">
                <img
                  src={`/acces/${team.logo}`}
                  alt={`${team.name} logo`}
                  className="w-20 h-20 object-contain mb-4 transition-transform duration-500 group-hover:scale-110"
                />
                <h3 className="text-xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-2">
                  {team.name.toUpperCase()}
                </h3>
                <span className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-6">
                  {team.abbr}
                </span>

                <div className="w-full mt-auto">
                  <p className="text-xs text-muted-foreground mb-2">Probabilidad de Ganar</p>
                  <div className="w-full bg-border/20 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-green-500 h-full rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${team.winProbability || 0}%` }}
                    ></div>
                  </div>
                  <span className="text-lg font-bold text-foreground mt-2 block">
                    {team.winProbability || 0}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function RlNatiosnPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      <HeroTournament />

      <SelectionsGrid />

      <TemplatesTwoPlayers />

      <StandingsTable />

      <MatchSchedule />

      <TournamentBracket />

      <StadiumsGrid />

      <WorldCupProbabilities />

      <Footer />
    </main>
  )
}
