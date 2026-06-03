"use client"

import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'
import { OffersSection } from './offers-section'

const teams = [
  { id: 1, name: 'ReAl', abbr: 'RA', group: 'A', players: ['AlterGX'], logo: 'RA.png', description: 'Dominante potencia española con historia de títulos europeos.', rival: {name: 'Barcha FC', logo: 'BF.png'}, countryFlag: 'https://flagcdn.com/24x18/es.png', leagueLogo: '/acces/laliga.png', economicStatus: '€1.200.000.000M' },
  { id: 2, name: 'Barcha FC', abbr: 'BF', group: 'A', players: ['TheRealbracho'], logo: 'BF.png', description: 'Clásico catalán conocido por su estilo ofensivo.', rival: {name: 'ReAl', logo: 'RA.png'}, countryFlag: 'https://flagcdn.com/24x18/es.png', leagueLogo: '/acces/laliga.png', economicStatus: '€1.100.000.000M' },
  { id: 3, name: 'Chelsky', abbr: 'CH', group: 'A', players: ['Skkart01'], logo: 'CH.png', description: 'Gigante londinense con ambición continental.', rival: {name: 'Arsenali', logo: 'AR.png'}, countryFlag: 'https://flagcdn.com/24x18/gb.png', leagueLogo: '/acces/premier.png', economicStatus: '€950.000.000M' },
  { id: 4, name: 'Bastard Munchen', abbr: 'BM', group: 'A', players: ['Drakkrad'], logo: 'BM.png', description: 'Máquina bávara de precisión alemana.', rival: {name: 'Berserk Dortmund', logo: 'BD.png'}, countryFlag: 'https://flagcdn.com/24x18/de.png', leagueLogo: '/acces/bundesliga.jpg', economicStatus: '€1.000.000.000M' },
  { id: 5, name: 'Arsenali', abbr: 'AR', group: 'A', players: ['Willicraft400'], logo: 'AR.png', description: 'Orgullo del norte inglés con tradición ganadora.', rival: {name: 'Chelsky', logo: 'CH.png'}, countryFlag: 'https://flagcdn.com/24x18/gb.png', leagueLogo: '/acces/premier.png', economicStatus: '€800.000.000M' },
  { id: 6, name: 'Ubers', abbr: 'UB', group: 'B', players: ['No Jugadores Por Ahora'], logo: 'UB.png', description: 'Club innovador con enfoque en jóvenes talentos.', rival: {name: 'Miranoia', logo: 'MI.png'}, countryFlag: 'https://flagcdn.com/24x18/it.png', leagueLogo: '/acces/seriea.png', economicStatus: '€700.000.000M' },
  { id: 7, name: 'Mashine City', abbr: 'MC', group: 'B', players: ['No Jugadores Por Ahora'], logo: 'MC.png', description: 'Ciudadanos del futuro con recursos ilimitados.', rival: {name: 'Mashine U', logo: 'MU.png'}, countryFlag: 'https://flagcdn.com/24x18/gb.png', leagueLogo: '/acces/premier.png', economicStatus: '€1.500.000.000M' },
  { id: 8, name: 'Mashine U', abbr: 'MU', group: 'B', players: ['JosuaSCA'], logo: 'MU.png', description: 'Leyenda inglesa con 20 títulos nacionales.', rival: {name: 'Mashine City', logo: 'MC.png'}, countryFlag: 'https://flagcdn.com/24x18/gb.png', leagueLogo: '/acces/premier.png', economicStatus: '€1.300.000.000M' },
  { id: 9, name: 'Miranoia', abbr: 'MI', group: 'B', players: ['No Jugadores Por Ahora'], logo: 'MI.png', description: 'Club italiano de pasión y drama eterno.', rival: {name: 'Ubers', logo: 'UB.png'}, countryFlag: 'https://flagcdn.com/24x18/it.png', leagueLogo: '/acces/seriea.png', economicStatus: '€650.000.000M' },
  { id: 10, name: 'PXG', abbr: 'PX', group: 'B', players: ['El_Gangsta07'], logo: 'PX.png', description: 'París glamoroso buscando dominación europea.', rival: {name: 'Marseille', logo: 'MS.png'}, countryFlag: 'https://flagcdn.com/24x18/fr.png', leagueLogo: '/acces/ligue1.png', economicStatus: '€900.000.000M' },
  { id: 11, name: 'Marselie', abbr: 'MS', group: 'C', players: ['No Jugadores Por Ahora'], logo: 'MS.png', description: 'Calor mediterráneo y hinchada legendaria.', rival: {name: 'PXG', logo: 'PX.png'}, countryFlag: 'https://flagcdn.com/24x18/fr.png', leagueLogo: '/acces/ligue1.png', economicStatus: '€550.000.000M' },
  { id: 12, name: 'Berserk Dortmund', abbr: 'BD', group: 'C', players: ['ZEstebanPvP'], logo: 'BD.png', description: 'Muro amarillo y energía inagotable.', rival: {name: 'Bastard Munchen', logo: 'BM.png'}, countryFlag: 'https://flagcdn.com/24x18/de.png', leagueLogo: '/acces/bundesliga.jpg', economicStatus: '€750.000.000M' },
  { id: 13, name: 'Chicorid', abbr: 'CD', group: 'C',players: ['Dan1615'], logo: 'CD.png', description: 'Club modesto con espíritu combativo.', rival: {name: 'ReAl', logo: 'RA.png'}, countryFlag: 'https://flagcdn.com/24x18/es.png', leagueLogo: '/acces/laliga.png', economicStatus: '€450.000.000M' },
  { id: 14, name: 'Rubypool FC', abbr: 'RUB', group: 'C', players: ['No Jugadores Por Ahora'], logo: 'RUB.png', description: 'Club inglés con gran proyección en la escena competitiva.', rival: {name: 'Mashine United', logo: 'MU.png'}, countryFlag: 'https://flagcdn.com/24x18/gb.png', leagueLogo: '/acces/premier.png', economicStatus: '€500.000.000M' },
  { id: 15, name: 'Ajajax', abbr: 'AJ', group: 'C', players: ['Pamtita'], logo: 'AJ.png', description: 'Fábrica de talentos neerlandesa clásica.', rival: {name: 'RBP', logo: 'RBP.png'}, countryFlag: 'https://flagcdn.com/24x18/nl.png', leagueLogo: '/acces/eredivisie.png', economicStatus: '€600.000.000M' },
]

  export function TeamsSection() {
    const [selectedTeam, setSelectedTeam] = useState<typeof teams[0] | null>(null)
    const [isOpen, setIsOpen] = useState(false)

    return (
    <section id="equipos" className="py-32 px-6 lg:px-12 bg-secondary/5">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-px bg-foreground/20" />
          <span className="text-[10px] tracking-[0.5em] text-muted-foreground">THE CLUBS</span>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-foreground leading-[0.9]">
            15 Grandes
            <br />
            Clubes
          </h2>
          <div className="flex items-end">
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed max-w-lg">
              Los mejores clubes del mundo de RL observan atentamente a los Nuevos Jugadores de esta generación para incluirlos a sus filas.
            </p>
          </div>
        </div>

        {/* Teams Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-24">
          {teams.map((team) => (
            <div
              key={team.id}
              className="group relative aspect-square border border-border/20 bg-card/30 flex items-center justify-center hover-lift hover-glow cursor-pointer overflow-hidden"
              onClick={() => {
                setSelectedTeam(team)
                setIsOpen(true)
              }}
            >
              <img
                src={`/acces/${team.logo}`}
                alt={`${team.name} logo`}
                className="w-3/4 h-3/4 object-contain"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-3xl sm:text-4xl font-[family-name:var(--font-bebas)] text-white drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 tracking-wider">
                  {team.abbr}
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3">
                <p className="text-[10px] tracking-[0.15em] text-white drop-shadow-lg truncate text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {team.name.toUpperCase()}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Team Detail Modal */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogContent className="max-w-2xl border border-border/20 bg-card/20 p-0">
            <DialogTitle className="sr-only">Detalle del Club</DialogTitle>
            {selectedTeam && (
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
                    <span className="text-[10px] tracking-[0.5em] text-muted-foreground">DETALLE DEL CLUB</span>
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Details */}
                    <div className="space-y-6">
                      <div>
                        <h2 className="text-2xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground mb-2">
                          {selectedTeam.name.toUpperCase()}
                        </h2>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {selectedTeam.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center py-3 border-b border-border/10">
                          <span className="text-[11px] tracking-[0.3em] text-muted-foreground">CLUB RIVAL</span>
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 border border-border/30 flex items-center justify-center bg-secondary/20">
                              <img
                                src={`/acces/${selectedTeam.rival.logo}`}
                                alt={selectedTeam.rival.name}
                                className="w-full h-full object-contain p-0.5"
                              />
                            </div>
                            <span className="text-sm font-[family-name:var(--font-bebas)] text-foreground">
                              {selectedTeam.rival.name.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        <div className="flex justify-between items-center py-3 border-b border-border/10">
                          <span className="text-[11px] tracking-[0.3em] text-muted-foreground">PAÍS Y LIGA</span>
                          <div className="flex items-center gap-2">
                            <img
                              src={selectedTeam.countryFlag}
                              alt="Bandera"
                              className="w-8 h-6 object-contain border border-border/30 rounded"
                            />
                            <img
                              src={selectedTeam.leagueLogo}
                              alt="Liga"
                              className="w-8 h-6 object-contain border border-border/30 rounded"
                            />
                          </div>
                        </div>

                        <div className="py-3 border-b border-border/10">
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-[11px] tracking-[0.3em] text-muted-foreground">PLANTILLA ACTUAL ({selectedTeam.players.length})</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {selectedTeam.players.map((player, idx) => (
                              <span key={idx} className="text-[10px] tracking-wide bg-secondary/50 px-2 py-1 rounded text-foreground">
                                {player}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center py-3">
                          <span className="text-[11px] tracking-[0.3em] text-muted-foreground">ESTADO ECONÓMICO</span>
                          <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">
                            {selectedTeam.economicStatus}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="w-32 h-32 border border-border/20 bg-secondary/10 flex items-center justify-center">
                        <img
                          src={`/acces/${selectedTeam.logo}`}
                          alt={selectedTeam.name}
                          className="w-24 h-24 object-contain p-2"
                        />
                      </div>
                      <div className="text-center space-y-2">
                        <div className="text-4xl font-[family-name:var(--font-bebas)] text-foreground tracking-widest">
                          {selectedTeam.abbr}
                        </div>
                        <div className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                          Grupo {selectedTeam.group}
                        </div>
                      </div>
                      <div className="w-full h-px bg-border/20" />
                      <div className="text-center">
                        <div className="text-lg font-[family-name:var(--font-bebas)] text-foreground">
                          {selectedTeam.players.length} Jugadores
                        </div>
                        <div className="text-[10px] tracking-[0.3em] text-muted-foreground">
                          Plantilla
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Ofertas Table */}
        <OffersSection />
      </div>
    </section>
  )
}
