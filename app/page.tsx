import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"

import { TournamentInfo } from "@/components/tournament-info"
import { TeamsSection } from "@/components/teams-section"
import { MarketOffersSection } from "@/components/market-offers-section"

import { Top8Section } from "@/components/top8-section"
import { ForwardsSection } from "@/components/forwards-section"
import { MidfieldersSection } from "@/components/midfielders-section"
import { DefendersSection } from "@/components/defenders-section"
import { AwardsSection } from "@/components/awards-section"


import { StadiumsSection } from "@/components/stadiums-section"
import { MerchandiseSection } from "@/components/merchandise-section"

import { Footer } from "@/components/footer"
import { AnimatedSection } from "@/components/animated-section"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <HeroBanner />



      {/* Tournament Info */}
      <AnimatedSection animation="fade-up">
        <TournamentInfo />
      </AnimatedSection>

      {/* AI Core Analysis Section */}
      <AnimatedSection animation="fade-up">
        <AIInsightsSection />
      </AnimatedSection>

      {/* Teams Section */}
      <AnimatedSection animation="fade-up">
        <TeamsSection />
      </AnimatedSection>

      {/* Market Offers Section */}
      <AnimatedSection animation="fade-up">
        <MarketOffersSection />
      </AnimatedSection>





      {/* Top 8 Section */}
      <AnimatedSection animation="fade-up">
        <Top8Section />
      </AnimatedSection>

      {/* FACE TO FACE Title */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
          <span className="text-[180px] font-[family-name:var(--font-bebas)] tracking-tighter whitespace-nowrap select-none">
            VS VS VS VS VS VS VS VS VS VS
          </span>
        </div>
        <div className="relative text-center px-6">
          <div className="inline-flex items-center gap-4 mb-6">
            <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
            <span className="text-[10px] tracking-[0.5em] text-muted-foreground uppercase font-mono">TECHNICAL_COMPARISON</span>
            <div className="w-2 h-2 rounded-full bg-foreground/40 animate-pulse" />
          </div>
          <h2 className="text-7xl sm:text-8xl lg:text-9xl font-[family-name:var(--font-bebas)] tracking-tighter text-foreground leading-none">
            FACE <span className="text-foreground/20">TO</span> FACE
          </h2>
          <p className="mt-6 text-[10px] sm:text-xs text-muted-foreground max-w-2xl mx-auto tracking-[0.4em] uppercase opacity-60">
            Análisis posicional detallado y métricas de rendimiento comparadas.
          </p>
        </div>
      </div>


      {/* Forwards Section */}
      <AnimatedSection animation="fade-up">
        <ForwardsSection />
      </AnimatedSection>

      {/* Midfielders Section */}
      <AnimatedSection animation="fade-up">
        <MidfieldersSection />
      </AnimatedSection>

      {/* Defenders Section */}
      <AnimatedSection animation="fade-up">
        <DefendersSection />
      </AnimatedSection>


      {/* Awards Section */}
      <AnimatedSection animation="fade-up">
        <AwardsSection />
      </AnimatedSection>


      {/* Stadiums Section */}
      <AnimatedSection animation="fade-up">
        <StadiumsSection />
      </AnimatedSection>



      {/* Merchandise Section - Desactivada por ahora */}
      {/* <AnimatedSection animation="fade-up">
        <MerchandiseSection />
      </AnimatedSection> */}

<Footer />
    </main>
  )
}
