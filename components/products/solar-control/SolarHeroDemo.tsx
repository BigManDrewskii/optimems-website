"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { useTheme } from "next-themes"
import { CustomPrimaryButton } from "@/components/shared"
import { Video } from "@/components/shared/Video"
import { getVideoSrc } from "@/lib/assets"
import { Link } from "@/i18n/navigation"
import { useState, useEffect, useMemo } from "react"

/**
 * Helper function to format subheadline with "Trusted by X" on its own line
 * First part: "Trusted by" + highlighted phrase (large, primary color)
 * Second part: Rest of the text (normal size, muted color)
 */
function formatSubheadline(text: string, locale: string) {
  if (locale === 'el') {
    // Greek: Split and format "Εμπιστεύεται από 1.200+ έργα ΑΠΕ"
    const parts = text.split(/(1\.200\+ έργα ΑΠΕ\.)/)
    const highlightedPhrase = '<span class="text-primary font-semibold text-xl">1.200+ έργα ΑΠΕ</span>'
    return `<div class="text-center mb-2">Εμπιστεύεται από ${highlightedPhrase}</div><div>${parts[2] || ''}</div>`
  } else {
    // English: Split and format "Trusted by 1,200+ RES plants"
    const parts = text.split(/(1,200\+ RES plants\.)/)
    const highlightedPhrase = '<span class="text-primary font-semibold text-xl">1,200+ RES plants</span>'
    return `<div class="text-center mb-2">Trusted by ${highlightedPhrase}</div><div>${parts[2] || ''}</div>`
  }
}

/**
 * SolarHeroDemo - Hero section with video background
 *
 * Center-aligned hero with trust badge, bold headline, and CTAs.
 * Video background with bottom gradient overlay matching About Us style.
 * Uses centralized video registry (data/videos.ts) for theme-aware MP4 sources.
 */
export function SolarHeroDemo() {
  const t = useTranslations('solarControlPage.hero')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Delay video loading to prioritize LCP (poster image loads first)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldLoadVideo(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Theme-aware MP4-only sources from centralized video registry
  const heroVideoSources = useMemo(() => {
    if (!mounted) return undefined
    const videoData = getVideoSrc("solarControlHero", resolvedTheme === "light")
    if (!videoData?.mp4) return undefined
    return { mp4: videoData.mp4 }
  }, [mounted, resolvedTheme])

  return (
    <section className="relative min-h-[80vh] md:min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 opacity-60">
        {mounted && heroVideoSources && (
          <Video
            src=""
            sources={heroVideoSources}
            autoplay={shouldLoadVideo}
            muted
            loop
            playsInline
            preload={shouldLoadVideo ? "metadata" : "none"}
            loading="lazy"
            className="w-full h-full"
            title="Solar control hero video background"
          />
        )}
      </div>

      {/* Bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24 z-10">
        <div className="text-center">
          {/* Optimems Solar Control Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
            className="mb-8"
          >
            <Image
              src={mounted && resolvedTheme === 'dark' ? '/images/logos/optimems-solar-control.svg' : '/images/logos/optimems-solar-control-light.svg'}
              alt="Optimems Solar Control"
              width={200}
              height={48}
              className="h-8 md:h-10 lg:h-12 w-auto mx-auto"
              unoptimized
            />
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.08] tracking-tight text-foreground ${isGreek ? 'greek-heading' : ''}`}
          >
            {t('headline')}
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-foreground mb-4 max-w-4xl mx-auto leading-relaxed"
          >
            {t('tagline')}
          </motion.p>

          {/* Subheadline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: formatSubheadline(t('subheadline'), locale)
            }}
          />

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <CustomPrimaryButton
              href="/demo"
              label={t('primaryCTA')}
              className="px-8 py-3.5 rounded-full"
            />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/50 transition-all duration-300"
            >
              {t('secondaryCTA')}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
