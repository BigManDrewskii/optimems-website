"use client"

import { ProductPageSection } from "@/components/products/ProductPageSection"
import { FeatureList } from "@/components/products/FeatureList"
import { useTranslations } from "next-intl"


export function PartnershipTechnology() {
  const t = useTranslations('partnershipPage.technology')

  const differentiators = t.raw('differentiators') as string[]

  return (
    <ProductPageSection
      header={{
        title: t('headline'),
        description: t('introduction'),
        align: "center",
        size: "large"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <FeatureList
          features={differentiators}
          columns={2}
          size="md"
        />
      </div>
    </ProductPageSection>
  )
}
