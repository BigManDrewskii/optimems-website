"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"

/**
 * MindTechnology - Technology & Architecture section
 *
 * Wide 2-column layout for hardware/software, compact advantages grid.
 * Prominent "Made in EU" label with border treatment.
 */
export function MindTechnology() {
  const t = useTranslations('mindPage.technology')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const hardwareFeatures = t.raw('hardware.features') as string[]
  const protocols = t.raw('hardware.protocols') as string[]
  const securityFeatures = t.raw('hardware.security') as string[]
  const softwareFeatures = t.raw('software.features') as string[]

  const advantages = [
    { title: t('advantages.modular.title'), description: t('advantages.modular.description') },
    { title: t('advantages.secure.title'), description: t('advantages.secure.description') },
    { title: t('advantages.remote.title'), description: t('advantages.remote.description') },
    { title: t('advantages.compatible.title'), description: t('advantages.compatible.description') },
  ]

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-5 ${isGreek ? 'greek-heading' : ''}`}>
            {t('headline')}
          </h2>

          {/* Proprietary label — prominent template */}
          <div className="inline-flex items-center gap-3 border border-primary/30 rounded-full px-6 py-2.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm md:text-base font-medium tracking-wide text-primary">
              {t('subheadline')}
            </span>
          </div>

          <p className={`text-base text-muted-foreground max-w-3xl mx-auto leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
            {t('introduction')}
          </p>
        </motion.div>

        {/* Hardware + Software — 2 columns */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12"
        >
          {/* Left: Hardware */}
          <div>
            <h3 className={`text-lg font-bold mb-2 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('hardware.headline')}
            </h3>
            <p className={`text-sm text-muted-foreground mb-4 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
              {t('hardware.description')}
            </p>

            <ul className="space-y-1.5 mb-6">
              {hardwareFeatures.map((feature) => (
                <li key={feature} className={`flex items-start gap-2 text-sm text-foreground/80 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Protocols + Security stacked under hardware */}
            <div className="space-y-5">
              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Communication Protocols
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {protocols.map((protocol) => (
                    <span
                      key={protocol}
                      className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-mono bg-muted/40 text-foreground/70 border border-border/30"
                    >
                      {protocol}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
                  Security & Compliance
                </h4>
                <ul className="space-y-1">
                  {securityFeatures.map((feature) => (
                    <li key={feature} className={`flex items-start gap-2 text-sm text-foreground/70 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                      <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Software */}
          <div>
            <h3 className={`text-lg font-bold mb-2 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('software.headline')}
            </h3>
            <ul className="space-y-1.5 mb-8">
              {softwareFeatures.map((feature) => (
                <li key={feature} className={`flex items-start gap-2 text-sm text-foreground/80 leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  <span className="text-primary flex-shrink-0 mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Advantages nested under software column */}
            <h3 className={`text-lg font-bold mb-4 text-foreground ${isGreek ? 'greek-heading' : ''}`}>
              {t('advantages.headline')}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {advantages.map((adv) => (
                <div key={adv.title}>
                  <h4 className={`text-sm font-semibold text-foreground mb-1 ${isGreek ? 'greek-heading' : ''}`}>
                    {adv.title}
                  </h4>
                  <p className={`text-xs text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {adv.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
