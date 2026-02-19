"use client"
import { AppLayout } from "@/app/app-layout"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { MarqueeSection } from "@/components/shared/MarqueeSection"
import { socialProof } from "@/data/landing-page"

// Critical above-fold sections loaded statically
import { ConsultHero } from "@/components/products/consult/ConsultHero"
import { ConsultServices } from "@/components/products/consult/ConsultServices"
import { ConsultTechnology } from "@/components/products/consult/ConsultTechnology"

// Below-fold sections loaded dynamically to reduce initial bundle
const ConsultProcess = dynamic(() => import("@/components/products/consult/ConsultProcess").then(m => ({ default: m.ConsultProcess })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(m => ({ default: m.Testimonials })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})
const ConsultFAQ = dynamic(() => import("@/components/products/consult/ConsultFAQ").then(m => ({ default: m.ConsultFAQ })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const ConsultCTA = dynamic(() => import("@/components/products/consult/ConsultCTA").then(m => ({ default: m.ConsultCTA })), {
  loading: () => <Skeleton className="h-[300px] w-full" />,
  ssr: true
})

export function ConsultContent() {
  return (
    <AppLayout>
      <main className="min-h-screen">
        {/* Section 1: Hero */}
        <ConsultHero />
        <MarqueeSection
          items={socialProof.logos}
          duration={20}
          pauseOnHover={true}
        />

        {/* Section 2: Services Grid */}
        <ConsultServices />

        {/* Section 4: Technology Showcase */}
        <ConsultTechnology />

        {/* Section 5: Process Workflow */}
        <ConsultProcess />

        {/* Section 6: Testimonials (from landing page) */}
        <Testimonials />

        {/* Section 7: FAQ */}
        <ConsultFAQ />

        {/* Section 8: CTA */}
        <ConsultCTA />
      </main>
    </AppLayout>
  )
}