"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

export const offers = [ // Export the offers array
  { 
    id: 1, 
    player: "ReAl | AlterGX", 
    club: "ReAl", 
    clubLogo: "RA.png", 
    dorsal: "#10", 
    position: "Midfielder Ofensive", 
    price: "€220.000.000M", 
    offeringTeam: "ReAl",
    offeringLogo: "RA.png",
    countryName: "Inglaterra",
    countryLogo: "EN.png",
    biddingHistory: [
      { teamName: "Mashine City", teamLogo: "MC.png", bidAmount: "€200.000.000M" },
      { teamName: "PXG", teamLogo: "PX.png", bidAmount: "€210.000.000M" },
    ]
  },
  { 
    id: 2, 
    player: "Barcha | TheRealbracho", 
    club: "Barcha", 
    clubLogo: "BF.png", 
    dorsal: "#9", 
    position: "Center Forward", 
    price: "€200.000.000M", 
    offeringTeam: "Barcha FC",
    offeringLogo: "BF.png",
    countryName: "Francia",
    countryLogo: "FR.png",
    biddingHistory: [
      { teamName: "PXG", teamLogo: "PX.png", bidAmount: "€195.000.000M" },
      { teamName: "Bastard Munchen", teamLogo: "BM.png", bidAmount: "€185.000.000M" },
    ]
  },
  { 
    id: 3, 
    player: "PXG | ElGangsta_07", 
    club: "PXG", 
    clubLogo: "PX.png", 
    dorsal: "#7", 
    position: "Right Winger", 
    price: "€185.000.000M", 
    offeringTeam: "PXG",
    offeringLogo: "PX.png",
    countryName: "Alemania",
    countryLogo: "GR.png",
    biddingHistory: [
      { teamName: "Mashine United", teamLogo: "MU.png", bidAmount: "€170.000.000M" },
      { teamName: "Arsenali", teamLogo: "AR.png", bidAmount: "€175.000.000M" },
    ]
  },
  { 
    id: 4, 
    player: "Chicorid | Dan1615", 
    club: "Chicorid", 
    clubLogo: "CD.png", 
    dorsal: "#11", 
    position: "Left Winger", 
    price: "€160.000.000M", 
    offeringTeam: "Chicorid",
    offeringLogo: "CD.png",
    countryName: "Japon",
    countryLogo: "JP.png",
    biddingHistory: [
      { teamName: "Mashine City", teamLogo: "MC.png", bidAmount: "€150.000.000M" },
      { teamName: "Bastard Munchen", teamLogo: "BM.png", bidAmount: "€130.000.000M" },
    ]
  },
  { 
    id: 5, 
    player: "Arsenali | Willicraft400", 
    club: "Arsenali", 
    clubLogo: "AR.png", 
    dorsal: "#8", 
    position: "Right Defense", 
    price: "€120.000.000M", 
    offeringTeam: "Arsenali",
    offeringLogo: "AR.png",
    countryName: "Inglaterra",
    countryLogo: "EN.png",
    biddingHistory: [
      { teamName: "Chelsky", teamLogo: "CH.png", bidAmount: "€100.000.000M" },
      { teamName: "Bastard Munchen", teamLogo: "BM.png", bidAmount: "€110.000.000M" },
    ]
  },
  { 
    id: 6, 
    player: "Bastard Munchen | Drakkrad", 
    club: "Bastard Munchen", 
    clubLogo: "BM.png", 
    dorsal: "#20", 
    position: "Defensive Midfielder", 
    price: "€100.000.000M", 
    offeringTeam: "Bastard Munchen",
    offeringLogo: "BM.png",
    countryName: "Japon",
    countryLogo: "JP.png",
    biddingHistory: [
      { teamName: "Ubers", teamLogo: "UB.png", bidAmount: "€80.000.000M" },
      { teamName: "Mashine City", teamLogo: "MC.png", bidAmount: "€90.000.000M" },
    ]
  },
  { 
    id: 7, 
    player: "Chelsky | Skartt01", 
    club: "Chelsky", 
    clubLogo: "CH.png", 
    dorsal: "#15", 
    position: "Defense Center", 
    price: "€70.000.000M", 
    offeringTeam: "Chelsky",
    offeringLogo: "CH.png",
    countryName: "Francia",
    countryLogo: "FR.png",
    biddingHistory: [
      { teamName: "Mashine United", teamLogo: "MU.png", bidAmount: "€60.000.000M" },
      { teamName: "Berserk Dortmund", teamLogo: "BD.png", bidAmount: "€65.000.000M" },
    ]
  },
  { 
    id: 8, 
    player: "Berserk Dortmund| ZEstebanPVP", 
    club: "Berserk Dortmund", 
    clubLogo: "BD.png", 
    dorsal: "#15", 
    position: "Center Forward", 
    price: "€40.000.000M", 
    offeringTeam: "Berserk Dortmund",
    offeringLogo: "BD.png",
    countryName: "Brasil",
    countryLogo: "BR.png",
    biddingHistory: [
      { teamName: "Ajajax", teamLogo: "AJ.png", bidAmount: "€30.000.000M" },
      { teamName: "Chicorid", teamLogo: "CD.png", bidAmount: "€35.000.000M" },
    ]
  },
  { 
    id: 9, 
    player: "Mashine United | JosuaSCA", 
    club: "Mashine United", 
    clubLogo: "MU.png", 
    dorsal: "#25", 
    position: "Center Forward", 
    price: "30.000.000M", 
    offeringTeam: "Mashine United",
    offeringLogo: "MU.png",
    countryName: "Francia",
    countryLogo: "FR.png",
    biddingHistory: [
      { teamName: "Miranoia", teamLogo: "MI.png", bidAmount: "€25.000.000M" },
      { teamName: "Bastard Munchen", teamLogo: "BM.png", bidAmount: "€28.000.000M" },
    ]
  },
  { 
    id: 10, 
    player: "Ajajax | Pamtita", 
    club: "Ajajax", 
    clubLogo: "AJ.png", 
    dorsal: "#4", 
    position: "Defense", 
    price: "€25.000.000M", 
    offeringTeam: "Ajajax",
    offeringLogo: "AJ.png",
    countryName: "Alemania",
    countryLogo: "GR.png",
    biddingHistory: [
      { teamName: "RPB", teamLogo: "RBP.png", bidAmount: "€20.000.000M" },
      { teamName: "Marseille", teamLogo: "MS.png", bidAmount: "€22.000.000M" },
    ]
  },
]

export function OffersSection() {
  const [selectedOffer, setSelectedOffer] = useState<typeof offers[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="ofertas" className="py-32 px-0 lg:px-0">
      <div className="max-w-[1400px] mx-auto">
        <div className="px-6 lg:px-12 mb-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-16 h-px bg-foreground/20" />
            <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase">Historial de Traspasos</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h3 className="text-4xl md:text-5xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-none">
              Ofertas De Clubes - Fichajes Concretados De MAYO
            </h3>
            <span className="text-[10px] tracking-[0.4em] text-muted-foreground font-mono bg-secondary/20 px-4 py-2 border border-border/10">
              TOTAL: 10 OFERTAS
            </span>
          </div>
        </div>

        <div className="border-y border-border/10 bg-card/5">
          <div className="divide-y divide-border/5">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="group relative px-6 lg:px-12 py-8 flex flex-wrap md:flex-nowrap items-center gap-8 hover:bg-white/[0.02] transition-all duration-500 cursor-pointer overflow-hidden"
                onClick={() => {
                  setSelectedOffer(offer)
                  setIsOpen(true)
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-foreground/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Rank */}
                <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground/10 group-hover:text-foreground/40 transition-colors w-8 flex-shrink-0">
                  {offer.id}
                </span>

                {/* Club Logo */}
                <div className="w-14 h-14 border border-border/20 bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:border-foreground/20 transition-colors">
                  <img
                    src={`/acces/${offer.clubLogo}`}
                    alt={`${offer.club} logo`}
                    className="w-10 h-10 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Player Name */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase">{offer.club}</span>
                    <div className="w-1 h-1 bg-foreground/20 rounded-full" />
                    <span className="text-[9px] tracking-[0.4em] text-foreground/40 font-mono">REALIZADO</span>
                  </div>
                  <h4 className="text-2xl font-[family-name:var(--font-bebas)] tracking-widest text-foreground truncate group-hover:translate-x-1 transition-transform duration-500">
                    {offer.player.toUpperCase()}
                  </h4>
                </div>

                {/* Details Hidden on mobile, flex on desktop */}
                <div className="hidden lg:flex flex-col items-center px-8 border-x border-border/10">
                  <span className="text-[8px] tracking-[0.4em] text-muted-foreground mb-1">DORSAL</span>
                  <span className="text-xl font-[family-name:var(--font-bebas)] text-foreground/80">{offer.dorsal}</span>
                </div>

                <div className="hidden lg:flex flex-col items-start px-8 min-w-[180px]">
                  <span className="text-[8px] tracking-[0.4em] text-muted-foreground mb-1 uppercase">Posición</span>
                  <span className="text-xs tracking-wider text-foreground/70">{offer.position}</span>
                </div>

                {/* Price (Main Focus) */}
                <div className="text-right flex-shrink-0 min-w-[140px]">
                  <span className="text-[8px] tracking-[0.4em] text-muted-foreground mb-1 block">VALOR TRASPASO</span>
                  <span className="text-2xl font-[family-name:var(--font-bebas)] text-foreground tracking-tight">
                    {offer.price}
                  </span>
                </div>

                {/* Offering Team */}
                <div className="flex items-center gap-4 flex-shrink-0 bg-secondary/10 px-6 py-3 border border-border/10 group-hover:border-foreground/20 transition-all duration-500">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <img
                      src={`/acces/${offer.offeringLogo}`}
                      alt={`${offer.offeringTeam} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[7px] tracking-[0.3em] text-muted-foreground uppercase">Oferente</span>
                    <span className="text-xs font-[family-name:var(--font-bebas)] tracking-widest text-foreground">
                      {offer.offeringTeam.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Player Detail Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-4xl border border-border/20 bg-background/95 backdrop-blur-xl p-0 overflow-hidden shadow-2xl animate-pop-open rounded-none">
            <DialogTitle className="sr-only">Detalle del Jugador</DialogTitle>
            {selectedOffer && (
              <div className="relative">
                {/* Fondo decorativo con rejilla */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                  style={{ backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, backgroundSize: '30px 30px' }} 
                />

                {/* Header Técnico */}
                <div className="relative z-10 border-b border-border/10 bg-secondary/10 px-8 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
                    <span className="text-[10px] tracking-[0.5em] text-muted-foreground font-mono">REPORTE DE TRANSFERENCIA // LOG_{String(selectedOffer.id).padStart(3, '0')}</span>
                  </div>
                  <span className="text-[9px] tracking-[0.3em] text-green-500/70 font-mono uppercase">TRANSACCIÓN COMPLETADA</span>
                </div>

                <div className="relative">
                  <div className="p-8 lg:p-12 border-b border-border/10">
                    <div className="flex flex-col md:flex-row md:items-center gap-10">
                      <div className="w-32 h-32 border border-border/20 bg-background flex items-center justify-center p-6 shadow-2xl">
                        <img
                          src={`/acces/${selectedOffer.clubLogo}`}
                          alt=""
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase">{selectedOffer.club}</span>
                          <div className="w-1 h-1 bg-foreground/20 rounded-full" />
                          <span className="text-[11px] tracking-[0.4em] text-foreground/40 font-mono">ID: {selectedOffer.dorsal}</span>
                        </div>
                        <h2 className="text-6xl sm:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.85] mb-4">
                          {selectedOffer.player.split('|')[1]?.trim().toUpperCase() || selectedOffer.player.toUpperCase()}
                        </h2>
                        <div className="h-px w-20 bg-foreground/20" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/10">
                    <div className="bg-background/50 p-8 backdrop-blur-sm">
                      <span className="text-[9px] tracking-[0.4em] text-muted-foreground block mb-3 uppercase">Valor De Cierre</span>
                      <span className="text-3xl font-[family-name:var(--font-bebas)] text-foreground">{selectedOffer.price}</span>
                    </div>
                    <div className="bg-background/50 p-8 backdrop-blur-sm">
                      <span className="text-[9px] tracking-[0.4em] text-muted-foreground block mb-3 uppercase">Posición</span>
                      <span className="text-xl font-[family-name:var(--font-bebas)] text-foreground/70 uppercase truncate block">
                        {selectedOffer.position}
                      </span>
                    </div>
                    <div className="bg-background/50 p-8 backdrop-blur-sm">
                      <span className="text-[9px] tracking-[0.4em] text-muted-foreground block mb-3 uppercase">Dorsal</span>
                      <span className="text-3xl font-[family-name:var(--font-bebas)] text-foreground">{selectedOffer.dorsal}</span>
                    </div>
                    <div className="bg-background/50 p-8 backdrop-blur-sm">
                      <span className="text-[9px] tracking-[0.4em] text-muted-foreground block mb-3 uppercase">Estado</span>
                      <span className="text-3xl font-[family-name:var(--font-bebas)] text-green-500">REALIZADO</span>
                    </div>
                  </div>

                  <div className="p-10 bg-secondary/5 flex flex-col sm:flex-row items-center justify-between gap-8 border-t border-border/10">
                    <div className="flex items-center gap-4">
                      <img src={`/acces/${selectedOffer.clubLogo}`} alt="" className="w-8 h-8 object-contain" />
                      <span className="text-[10px] tracking-[0.4em] font-mono text-muted-foreground">{selectedOffer.club.toUpperCase()}</span>
                    </div>
                    <div className="hidden sm:flex flex-col items-center flex-1 max-w-[200px]">
                      <div className="h-px w-20 bg-border/20 mb-2" />
                      <span className="text-[9px] tracking-[0.6em] text-muted-foreground/40 font-mono">MOVIMIENTO HECHO</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] tracking-[0.4em] font-mono text-muted-foreground">{selectedOffer.offeringTeam.toUpperCase()}</span>
                      <img src={`/acces/${selectedOffer.offeringLogo}`} alt="" className="w-8 h-8 object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
