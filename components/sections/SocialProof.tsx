"use client"

import { MarqueeSection } from "@/components/shared"
import { socialProof } from "@/data/landing-page"
import { useLocale, useTranslations } from "next-intl"

export function SocialProof() {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"

  return (
    <section className="py-4 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        {/* Label: uppercase, low opacity, left-aligned on desktop, centered on mobile */}
        <p className={`text-center md:text-left text-foreground/40 text-xs uppercase tracking-widest mb-8 ${isGreek ? "greek-text" : ""}`}>
          {t("socialProof.sectionLabel")}
        </p>

        <MarqueeSection
          items={socialProof.logos}
          duration={20}
          pauseOnHover={true}
        />
      </div>
    </section>
  )
}
