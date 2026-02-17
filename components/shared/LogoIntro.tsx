"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

/**
 * LogoIntro — Full-screen logo splash shown once per session.
 *
 * Acts as a visual loading gate: the page renders behind the overlay,
 * so by the time the intro fades out the landing page is fully painted.
 *
 * Timeline (~1.46s total):
 *  - 0–1.33s: Logo scales up + fades in (CSS keyframe with bouncy ease)
 *  - 1.33s–1.46s: Brief hold at full size
 *  - 1.46s–1.76s: Overlay fades out (300ms CSS transition)
 *  - 1.76s: Component unmounts via onComplete
 */

const ANIMATION_DURATION = 1330 // logo keyframe length (ms)
const HOLD_DURATION = 130       // pause at full size before fade-out (ms)
const FADE_OUT_DURATION = 300   // overlay opacity transition (ms)
const SESSION_KEY = "optimems-intro-shown"

interface LogoIntroProps {
  onComplete: () => void
}

export function LogoIntro({ onComplete }: LogoIntroProps) {
  const [phase, setPhase] = useState<"animate" | "fade-out">("animate")
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  const handleComplete = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, "true")
    onComplete()
  }, [onComplete])

  useEffect(() => {
    setMounted(true)

    // After logo animation + hold, trigger fade-out
    const fadeTimer = setTimeout(() => {
      setPhase("fade-out")
    }, ANIMATION_DURATION + HOLD_DURATION)

    // After fade-out completes, unmount
    const unmountTimer = setTimeout(() => {
      handleComplete()
    }, ANIMATION_DURATION + HOLD_DURATION + FADE_OUT_DURATION)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(unmountTimer)
    }
  }, [handleComplete])

  if (!mounted) return null

  const logoSrc =
    resolvedTheme === "dark"
      ? "/optimems-logos/optimems-logo-icon-dark.svg"
      : "/optimems-logos/optimems-logo-icon-light.svg"

  const backgroundGradient =
    resolvedTheme === "dark"
      ? "radial-gradient(ellipse at center, oklch(0.25 0.05 250) 0%, oklch(0.18 0.04 250) 100%)"
      : "radial-gradient(ellipse at center, oklch(1 0 0) 0%, oklch(0.92 0.02 250) 100%)"

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{
        background: backgroundGradient,
        opacity: phase === "fade-out" ? 0 : 1,
        transition: `opacity ${FADE_OUT_DURATION}ms ease-out`,
      }}
    >
      <div
        style={{
          animation: "intro-logo 1.33s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <Image
          src={logoSrc}
          alt="Optimems"
          width={160}
          height={142}
          priority
          className="w-32 h-auto md:w-40 lg:w-48"
        />
      </div>
    </div>
  )
}

/** Gate wrapper — checks sessionStorage before rendering LogoIntro */
export function LogoIntroGate({ children }: { children: React.ReactNode }) {
  const [showIntro, setShowIntro] = useState(true)
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem(SESSION_KEY)
    if (hasSeenIntro) {
      setShowIntro(false)
    }
    setChecked(true)
  }, [])

  // Don't render anything until we've checked sessionStorage (avoids flash)
  if (!checked) return null

  return (
    <>
      {showIntro && <LogoIntro onComplete={() => setShowIntro(false)} />}
      {children}
    </>
  )
}
