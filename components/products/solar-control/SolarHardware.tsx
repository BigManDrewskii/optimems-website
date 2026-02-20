"use client"
import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"


/**
 * SolarHardware - Hardware overview section
 *
 * Lean, concentrated layout: header → description → key features → specs + operating range.
 */
export function SolarHardware() {
  const t = useTranslations('solarControlPage.hardwareOverview')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const keyFeatures = t.raw('keyFeatures.features') as { title: string; description: string }[]
  const technicalSpecs = t.raw('technicalSpecs.specs') as string[]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight ${isGreek ? 'greek-heading' : ''}`}>
            <span className="text-foreground">{t("title")}</span>{' '}
            <span className="text-primary">{t("titleHighlight")}</span>
          </h2>

          <p className={`text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Description — inline, no card wrapper */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-base md:text-lg leading-relaxed text-muted-foreground max-w-4xl mx-auto text-center mb-12 ${isGreek ? 'greek-text' : ''}`}
        >
          {t("description")}
        </motion.p>

        {/* Key Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className={`text-xl md:text-2xl font-bold mb-8 text-center ${isGreek ? 'greek-heading' : ''}`}>
            {t("keyFeatures.title")}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {keyFeatures.map((feature) => (
              <div
                key={feature.title}
                className="border border-border/30 rounded-xl bg-card/5 p-5 text-center"
              >
                <h4 className={`text-sm font-semibold mb-1.5 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                  {feature.title}
                </h4>
                <p className={`text-xs text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technical Specs + Operating Range — side by side */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className={`text-xl md:text-2xl font-bold mb-6 text-center ${isGreek ? 'greek-heading' : ''}`}>
            {t("technicalSpecs.title")}
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {technicalSpecs.map((spec) => (
              <span
                key={spec}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm border border-border/30 bg-card/5 text-foreground/80 ${isGreek ? 'greek-text' : ''}`}
              >
                {spec}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
