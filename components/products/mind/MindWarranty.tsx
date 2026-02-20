"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { BaseCard } from "@/components/shared/BaseCard"
import { Check } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

/**
 * MindWarranty - Warranty section with logo animation
 *
 * 2-column layout matching the landing page WarrantyCard:
 * Left: headline + equipment text + benefits checklist
 * Right: Optimems logo animation video (theme-aware)
 */
export function MindWarranty() {
  const t = useTranslations('mindPage.warranty')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const benefits = t.raw('benefits') as string[]

  const videoSource = mounted && resolvedTheme === 'light'
    ? '/videos/optimems-logo-animation-black-logo.webm'
    : '/videos/optimems-logo-animation.webm'

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group"
        >
          <BaseCard
            variant="standard"
            rounded="2xl"
            hover={true}
            overflow={true}
          >
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-stretch">
              {/* Left: Text Content */}
              <div className="p-6 md:p-8 order-2 md:order-1 flex flex-col justify-center">
                <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors ${isGreek ? 'greek-heading' : ''}`}>
                  {t('headline')}
                </h2>

                <p className={`text-sm text-muted-foreground leading-relaxed mb-6 ${isGreek ? 'greek-text' : ''}`}>
                  {t('equipment')}
                </p>

                <ul className="space-y-3">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className={`text-sm md:text-base text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Logo Animation Video */}
              <div className="relative order-1 md:order-2 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center min-h-[200px] md:min-h-0">
                {mounted && (
                  <video
                    key={resolvedTheme}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-contain absolute inset-0 m-auto"
                  >
                    <source src={videoSource} type="video/webm" />
                  </video>
                )}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="absolute inset-0 pointer-events-none"
                />

                <div className="hidden md:block absolute inset-0 border-l border-border/10 pointer-events-none" />
              </div>
            </div>
          </BaseCard>
        </motion.div>
      </div>
    </section>
  )
}
