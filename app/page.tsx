import { Navbar } from "@/components/navbar"
import { HeroBanner } from "@/components/hero-banner"

import { TournamentInfo } from "@/components/tournament-info"
import { TeamsSection } from "@/components/teams-section"

import { Top8Section } from "@/components/top8-section"
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

      {/* Teams Section */}
      <AnimatedSection animation="fade-up">
        <TeamsSection />
      </AnimatedSection>





      {/* Top 8 Section */}
      <AnimatedSection animation="fade-up">
        <Top8Section />
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
