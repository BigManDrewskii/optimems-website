"use client"

import { Header } from "@/components/shared/Header"
import { Footer } from "@/components/sections/Footer"
import { CookieConsentBanner } from "@/components/shared/CookieConsentBanner"

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      <CookieConsentBanner />
    </>
  )
}
