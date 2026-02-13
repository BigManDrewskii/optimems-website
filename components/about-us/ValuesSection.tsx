"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { Button } from "@/components/ui/button"
import { Link } from "@/i18n/navigation"
import { useTranslations, useLocale } from "next-intl"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function ValuesSection() {
  const t = useTranslations('aboutUsPage.values')
  const tWork = useTranslations('aboutUsPage.workWithUs')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Background images with SSR safety
  const valuesBgImage = mounted && resolvedTheme === 'light'
    ? '/images/sections/values-card-bg-light.jpg'
    : '/images/sections/values-card-bg-dark.jpg'

  const ctaBgImage = mounted && resolvedTheme === 'light'
    ? '/images/sections/cta-card-about-us-banner-light.jpg'
    : '/images/sections/cta-card-about-us-banner-dark.jpg'

  const values = [
    {
      title: t('innovation.title'),
      description: t('innovation.description')
    },
    {
      title: t('sustainability.title'),
      description: t('sustainability.description')
    },
    {
      title: t('holistic.title'),
      description: t('holistic.description')
    }
  ]

  return (
    <div className="relative">
      <ProductPageSection
        header={{
          title: t('title'),
          align: "center",
          size: "standard"
        }}
        spacing="standard"
      >
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Values Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border shadow-lg rounded-xl md:rounded-2xl overflow-hidden"
          >
            <div
              className="relative"
              style={{
                backgroundImage: `url(${valuesBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                minHeight: '400px'
              }}
            >
              {/* Theme-aware solid overlay for text contrast */}
              <div className="absolute inset-0 bg-background/75" />

              {/* Content */}
              <div className="relative z-10 px-4 md:px-8 lg:px-16 py-16 md:py-24">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex flex-col gap-6"
                    >
                      <h3 className={`text-2xl md:text-xl font-semibold leading-8 tracking-wide text-foreground ${isGreek ? 'greek-heading' : ''}`}>
                        {value.title}
                      </h3>
                      <p className={`text-sm md:text-base leading-relaxed text-muted-foreground ${isGreek ? 'greek-text' : ''}`}>
                        {value.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Work With Us CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-primary/20 shadow-lg rounded-xl md:rounded-2xl overflow-hidden"
          >
            <div
              className="relative"
              style={{
                backgroundImage: `url(${ctaBgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '350px'
              }}
            >
              {/* Theme-aware solid overlay for text contrast */}
              <div className="absolute inset-0 bg-background/75" />

              <div className="relative z-10 p-12 lg:p-16 text-center flex flex-col items-center justify-center" style={{ minHeight: '350px' }}>
                <motion.h2
                  className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${isGreek ? 'greek-heading' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {tWork('headline')}
                </motion.h2>
                <motion.p
                  className={`text-muted-foreground mb-8 text-lg md:text-xl ${isGreek ? 'greek-text' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {tWork('subline')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button variant="primary" size="lg" asChild className="hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                    <Link href="/careers">
                      {tWork('cta')}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </ProductPageSection>
    </div>
  )
}
