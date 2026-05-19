"use client"

import { useEffect, useState } from "react"

export function AIInsightsSection() {
  const [pulse, setPulse] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((p) => (p + 1) % 100)
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="ai-core" className="py-24 lg:py-48 px-6 lg:px-12 bg-background relative overflow-hidden border-y border-border/10">
      {/* Grid de fondo técnico */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ 
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`, 
          backgroundSize: '40px 40px' 
        }} 
      />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header de la Sección */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-foreground/30" />
              <span className="text-[10px] tracking-[0.6em] text-muted-foreground uppercase font-mono">
                System_Status // Gemini_Pro_v2.0
              </span>
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-9xl font-[family-name:var(--font-bebas)] tracking-tighter text-foreground leading-[0.8] animate-reveal-up">
              NÚCLEO DE <br />
              <span className="text-foreground/30 italic">ANÁLISIS IA</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-muted-foreground leading-relaxed border-l border-border/20 pl-6 uppercase tracking-wider font-light">
              Procesamos más de 1.5M de puntos de datos por segundo para predecir el valor de mercado y el rendimiento potencial de cada jugador.
            </p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {/* Card 1: Market Efficiency */}
          <div className="group relative bg-secondary/5 border border-border/10 p-10 hover:bg-secondary/10 transition-all duration-700">
            <div className="absolute top-0 right-0 p-4">
              <span className="text-[9px] font-mono text-foreground/20">DATA_REF_01</span>
            </div>
            <h3 className="text-3xl font-[family-name:var(--font-bebas)] tracking-wide mb-8">VOLATILIDAD_MERCADO</h3>
            
            <div className="flex items-end gap-1 h-32 mb-8">
              {[40, 70, 45, 90, 65, 80, 30, 95, 50, 60].map((h, i) => (
                <div 
                  key={i} 
                  className="flex-1 bg-foreground/10 group-hover:bg-foreground/30 transition-all duration-500"
                  style={{ height: `${(h + pulse) % 100}%` }}
                />
              ))}
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-xs font-mono text-muted-foreground uppercase">Estabilidad</span>
              <span className="text-xl font-[family-name:var(--font-bebas)] text-green-500">88.4%</span>
            </div>
          </div>

          {/* Card 2: AI Scouting Spotlight */}
          <div className="group relative bg-foreground text-background p-10 overflow-hidden transition-all duration-700">
            <div className="absolute top-0 right-0 p-4">
              <div className="w-2 h-2 rounded-full bg-background/50 animate-ping" />
            </div>
            <span className="text-[10px] tracking-[0.4em] font-mono uppercase opacity-60 mb-2 block">Top_Prospect_Scout</span>
            <h3 className="text-4xl font-[family-name:var(--font-bebas)] tracking-wide mb-6">JUGADOR REVELACIÓN</h3>
            
            <div className="space-y-4">
              <div className="flex justify-between border-b border-background/10 pb-2">
                <span className="text-[11px] font-mono uppercase">Jugador</span>
                <span className="text-lg font-[family-name:var(--font-bebas)]">DAN1615</span>
              </div>
              <div className="flex justify-between border-b border-background/10 pb-2">
                <span className="text-[11px] font-mono uppercase">Potencial</span>
                <span className="text-lg font-[family-name:var(--font-bebas)]">94.2</span>
              </div>
              <div className="flex justify-between border-b border-background/10 pb-2">
                <span className="text-[11px] font-mono uppercase">Confianza_IA</span>
                <span className="text-lg font-[family-name:var(--font-bebas)]">ALTA</span>
              </div>
            </div>

            <div className="mt-8 pt-8">
                <button className="w-full py-4 border border-background/20 hover:bg-background hover:text-foreground transition-all duration-500 text-[11px] tracking-[0.3em] font-mono uppercase">
                    Ver Reporte Completo
                </button>
            </div>
          </div>

          {/* Card 3: Neural Network Stats */}
          <div className="group relative bg-secondary/5 border border-border/10 p-10 hover:bg-secondary/10 transition-all duration-700">
             <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span className="text-[10px] font-mono tracking-widest text-muted-foreground uppercase">Global_Processing</span>
                </div>
                <div className="text-5xl font-[family-name:var(--font-bebas)] text-foreground leading-none">
                    {24589 + pulse}
                    <span className="text-lg ml-2 opacity-30">ops/s</span>
                </div>
             </div>

             <div className="space-y-6">
                <div className="relative h-1 w-full bg-foreground/5 overflow-hidden">
                    <div className="absolute inset-0 bg-blue-500 transition-all duration-1000" style={{ width: '65%' }} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="text-[9px] font-mono text-muted-foreground uppercase block mb-1">Precisión_Pred</span>
                        <span className="text-xl font-[family-name:var(--font-bebas)]">99.1%</span>
                    </div>
                    <div>
                        <span className="text-[9px] font-mono text-muted-foreground uppercase block mb-1">Carga_Red</span>
                        <span className="text-xl font-[family-name:var(--font-bebas)]">12.4ms</span>
                    </div>
                </div>
             </div>

             <div className="mt-12 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="flex flex-wrap gap-2">
                    {['NLP', 'RL_CORE', 'PRED_v2', 'GEMINI_SUB'].map(tag => (
                        <span key={tag} className="text-[8px] font-mono border border-foreground/50 px-2 py-0.5">{tag}</span>
                    ))}
                </div>
             </div>
          </div>
        </div>

        {/* Bottom Marquee Decorativo */}
        <div className="mt-20 border-t border-border/10 py-6 overflow-hidden flex whitespace-nowrap">
          <div className="flex animate-marquee gap-20">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[10px] font-mono tracking-[1em] text-muted-foreground/30 uppercase">
                Realtime_Scouting_Data_Feed // AI_Insights_v2.0 // Gemini_Pro_2.0 // Market_Sync_Complete
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}