"use client"

import CookieConsent from "react-cookie-consent"
import { useTranslations } from "next-intl"
import { Link } from "@/i18n/navigation"

export function CookieConsentBanner() {
  const t = useTranslations("cookieConsent")

  return (
    <CookieConsent
      cookieName="optimems-consent"
      expires={365}
      enableDeclineButton
      disableStyles
      sameSite="lax"
      containerClasses="fixed bottom-0 left-0 right-0 z-[9999] bg-card/95 backdrop-blur-md border-t border-border px-4 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
      contentClasses="text-sm text-muted-foreground max-w-3xl"
      buttonWrapperClasses="flex items-center gap-3 shrink-0"
      buttonClasses="px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
      declineButtonClasses="px-5 py-2 text-sm font-medium rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors cursor-pointer"
      buttonText={t("accept")}
      declineButtonText={t("decline")}
      ariaAcceptLabel={t("ariaAccept")}
      ariaDeclineLabel={t("ariaDecline")}
    >
      {t("message")}{" "}
      <Link
        href="/cookies"
        className="text-secondary hover:underline underline-offset-2"
      >
        {t("learnMore")}
      </Link>
    </CookieConsent>
  )
}
