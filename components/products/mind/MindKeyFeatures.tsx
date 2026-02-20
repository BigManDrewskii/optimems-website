"use client"

import { useTranslations, useLocale } from "next-intl"
import { motion } from "framer-motion"
import { ProductPageSection } from "@/components/products/ProductPageSection"
import {
  BrainCircuit,
  CalendarClock,
  Workflow,
  Activity,
  BarChart3,
  Network,
  Puzzle,
  Globe,
} from "lucide-react"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import { toGreekUpper } from "@/lib/utils"
import type { LucideIcon } from "lucide-react"

const FEATURE_ICONS: LucideIcon[] = [
  BrainCircuit,   // AI-Driven Forecasting
  CalendarClock,  // Optimal Scheduling
  Workflow,       // Unified DER Control
  Activity,       // Real-Time Monitoring
  BarChart3,      // Comprehensive KPIs
  Network,        // VPP & Market Integration
  Puzzle,         // Future-Proof & Hardware Agnostic
  Globe,          // Complete Market Participation
]

/**
 * MindKeyFeatures - Key Features & Capabilities section
 *
 * Horizontal icon + title rows that expand on click/tap to reveal descriptions.
 * Uses Radix Accordion for accessible, animated expand/collapse.
 * Mono uppercase titles for a technical, differentiated feel.
 */
export function MindKeyFeatures() {
  const t = useTranslations('mindPage.keyFeatures')
  const locale = useLocale()
  const isGreek = locale === 'el'

  const features = t.raw('features') as Array<{
    title: string
    description: string
  }>

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        description: t('subheadline'),
        align: "center",
        size: "large"
      }}
      spacing="spacious"
    >
      <div className="max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="space-y-2.5">
          {features.map((feature, idx) => {
            const Icon = FEATURE_ICONS[idx]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <AccordionItem
                  value={`feature-${idx}`}
                  className="border border-border/40 rounded-xl bg-card/40 px-5 overflow-hidden data-[state=open]:border-primary/25 data-[state=open]:bg-card/80 data-[state=open]:shadow-sm transition-all duration-300"
                >
                  <AccordionTrigger className="hover:no-underline py-4 cursor-pointer">
                    <div className="flex items-center gap-3.5 flex-1">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-[18px] h-[18px] text-primary" />
                      </div>
                      <span className="font-mono text-sm font-medium uppercase tracking-widest text-foreground/80 text-left">
                        {isGreek ? toGreekUpper(feature.title) : feature.title}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-muted-foreground leading-relaxed pl-[52px] pr-4">
                      {feature.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            )
          })}
        </Accordion>
      </div>
    </ProductPageSection>
  )
}
