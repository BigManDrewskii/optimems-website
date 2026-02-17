"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { Info } from "lucide-react"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"

/**
 * SolarAnnouncement - ΔΕΔΔΗΕ regulatory deadline announcement
 *
 * Visually distinct section highlighting the mandatory telemetry/remote control
 * deadline for autoproducers >400 kW (15/09/2026). Uses glass card aesthetic
 * with secondary (red) accent to stand out while staying on-brand.
 */
export function SolarAnnouncement() {
  const t = useTranslations('solarControlPage.announcement')
  const locale = useLocale()
  const isGreek = locale === 'el'

  // ΔΕΔΔΗΕ announcement is only relevant to the Greek audience
  if (!isGreek) return null

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-border/40 bg-card/30 backdrop-blur-sm"
        >
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-secondary/80 to-secondary" />

          <div className="p-6 md:p-8 lg:p-10">
            {/* Top row: badge + deadline */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-secondary/20">
                <Info className="w-3.5 h-3.5 text-secondary" />
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider">
                  {t('badge')}
                </span>
              </div>
              <span className="text-sm font-semibold text-secondary">
                {t('subheadline')}
              </span>
            </div>

            {/* Headline */}
            <h2 className={`text-2xl md:text-3xl font-bold mb-4 text-foreground leading-tight ${isGreek ? 'greek-heading' : ''}`}>
              {t('headline')}
            </h2>

            {/* Body */}
            <p className={`text-base text-muted-foreground mb-4 leading-relaxed max-w-4xl ${isGreek ? 'greek-text' : ''}`}>
              {t('body')}
            </p>

            {/* Details */}
            <p className={`text-base text-foreground mb-5 leading-relaxed max-w-4xl ${isGreek ? 'greek-text' : ''}`}>
              {t('details')}
            </p>

            {/* Warning callout — left-accent style */}
            <div className="border-l-2 border-secondary bg-secondary/5 rounded-r-lg pl-4 pr-4 py-3 mb-5 max-w-4xl">
              <p className={`text-sm text-foreground/80 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('warning')}
              </p>
            </div>

            {/* Affected parties */}
            <p className={`text-sm text-muted-foreground leading-relaxed mb-8 max-w-4xl ${isGreek ? 'greek-text' : ''}`}>
              {t('affected')}
            </p>

            {/* CTA */}
            <Button asChild variant="primary" size="lg">
              <Link href="/contact">
                {t('cta')}
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
