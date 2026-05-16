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

const getTeamLogoBg = (team: string) => {
  const bgMap: Record<string, string> = {
    "ReAl": "bg-white",
    "Arsenali": "bg-red-500",
    "Bastard Munchen": "bg-red-900",
    "PXG": "bg-blue-800",
    "Chicorid": "bg-blue-800",
    "Barcha FC": "bg-red-900",
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
  };
  return leagueMap[team] || "";
};

const topForwards = [
  {
    rank: 1,
    name: "El_Gangsta07",
    team: "PXG",
    dorsal: "7",
    position: "Right Winger",
    stats: { goals: 10575, hatTricks: 0, shots: 0, mvp: 565 },
    marketValue: "255.000.000M",
  },
  {
    rank: 2,
    name: "TheRealBracho",
    team: "Barcha FC",
    dorsal: "9",
    position: "Center Forward",
    stats: { goals: 6310, hatTricks: 0, shots: 0, mvp: 1145 },
    marketValue: "300.000.000M",
  },
  {
    rank: 3,
    name: "Dan1615",
    team: "Chicorid",
    dorsal: "11",
    position: "Left Winger",
    stats: { goals: 5567, hatTricks: 0, shots: 0, mvp: 543 },
    marketValue: "220.000.000M",
  },
];

function ForwardCard({ player }: { player: typeof topForwards[0] }) {
  return (
    <div className="group relative border border-border/10 bg-card/10 overflow-hidden transition-all duration-500 hover:border-foreground/20 flex flex-col">
      {/* Fondo decorativo con rejilla */}
      <div 
        className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity duration-700" 
        style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
      />

      <div className="relative w-full h-24 border-b border-border/20 bg-secondary/20 flex items-center justify-center overflow-hidden z-10">
        <div className="absolute top-4 left-4 z-10">
          <span
            className={`text-4xl font-[family-name:var(--font-bebas)] ${
              player.rank === 1
                ? "text-foreground"
                : player.rank === 2
                  ? "text-foreground/70"
                  : player.rank === 3
                    ? "text-foreground/50"
                    : "text-foreground/30"
            }`}
          >
            #{player.rank}
          </span>
        </div>

        <span className="text-[80px] font-[family-name:var(--font-poppins)] text-foreground/[0.04] select-none">
          {player.dorsal}
        </span>

        {player.rank <= 3 && (
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-foreground/40 via-foreground/20 to-transparent" />
        )}
      </div>

      <div className="flex-1 p-6 flex flex-col z-10 transform group-hover:translate-y-[-5px] transition-transform duration-500">
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-[11px] tracking-[0.15em] text-muted-foreground/70">#{player.dorsal}</span>
            <div className="w-4 h-px bg-border/40" />
            <span className="text-[10px] tracking-[0.2em] text-muted-foreground/70">{player.team.toUpperCase()}</span>
            <div className="flex items-center gap-1.5">
              <div
                className={`w-8 h-8 border border-border/30 flex items-center justify-center ${getTeamLogoBg(player.team)}`}
              >
                <img
                  src={`/acces/${getTeamLogo(player.team)}`}
                  alt={`${player.team} logo`}
                  className="w-full h-full object-contain p-0.5"
                />
              </div>
              {getLeagueLogo(player.team) && (
                <div className="w-8 h-8 border border-border/10 flex items-center justify-center bg-secondary/10">
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
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground/70 font-[family-name:var(--font-bebas)]">
            {player.position.toUpperCase()}
          </p>
          <div className="h-px w-0 group-hover:w-full bg-foreground/20 mt-4 transition-all duration-700" />
        </div>

        <div className="grid grid-cols-4 gap-2 mb-6">
          {[
            { label: "GOLES", value: player.stats.goals },
            { label: "HAT TRICKS", value: player.stats.hatTricks },
            { label: "TIROS", value: player.stats.shots },
            { label: "MVP", value: player.stats.mvp },
          ].map((stat) => (
            <div key={stat.label} className="text-center py-3 border border-border/10 bg-secondary/10">
              <span className="text-xl sm:text-2xl font-[family-name:var(--font-bebas)] text-foreground block">
                {stat.value}
              </span>
              <p className="text-[7px] tracking-[0.15em] text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-border/10 flex items-center justify-between">
          <span className="text-[9px] tracking-[0.2em] text-muted-foreground">Net Worth €</span>
          <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">€{player.marketValue}</span>
        </div>
      </div>
    </div>
  );
}

export function ForwardsSection() {
  return (
    <section id="forwards" className="py-32 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 animate-pulse" />
            ATTACK_METRICS_v1.0
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="relative">
            <span className="absolute -top-10 -left-4 text-[90px] font-[family-name:var(--font-bebas)] text-foreground/[0.03] select-none whitespace-nowrap pointer-events-none hidden lg:block uppercase">
              Vanguardia
            </span>
            <h2 className="relative text-6xl sm:text-7xl lg:text-8xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85]">
              TOP<br /><span className="text-foreground/40 italic">DELANTEROS</span>
            </h2>
          </div>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg border-l border-border/20 pl-8">
              Los delanteros más destacados con métricas de goles, hat-tricks, tiros y MVP.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {topForwards.map((player) => (
            <ForwardCard key={player.rank} player={player} />
          ))}
        </div>
      </div>
    </section>
  );
}
