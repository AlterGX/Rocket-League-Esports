"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Activity, ShieldAlert, Cpu, Zap } from "lucide-react"
import { cn } from "@/lib/utils"

const rumors = [
  {
    player: "ALTERGX",
    currentClub: "REAL",
    currentLogo: "RA.png",
    targetClub: "MASHINE CITY",
    targetLogo: "MC.png",
    probability: 45,
    type: "NEGOCIACIÓN_DIRECTA",
    offeredValue: "€245.000.000M",
    urgency: "CRITICAL",
    sourceConfidence: 88
  },
  {
    player: "DAN1615",
    currentClub: "CHICORID",
    currentLogo: "CD.png",
    targetClub: "BARCHA FC",
    targetLogo: "BF.png",
    probability: 78,
    type: "INTERÉS_CONFIRMADO",
    offeredValue: "€190.000.000M",
    urgency: "HIGH",
    sourceConfidence: 94
  },
  {
    player: "WILLICRAFT400",
    currentClub: "ARSENALI",
    currentLogo: "AR.png",
    targetClub: "REAL",
    targetLogo: "RA.png",
    probability: 32,
    type: "PROTOCOLO_SCOUTING",
    offeredValue: "€165.000.000M",
    urgency: "LOW",
    sourceConfidence: 45
  },
  {
    player: "THE_REALBRACHO",
    currentClub: "BARCHA FC",
    currentLogo: "BF.png",
    targetClub: "PXG",
    targetLogo: "PX.png",
    probability: 55,
    type: "REUNIÓN_AGENTE",
    offeredValue: "€210.000.000M",
    urgency: "MEDIUM",
    sourceConfidence: 72
  },
]

export function MarketRumorsSection() {
  const [noise, setNoise] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setNoise(Math.random())
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 px-6 lg:px-12 bg-[#050505] border-b border-white/5 relative overflow-hidden">
      {/* Efecto de Scanline y Ruido Visual */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Sobrecargado */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-l-2 border-white/10 pl-6">
          <div className="space-y-2">
            <div className="flex items-center gap-4">
              <Activity size={14} className="text-white/40 animate-pulse" />
              <span className="text-[9px] tracking-[0.5em] text-white/40 uppercase font-mono">Market_Intelligence_Sync // V_4.0.1</span>
            </div>
            <h2 className="text-5xl lg:text-7xl font-[family-name:var(--font-bebas)] tracking-tight text-white leading-none">
              RUMORES <span className="text-white/20 italic">FILTRADOS</span>
            </h2>
          </div>
          <div className="flex gap-8 text-[9px] font-mono text-white/30 tracking-widest uppercase bg-white/5 p-4 border border-white/10 backdrop-blur-sm">
            <div className="flex flex-col gap-1">
              <span>Status: <span className="text-white/80">Interceptando...</span></span>
              <span>Buffer: <span className="text-white/80">{(noise * 100).toFixed(2)}%</span></span>
            </div>
            <div className="flex flex-col gap-1">
              <span>Source: <span className="text-white/80">Encrypted_Node</span></span>
              <span>Region: <span className="text-white/80">Global_ES</span></span>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {rumors.map((rumor, i) => (
            <div key={i} className="group relative border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.05] hover:border-white/30 transition-all duration-500 flex flex-col justify-between overflow-hidden">
              {/* Glitch Overlay on Hover */}
              <div className="absolute inset-0 bg-white/5 translate-x-full group-hover:translate-x-0 transition-transform duration-700 opacity-20 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="text-[9px] tracking-[0.2em] text-white/60 font-mono font-bold uppercase flex items-center gap-2">
                    <Zap size={10} className="animate-pulse" /> {rumor.type}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20 animate-ping" />
                </div>

                <h4 className="text-4xl font-[family-name:var(--font-bebas)] tracking-wide text-white mb-1 group-hover:tracking-widest transition-all duration-500">
                  {rumor.player}
                </h4>
                <p className="text-[8px] font-mono text-white/30 uppercase tracking-[0.3em] mb-6">Internal_Ref_#{Math.floor(noise * 9000) + 1000}</p>

                <div className="flex items-center justify-between gap-4 mb-8 py-4 border-y border-white/5 bg-black/20 px-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center p-1 bg-background grayscale group-hover:grayscale-0 transition-all">
                      <img src={`/acces/${rumor.currentLogo}`} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[7px] font-mono text-white/40">{rumor.currentClub}</span>
                  </div>

                  <TrendingUp size={14} className="text-white/20" />

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 border border-white/40 flex items-center justify-center p-2 bg-white/5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                      <img src={`/acces/${rumor.targetLogo}`} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-[7px] font-mono text-white font-bold">{rumor.targetClub}</span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 space-y-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[8px] tracking-[0.3em] text-white/40 uppercase mb-1">Presupuesto_Estimado</p>
                  <span className="text-2xl font-[family-name:var(--font-bebas)] text-white">{rumor.offeredValue}</span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center text-[8px] font-mono text-white/50 uppercase">
                    <span>Confidence_Source</span>
                    <span className="text-white">{rumor.sourceConfidence}%</span>
                  </div>
                  <div className="h-0.5 w-full bg-white/10 overflow-hidden">
                    <div 
                      className="h-full bg-white transition-all duration-[2000ms] ease-out shadow-[0_0_10px_rgba(255,255,255,0.5)]" 
                      style={{ width: `${rumor.sourceConfidence}%` }} 
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}