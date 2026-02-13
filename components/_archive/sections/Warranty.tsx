"use client"

import { motion } from "framer-motion"
import { AnimatedSection, GlassCard, FeatureList } from "@/components/shared"
import { UnicornStudioScene } from "@/components/ui/UnicornStudioScene"
import { useLocale, useTranslations } from "next-intl"
import { warrantyFeatureKeys } from "@/lib/i18n/translation-keys"

export function Warranty() {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"

  const translatedFeatures = warrantyFeatureKeys.map((key) =>
    t(`warranty.features.${key}`)
  )

  return (
    <AnimatedSection animation="fadeInUp" className="py-20">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Warranty Card */}
          <GlassCard className="overflow-hidden p-0 hover:bg-secondary/10 transition-colors duration-200">
            <div className="grid md:grid-cols-2">
              {/* Video Column - Shows first on mobile, second on desktop */}
              <div className="relative order-1 md:order-2 h-auto overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5">
                <UnicornStudioScene
                  jsonFilePath="/animations/optimems-logo-spin.json"
                  fallbackImageDark="/images/fallback/optimems-logo-dark-fallback.jpg"
                  fallbackImageLight="/images/fallback/optimems-logo-light-fallback.jpg"
                  className="absolute inset-0"
                  width="100%"
                  height="100%"
                />

                {/* Motion wrapper for fade-in effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                />

                {/* Decorative border - only on desktop */}
                <div className="hidden md:block absolute inset-0 border-l border-border/10 pointer-events-none" />

                {/* Mobile bottom border */}
                <div className="md:hidden absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-border/30 to-transparent" />
              </div>

              {/* Content Column - Shows second on mobile, first on desktop */}
              <div className="order-2 md:order-1 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                {/* Title */}
                <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 md:mb-6 ${isGreek ? "greek-heading" : ""}`}>
                  {t("warranty.title")}
                </h2>

                {/* Description */}
                <p className={`text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-10 max-w-xl ${isGreek ? "greek-text" : ""}`}>
                  {t("warranty.description")}
                </p>

                {/* Features List */}
                <FeatureList features={translatedFeatures} />
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </AnimatedSection>
  )
}
