"use client"
import { motion } from "framer-motion"
import { CheckCircle2, TrendingUp, Cpu, BarChart3, Activity, FileText } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"

/**
 * SolarInsights - Insights Add-On section
 *
 * Displays advanced analytics features and differentiator in compact stacked layout.
 */
export function SolarInsights() {
  const t = useTranslations('solarControlPage.insightsAddOn')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const analyticsFeatures = t.raw('features') as string[]

  const dataLoggerStates = t.raw('dataLoggerStates') as string[]

  const continuityBenefits = t.raw('continuityBenefits') as string[]

  const featureIcons = [
    TrendingUp,
    Cpu,
    BarChart3,
    Activity,
    FileText,
  ]

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section 1: Compact Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className={`text-2xl md:text-3xl font-bold mb-4 leading-tight ${isGreek ? 'greek-heading' : ''}`}>
            {t('headline')}
          </h2>
          <p className={`text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
            {t('introduction')}
          </p>
        </motion.div>

        {/* Section 2: Compact Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3 className={`text-xl md:text-2xl font-semibold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('subheadline')}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {analyticsFeatures.slice(0, 4).map((feature, idx) => {
              const Icon = featureIcons[idx]
              return (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.15 + (idx * 0.1) }}
                  className="group"
                >
                  <div className="h-full p-4 rounded-xl bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/15 transition-colors">
                        <Icon className="w-4.5 h-4.5 text-primary" />
                      </div>
                      <p className={`text-sm font-medium text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                        {feature}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Section 3: Compact Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-gradient-to-br from-primary/8 via-primary/4 to-background border border-border/40 rounded-2xl p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-4">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {t('differentiatorTitle')}
                </h3>
              </div>

              <div className="text-center mb-5">
                <p className={`text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {t('differentiatorIntro')}
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-5">
                {dataLoggerStates.map((state, idx) => (
                  <motion.span
                    key={state}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 + (idx * 0.06) }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/30 border border-border/40"
                  >
                    <span className="w-1 h-1 rounded-full bg-muted-foreground animate-pulse" />
                    <span className={`text-xs font-medium text-foreground ${isGreek ? 'greek-text' : ''}`}>
                      {state}
                    </span>
                  </motion.span>
                ))}
              </div>

              <div className="text-center mb-6">
                <p className={`text-base font-medium text-foreground ${isGreek ? 'greek-text' : ''}`}>
                  {t('differentiatorConclusion')}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-6 border-t border-border/30">
                {continuityBenefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.35 + (idx * 0.08) }}
                    className="flex flex-col items-center gap-2 text-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-medium text-foreground ${isGreek ? 'greek-text' : ''}`}>
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
