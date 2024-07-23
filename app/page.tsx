import React, { lazy, Suspense } from 'react';

// Lazy load components
const Hero = lazy(() => import('@/components/homepage/hero'));
const InformationTab = lazy(() => import('@/components/homepage/information-tab'));
const FeatureSection = lazy(() => import('@/components/homepage/features'));
const OrbitingCirclesSupport = lazy(() => import('@/components/homepage/orbiting-circles-support'));
const ContributionCTA = lazy(() => import('@/components/homepage/contribution-cta'));

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <InformationTab className="container" />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FeatureSection className="container py-32" />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <OrbitingCirclesSupport />
      </Suspense>
      <div className="container my-14">
        <Suspense fallback={<div>Loading...</div>}>
          <ContributionCTA className="border" />
        </Suspense>
      </div>
    </main>
  )
}
