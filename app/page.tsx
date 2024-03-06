import { ContributionCTA } from "@/components/main/client/main/contribution-cta"
import { FeatureSection } from "@/components/main/client/main/features"
import { GPT } from "@/components/main/client/main/gpt"
import { Hero } from "@/components/main/client/main/hero"
import { InformationTab } from "@/components/main/client/main/information-tab"
import { Support } from "@/components/main/client/main/support"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container">
        <GPT />
      </div>

      <InformationTab className="container" />
      <FeatureSection className="container py-32" />
      <Support className="container" />
      <div className="container my-14">
        <ContributionCTA className="border" />
      </div>
    </main>
  )
}
