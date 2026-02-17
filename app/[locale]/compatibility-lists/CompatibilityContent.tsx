"use client"

import { useTranslations } from "next-intl"
import { CompatibilityTable } from "@/components/CompatibilityTable"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { manufacturers } from "@/data/compatibility"

export function CompatibilityContent() {
  const t = useTranslations("compatibilityLists")

  return (
    <main className="min-h-screen pb-24">
      {/* Hero Section */}
      <div className="pt-32 md:pt-40 lg:pt-48">
        <Container>
          <AnimatedSection animation="fadeIn" as="section">
            <SectionHeader
              title={t("title")}
              description={t("subtitle")}
              align="center"
              size="large"
              className="mb-24"
            />
          </AnimatedSection>
        </Container>
      </div>

      <Container>
        <AnimatedSection animation="fadeIn" as="section">
          <CompatibilityTable manufacturers={manufacturers} />

          <footer className="mt-12 max-w-4xl mx-auto">
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footnote")}
            </p>
          </footer>
        </AnimatedSection>
      </Container>
    </main>
  )
}
