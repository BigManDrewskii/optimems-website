"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { BaseCard } from "@/components/shared/BaseCard"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export default function PrivacyPage() {
  const t = useTranslations("privacyPage")

  return (
    <AppLayout>
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

        {/* Intro + Controller */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
              <BaseCard variant="standard" hover={false} className="p-8">
                <p className="text-muted-foreground mb-4">{t("lastUpdated")}</p>
                <p className="text-muted-foreground">{t("intro")}</p>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("controller.title")}</h2>
                <p className="text-muted-foreground mb-2">{t("controller.description")}</p>
                <ul className="list-none space-y-1 text-muted-foreground">
                  <li><strong>{t("controller.name")}</strong></li>
                  <li>{t("controller.address")}</li>
                  <li>{t("controller.vat")}</li>
                  <li>
                    {t("controller.emailLabel")}{" "}
                    <a href="mailto:info@optimems.gr" className="text-secondary hover:underline">info@optimems.gr</a>
                  </li>
                </ul>
              </BaseCard>
            </div>
          </Container>
        </AnimatedSection>

        {/* Data Collection + Legal Basis */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("infoCollect.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("infoCollect.description")}</p>

                <h3 className="text-lg font-semibold mb-2">{t("infoCollect.provided.title")}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-4">
                  <li>{t("infoCollect.provided.name")}</li>
                  <li>{t("infoCollect.provided.company")}</li>
                  <li>{t("infoCollect.provided.message")}</li>
                </ul>

                <h3 className="text-lg font-semibold mb-2">{t("infoCollect.automatic.title")}</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{t("infoCollect.automatic.device")}</li>
                  <li>{t("infoCollect.automatic.usage")}</li>
                  <li>{t("infoCollect.automatic.cookies")}</li>
                </ul>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("legalBasis.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("legalBasis.description")}</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{t("legalBasis.consent")}</li>
                  <li>{t("legalBasis.contract")}</li>
                  <li>{t("legalBasis.legitimate")}</li>
                  <li>{t("legalBasis.legal")}</li>
                </ul>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("howWeUse.title")}</h2>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{t("howWeUse.items.provide")}</li>
                  <li>{t("howWeUse.items.respond")}</li>
                  <li>{t("howWeUse.items.improve")}</li>
                  <li>{t("howWeUse.items.comply")}</li>
                  <li>{t("howWeUse.items.security")}</li>
                </ul>
              </BaseCard>
            </div>
          </Container>
        </AnimatedSection>

        {/* Data Sharing + Retention + Transfers */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("dataSharing.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("dataSharing.description")}</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{t("dataSharing.providers")}</li>
                  <li>{t("dataSharing.legal")}</li>
                  <li>{t("dataSharing.protection")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">{t("dataSharing.noSale")}</p>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("retention.title")}</h2>
                <p className="text-muted-foreground">{t("retention.description")}</p>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("transfers.title")}</h2>
                <p className="text-muted-foreground">{t("transfers.description")}</p>
              </BaseCard>
            </div>
          </Container>
        </AnimatedSection>

        {/* Rights + Security */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("rights.title")}</h2>
                <p className="text-muted-foreground mb-4">{t("rights.description")}</p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>{t("rights.access")}</li>
                  <li>{t("rights.rectification")}</li>
                  <li>{t("rights.erasure")}</li>
                  <li>{t("rights.restriction")}</li>
                  <li>{t("rights.portability")}</li>
                  <li>{t("rights.objection")}</li>
                  <li>{t("rights.withdraw")}</li>
                </ul>
                <p className="text-muted-foreground mt-4">{t("rights.complaint")}</p>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("security.title")}</h2>
                <p className="text-muted-foreground">{t("security.description")}</p>
              </BaseCard>
            </div>
          </Container>
        </AnimatedSection>

        {/* Changes + Related + Contact */}
        <AnimatedSection>
          <Container>
            <div className="max-w-4xl mx-auto py-16 md:py-24 space-y-8">
              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("changes.title")}</h2>
                <p className="text-muted-foreground">{t("changes.description")}</p>
              </BaseCard>

              <BaseCard variant="standard" hover={false} className="p-8">
                <h2 className="text-2xl font-bold mb-4">{t("related.title")}</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <Link href="/cookies" className="text-secondary hover:underline">
                      {t("related.cookies")}
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms" className="text-secondary hover:underline">
                      {t("related.terms")}
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
    </AppLayout>
  )
}
