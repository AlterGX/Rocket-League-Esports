"use client"

import { useEffect, useState, useRef, useCallback } from "react"
import { offers } from "@/components/offers-section" // Import the offers data
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Helper functions for price parsing and formatting
const parsePrice = (priceStr: string): number => {
  const cleaned = priceStr.replace('€', '').replace(/\./g, '').replace('M', '');
  return parseFloat(cleaned) * 1_000_000;
};

const formatPriceDisplay = (priceNum: number): string => {
  const millions = Math.floor(priceNum / 1_000_000);
  const formattedMillions = millions.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
  return `€${formattedMillions}M `;
};

export function MarketOffersSection() {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0)
  const [animatedPrice, setAnimatedPrice] = useState(0)
  const [offerStatus, setOfferStatus] = useState<'bidding' | 'closed'>('bidding')
  const animationIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const nextPlayerTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const currentOffer = offers[currentOfferIndex]
  const targetPrice = parsePrice(currentOffer.price)

  const startAnimation = useCallback(() => {
    // Clear any previous animations
    if (animationIntervalRef.current) clearInterval(animationIntervalRef.current)
    if (nextPlayerTimeoutRef.current) clearTimeout(nextPlayerTimeoutRef.current)

    setOfferStatus('bidding')
    // Start animated price at 70% of the target price
    let currentAnimatedValue = Math.floor(targetPrice * 0.7);
    setAnimatedPrice(currentAnimatedValue);

    const increment = Math.max(1_000_000, Math.floor(targetPrice / 100)); // Increment by 1M or 1% of target
    const durationPerIncrement = 40; // ms

    animationIntervalRef.current = setInterval(() => {
      currentAnimatedValue += increment;
      if (currentAnimatedValue >= targetPrice) {
        currentAnimatedValue = targetPrice;
        setAnimatedPrice(targetPrice);
        clearInterval(animationIntervalRef.current!);
        setOfferStatus('closed');

        nextPlayerTimeoutRef.current = setTimeout(() => {
          setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length);
        }, 3000); // Wait 3 seconds before moving to next player
      } else {
        setAnimatedPrice(currentAnimatedValue);
      }
    }, durationPerIncrement);
  }, [currentOfferIndex, targetPrice]);

  useEffect(() => {
    startAnimation();

    return () => {
      if (animationIntervalRef.current) clearInterval(animationIntervalRef.current);
      if (nextPlayerTimeoutRef.current) clearTimeout(nextPlayerTimeoutRef.current);
    };
  }, [startAnimation]);

  return (
    <section id="current-market" className="py-24 lg:py-48 px-6 lg:px-12 bg-background relative overflow-hidden border-y border-border/10">
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
            <h2 className="text-6xl sm:text-7xl lg:text-9xl font-[family-name:var(--font-bebas)] tracking-tighter text-foreground leading-[0.8] animate-reveal-up">
              MERCADO <br />
              <span className="text-foreground/30 italic">EN VIVO</span>
            </h2>
          </div>
          <div className="max-w-sm">
            <p className="text-sm text-muted-foreground leading-relaxed border-l border-border/20 pl-6 uppercase tracking-wider font-light">
              Observa las ofertas en tiempo real y los traspasos confirmados de los jugadores más codiciados.
            </p>
          </div>
        </div>

        {/* Live Offer Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Player Card (Left) */}
          <div className="group relative border border-border/10 bg-secondary/5 p-10 overflow-hidden">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 border border-border/20 bg-background flex items-center justify-center p-4 shadow-xl">
                <img src={`/acces/${currentOffer.clubLogo}`} alt={`${currentOffer.club} logo`} className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.4em] font-mono text-muted-foreground uppercase">{currentOffer.club}</span>
                <h3 className="text-4xl font-[family-name:var(--font-bebas)] tracking-wide text-foreground leading-none">
                  {currentOffer.player.split('|')[1]?.trim().toUpperCase() || currentOffer.player.toUpperCase()}
                </h3>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-border/10 pb-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground">Posición</span>
                <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">{currentOffer.position}</span>
              </div>
              <div className="flex justify-between border-b border-border/10 pb-2">
                <span className="text-[11px] font-mono uppercase text-muted-foreground">Dorsal</span>
                <span className="text-lg font-[family-name:var(--font-bebas)] text-foreground">{currentOffer.dorsal}</span>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-border/10">
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-2">Valor de Mercado Actual</p>
              <span className="text-5xl font-[family-name:var(--font-bebas)] text-foreground">
                {formatPriceDisplay(parsePrice(currentOffer.price))}
              </span>

              {/* Transfer Probability Index */}
              <div className="mt-8 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] tracking-[0.4em] text-muted-foreground uppercase font-mono">Probabilidad_Acuerdo</span>
                  <span className={cn("text-xs font-mono font-bold", offerStatus === 'closed' ? "text-green-500" : "text-blue-500")}>
                    {offerStatus === 'closed' ? '100%' : `${Math.floor((animatedPrice / targetPrice) * 100)}%`}
                  </span>
                </div>
                <div className="h-1 w-full bg-foreground/5 rounded-full overflow-hidden border border-border/5">
                  <div 
                    className={cn(
                      "h-full transition-all duration-500 ease-out",
                      offerStatus === 'closed' ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.3)]" : "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
                    )}
                    style={{ width: `${(animatedPrice / targetPrice) * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Offer Details (Right) */}
          <div className="relative border border-border/10 bg-secondary/5 p-10 overflow-hidden h-full flex flex-col justify-between">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
              style={{ 
                backgroundImage: `radial-gradient(circle at 100% 0%, rgba(255,255,255,0.03) 0%, transparent 70%)` 
              }} 
            />

            <div className="flex-1 flex flex-col justify-center items-center text-center py-2">
              {/* Escudo Gigante de la Puja Principal */}
              <div className="relative mb-8 group/bid">
                <div className="absolute inset-0 bg-blue-500/10 blur-[60px] rounded-full scale-150 opacity-50 group-hover/bid:opacity-100 transition-opacity" />
                <img 
                  src={`/acces/${currentOffer.offeringLogo}`} 
                  alt={currentOffer.offeringTeam} 
                  className="w-32 h-32 lg:w-40 lg:h-40 object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-transform duration-700 group-hover/bid:scale-105"
                />
              </div>

              {offerStatus === 'bidding' ? (
                <>
                  <p className="text-[11px] tracking-[0.4em] text-muted-foreground uppercase mb-2">Oferta Actual de {currentOffer.offeringTeam.toUpperCase()}</p>
                  <span className="text-7xl lg:text-9xl font-[family-name:var(--font-bebas)] text-blue-500 animate-pulse-fast leading-none tracking-tight">
                    {formatPriceDisplay(animatedPrice)}
                  </span>
                </>
              ) : (
                <>
                  <p className="text-[11px] tracking-[0.4em] text-green-500 uppercase mb-4 animate-reveal-up">¡TRATO CERRADO!</p>
                  <span className="text-7xl lg:text-9xl font-[family-name:var(--font-bebas)] text-green-500 animate-reveal-up stagger-1 leading-none tracking-tight">
                    {formatPriceDisplay(targetPrice)}
                  </span>
                </>
              )}
            </div>

            {/* Secondary Bids - Diseño más compacto y técnico */}
            <div className="mt-8 mb-6 space-y-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[8px] tracking-[0.4em] text-muted-foreground uppercase font-mono opacity-50">Historial_Pujas</span>
                <div className="flex-1 h-px bg-border/10" />
              </div>
              <div className="grid grid-cols-1 gap-1">
                {currentOffer.biddingHistory?.map((bid, idx) => {
                  const bidValue = parsePrice(bid.bidAmount);
                  const isSurpassed = animatedPrice > bidValue;
                  return (
                    <div 
                      key={idx} 
                      className={cn(
                        "flex items-center justify-between px-4 py-1.5 border transition-all duration-700 backdrop-blur-sm",
                        isSurpassed ? "border-red-500/10 bg-red-500/5 opacity-10 scale-[0.98]" : "border-border/10 bg-white/[0.02]"
                      )}
                    >
                      <div className="flex items-center gap-2">
                        <img src={`/acces/${bid.teamLogo}`} alt="" className={cn("w-5 h-5 object-contain", isSurpassed && "grayscale opacity-50")} />
                        <span className={cn("text-[10px] font-mono uppercase tracking-widest", isSurpassed ? "text-red-500/30" : "text-muted-foreground")}>{bid.teamName}</span>
                      </div>
                      <span className={cn("text-sm font-[family-name:var(--font-bebas)]", isSurpassed ? "text-red-500" : "text-foreground")}>{bid.bidAmount}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto pt-8 border-t border-border/10 flex items-center justify-end">
              <button 
                onClick={() => setCurrentOfferIndex((prevIndex) => (prevIndex + 1) % offers.length)}
                className="group/btn inline-flex items-center gap-3 text-[10px] tracking-[0.3em] text-muted-foreground hover:text-foreground transition-all duration-300"
              >
                SIGUIENTE OFERTA <ArrowRight size={14} strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
