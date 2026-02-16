"use client"

import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GlassCard } from "@/components/shared/GlassCard"
import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { useTranslations } from "next-intl"

export default function CookiesPage() {
  const t = useTranslations("cookiesPage")

  const cookieTable = t.raw("cookieTable") as Array<{
    name: string
    provider: string
    purpose: string
    duration: string
    type: string
  }>

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
                {/* Last Updated + Intro */}
                <GlassCard className="p-8 mb-8">
                  <p className="text-muted-foreground mb-4">{t("lastUpdated")}</p>
                  <p className="text-muted-foreground">{t("intro")}</p>
                </GlassCard>

                {/* What Are Cookies */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("whatAreCookies.title")}</h2>
                  <p className="text-muted-foreground">{t("whatAreCookies.description")}</p>
                </GlassCard>

                {/* How We Use Cookies */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("howWeUse.title")}</h2>
                  <p className="text-muted-foreground">{t("howWeUse.description")}</p>
                </GlassCard>

                {/* Types of Cookies */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("types.title")}</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("types.essential.title")}</h3>
                      <p className="text-muted-foreground text-sm">{t("types.essential.description")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("types.functional.title")}</h3>
                      <p className="text-muted-foreground text-sm">{t("types.functional.description")}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{t("types.analytics.title")}</h3>
                      <p className="text-muted-foreground text-sm">{t("types.analytics.description")}</p>
                    </div>
                  </div>
                </GlassCard>

                {/* Cookie Inventory Table */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("inventory.title")}</h2>
                  <p className="text-muted-foreground mb-6">{t("inventory.description")}</p>
                  <div className="overflow-x-auto -mx-2">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-2 font-semibold text-foreground">{t("inventory.headers.name")}</th>
                          <th className="text-left py-3 px-2 font-semibold text-foreground">{t("inventory.headers.provider")}</th>
                          <th className="text-left py-3 px-2 font-semibold text-foreground">{t("inventory.headers.purpose")}</th>
                          <th className="text-left py-3 px-2 font-semibold text-foreground">{t("inventory.headers.duration")}</th>
                          <th className="text-left py-3 px-2 font-semibold text-foreground">{t("inventory.headers.type")}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cookieTable.map((cookie) => (
                          <tr key={cookie.name} className="border-b border-border/50">
                            <td className="py-3 px-2 text-muted-foreground font-mono text-xs">{cookie.name}</td>
                            <td className="py-3 px-2 text-muted-foreground">{cookie.provider}</td>
                            <td className="py-3 px-2 text-muted-foreground">{cookie.purpose}</td>
                            <td className="py-3 px-2 text-muted-foreground">{cookie.duration}</td>
                            <td className="py-3 px-2 text-muted-foreground">{cookie.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </GlassCard>

                {/* Managing Cookies */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("managing.title")}</h2>
                  <p className="text-muted-foreground mb-4">{t("managing.consentBanner")}</p>
                  <p className="text-muted-foreground mb-4">{t("managing.browserSettings")}</p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>{t("managing.options.block")}</li>
                    <li>{t("managing.options.delete")}</li>
                    <li>{t("managing.options.notification")}</li>
                  </ul>
                  <p className="text-muted-foreground mt-4">{t("managing.impact")}</p>
                </GlassCard>

                {/* Your Rights */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("rights.title")}</h2>
                  <p className="text-muted-foreground">{t("rights.description")}</p>
                </GlassCard>

                {/* Changes */}
                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("changes.title")}</h2>
                  <p className="text-muted-foreground">{t("changes.description")}</p>
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
                      <Link href="/terms" className="text-secondary hover:underline">
                        {t("related.terms")}
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
