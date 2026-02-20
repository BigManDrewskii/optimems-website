"use client"

import { useTranslations, useLocale } from "next-intl"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { BaseCard } from "@/components/shared/BaseCard"
import { CustomPrimaryButton } from "@/components/shared/CustomPrimaryButton"
import { Shield, HeadphonesIcon, RefreshCw } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import type { LucideIcon } from "lucide-react"

export function WarrantiesContent() {
  const t = useTranslations('warrantiesPage')
  const locale = useLocale()
  const isGreek = locale === 'el'
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const features = t.raw('overview.features') as Record<string, { title: string, description: string }>

  const videoSource = mounted && resolvedTheme === 'light'
    ? '/videos/optimems-logo-animation-black-logo.webm'
    : '/videos/optimems-logo-animation.webm'

  return (
    <main className="min-h-screen pb-24">
      {/* Hero Section — 2-column with logo animation */}
      <div className="pt-28 md:pt-36 lg:pt-44 pb-12 md:pb-16">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <BaseCard
              variant="standard"
              rounded="2xl"
              hover={true}
              overflow={true}
            >
              <div className="grid md:grid-cols-2 gap-0 items-stretch">
                {/* Left: Text */}
                <div className="p-8 md:p-10 lg:p-14 flex flex-col justify-center order-2 md:order-1">
                  <h1 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight ${isGreek ? 'greek-heading' : ''}`}>
                    {t('hero.headline')}
                  </h1>
                  <p className={`text-base md:text-lg text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>
                    {t('hero.subheadline')}
                  </p>
                </div>

                {/* Right: Logo Animation */}
                <div className="relative order-1 md:order-2 overflow-hidden bg-gradient-to-br from-background via-background/95 to-primary/5 flex items-center justify-center min-h-[200px] md:min-h-0">
                  {mounted && (
                    <video
                      key={resolvedTheme}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-contain absolute inset-0 m-auto"
                    >
                      <source src={videoSource} type="video/webm" />
                    </video>
                  )}
                  <div className="hidden md:block absolute inset-0 border-l border-border/10 pointer-events-none" />
                </div>
              </div>
            </BaseCard>
          </motion.div>
        </Container>
      </div>

      {/* Overview Section */}
      <AnimatedSection>
        <Container>
          <div className="max-w-4xl mx-auto py-12 md:py-16">
            <div className="text-center mb-12">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
                {t('overview.title')}
              </h2>
              <p className={`text-lg text-muted-foreground max-w-3xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
                {t('overview.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(features).map(([key, feature]) => {
                const icons: Record<string, LucideIcon> = {
                  hardware: Shield,
                  software: RefreshCw,
                  support: HeadphonesIcon,
                  compliance: Shield
                }
                const Icon = icons[key] || Shield

                return (
                  <BaseCard key={key} variant="standard" scale={true} className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  </BaseCard>
                )
              })}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Product Warranties Section */}
      <AnimatedSection>
        <Container>
          <div className="max-w-6xl mx-auto py-12 md:py-16">
            <SectionHeader
              title="Product Coverage"
              description="Warranty details for each Optimems product"
              align="center"
              size="standard"
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
              <BaseCard variant="standard" scale={true} className="p-8">
                <h3 className={`text-xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
                  {t('solarControl.title')}
                </h3>
                <p className={`text-muted-foreground mb-6 ${isGreek ? 'greek-text' : ''}`}>
                  {t('solarControl.description')}
                </p>
                <ul className="space-y-2.5">
                  {(t.raw('solarControl.coverage') as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-primary flex-shrink-0 mt-0.5 font-medium">*</span>
                      <span className={`text-sm ${isGreek ? 'greek-text' : ''}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </BaseCard>

              <BaseCard variant="standard" scale={true} className="p-8">
                <h3 className={`text-xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
                  {t('mind.title')}
                </h3>
                <p className={`text-muted-foreground mb-6 ${isGreek ? 'greek-text' : ''}`}>
                  {t('mind.description')}
                </p>
                <ul className="space-y-2.5">
                  {(t.raw('mind.coverage') as string[]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-primary flex-shrink-0 mt-0.5 font-medium">*</span>
                      <span className={`text-sm ${isGreek ? 'greek-text' : ''}`}>{item}</span>
                    </li>
                  ))}
                </ul>
              </BaseCard>
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* Support Section */}
      <AnimatedSection>
        <Container>
          <div className="max-w-4xl mx-auto py-12 md:py-16 text-center">
            <h2 className={`text-2xl md:text-3xl font-bold mb-3 ${isGreek ? 'greek-heading' : ''}`}>
              {t('support.title')}
            </h2>
            <p className={`text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4 ${isGreek ? 'greek-text' : ''}`}>
              {t('support.description')}
            </p>
            <p className="font-mono text-sm text-muted-foreground mb-10">
              {t('support.responseTime')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {(t.raw('support.features') as Array<{ icon: string, title: string, description: string }>).map((feature, idx) => {
                const icons: Record<string, LucideIcon> = {
                  HeadphonesIcon,
                  RefreshCw,
                  Shield
                }
                const Icon = icons[feature.icon] || HeadphonesIcon

                return (
                  <div key={idx} className="text-center">
                    <div className="inline-flex w-14 h-14 rounded-xl bg-primary/10 items-center justify-center mb-3 mx-auto">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h4 className={`font-semibold mb-1.5 ${isGreek ? 'greek-heading' : ''}`}>{feature.title}</h4>
                    <p className={`text-sm text-muted-foreground leading-relaxed ${isGreek ? 'greek-text' : ''}`}>{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </Container>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <Container>
          <div className="max-w-3xl mx-auto py-12 md:py-16">
            <BaseCard variant="standard" className="p-8 md:p-12 text-center">
              <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${isGreek ? 'greek-heading' : ''}`}>
                {t('cta.title')}
              </h2>
              <p className={`text-muted-foreground mb-8 max-w-2xl mx-auto ${isGreek ? 'greek-text' : ''}`}>
                {t('cta.description')}
              </p>
              <div className="flex justify-center">
                <CustomPrimaryButton
                  href={t('cta.buttonHref')}
                  label={t('cta.button')}
                />
              </div>
            </BaseCard>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  )
}
