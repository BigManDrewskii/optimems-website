"use client"
import { useTranslations, useLocale } from "next-intl"
import { VideoCard } from "@/components/shared/Card/VideoCard"
import { motion } from "framer-motion"

const VIDEO_KEYS = {
  parkOwners: "resPark",
  aggregators: "aggregators",
  dsosTsos: "gridOperators",
} as const

/**
 * SolarWhoBenefits - Who Benefits section
 *
 * Displays three audience video cards: Park Owners, Aggregators, DSOs & TSOs.
 */
export function SolarWhoBenefits() {
  const t = useTranslations('solarControlPage.whoBenefits')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const cards = [
    {
      videoKey: VIDEO_KEYS.parkOwners,
      title: t('parkOwners.title'),
      tagline: t('parkOwners.headline'),
      description: t('parkOwners.description'),
      features: t.raw('parkOwners.benefits') as string[],
    },
    {
      videoKey: VIDEO_KEYS.aggregators,
      title: t('aggregators.title'),
      tagline: t('aggregators.headline'),
      description: t('aggregators.description'),
      features: t.raw('aggregators.benefits') as string[],
    },
    {
      videoKey: VIDEO_KEYS.dsosTsos,
      title: t('dsosTsos.title'),
      tagline: t('dsosTsos.headline'),
      description: t('dsosTsos.description'),
      features: t.raw('dsosTsos.benefits') as string[],
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center text-foreground ${isGreek ? 'greek-heading' : ''}`}
        >
          {t('headline')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.videoKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <VideoCard
                videoKey={card.videoKey}
                title={card.title}
                tagline={card.tagline}
                description={card.description}
                features={card.features}
                aspectRatio="video"
                showVignette={true}
                isInView={true}
                displayOrder={idx}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
