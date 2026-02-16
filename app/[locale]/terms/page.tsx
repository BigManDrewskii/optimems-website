"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GlassCard } from "@/components/shared/GlassCard"
import { Link } from "@/i18n/navigation"
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
                {/* Last Updated + Introduction */}
                <GlassCard className="p-8 mb-8">
                  <p className="text-muted-foreground mb-4">{t("lastUpdated")}</p>
                  <p className="text-muted-foreground">{t("intro")}</p>
                </GlassCard>

                {/* Acceptance */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("acceptance.title")}</h2>
                  <p className="text-muted-foreground">{t("acceptance.description")}</p>
                </GlassCard>

                {/* Use of Website */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("useOfWebsite.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("useOfWebsite.description")}</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>{t("useOfWebsite.items.lawful")}</li>
                    <li>{t("useOfWebsite.items.noHarm")}</li>
                    <li>{t("useOfWebsite.items.noUnauthorized")}</li>
                    <li>{t("useOfWebsite.items.noMalware")}</li>
                  </ul>
                </GlassCard>

                {/* Intellectual Property */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("intellectualProperty.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("intellectualProperty.description1")}</p>
                  <p className="text-muted-foreground">{t("intellectualProperty.description2")}</p>
                </GlassCard>

                {/* User Accounts */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("accounts.title")}</h2>
                  <p className="text-muted-foreground">{t("accounts.description")}</p>
                </GlassCard>

                {/* Disclaimer of Warranties */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("warranties.title")}</h2>
                  <p className="text-muted-foreground">{t("warranties.description")}</p>
                </GlassCard>

                {/* Limitation of Liability */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("limitation.title")}</h2>
                  <p className="text-muted-foreground">{t("limitation.description")}</p>
                </GlassCard>

                {/* Third-Party Links */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("thirdParty.title")}</h2>
                  <p className="text-muted-foreground">{t("thirdParty.description")}</p>
                </GlassCard>

                {/* Governing Law */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("governingLaw.title")}</h2>
                  <p className="text-muted-foreground">{t("governingLaw.description")}</p>
                </GlassCard>

                {/* Termination */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("termination.title")}</h2>
                  <p className="text-muted-foreground">{t("termination.description")}</p>
                </GlassCard>

                {/* Changes to Terms */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("changes.title")}</h2>
                  <p className="text-muted-foreground">{t("changes.description")}</p>
                </GlassCard>

                {/* Severability */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("severability.title")}</h2>
                  <p className="text-muted-foreground">{t("severability.description")}</p>
                </GlassCard>

                {/* Related Policies */}
                <GlassCard className="p-8 mb-8">
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
                </GlassCard>

                {/* Contact */}
                <GlassCard className="p-8">
                  <h2 className="text-2xl font-bold mb-4">{t("contactUs.title")}</h2>
                  <p className="text-muted-foreground">
                    {t("contactUs.description")}{" "}
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
