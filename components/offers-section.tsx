"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

const offers = [
  { 
    id: 1, 
    player: "ReAl | AlterGX", 
    club: "ReAl", 
    clubLogo: "RA.png", 
    dorsal: "#10", 
    position: "Midfielder Ofensive", 
    price: "€220.000.000M", 
    offeringTeam: "ReAl", 
    offeringLogo: "RA.png"
  },
  { 
    id: 2, 
    player: "Barcha | TheRealbracho", 
    club: "Barcha", 
    clubLogo: "BF.png", 
    dorsal: "#9", 
    position: "Center Forward", 
    price: "€210.000.000M", 
    offeringTeam: "Barcha", 
    offeringLogo: "BF.png"
  },
  { 
    id: 3, 
    player: "PXG | ElGangsta_07", 
    club: "PXG", 
    clubLogo: "PX.png", 
    dorsal: "#7", 
    position: "Right Winger", 
    price: "€195.000.000M", 
    offeringTeam: "PXG", 
    offeringLogo: "PX.png"
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
    offeringLogo: "CD.png"
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
    offeringLogo: "AR.png"
  },
  { 
    id: 6, 
    player: "Bastrad Munchen | Drakkrad", 
    club: "Bastrad Munchen", 
    clubLogo: "BM.png", 
    dorsal: "#20", 
    position: "Defensive Midfielder", 
    price: "€100.000.000M", 
    offeringTeam: "Bastard Munchen", 
    offeringLogo: "BM.png"
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
    offeringLogo: "CH.png"
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
    offeringLogo: "BD.png"
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
    offeringLogo: "MU.png"
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
    offeringLogo: "AJ.png"
  },
]

export function OffersSection() {
  const [selectedOffer, setSelectedOffer] = useState<typeof offers[0] | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section id="ofertas" className="py-32 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        <div className="border border-border/20 bg-card/20">
          <div className="px-8 py-6 border-b border-border/20 flex items-center justify-between">
            <h3 className="text-2xl font-[family-name:var(--font-bebas)] tracking-[0.1em] text-foreground">
              Ofertas De Clubes - Fichajes Concretados Mes 01
            </h3>
            <span className="text-[10px] tracking-[0.3em] text-muted-foreground">10 JUGADORES</span>
          </div>
          <div className="divide-y divide-border/10">
            {offers.map((offer) => (
              <div
                key={offer.id}
                className="px-10 py-5 flex items-center gap-4 hover:bg-secondary/20 transition-colors duration-300 cursor-pointer"
                onClick={() => {
                  setSelectedOffer(offer)
                  setIsOpen(true)
                }}
              >
                {/* Position # */}
                <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground/30 w-8 flex-shrink-0">
                  {offer.id}
                </span>

                {/* Club Logo */}
                <div className="w-12 h-12 border border-border/30 flex items-center justify-center bg-secondary/20 flex-shrink-0">
                  <img
                    src={`/acces/${offer.clubLogo}`}
                    alt={`${offer.club} logo`}
                    className="w-full h-full object-contain p-1"
                  />
                </div>

                {/* Player Name */}
                <div className="flex-1 min-w-0">
                  <h4 className="text-base font-[family-name:var(--font-bebas)] tracking-wide text-foreground truncate">
                    {offer.player.toUpperCase()}
                  </h4>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[9px] tracking-[0.2em] text-muted-foreground truncate">
                      {offer.dorsal}
                    </span>
                    <div className="w-px h-3 bg-border/40" />
                    <span className="text-[9px] tracking-[0.2em] text-muted-foreground truncate">
                      {offer.position}
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-right flex-shrink-0">
                  <span className="text-[11px] tracking-[0.2em] text-muted-foreground block truncate">
                    {offer.price}
                  </span>
                </div>

                {/* Offering Team */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="w-8 h-8 border border-border/30 flex items-center justify-center bg-secondary/20">
                    <img
                      src={`/acces/${offer.offeringLogo}`}
                      alt={`${offer.offeringTeam} logo`}
                      className="w-full h-full object-contain p-0.5"
                    />
                  </div>
                  <span className="text-[11px] tracking-[0.2em] text-muted-foreground truncate">
                    {offer.offeringTeam.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Player Detail Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl border border-border/20 bg-card/20 p-0">
            <DialogTitle className="sr-only">Detalle del Jugador</DialogTitle>
            {selectedOffer && (

              <div className="relative">
                {/* Background Pattern */}
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}
                />

                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-px bg-foreground/20" />
                    <span className="text-[10px] tracking-[0.5em] text-muted-foreground">DETALLE DEL JUGADOR</span>
                  </div>

                  {/* Player Info */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Player Details */}
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 border border-border/30 flex items-center justify-center bg-secondary/20">
                          <img
                            src={`/acces/${selectedOffer.clubLogo}`}
                            alt={`${selectedOffer.club} logo`}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                        <div>
                          <h2 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground">
                            {selectedOffer.player.toUpperCase()}
                          </h2>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-sm font-[family-name:var(--font-bebas)] text-foreground/70">
                              {selectedOffer.dorsal}
                            </span>
                            <div className="w-px h-4 bg-border/40" />
                            <span className="text-[11px] tracking-[0.2em] text-muted-foreground">
                              {selectedOffer.position.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-border/10">
                          <span className="text-[11px] tracking-[0.3em] text-muted-foreground">CLUB ACTUAL</span>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border border-border/30 flex items-center justify-center bg-secondary/20">
                              <img
                                src={`/acces/${selectedOffer.clubLogo}`}
                                alt={`${selectedOffer.club} logo`}
                                className="w-full h-full object-contain p-0.5"
                              />
                            </div>
                            <span className="text-sm font-[family-name:var(--font-bebas)] text-foreground">
                              {selectedOffer.club.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-border/10">
                          <span className="text-[11px] tracking-[0.3em] text-muted-foreground">OFERTA</span>
                          <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">
                            {selectedOffer.price}
                          </span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                          <span className="text-[11px] tracking-[0.3em] text-muted-foreground">EQUIPO OFERENTE</span>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border border-border/30 flex items-center justify-center bg-secondary/20">
                              <img
                                src={`/acces/${selectedOffer.offeringLogo}`}
                                alt={`${selectedOffer.offeringTeam} logo`}
                                className="w-full h-full object-contain p-0.5"
                              />
                            </div>
                            <span className="text-sm font-[family-name:var(--font-bebas)] text-foreground">
                              {selectedOffer.offeringTeam.toUpperCase()}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Visual Elements */}
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="w-32 h-32 border border-border/20 bg-secondary/10 flex items-center justify-center">
                        <img
                          src={`/acces/${selectedOffer.clubLogo}`}
                          alt={`${selectedOffer.club} logo`}
                          className="w-24 h-24 object-contain"
                        />
                      </div>

                      <div className="text-center space-y-2">
                        <div className="text-4xl font-[family-name:var(--font-bebas)] text-foreground">
                          {selectedOffer.dorsal}
                        </div>
                        <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                          Dorsal
                        </div>
                      </div>

                      <div className="w-full h-px bg-border/20" />

                      <div className="text-center space-y-2">
                        <div className="text-lg font-[family-name:var(--font-bebas)] text-foreground">
                          {selectedOffer.position.toUpperCase()}
                        </div>
                        <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                          Posición
                        </div>
                      </div>
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
