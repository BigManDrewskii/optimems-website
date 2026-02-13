"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GlassCard } from "@/components/shared/GlassCard"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export default function TermsPage() {
  const t = useTranslations("termsPage")

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        <AnimatedSection>
          <Container>
            <div className="mb-8 max-w-4xl mx-auto">
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                {t("backToHome")}
              </Link>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{t("title")}</h1>
              <p className="text-xl text-muted-foreground">{t("subtitle")}</p>
            </div>
          </Container>
        </AnimatedSection>

        <AnimatedSection>
          <Container>
            <div className="pb-20 md:py-28 max-w-4xl mx-auto">
              <div className="prose prose-neutral max-w-none">
                <GlassCard className="p-8 mb-8">
                  <p className="text-muted-foreground mb-4">{t("lastUpdated")}</p>
                  <p className="text-muted-foreground">{t("intro")}</p>
                </GlassCard>

                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("useOfWebsite.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("useOfWebsite.description")}</p>
                </GlassCard>

                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("intellectualProperty.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("intellectualProperty.description1")}</p>
                  <p className="text-muted-foreground">{t("intellectualProperty.description2")}</p>
                </GlassCard>

                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("limitation.title")}</h2>
                  <p className="text-muted-foreground">{t("limitation.description")}</p>
                </GlassCard>

                <GlassCard className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{t("contactUs.title")}</h2>
                  <p className="text-muted-foreground">
                    {t("contactUs.description")}{' '}
                    <a href="mailto:info@optimems.gr" className="text-secondary hover:underline">
                      info@optimems.gr
                    </a>
                  </p>
                </GlassCard>
              </div>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}
