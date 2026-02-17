"use client"

import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export function TermsContent() {
  const t = useTranslations("termsPage")

  return (
    <main className="min-h-screen pb-24">
      {/* Hero */}
      <div className="pt-32 md:pt-40 lg:pt-48">
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto pb-16 md:pb-24">
              <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" aria-hidden="true" />
                {t("backToHome")}
              </Link>
              <SectionHeader
                title={t("title")}
                description={t("subtitle")}
                align="left"
                size="large"
              />
            </div>
          </Container>
        </AnimatedSection>
      </div>

      {/* Intro + Acceptance + Use of Website */}
      <AnimatedSection>
        <Container>
          <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
            <BaseCard variant="standard" hover={false} className="p-8">
              <p className="text-muted-foreground mb-4">{t("lastUpdated")}</p>
              <p className="text-muted-foreground">{t("intro")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("acceptance.title")}</h2>
              <p className="text-muted-foreground">{t("acceptance.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("useOfWebsite.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("useOfWebsite.description")}</p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>{t("useOfWebsite.items.lawful")}</li>
                <li>{t("useOfWebsite.items.noHarm")}</li>
                <li>{t("useOfWebsite.items.noUnauthorized")}</li>
                <li>{t("useOfWebsite.items.noMalware")}</li>
              </ul>
            </BaseCard>
          </div>
        </Container>
      </AnimatedSection>

      {/* IP + Accounts + Warranties */}
      <AnimatedSection>
        <Container>
          <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("intellectualProperty.title")}</h2>
              <p className="text-muted-foreground mb-4">{t("intellectualProperty.description1")}</p>
              <p className="text-muted-foreground">{t("intellectualProperty.description2")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("accounts.title")}</h2>
              <p className="text-muted-foreground">{t("accounts.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("warranties.title")}</h2>
              <p className="text-muted-foreground">{t("warranties.description")}</p>
            </BaseCard>
          </div>
        </Container>
      </AnimatedSection>

      {/* Liability + Third Party + Governing Law */}
      <AnimatedSection>
        <Container>
          <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("limitation.title")}</h2>
              <p className="text-muted-foreground">{t("limitation.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("thirdParty.title")}</h2>
              <p className="text-muted-foreground">{t("thirdParty.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("governingLaw.title")}</h2>
              <p className="text-muted-foreground">{t("governingLaw.description")}</p>
            </BaseCard>
          </div>
        </Container>
      </AnimatedSection>

      {/* Termination + Changes + Severability + Related + Contact */}
      <AnimatedSection>
        <Container>
          <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("termination.title")}</h2>
              <p className="text-muted-foreground">{t("termination.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("changes.title")}</h2>
              <p className="text-muted-foreground">{t("changes.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("severability.title")}</h2>
              <p className="text-muted-foreground">{t("severability.description")}</p>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("related.title")}</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <Link href="/privacy" className="text-secondary hover:underline">
                    {t("related.privacy")}
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="text-secondary hover:underline">
                    {t("related.cookies")}
                  </Link>
                </li>
              </ul>
            </BaseCard>

            <BaseCard variant="standard" hover={false} className="p-8">
              <h2 className="text-2xl font-bold mb-4">{t("contactUs.title")}</h2>
              <p className="text-muted-foreground">
                {t("contactUs.description")}{" "}
                <a href="mailto:info@optimems.gr" className="text-secondary hover:underline">
                  info@optimems.gr
                </a>
              </p>
            </BaseCard>
          </div>
        </Container>
      </AnimatedSection>
    </main>
  )
}
