"use client"

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

  const ceoImage = mounted && resolvedTheme === 'light'
    ? '/images/sections/ceo-profile-img-light.jpg'
    : '/images/sections/ceo-profile-img-dark.jpg'

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Label */}
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            {t('subtitle')}
          </p>

          {/* 2-column: quote left, photo right */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-center">
            {/* Quote + Attribution */}
            <div className="flex-1 order-2 md:order-1">
              <h2 className={`text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight ${isGreek ? 'greek-heading' : ''}`}>
                {t('title')}
              </h2>

              <blockquote className="mb-6">
                <p className={`text-base text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                  &ldquo;{t('quote')}&rdquo;
                </p>
              </blockquote>

              <div>
                <p className={`text-base font-semibold text-foreground ${isGreek ? 'greek-text' : ''}`}>
                  {t('name')}
                </p>
                <p className={`text-sm text-primary ${isGreek ? 'greek-text' : ''}`}>
                  {t('role')}
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 order-1 md:order-2">
              <div className="w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 rounded-2xl overflow-hidden border border-border/50 shadow-md">
                <Image
                  src={ceoImage}
                  alt={t('name')}
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
