"use client"

import { useState, useEffect, useCallback } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

const cn = (...classes: Array<string | boolean | undefined | null>) =>
  classes.filter(Boolean).join(' ')

function HeroTournament() {
  return (
    <section className="relative min-h-[92vh] pt-20 overflow-hidden bg-gradient-to-b from-[#020617] via-[#050b24] to-[#020617]">
      {/* Champions League Star Mesh Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(30,58,138,0.25)_0%,_transparent_70%)]" />
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
            <span className="text-2xl font-[family-name:var(--font-bebas)] tracking-wider text-foreground">
              RL26®
            </span>
            <div className="h-px w-8 bg-foreground/20 group-hover:w-16 group-hover:bg-foreground/50 transition-all duration-500" />
            <span className="text-[10px] tracking-[0.6em] text-muted-foreground uppercase group-hover:text-foreground transition-colors">
              VOLVER AL INICIO
            </span>
          </a>
        </div>

        <div className="grid lg:grid-cols-[1fr_450px] gap-12 items-center">
          <div className="max-w-3xl">
            <p className="text-[11px] sm:text-xs tracking-[0.5em] text-muted-foreground animate-reveal-up">
              TORNEO PRINCIPAL OFICIAL
            </p>
            <h1 className="mt-6 text-[clamp(3.5rem,10vw,9.5rem)] font-[family-name:var(--font-bebas)] leading-[0.85] tracking-[-0.02em] text-foreground animate-reveal-up stagger-1">
              NEO CHAMPIONS LEAGUE 2026®
            </h1>
            <p className="mt-6 text-muted-foreground text-base sm:text-lg leading-relaxed animate-reveal-up stagger-2">
              Torneo moderno: todos contra todos para definir a los 4 mejores, luego
              semifinales y final.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-reveal-up stagger-3">
              <a
                href="#participantes"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-[13px] tracking-[0.3em] transition-all duration-400 hover:bg-foreground/90 font-bold"
              >
                VER CLUBES
                <span className="w-4 h-px bg-background/50 transition-all duration-300 group-hover:w-6" />
              </a>
              <a
                href="#posiciones"
                className="inline-flex items-center justify-center px-8 py-4 border border-blue-500/30 bg-blue-500/5 text-foreground text-[13px] tracking-[0.3em] transition-all duration-400 hover:border-blue-500/60"
              >
                TABLA DE LIGA
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
    name: "ReAl",
    abbr: "RA",
    logo: "RA.png",
    players: ["AlterGX", "Por Definir"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "2",
    name: "Arsenali",
    abbr: "AR",
    logo: "AR.png",
    players: ["Willicraft400", "Por definir"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "3",
    name: "PXG",
    abbr: "PX",
    logo: "PX.png",
    players: ["ElGangsta_07", "Pamtita"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "4",
    name: "Barcha FC",
    abbr: "BF",
    logo: "BF.png",
    players: ["TheRealBracho", "ZestebanPvP"],
    group: "A",
    winProbability: 0,
  },
  {
    id: "5",
    name: "Mashine City",
    abbr: "MC",
    logo: "MC.png",
    players: ["JosuaSCA", "Por definir"],
    group: "B",
    winProbability: 0,
  },
  {
    id: "6",
    name: "Bastard Munchen",
    abbr: "BM",
    logo: "BM.png",
    players: ["Drakkard", "Por definir"],
    group: "B",
    winProbability: 0,
  },
  {
    id: "7",
    name: "Chicorid",
    abbr: "CD",
    logo: "CD.png",
    players: ["Dan1615", "Por definir"],
    group: "B",
    winProbability: 0,
  },
  {
    id: "8",
    name: "Chelsky",
    abbr: "CH",
    logo: "CH.png",
    players: ["Skkart01", "Por definir"],
    group: "B",
    winProbability: 0,
  },
]

const stadiums = [
  { id: "1", name: "DFH STADIUM", type: "CIRCUITO CENTRAL", tag: "MAIN ARENA", image: "DFH.png" },
  { id: "2", name: "MANNFIELD", type: "PARQUE PÚBLICO", tag: "PRO FIELD", image: "Mannfield.png" },
  { id: "3", name: "CHAMPIONS FIELD", type: "ESTADIO ELITE", tag: "GLOBAL", image: "ChampionsField.png" },
  { id: "4", name: "PARC DE PARIS", type: "DISTRITO URBANO", tag: "STREET", image: "PARIS.png" },
  { id: "5", name: "BECKWITH PARK", type: "CAMPO DE ENTRENAMIENTO", tag: "LOCAL", image: "BECKWITH.png" },
  { id: "6", name: "VIVA LA VIDA", type: "PLAYA CALIDA", tag: "BEACH", image: "VIVA.png" },
  { id: "7", name: "BOOSTFIELD MALL", type: "CENTRO MODERNO", tag: "FUTURE", image: "BOOST.png" },
  { id: "8", name: "NEO TOKYO", type: "SECTOR CYBERPUNK", tag: "FUTURE", image: "NEO.png" },
]

const fullStandings = [
  { pos: 1, team: "ReAl", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 2, team: "Arsenali", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 3, team: "PXG", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 4, team: "Barcha FC", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 5, team: "Mashine City", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 6, team: "Bastard Munchen", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 7, team: "Chicorid", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
  { pos: 8, team: "Chelsky", pj: 0, pg: 0, pe: 0, pp: 0, pts: 0 },
]

const fixtures = [
  {
    date: "Sábado 23 Mayo",
    period: "Noche",
    matches: [
      { time: "20:00", home: "ReAl", away: "PXG", stadium: "DFH STADIUM", group: "A" },
      { time: "21:30", home: "Mashine City", away: "Chicorid", stadium: "MANNFIELD", group: "B" },
    ]
  },
  {
    date: "Domingo 24 Mayo",
    period: "Mañana",
    matches: [
      { time: "10:00", home: "Arsenali", away: "Barcha FC", stadium: "CHAMPIONS FIELD", group: "A" },
      { time: "11:30", home: "Bastard Munchen", away: "Chelsky", stadium: "PARC DE PARIS", group: "B" },
    ]
  },
  {
    date: "Sábado 30 Mayo",
    period: "Noche",
    matches: [
      { time: "20:00", home: "ReAl", away: "Arsenali", stadium: "NEO TOKYO", group: "A" },
      { time: "21:30", home: "Mashine City", away: "Bastard Munchen", stadium: "BECKWITH PARK", group: "B" },
    ]
  },
  {
    date: "Domingo 31 Mayo",
    period: "Mañana",
    matches: [
      { time: "10:00", home: "PXG", away: "Barcha FC", stadium: "VIVA LA VIDA", group: "A" },
      { time: "11:30", home: "Chicorid", away: "Chelsky", stadium: "BOOSTFIELD MALL", group: "B" },
    ]
  },
  {
    date: "Sábado 6 Junio",
    period: "Noche",
    matches: [
      { time: "20:00", home: "ReAl", away: "Barcha FC", stadium: "DFH STADIUM", group: "A" },
      { time: "21:30", home: "Mashine City", away: "Chelsky", stadium: "MANNFIELD", group: "B" },
    ]
  },
  {
    date: "Domingo 7 Junio",
    period: "Mañana",
    matches: [
      { time: "10:00", home: "PXG", away: "Arsenali", stadium: "CHAMPIONS FIELD", group: "A" },
      { time: "11:30", home: "Chicorid", away: "Bastard Munchen", stadium: "NEO TOKYO", group: "B" },
    ]
  }
];

const getScorer = (teamName: string) => {
  const team = selections.find(s => s.name === teamName);
  return team ? team.players[Math.floor(Math.random() * team.players.length)] : "Desconocido";
};

function SelectionsGrid() {
  return (
    <section id="participantes" className="py-24 px-6 lg:px-12 bg-gradient-to-b from-[#050b24] to-[#020617] relative">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.6em] text-blue-400">
            CLUBES PARTICIPANTES
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {selections.map((team) => (
            <div
              key={team.id}
              className="group relative h-80 border border-blue-900/30 bg-[#002DFF]/20 backdrop-blur-sm flex flex-col items-center justify-center hover:border-blue-400/50 transition-all duration-700 cursor-pointer overflow-hidden"
            >
              <img
                src={`/acces/${team.logo}`}
                alt={`${team.name} logo`}
                className="w-32 h-32 object-contain transition-transform duration-700 group-hover:scale-110 z-10"
              />
              
              {/* Info Overlay */}
              <div className="mt-4 text-center z-10">
                <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-[0.3em] text-foreground/90 group-hover:text-foreground transition-all group-hover:tracking-[0.4em]">
                  {team.name.toUpperCase()}
                </h3>
                <span className="text-[9px] tracking-[0.5em] text-blue-400/60 uppercase">
                  Club Oficial {team.abbr}
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
    dorsal: string;
    position: string;
    marketValue: string;
    achievements: string[];
    stats: { goals: number; assists: number; saves: number; mvp: number };
    statsIncrease: { goals: { percent: string; total: string }; assists: { percent: string; total: string }; saves: { percent: string; total: string }; mvp: { percent: string; total: string } };
    analysis: string;
    mvpProbability: number;
    championshipProbability: number;
    preferredFoot: string;
    playStyle: string;
    totalMatches: number;
    leagueLogo: string;
  };

  const alterGxData: Player = {
    name: "AlterGX",
    team: "ReAl",
    clubLogo: "RA.png",
    dorsal: "10",
    position: "Midfielder Offensive",
    marketValue: "310.000.000M",
    achievements: ["Triple Campeón RL26", "Líder de Asistencias 2025", "MVP de Temporada Regular"],
    stats: { goals: 8116, assists: 3401, saves: 4685, mvp: 1545 },
    statsIncrease: { goals: { percent: "+12.5%", total: "+1014" }, assists: { percent: "+15.3%", total: "+572" }, saves: { percent: "+8.7%", total: "+389" }, mvp: { percent: "+22.1%", total: "+341" } },
    analysis: "AlterGX no es solo un jugador, es el motor táctico de ReAl. Con una precisión de pase del 94% y una lectura de juego que anticipa las rotaciones rivales en milisegundos, su impacto trasciende las estadísticas básicas. Es el arquitecto de la ofensiva y el primer bastión de la defensa en transiciones rápidas.",
    mvpProbability: 92,
    championshipProbability: 85,
    preferredFoot: "Derecho",
    playStyle: "Técnico / Creativo",
    totalMatches: 12450,
    leagueLogo: "/acces/laliga.png",
  };

  const theRealBrachoData: Player = {
    name: "TheRealBracho",
    team: "Barcha FC",
    clubLogo: "BF.png",
    dorsal: "9",
    position: "Center Forward",
    marketValue: "300.000.000M",
    achievements: ["Bota de Oro 2025", "Campeón Mundial 2v2", "Recordman de Hat-tricks"],
    stats: { goals: 6310, assists: 2358, saves: 3732, mvp: 1145 },
    statsIncrease: { goals: { percent: "+18.2%", total: "+1122" }, assists: { percent: "+9.4%", total: "+334" }, saves: { percent: "+11.6%", total: "+506" }, mvp: { percent: "+14.8%", total: "+205" } },
    analysis: "TheRealBracho encarna la potencia pura de Barcha FC. Su habilidad para convertir ángulos imposibles en goles espectaculares lo convierte en el 'clutch player' por excelencia. Bajo presión, su rendimiento aumenta un 15%, siendo el jugador con más goles en los últimos 30 segundos de partido en la historia del torneo.",
    mvpProbability: 88,
    championshipProbability: 80,
    preferredFoot: "Ambidiestro",
    playStyle: "Finalizador / Potencia",
    totalMatches: 9820,
    leagueLogo: "/acces/laliga.png",
  };

  const zestebanPvPData: Player = {
    name: "ZestebanPvP",
    team: "Berserk Dortmund",
    clubLogo: "BD.png",
    dorsal: "15",
    position: "Center Forward",
    marketValue: "50.000.000M",
    achievements: ["Muro de Hierro 2025", "Campeón Sudamericano", "Líder de Salvadas"],
    stats: { goals: 2105, assists: 1890, saves: 7210, mvp: 840 },
    statsIncrease: { goals: { percent: "+16.2%", total: "+219" }, assists: { percent: "+9.1%", total: "+42" }, saves: { percent: "+6.4%", total: "+27" }, mvp: { percent: "+14.7%", total: "+19" } },
    analysis: "ZestebanPvP es un Jugador de la nueva generación. Su capacidad de posicionamiento ofensivo es exacto, es uno de los jugadores con mayor efectividad en tiros al area.",
    mvpProbability: 75,
    championshipProbability: 80,
    preferredFoot: "Derecho",
    playStyle: "Posicional / Efectivo",
    totalMatches: 4100,
    leagueLogo: "/acces/bundesliga.jpg",
  };

  const willicraft400Data: Player = {
    name: "Willicraft400",
    team: "Arsenali",
    clubLogo: "AR.png",
    dorsal: "40",
    position: "Midfielder Defensive",
    marketValue: "170.000.000M",
    achievements: ["Maestro de Rotaciones", "Campeón Europeo RL26", "Jugador Revelación"],
    stats: { goals: 4520, assists: 5100, saves: 3200, mvp: 980 },
    statsIncrease: { goals: { percent: "+9.3%", total: "+434" }, assists: { percent: "+18.7%", total: "+127" }, saves: { percent: "+13.2%", total: "+141" }, mvp: { percent: "+11.5%", total: "+63" } },
    analysis: "Willicraft400 es el nexo perfecto entre defensa y ataque. Su inteligencia táctica le permite estar siempre en el lugar correcto. Arsenali depende de su visión de juego para mantener la presión constante sobre el rival.",
    mvpProbability: 82,
    championshipProbability: 85,
    preferredFoot: "Izquierdo",
    playStyle: "Tactician / Box-to-Box",
    totalMatches: 7600,
    leagueLogo: "/acces/premier.png",
  };

  const skkart01Data: Player = {
    name: "Skkart01",
    team: "Chelsky",
    clubLogo: "CH.png",
    dorsal: "8",
    position: "Forward",
    marketValue: "155.000.000M",
    achievements: ["Campeón Major 2025", "MVP Final de Liga", "Top Sniper"],
    stats: { goals: 5200, assists: 2100, saves: 1800, mvp: 750 },
    statsIncrease: { goals: { percent: "+11.8%", total: "+279" }, assists: { percent: "+7.6%", total: "+29" }, saves: { percent: "+19.4%", total: "+252" }, mvp: { percent: "+8.9%", total: "+19" } },
    analysis: "Skkart01 es la definición de eficiencia frente a la portería. Su capacidad para encontrar huecos en defensas cerradas lo convierte en la principal amenaza ofensiva de Chelsky.",
    mvpProbability: 80,
    championshipProbability: 70,
    preferredFoot: "Derecho",
    playStyle: "Sniper / Agresivo",
    totalMatches: 8150,
    leagueLogo: "/acces/premier.png",
  };

  const dan1615Data: Player = {
    name: "Dan1615",
    team: "Chicorid",
    clubLogo: "CD.png",
    dorsal: "11",
    position: "Right Winger",
    marketValue: "220.000.000M",
    achievements: ["MVP Asia-Pacific 2025", "Campeón de Invierno", "Top Goles Aéreos"],
    stats: { goals: 6200, assists: 1900, saves: 2100, mvp: 920 },
    statsIncrease: { goals: { percent: "+14.7%", total: "+778" }, assists: { percent: "+12.1%", total: "+227" }, saves: { percent: "+5.9%", total: "+112" }, mvp: { percent: "+16.4%", total: "+75" } },
    analysis: "Dan1615 es el pilar de la ofensiva de Chicorid. Su dominio del juego y su precisión en el remate lo sitúan como uno de los jugadores más temidos. Su capacidad para generar peligro de la nada sera vital para las aspiraciones de su equipo.",
    mvpProbability: 85,
    championshipProbability: 40,
    preferredFoot: "Derecho",
    playStyle: "Velocidad / Aéreo",
    totalMatches: 9200,
    leagueLogo: "/acces/laliga.png",
  };

  const drakkardData: Player = {
    name: "Drakkard",
    team: "Bastard Munchen",
    clubLogo: "BM.png",
    dorsal: "6",
    position: "Midfielder Box To Box",
    marketValue: "125.000.000M",
    achievements: ["Capitán del Año", "Líder de Intercepciones", "Campeón 3v3"],
    stats: { goals: 1500, assists: 3800, saves: 6200, mvp: 610 },
    statsIncrease: { goals: { percent: "+13.4%", total: "+253" }, assists: { percent: "+15.9%", total: "+91" }, saves: { percent: "+10.7%", total: "+99" }, mvp: { percent: "+12.3%", total: "+30" } },
    analysis: "Drakkard aporta versatilidad fundamental para Bastard Munchen. Su equilibrio sera fundamental para esta Champions Cup 26®.",
    mvpProbability: 72,
    championshipProbability: 40,
    preferredFoot: "Derecho",
    playStyle: "Equilibrado / Soporte",
    totalMatches: 5400,
    leagueLogo: "/acces/bundesliga.jpg",
  };

  const josuaSCAData: Player = {
    name: "JosuaSCA",
    team: "Mashine United",
    clubLogo: "MU.png",
    dorsal: "20",
    position: "Right Back",
    marketValue: "45.000.000M",
    achievements: ["Campeón de Liga", "Estratega del Año", "Maestro del Balón"],
    stats: { goals: 3200, assists: 4500, saves: 2800, mvp: 890 },
    statsIncrease: { goals: { percent: "+8.9%", total: "+107" }, assists: { percent: "+11.3%", total: "+57" }, saves: { percent: "+7.8%", total: "+24" }, mvp: { percent: "+9.6%", total: "+15" } },
    analysis: "JosuaSCA se basa en la defensa proactiva. Su habilidad para defender ha sido clave en algunos momentos a pesar de su caida en rendimiento general, ahora busca redimirse en el torneo.",
    mvpProbability: 78,
    championshipProbability: 70,
    preferredFoot: "Derecho",
    playStyle: "Defensivo / Recuperador",
    totalMatches: 6800,
    leagueLogo: "/acces/premier.png",
  };

  const pamtitaData: Player = {
    name: "Pamtita",
    team: "Ajajax",
    clubLogo: "AJ.png", // Assuming Chicorid uses the same logo as Chelsky for now, or you can provide a new one
    dorsal: "4",
    position: "Center Back",
    marketValue: "35.000.000M",
    achievements: ["Asistente del Año 2025", "Campeón de Copa Nacional", "Visión de Juego Excepcional"],
    stats: { goals: 3100, assists: 6000, saves: 2500, mvp: 1100 },
    statsIncrease: { goals: { percent: "+5.2%", total: "+13" }, assists: { percent: "+8.4%", total: "+17" }, saves: { percent: "+12.1%", total: "+23" }, mvp: { percent: "+6.7%", total: "+0" } },
    analysis: "Pamtita actuara como el baluarte defensivo de Ajajax, con su capacidad para leer y detener jugadas. Su presencia será clave para el rendimiento del equipo.",
    mvpProbability: 85,
    championshipProbability: 85,
    preferredFoot: "Izquierdo",
    playStyle: "Muro / Distribuidor",
    totalMatches: 11200,
    leagueLogo: "/acces/eredivisie.png",
  };

  const elGangstaData: Player = {
    name: "ElGangsta",
    team: "PXG",
    clubLogo: "PX.png",
    dorsal: "7",
    position: "Left Winger",
    marketValue: "255.000.000M",
    achievements: ["Goleador Prolífico", "Héroe de Partidos Clave", "Campeón de Liga"],
    stats: { goals: 7800, assists: 2900, saves: 1200, mvp: 1300 },
    statsIncrease: { goals: { percent: "+25.1%", total: "+2118" }, assists: { percent: "+6.8%", total: "+116" }, saves: { percent: "+7.2%", total: "+245" }, mvp: { percent: "+9.3%", total: "+43" } },
    analysis: "ElGangsta es el finalizador por excelencia de PXG. Su instinto goleador y su habilidad para definir en situaciones de alta presión lo convierten en una amenaza constante para cualquier defensa.",
    mvpProbability: 88,
    championshipProbability: 85,
    preferredFoot: "Ambidiestro",
    playStyle: "Goleador / Eléctrico",
    totalMatches: 10500,
    leagueLogo: "/acces/ligue1.png",
  };

  // Componente visual del campo
  const PitchPosition = ({ position }: { position: string }) => {
    const isForward = position.toLowerCase().includes('forward') || position.toLowerCase().includes('winger') || position.toLowerCase().includes('offensive');
    const isMid = position.toLowerCase().includes('midfielder') && !isForward;
    
    return (
      <div className="relative w-24 h-32 border border-indigo-500/30 bg-indigo-950/5 rounded-sm overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-indigo-500/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-indigo-500/30 rounded-full" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-4 border-b border-x border-indigo-500/30" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-4 border-t border-x border-indigo-500/30" />
        {/* Indicador de posición con glow morado/azul */}
        <div className={cn(
          "absolute w-2.5 h-2.5 bg-blue-400 rounded-full shadow-[0_0_12px_#818cf8] z-10 transition-all duration-700",
          isForward ? "top-4 left-1/2 -translate-x-1/2" : 
          isMid ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" :
          "bottom-4 left-1/2 -translate-x-1/2"
        )} />
      </div>
    );
  };

  const PlayerDetailDialog = ({ player, isOpen, onOpenChange }: { player: Player, isOpen: boolean, onOpenChange: (open: boolean) => void }) => (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[95vw] sm:w-full p-[2px] bg-gradient-to-br from-blue-500 via-indigo-600 to-purple-600 border-none overflow-hidden rounded-none shadow-[0_0_80px_rgba(30,58,138,0.4)]">
        <DialogTitle className="sr-only">Perfil de {player.name}</DialogTitle>
        <div 
          className="relative bg-[#020617] h-full overflow-y-auto max-h-[90vh] custom-scrollbar"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#2563eb #020617'
          }}
        >
          <style jsx global>{`
            .custom-scrollbar::-webkit-scrollbar { width: 4px; }
            .custom-scrollbar::-webkit-scrollbar-track { background: #020617; }
            .custom-scrollbar::-webkit-scrollbar-thumb { background: #2563eb; border-radius: 10px; }
          `}</style>
          {/* Technical Background Pattern */}
          <div
            className="absolute inset-0 opacity-[0.05] pointer-events-none"
            style={{ backgroundImage: `linear-gradient(rgba(30,58,138,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(30,58,138,0.5) 1px, transparent 1px)`, backgroundSize: '20px 20px' }}
          />

          <div className="relative border-b border-blue-500/20">
            {/* Background Club Logo Decor */}
            <img src={`/acces/${player.clubLogo}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 object-contain opacity-[0.03] pointer-events-none" alt="" />
            
            <div className="relative z-10 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center sm:items-start gap-6">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => onOpenChange(false)}
                  className="ml-auto sm:absolute sm:top-8 sm:right-8 w-8 h-8 flex items-center justify-center border border-blue-900/30 bg-[#020617] hover:bg-blue-600 hover:text-white transition-colors z-50"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>
              
              <h2 className="text-7xl sm:text-8xl font-[family-name:var(--font-bebas)] tracking-tighter text-foreground leading-[0.8] animate-reveal-up">
                {player.name}
              </h2>
              
              <div className="flex items-center gap-4 mt-2">
                <div className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-sm p-1 border border-white/10">
                  <img src={`/acces/${player.clubLogo}`} alt="" className="w-full h-full object-contain" />
                </div>
                <div className="w-6 h-6 flex items-center justify-center bg-white/5 rounded-sm p-1 border border-white/10">
                  <img src={player.leagueLogo} alt="" className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] tracking-[0.3em] text-muted-foreground font-bold uppercase">{player.team}</span>
              </div>
              
              <div className="flex items-center gap-4 mt-2">
                <span className="text-[11px] tracking-[0.3em] text-muted-foreground font-bold uppercase">{player.position}</span>
              </div>
              </div>
              {/* Mini Campo Visual */}
              <div className="hidden sm:flex flex-col items-center gap-2">
                <PitchPosition position={player.position} />
                <span className="text-[8px] tracking-[0.2em] text-blue-400/50 uppercase mt-1">Posición</span>
              </div>
            </div>
          </div>

          {/* Info Horizontal Blocks */}
          <div className="grid grid-cols-2 md:grid-cols-4 border-b border-blue-500/20">
            <div className="p-8 border-r border-blue-500/10 flex flex-col items-center">
              <span className="text-[9px] tracking-[0.4em] text-blue-400/60 mb-2 uppercase">Dorsal</span>
              <span className="text-4xl font-[family-name:var(--font-bebas)] text-foreground">#{player.dorsal}</span>
            </div>
            <div className="p-8 border-r border-blue-500/10 flex flex-col items-center col-span-2 bg-blue-500/5">
              <span className="text-[9px] tracking-[0.4em] text-blue-400/60 mb-2 uppercase">Valor de Mercado</span>
              <span className="text-4xl font-[family-name:var(--font-bebas)] text-blue-400">{player.marketValue}</span>
            </div>
            <div className="p-8 flex flex-col items-center">
              <span className="text-[9px] tracking-[0.4em] text-blue-400/60 mb-2 uppercase">Trofeos</span>
              <span className="text-4xl font-[family-name:var(--font-bebas)] text-foreground">{player.achievements.length}</span>
            </div>
          </div>

          {/* Extra Tech Data Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 bg-blue-500/5 border-b border-blue-500/20">
            <div className="p-6 border-r border-blue-500/10 flex flex-col">
              <span className="text-[8px] tracking-[0.3em] text-blue-400/40 uppercase mb-1">Pie Dominante</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">{player.preferredFoot}</span>
            </div>
            <div className="p-6 border-r border-blue-500/10 flex flex-col">
              <span className="text-[8px] tracking-[0.3em] text-blue-400/40 uppercase mb-1">Estilo de Juego</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">{player.playStyle}</span>
            </div>
            <div className="p-6 flex flex-col">
              <span className="text-[8px] tracking-[0.3em] text-blue-400/40 uppercase mb-1">Partidos Totales</span>
              <span className="text-xs font-bold text-foreground uppercase tracking-widest">{player.totalMatches.toLocaleString()}</span>
            </div>
          </div>

          {/* Stats Section */}
          <div className="p-8 sm:p-12 border-b border-blue-500/20">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { label: "GOLES", value: player.stats.goals, delta: player.statsIncrease.goals },
                { label: "ASIST", value: player.stats.assists, delta: player.statsIncrease.assists },
                { label: "SALVAS", value: player.stats.saves, delta: player.statsIncrease.saves },
                { label: "MVP", value: player.stats.mvp, delta: player.statsIncrease.mvp },
              ].map((stat) => (
                <div key={stat.label} className="relative group/stat">
                  <span className="text-[8px] tracking-[0.4em] text-blue-400/60 block mb-1">{stat.label}</span>
                  <span className="text-3xl font-[family-name:var(--font-bebas)] text-foreground block">{stat.value}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-green-500 font-bold">{stat.delta.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Probabilities */}
          <div className="px-8 sm:px-12 py-10 grid sm:grid-cols-2 gap-12">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] tracking-[0.4em] text-blue-400/60">PROB. MVP TORNEO</span>
                <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground">{player.mvpProbability}%</span>
              </div>
              <div className="h-1.5 bg-blue-900/20 w-full rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)]" style={{ width: `${player.mvpProbability}%` }} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <span className="text-[10px] tracking-[0.4em] text-blue-400/60">PROB. CAMPEÓN</span>
                <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground">{player.championshipProbability}%</span>
              </div>
              <div className="h-1.5 bg-blue-900/20 w-full rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.6)]" style={{ width: `${player.championshipProbability}%` }} />
              </div>
            </div>
          </div>

          {/* Analysis Footer */}
          <div className="bg-blue-900/10 p-8 sm:p-12 border-t border-blue-500/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              <span className="text-[9px] tracking-[0.6em] text-blue-400 font-bold uppercase">Análisis Predictivo Gemini AI</span>
            </div>
            <p className="text-sm text-blue-100/70 leading-relaxed font-light italic">
              "{player.analysis}"
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );

  return (
    <section id="plantillas" className="py-20 px-6 lg:px-12 bg-[#020617]">
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
              className="border border-blue-900/20 bg-blue-950/10 flex flex-col transition-all duration-500 hover:bg-blue-900/10"
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
                    <span className="text-[10px] text-foreground/30">JUGADOR 0{idx + 1}</span>
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
  const buildGroupStandings = (group: string) => {
    // Usamos el orden fijo definido por `selections` (tu confirmación)
    const groupSelections = selections.filter((s) => s.group === group)

    // Mantener el mismo formato de filas que antes (con pj/v/e/d/pts desde fullStandings si coincide por nombre)
    return groupSelections.map((team, idx) => {
      const r = fullStandings.find((x) => x.team === team.name)
      return {
        pos: idx + 1,
        team: team.name,
        pj: r?.pj ?? 0,
        pg: r?.pg ?? 0,
        pe: r?.pe ?? 0,
        pp: r?.pp ?? 0,
        pts: r?.pts ?? 0,
      }
    })
  }

  const groupA = buildGroupStandings("A")
  const groupB = buildGroupStandings("B")

  const GroupTable = ({ title, rows }: { title: string; rows: typeof groupA }) => (
    <div className="p-[1px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 w-full shadow-[0_0_40px_rgba(30,58,138,0.2)]">
      <div className="overflow-hidden bg-[#020617] h-full">
        <div className="bg-blue-900/10 px-6 py-4 border-b border-blue-900/20">
          <h3 className="text-xl font-[family-name:var(--font-bebas)] tracking-[0.2em] text-foreground">
            CLASIFICACIÓN {title}
          </h3>
        </div>

        <div className="grid grid-cols-8 gap-2 px-6 py-3 text-[10px] tracking-[0.2em] text-muted-foreground border-b border-border/5">
          <div className="col-span-1">POS</div>
          <div className="col-span-3">CLUB</div>
          <div className="col-span-1 text-center">PJ</div>
          <div className="col-span-2 text-center">V/E/D</div>
          <div className="col-span-1 text-right">PTS</div>
        </div>

        <div className="divide-y divide-border/5">
          {rows.map((r) => (
            <div
              key={r.team}
              className={`grid grid-cols-8 gap-2 px-6 py-4 items-center transition-colors hover:bg-white/5 ${
                r.pos === 1 ? "bg-blue-600/10 border-l-2 border-blue-400" : ""
              }`}
            >
              <div className="col-span-1">
                <p
                  className={`text-xl font-[family-name:var(--font-bebas)] ${
                    r.pos === 1 ? "text-blue-400" : "text-foreground/30"
                  }`}
                >
                  {String(r.pos).padStart(2, "0")}
                </p>
              </div>

              <div className="col-span-3 flex items-center gap-3">
                <div className="w-5 h-5 flex items-center justify-center">
                  <img
                    src={
                      `/acces/${selections.find((s) => s.name === r.team)?.logo ?? "default.png"}`
                    }
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[11px] tracking-wider text-foreground font-medium">
                  {r.team.toUpperCase()}
                </span>
              </div>

              <div className="col-span-1 text-center text-[11px] text-muted-foreground">{r.pj}</div>
              <div className="col-span-2 text-center text-[10px] text-muted-foreground">
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
    </div>
  )

  return (
    <section id="posiciones" className="py-20 px-6 lg:px-12 bg-[#050b24] border-t border-blue-900/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.6em] text-blue-400">
            TABLA PRINCIPAL // FASE DE GRUPOS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GroupTable title="GRUPO A" rows={groupA} />
          <GroupTable title="GRUPO B" rows={groupB} />
        </div>

        <p className="mt-8 text-[10px] tracking-widest text-blue-400/50 uppercase text-center">
          * LOS CUATRO MEJORES DE LA FASE DE LIGA CLASIFICAN A LAS SEMIFINALES
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
  const [selectedMatch, setSelectedMatch] = useState<any>(null);
  const [isMatchDialogOpen, setIsMatchDialogOpen] = useState(false);

  // Componente de cuenta regresiva simplificado
  const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
      // Para propósitos de demostración, simulamos que el partido es en 5 días
      const target = new Date().getTime() + (5 * 24 * 60 * 60 * 1000) + (12 * 60 * 60 * 1000);

      const timer = setInterval(() => {
        const now = new Date().getTime();
        const difference = target - now;

        if (difference > 0) {
          setTimeLeft({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000),
          });
        }
      }, 1000);

      return () => clearInterval(timer);
    }, [targetDate]);

    return (
      <div className="flex gap-4 font-[family-name:var(--font-bebas)]">
        {[
          { label: "DÍAS", value: String(timeLeft.days).padStart(2, '0') },
          { label: "HORAS", value: String(timeLeft.hours).padStart(2, '0') },
          { label: "MIN", value: String(timeLeft.minutes).padStart(2, '0') },
          { label: "SEG", value: String(timeLeft.seconds).padStart(2, '0') },
        ].map((unit) => (
          <div key={unit.label} className="flex flex-col items-center">
            <span className="text-4xl text-foreground tabular-nums">{unit.value}</span>
            <span className="text-[8px] tracking-[0.2em] text-muted-foreground">{unit.label}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="calendario" className="py-24 px-6 lg:px-12 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.6em] text-blue-400">
            CALENDARIO // PRÓXIMOS ENCUENTROS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {fixtures.map((day, idx) => (
            <div key={idx} className="p-[1px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 group transition-all duration-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.2)]">
              <div className="bg-[#020617] backdrop-blur-sm overflow-hidden h-full">
                <div className="bg-secondary/10 px-6 py-4 border-b border-border/10 flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-[family-name:var(--font-bebas)] tracking-wider text-foreground">{day.date.toUpperCase()}</h4>
                    <p className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase">{day.period}</p>
                  </div>
                  <div className="px-2 py-1 bg-foreground/5 border border-foreground/10 text-[9px] text-foreground/40">
                    JORNADA 0{idx + 1}
                  </div>
                </div>
                <div className="p-6 space-y-6">
                  {day.matches.map((match, mIdx) => (
                    <div 
                      key={mIdx} 
                      className="relative cursor-pointer group/match hover:bg-white/[0.02] -mx-4 px-4 py-2 transition-colors duration-300"
                      onClick={() => {
                        setSelectedMatch({ ...match, date: day.date });
                        setIsMatchDialogOpen(true);
                      }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] text-muted-foreground/60">{match.time} HRS</span>
                        <span className="text-[9px] tracking-[0.2em] text-foreground/40 bg-foreground/5 px-2">FASE DE LIGA</span>
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
                          <span className="text-[10px] text-foreground/20">VS</span>
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
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Detalle de Partido */}
      <Dialog open={isMatchDialogOpen} onOpenChange={setIsMatchDialogOpen}>
        <DialogContent className="max-w-2xl p-[1px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 border-none overflow-hidden shadow-[0_0_50px_rgba(30,58,138,0.4)] rounded-none">
          <DialogTitle className="sr-only">Previa del Partido</DialogTitle>
          {selectedMatch && (
            <div className="relative bg-[#020617] h-full">
              {/* Header Técnico */}
              <div className="relative z-10 border-b border-blue-500/20 bg-blue-900/10 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[10px] tracking-[0.5em] text-blue-400">TRANSMISIÓN PARTIDO // PREVIA OFICIAL</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] tracking-[0.3em] text-muted-foreground uppercase font-bold">JORNADA OFICIAL</span>
                  <button 
                    onClick={() => setIsMatchDialogOpen(false)}
                    className="w-6 h-6 flex items-center justify-center border border-border/20 hover:bg-foreground hover:text-background transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  </button>
                </div>
              </div>

              <div className="relative p-6 lg:p-8 overflow-hidden">
                {/* Fondo Decorativo */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: `radial-gradient(circle at center, #fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }} 
                />

                <div className="relative z-10 flex flex-col items-center gap-10">
                  {/* Información Superior */}
                  <div className="text-center">
                    <h3 className="text-3xl font-[family-name:var(--font-bebas)] tracking-[0.4em] text-foreground mb-2">
                      {selectedMatch.date}
                    </h3>
                    <p className="text-[11px] tracking-[0.5em] text-blue-400/60 uppercase">{selectedMatch.time} HORAS — {selectedMatch.stadium}</p>
                  </div>

                  {/* Visual Principal: Equipos y Estadio */}
                  <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
                    {/* Equipo Local */}
                    <div className="flex flex-col items-center gap-4 group/team order-2 lg:order-1">
                      <div className="w-28 h-28 lg:w-32 lg:h-32 border border-blue-500/20 bg-blue-900/10 flex items-center justify-center p-4 group-hover/team:border-blue-400/50 transition-all duration-500 relative">
                        <img src={getSelectionLogo(selectedMatch.home)} alt="" className="w-full h-full object-contain relative z-10" />
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xl font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{selectedMatch.home.toUpperCase()}</span>
                    </div>

                    {/* Centro: Imagen del Estadio */}
                    <div className="relative flex-1 max-w-[320px] aspect-video border border-blue-500/30 bg-black/40 overflow-hidden shadow-2xl order-1 lg:order-2 group/stadium">
                      <img 
                        src={`/acces/${stadiums.find(s => s.name === selectedMatch.stadium)?.image || 'DFH.png'}`} 
                        alt="" 
                        className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                      <div className="absolute bottom-2 left-0 right-0 text-center">
                        <span className="text-[10px] tracking-[0.5em] text-white/70 uppercase font-[family-name:var(--font-bebas)]">{selectedMatch.stadium}</span>
                      </div>
                    </div>

                    {/* Equipo Visitante */}
                    <div className="flex flex-col items-center gap-4 group/team order-3">
                      <div className="w-28 h-28 lg:w-32 lg:h-32 border border-blue-500/20 bg-blue-900/10 flex items-center justify-center p-4 group-hover/team:border-blue-400/50 transition-all duration-500 relative">
                        <img src={getSelectionLogo(selectedMatch.away)} alt="" className="w-full h-full object-contain relative z-10" />
                        <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <span className="text-xl font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{selectedMatch.away.toUpperCase()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Técnico */}
              <div className="bg-blue-950/20 p-4 border-t border-blue-500/10 flex justify-center">
                <span className="text-[9px] tracking-[0.2em] text-blue-400/40">TRANSMISIÓN EXCLUSIVA // RED RL26</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function TournamentBracket() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050b24]" id="bracket">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.6em] text-blue-400">
            FASE ELIMINATORIA // CAMINO A LA GLORIA
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-0">
          {/* Semifinales */}
          <div className="flex flex-col gap-20 w-full max-w-[320px]">
            {[1, 2].map((i) => (
              <div key={i} className="relative">
                <div className="text-[9px] tracking-[0.4em] text-muted-foreground mb-3 text-center">Semifinal {i}</div>
                <div className="space-y-1">
                  <div className="border border-border/20 bg-card/20 p-4 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.3em] text-muted-foreground/40 font-[family-name:var(--font-bebas)]">POR DEFINIR</span>
                    <div className="w-4 h-4 bg-secondary/20 border border-border/10" />
                  </div>
                  <div className="border border-border/20 bg-card/20 p-4 flex items-center justify-between">
                    <span className="text-[11px] tracking-[0.3em] text-muted-foreground/40 font-[family-name:var(--font-bebas)]">POR DEFINIR</span>
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
              <div className="border-2 border-blue-500/40 bg-blue-900/10 p-10 space-y-6 shadow-[0_0_100px_rgba(30,58,138,0.2)]">
                <div className="flex items-center justify-between border-b border-blue-500/20 pb-6">
                  <span className="text-lg tracking-[0.4em] text-foreground/80 font-[family-name:var(--font-bebas)]">FINALISTA A</span>
                  <div className="w-12 h-12 bg-blue-950 border border-blue-500/30" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg tracking-[0.4em] text-foreground/80 font-[family-name:var(--font-bebas)]">FINALISTA B</span>
                  <div className="w-12 h-12 bg-blue-950 border border-blue-500/30" />
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
  const [selectedStadium, setSelectedStadium] = useState<typeof stadiums[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  // Obtener los partidos que se juegan en este estadio
  const stadiumMatches = selectedStadium ? fixtures.flatMap(day => 
    day.matches.filter(m => m.stadium === selectedStadium.name).map(m => ({ ...m, date: day.date }))
  ) : []

  return (
    <section id="estadios" className="py-32 px-6 lg:px-12 bg-[#020617]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-12">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.6em] text-blue-400">
            ARENAS DE CAMPEONES // SEDES
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stadiums.map((s) => (
            <div
              key={s.id}
              className="group relative aspect-[16/10] border border-blue-900/20 bg-blue-950/10 overflow-hidden transition-all duration-500 hover:border-blue-500/40 cursor-pointer"
              onClick={() => {
                setSelectedStadium(s)
                setIsOpen(true)
              }}
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
                  <span className="text-[10px] text-muted-foreground">SEDE {s.id.padStart(3, '0')}</span>
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

      {/* Modal de Detalle de Estadio */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl border border-border/20 bg-background/95 backdrop-blur-xl p-0 overflow-hidden shadow-2xl rounded-none">
          <DialogTitle className="sr-only">Detalle del Estadio</DialogTitle>
          {selectedStadium && (
            <div className="relative">
              {/* Header Técnico */}
              <div className="relative z-10 border-b border-border/10 bg-secondary/10 px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
                  <span className="text-[10px] tracking-[0.5em] text-muted-foreground">INFORMACIÓN DE SEDE // {selectedStadium.id.padStart(3, '0')}</span>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 flex items-center justify-center border border-border/20 hover:bg-foreground hover:text-background transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
              </div>

              <div className="grid lg:grid-cols-2">
                {/* Visual Area */}
                <div className="relative h-64 lg:h-full border-b lg:border-b-0 lg:border-r border-border/10 overflow-hidden bg-black">
                  <img 
                    src={`/acces/${selectedStadium.image}`} 
                    alt={selectedStadium.name} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <span className="text-[10px] tracking-[0.4em] text-muted-foreground mb-2 block uppercase">{selectedStadium.tag}</span>
                    <h2 className="text-5xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.8]">{selectedStadium.name}</h2>
                    <p className="text-[10px] tracking-[0.2em] text-muted-foreground mt-4 uppercase">{selectedStadium.type}</p>
                  </div>
                </div>

                {/* Matches Area */}
                <div className="p-8 lg:p-12 space-y-8 bg-secondary/5">
                  <div>
                    <div className="flex items-center gap-4 mb-8">
                      <p className="text-[9px] uppercase tracking-[0.6em] text-blue-400">Programación en Sede</p>
                      <div className="flex-1 h-px bg-blue-500/20" />
                    </div>
                    
                    <div className="space-y-6">
                      {stadiumMatches.length > 0 ? (
                        stadiumMatches.map((m, idx) => (
                          <div key={idx} className="border border-border/10 bg-background/40 p-4 transition-colors hover:bg-white/[0.02]">
                            <div className="flex justify-between items-center mb-3">
                                <span className="text-[9px] text-muted-foreground/60">{m.date.toUpperCase()} — {m.time} HRS</span>
                                <span className="text-[8px] tracking-[0.2em] text-foreground/40 bg-foreground/5 px-2">GRUPO {m.group}</span>
                            </div>
                            <div className="flex items-center justify-between gap-4">
                              <div className="flex items-center gap-2">
                                <img src={getSelectionLogo(m.home)} alt="" className="w-4 h-4 object-contain" />
                                <span className="text-sm font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{m.home.toUpperCase()}</span>
                              </div>
                              <span className="text-[10px] text-foreground/20">VS</span>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-[family-name:var(--font-bebas)] tracking-widest text-foreground">{m.away.toUpperCase()}</span>
                                <img src={getSelectionLogo(m.away)} alt="" className="w-4 h-4 object-contain" />
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-12 border border-dashed border-border/20">
                          <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Sin partidos programados</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-[9px] uppercase tracking-[0.4em] text-muted-foreground">Detalles Técnicos</p>
                    <div className="h-px bg-border/10 w-full" /> {/* This is a visual separator, not text */}
                    <p className="text-xs text-muted-foreground leading-relaxed">Esta sede ha sido seleccionada por su infraestructura de vanguardia y capacidad para albergar partidos de alto rendimiento bajo estándares de la RL26_AI.</p>
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

function LiveTournamentTracker() {
  const [matches, setMatches] = useState([
    { id: 1, home: "ReAl", away: "Barcha FC", homeScore: 1, awayScore: 2, time: "3:42", lastScorer: "", isGoal: false, isFinished: false },
    { id: 2, home: "Arsenali", away: "PXG", homeScore: 3, awayScore: 0, time: "1:15", lastScorer: "", isGoal: false, isFinished: false },
    { id: 3, home: "Mashine City", away: "Chelsky", homeScore: 1, awayScore: 1, time: "4:05", lastScorer: "", isGoal: false, isFinished: false },
    { id: 4, home: "Bastard Munchen", away: "Chicorid", homeScore: 0, awayScore: 2, time: "2:58", lastScorer: "", isGoal: false, isFinished: false },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMatches(prevMatches => {
        const liveMatchesIdx = prevMatches.map((m, i) => (!m.isFinished ? i : -1)).filter(i => i !== -1);
        if (liveMatchesIdx.length === 0) return prevMatches;

        const matchIdx = liveMatchesIdx[Math.floor(Math.random() * liveMatchesIdx.length)];
        const currentMatch = prevMatches[matchIdx];

        // 10% de probabilidad de que termine el partido
        if (Math.random() > 0.9) {
          const newMatches = [...prevMatches];
          newMatches[matchIdx] = { ...currentMatch, isFinished: true };
          return newMatches;
        }

        // Probabilidad de gol
        if (Math.random() > 0.6) {
          const isHome = Math.random() > 0.5;
          const scorer = getScorer(isHome ? currentMatch.home : currentMatch.away);
          
          const newMatches = [...prevMatches];
          newMatches[matchIdx] = {
            ...currentMatch,
            homeScore: isHome ? currentMatch.homeScore + 1 : currentMatch.homeScore,
            awayScore: !isHome ? currentMatch.awayScore + 1 : currentMatch.awayScore,
            lastScorer: scorer,
            isGoal: true
          };

          // Resetear animación de gol después de 3 segundos
          setTimeout(() => {
            setMatches(latest => latest.map(m => m.id === currentMatch.id ? { ...m, isGoal: false } : m));
          }, 3000);

          return newMatches;
        }

        return prevMatches;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 lg:px-12 bg-[#020617] border-y border-blue-900/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] tracking-[0.6em] text-blue-400">TRANSMISIÓN EN VIVO // ANÁLISIS EN TIEMPO REAL</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {matches.map((match) => (
            <div key={match.id} className={cn(
              "p-[1px] bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-500",
              match.isGoal && "animate-pulse shadow-[0_0_30px_rgba(79,70,229,0.4)]",
              match.isFinished && "opacity-60 grayscale-[0.5] bg-none bg-blue-900/40"
            )}>
              <div 
                className={cn(
                  "bg-[#020617] p-8 relative overflow-hidden h-full",
                  match.isGoal && "bg-blue-900/20"
                )}
              >
              {/* Goal Animation Inside Card */}
              {match.isGoal && (
                <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-blue-800 z-20 flex flex-col items-center justify-center animate-in fade-in zoom-in duration-300">
                  <span className="text-4xl font-[family-name:var(--font-bebas)] text-white italic animate-bounce tracking-tighter">¡GOL!</span>
                  <span className="text-[9px] text-white/80 mt-1 uppercase tracking-[0.3em]">{match.lastScorer}</span>
                </div>
              )}

              <div className="flex justify-between items-center mb-6">
                <span className="text-[10px] text-blue-400">PARTIDO {match.id}</span>
                {match.isFinished ? (
                  <span className="px-3 py-1 bg-red-600/20 text-red-500 text-[9px] tracking-[0.2em]">FINALIZADO</span>
                ) : (
                  <span className="text-[10px] text-foreground/40">{match.time}</span>
                )}
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={`/acces/${selections.find(s => s.name === match.home)?.logo}`} className="w-6 h-6 object-contain" alt="" />
                    <span className={cn(
                      "text-lg font-[family-name:var(--font-bebas)] tracking-widest",
                      match.isFinished && match.homeScore > match.awayScore && "text-blue-400"
                    )}>
                      {match.home.toUpperCase()}
                    </span>
                  </div>
                  <span className={cn(
                    "text-2xl font-[family-name:var(--font-bebas)]",
                    match.isGoal && match.lastScorer === getScorer(match.home) && "text-blue-400 scale-125"
                  )}>
                    {match.homeScore}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={`/acces/${selections.find(s => s.name === match.away)?.logo}`} className="w-6 h-6 object-contain" alt="" />
                    <span className={cn(
                      "text-lg font-[family-name:var(--font-bebas)] tracking-widest",
                      match.isFinished && match.awayScore > match.homeScore && "text-blue-400"
                    )}>
                      {match.away.toUpperCase()}
                    </span>
                  </div>
                  <span className={cn(
                    "text-2xl font-[family-name:var(--font-bebas)]",
                    match.isGoal && match.lastScorer === getScorer(match.away) && "text-blue-400 scale-125"
                  )}>
                    {match.awayScore}
                  </span>
                </div>
              </div>
              
              <div className="mt-8 pt-4 border-t border-blue-500/10 flex justify-center">
                <span className="text-[9px] text-blue-400/30 uppercase tracking-[0.4em]">DATOS DE TRANSMISIÓN RL26</span>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function RlNatiosnPage() {
  return (
    <main className="min-h-screen bg-[#020617] overflow-x-hidden">
      <Navbar />

      <HeroTournament />

      <LiveTournamentTracker />


      <SelectionsGrid />

      <TemplatesTwoPlayers />

      <StandingsTable />

      <MatchSchedule />

      <TournamentBracket />

      <StadiumsGrid />

      <Footer />
    </main>
  )
}
