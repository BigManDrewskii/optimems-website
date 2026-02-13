"use client"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { useEffect, useState } from "react"

/**
 * VisionMissionSection - Unified two-column layout for Vision and Mission
 *
 * Based on reference design:
 * - Left column: Vision with label, heading, description, and banner image
 * - Right column: Mission with label, heading, statement, details, and highlighted box
 */
export function VisionMissionSection() {
  const t = useTranslations('aboutUsPage')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Banner image based on theme with SSR safety
  const bannerImage = mounted && resolvedTheme === 'light'
    ? '/images/sections/about_mission_light.jpg'
    : '/images/sections/about_mission_dark.jpg'

  return (
    <AnimatedSection>
      <Container>
        <div className="py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* LEFT COLUMN - VISION */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Heading */}
              <h2 className={`text-3xl md:text-4xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
                {t('vision.title')}
              </h2>

              {/* Description */}
              <p className={`text-base md:text-lg text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('vision.description')}
              </p>

              {/* Banner Image */}
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={bannerImage}
                  alt={t('vision.imageAlt')}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* RIGHT COLUMN - MISSION */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Heading */}
              <h2 className={`text-3xl md:text-4xl font-bold ${isGreek ? 'greek-heading' : ''}`}>
                {t('mission.title')}
              </h2>

              {/* Main Statement */}
              <p className={`text-lg font-medium leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('mission.statement')}
              </p>

              {/* Details */}
              <p className={`text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('mission.details')}
              </p>

              {/* Highlight Box - Accelerating the Future */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 p-6 rounded-xl bg-muted/10 border border-primary/20"
              >
                <p className={`text-lg font-semibold text-primary ${isGreek ? 'greek-text' : ''}`}>
                  {t('mission.accelerating')}
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </Container>
    </AnimatedSection>
  )
}
