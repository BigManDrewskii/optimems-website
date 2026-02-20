"use client"

import { motion } from "framer-motion"
import { CustomPrimaryButton } from "@/components/shared"
import { Video } from "@/components/shared/Video"
import { getVideoSrc } from "@/lib/assets"
import { useTranslations, useLocale } from "next-intl"
import { useTheme } from "next-themes"
import { Link } from "@/i18n/navigation"
import { cn } from "@/lib/utils"
import { useState, useEffect, useMemo } from "react"

export function ContactCTA() {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const videoSources = useMemo(() => {
    if (!mounted) return undefined
    const videoData = getVideoSrc("ctaHero", resolvedTheme === "light")
    if (!videoData?.mp4) return undefined
    return { mp4: videoData.mp4 }
  }, [mounted, resolvedTheme])

  const isDark = mounted && resolvedTheme === "dark"

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <div className="max-w-6xl mx-auto">
          {/* CTA Card with video background */}
          <div className="relative rounded-2xl overflow-hidden border border-border">
            {/* Video Background */}
            <div className={cn(
              "absolute inset-0",
              isDark ? "opacity-[0.44]" : "opacity-[0.68]"
            )}>
              {mounted && videoSources && (
                <Video
                  src=""
                  sources={videoSources}
                  autoplay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  loading="lazy"
                  className="w-full h-full"
                  title="CTA background"
                />
              )}
            </div>

            {/* Overlay for readability */}
            <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]" />

            {/* Content */}
            <div className="relative z-10 p-11 md:p-16">
              <div className="flex flex-col gap-11 text-center">
                {/* Headline and Description */}
                <div className="flex flex-col gap-6">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground",
                      isGreek && "greek-heading"
                    )}
                  >
                    {t('dashboardCTA.headline')}
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={cn(
                      "text-lg md:text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto",
                      isGreek && "greek-text"
                    )}
                  >
                    {t('dashboardCTA.subheadline')}
                  </motion.p>
                </div>

                {/* CTA Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <CustomPrimaryButton
                      href={t('dashboardCTA.primaryCTA.href')}
                      label={t('dashboardCTA.primaryCTA.label')}
                      className="px-8 py-3.5 rounded-full"
                    />
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center px-8 py-3.5 rounded-full font-medium text-muted-foreground hover:text-foreground border border-border/30 hover:border-border/50 transition-all duration-300"
                    >
                      {t('dashboardCTA.secondaryCTA.label')}
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
