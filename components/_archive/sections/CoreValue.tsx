"use client"

import { AnimatedSection } from "@/components/shared"
import { useTranslations } from "next-intl"

export function CoreValue() {
  const t = useTranslations()

  return (
    <AnimatedSection animation="fadeInUp" className="py-24 border-b border-dashed border-foreground/24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-center max-w-4xl mx-auto leading-relaxed text-foreground hover:text-primary transition-colors duration-300 cursor-default break-words hyphens-auto">
          {t("coreValueStatement.text")}
        </p>
      </div>
    </AnimatedSection>
  )
}
