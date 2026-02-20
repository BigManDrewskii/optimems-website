"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ShieldCheck, Zap, Lock, Cpu, TrendingUp, AlertTriangle } from "lucide-react"

const CHALLENGE_ICONS = [ShieldCheck, Zap, Lock, Cpu, TrendingUp, AlertTriangle]

/**
 * SolarProblem - Problem section with icon-driven dashed cards
 *
 * Displays industry challenges with unique icons per card.
 */
export function SolarProblem() {
  const t = useTranslations('solarControlPage.problem')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const challenges = t.raw('challenges') as Array<{ title: string; description: string }>

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

        {/* Introduction */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto"
        >
          {t('introduction')}
        </motion.p>

        {/* Grid of Challenge Cards with Icons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {challenges.map((challenge, idx) => {
            const Icon = CHALLENGE_ICONS[idx]
            return (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <div className="h-full border border-dashed border-red-500/20 dark:border-red-400/15 rounded-2xl bg-card/5 p-6">
                  {Icon && (
                    <div className="w-10 h-10 rounded-lg bg-red-500/10 dark:bg-red-400/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-red-500/50 dark:text-red-400/40" />
                    </div>
                  )}
                  <h3 className={`text-base font-semibold mb-2 text-foreground/80 ${isGreek ? 'greek-heading' : ''}`}>
                    {challenge.title}
                  </h3>
                  <p className={`text-sm text-muted-foreground/70 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {challenge.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-base text-muted-foreground max-w-4xl mx-auto"
        >
          {t('closing')}
        </motion.p>
      </div>
    </section>
  )
}
