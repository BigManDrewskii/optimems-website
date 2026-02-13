"use client"

import { motion } from "framer-motion"
import { Dashboard16x9 } from "./layouts/Dashboard16x9"
import { Dashboard3x4 } from "./layouts/Dashboard3x4"
import { useTranslations } from "next-intl"

export interface DashboardDemoCTAProps {
  id?: string
  className?: string
}

export function DashboardDemoCTA({
  
  id = "dashboard-demo",
  className = "",
}: DashboardDemoCTAProps) {
  const t = useTranslations("dashboardDemo")

  const headline = t("headline")
  const subheadline = t("subheadline")
  const primaryCTA = { label: t("primaryCTA"), href: "#signup" }
  const secondaryCTA = { label: t("secondaryCTA"), href: "#demo" }
  return (
    <section
      id={id}
      className={`relative bg-background py-24 md:py-32 overflow-hidden ${className}`}
    >

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-center">

          {/* Left Column: Marketing Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-8 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              {headline}
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {subheadline}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href={primaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg transition-colors shadow-lg"
              >
                {primaryCTA.label}
              </a>
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-foreground border border-border hover:border-muted-foreground rounded-lg transition-colors hover:bg-muted"
              >
                {secondaryCTA.label}
              </a>
            </motion.div>

            {/* Feature highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 space-y-3"
            >
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>{t("features.realTime")}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span>{t("features.automation")}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{t("features.integration")}</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Dashboard Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Dashboard container */}
            <div className="relative rounded-2xl p-1.5 ring-1 ring-white/10 shadow-2xl" style={{ background: 'var(--dashboard-bg)' }}>
              {/* Aspect ratio wrapper - 16:9 on desktop, 3:4 on mobile */}
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden" style={{ background: 'var(--dashboard-bg)' }}>
                {/* 16:9 layout - shown on lg+ screens */}
                <div className="hidden lg:block absolute inset-0">
                  <Dashboard16x9 />
                </div>

                {/* 3:4 layout - shown on smaller screens */}
                <div className="lg:hidden absolute inset-0">
                  <Dashboard3x4 />
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -bottom-4 -right-4 bg-primary text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg"
            >
              {t("liveDemo")}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default DashboardDemoCTA
