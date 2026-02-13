"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { useTranslations, useLocale } from "next-intl"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

export function CEOMessageSection() {
  const t = useTranslations('aboutUsPage.ceo')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // CEO profile image based on theme with SSR safety
  const ceoImage = mounted && resolvedTheme === 'light'
    ? '/images/sections/ceo-profile-img-light.jpg'
    : '/images/sections/ceo-profile-img-dark.jpg'

  return (
    <ProductPageSection
      spacing="standard"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        {/* Heading Section */}
        <div className="mb-12 md:mb-16">
          <SectionHeader
            title={t('title')}
            description={t('subtitle')}
            align="left"
            size="large"
          />
        </div>

        {/* Content Section - Two Columns */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 md:px-0 lg:px-16">
          {/* Avatar - Left */}
          <div className="flex-shrink-0">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-2xl overflow-hidden border-2 border-primary shadow-lg">
              <Image
                src={ceoImage}
                alt={t('name')}
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content - Right */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Quote */}
            <blockquote>
              <p className={`text-base md:text-lg text-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                {t('quote')}
              </p>
            </blockquote>

            {/* Attribution */}
            <div className="flex flex-col gap-1">
              <p className={`text-lg font-semibold text-foreground ${isGreek ? 'greek-text' : ''}`}>
                {t('name')}
              </p>
              <p className={`text-sm text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                {t('role')}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </ProductPageSection>
  )
}
