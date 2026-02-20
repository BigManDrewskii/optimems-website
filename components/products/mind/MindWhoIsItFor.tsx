"use client"

import { useTranslations, useLocale } from "next-intl"
import { VideoCard } from "@/components/shared/Card/VideoCard"
import { motion } from "framer-motion"

const VIDEO_KEYS = {
  households: "homeOwners",
  commercial: "commercialBuilding",
  aggregators: "aggregators",
  communities: "gridOperators",
} as const

/**
 * MindWhoIsItFor - Who Benefits section
 *
 * Displays four audience video cards matching the SolarWhoBenefits pattern.
 * Home Owners, C&I Building Owners, Aggregators, Energy Community Managers.
 */
export function MindWhoIsItFor() {
  const t = useTranslations('mindPage.whoIsItFor')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const cards = [
    {
      key: 'households' as const,
      videoKey: VIDEO_KEYS.households,
    },
    {
      key: 'commercial' as const,
      videoKey: VIDEO_KEYS.commercial,
    },
    {
      key: 'aggregators' as const,
      videoKey: VIDEO_KEYS.aggregators,
    },
    {
      key: 'communities' as const,
      videoKey: VIDEO_KEYS.communities,
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                title={t(`${card.key}.title`)}
                tagline={t(`${card.key}.headline`)}
                description={t(`${card.key}.description`)}
                features={t.raw(`${card.key}.benefits`) as string[]}
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
