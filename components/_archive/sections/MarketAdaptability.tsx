"use client"

import { SectionHeader } from "@/components/shared"
import { useTranslations } from "next-intl"

export function MarketAdaptability() {
  const t = useTranslations()

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <SectionHeader
          title={t("marketAdaptability.title")}
          description={t("marketAdaptability.text")}
          className="max-w-3xl mx-auto"
        />
      </div>
    </section>
  )
}
