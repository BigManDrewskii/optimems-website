"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { GlassCard } from "@/components/shared/GlassCard"
import { Unplug, EyeOff, ShieldAlert, CalendarClock, Workflow, RefreshCcwDot } from "lucide-react"

const PAIN_POINT_ICONS = [Unplug, EyeOff, ShieldAlert, CalendarClock, Workflow, RefreshCcwDot]

/**
 * MindProblem - Problem section showing energy management challenges
 *
 * Displays the complexity of modern energy systems with pain points.
 * Matches the dashed-card style of the SolarProblem "Why +SolarControl" section.
 */
export function MindProblem() {
  const t = useTranslations('mindPage.problem')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const painPoints = t.raw('painPoints') as Array<{ title: string; description: string }>

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center leading-tight ${isGreek ? 'greek-heading' : ''}`}
        >
          {t('headline')}
        </motion.h2>

        {/* Opening + Challenge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center mb-16 max-w-3xl mx-auto space-y-4"
        >
          <p className={`text-lg text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
            {t('opening')}
          </p>
        </motion.div>

        {/* Pain Points Grid — dashed cards with icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {painPoints.map((point, idx) => {
            const Icon = PAIN_POINT_ICONS[idx]
            return (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + (idx * 0.05) }}
              >
                <div className="h-full border border-dashed border-red-500/20 dark:border-red-400/15 rounded-2xl bg-card/5 p-6">
                  {Icon && (
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 dark:bg-red-400/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-500/50 dark:text-red-400/40" />
                    </div>
                  )}
                  <h3 className={`text-base font-semibold mb-2 text-foreground/80 ${isGreek ? 'greek-heading' : ''}`}>
                    {point.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground/70 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {point.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <GlassCard className="p-8 text-center">
            <p className={`text-lg md:text-xl font-semibold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('bottomLine')}
            </p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
