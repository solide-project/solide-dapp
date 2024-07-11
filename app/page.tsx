import { ContributionCTA } from "@/components/homepage/contribution-cta"
import { FeatureSection } from "@/components/homepage/features"
import { Hero } from "@/components/homepage/hero"
import { InformationTab } from "@/components/homepage/information-tab"
import { OrbitingCirclesSupport } from "@/components/homepage/orbiting-circles-support"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <InformationTab className="container" />
      <FeatureSection className="container py-32" />
      <OrbitingCirclesSupport />

      <div className="container my-14">
        <ContributionCTA className="border" />
      </div>
    </main>
  )
}
