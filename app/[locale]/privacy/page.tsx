"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GlassCard } from "@/components/shared/GlassCard"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export default function PrivacyPage() {
  const t = useTranslations("privacyPage")

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

                {/* Data Controller */}
                <GlassCard className="p-8 mb-8">
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
                </GlassCard>

                {/* Information We Collect */}
                <GlassCard className="p-8 mb-8">
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
                </GlassCard>

                {/* Legal Basis */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("legalBasis.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("legalBasis.description")}</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>{t("legalBasis.consent")}</li>
                    <li>{t("legalBasis.contract")}</li>
                    <li>{t("legalBasis.legitimate")}</li>
                    <li>{t("legalBasis.legal")}</li>
                  </ul>
                </GlassCard>

                {/* How We Use Your Information */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("howWeUse.title")}</h2>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>{t("howWeUse.items.provide")}</li>
                    <li>{t("howWeUse.items.respond")}</li>
                    <li>{t("howWeUse.items.improve")}</li>
                    <li>{t("howWeUse.items.comply")}</li>
                    <li>{t("howWeUse.items.security")}</li>
                  </ul>
                </GlassCard>

                {/* Data Sharing */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("dataSharing.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("dataSharing.description")}</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>{t("dataSharing.providers")}</li>
                    <li>{t("dataSharing.legal")}</li>
                    <li>{t("dataSharing.protection")}</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">{t("dataSharing.noSale")}</p>
                </GlassCard>

                {/* Data Retention */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("retention.title")}</h2>
                  <p className="text-muted-foreground">{t("retention.description")}</p>
                </GlassCard>

                {/* International Transfers */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("transfers.title")}</h2>
                  <p className="text-muted-foreground">{t("transfers.description")}</p>
                </GlassCard>

                {/* Your Rights */}
                <GlassCard className="p-8 mb-8">
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
                </GlassCard>

                {/* Data Security */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("security.title")}</h2>
                  <p className="text-muted-foreground">{t("security.description")}</p>
                </GlassCard>

                {/* Changes to Policy */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("changes.title")}</h2>
                  <p className="text-muted-foreground">{t("changes.description")}</p>
                </GlassCard>

                {/* Related Policies */}
                <GlassCard className="p-8 mb-8">
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
                </GlassCard>

                {/* Contact Us */}
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
