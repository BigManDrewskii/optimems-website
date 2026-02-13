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
                  <p className="text-muted-foreground mb-4">
                    {t("lastUpdated")}
                  </p>
                  <p className="text-muted-foreground">
                    {t("intro")}
                  </p>
                </GlassCard>

                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("whatAreCookies.title")}</h2>
                  <p className="text-muted-foreground">
                    {t("whatAreCookies.description")}
                  </p>
                </GlassCard>

                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("types.title")}</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold mb-2">{t("types.essential.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("types.essential.description")}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t("types.analytics.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("types.analytics.description")}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">{t("types.functionality.title")}</h3>
                      <p className="text-muted-foreground text-sm">
                        {t("types.functionality.description")}
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard className="p-8 mb-8">
                  <h2 className="text-2xl font-bold mb-4">{t("managing.title")}</h2>
                  <p className="text-muted-foreground mb-4">
                    {t("managing.description")}
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>{t("managing.options.block")}</li>
                    <li>{t("managing.options.allow")}</li>
                    <li>{t("managing.options.delete")}</li>
                    <li>{t("managing.options.warning")}</li>
                  </ul>
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
