"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"

interface LogoProps {
  variant?: "full" | "icon" | "text"
  className?: string
  width?: number
  height?: number
}

export function OptimemsLogo({
  variant = "full",
  className,
  width,
  height,
}: LogoProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = resolvedTheme === "dark"
  const iconSrc = isDark ? "/images/logos/optimems-logo-icon-dark.svg" : "/images/logos/optimems-logo-icon-light.svg"
  const textSrc = isDark ? "/images/logos/optimems-logo-fontmark-dark.svg" : "/images/logos/optimems-logo-fontmark-light.svg"

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null
  }

  if (variant === "icon") {
    return (
      <div className={cn("relative", className)} style={{ width: width || 40, height: height || 40 }}>
        <Image
          src={iconSrc}
          alt="Optimems"
          fill
          className="object-contain"
        />
      </div>
    )
  }

  if (variant === "text") {
    return (
      <div className={cn("relative", className)} style={{ width: width || 160, height: height || 64 }}>
        <Image
          src={textSrc}
          alt="Optimems"
          fill
          className="object-contain"
        />
      </div>
    )
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <div className="relative w-10 h-10 flex-shrink-0">
        <Image
          src={iconSrc}
          alt="Optimems"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-40 h-16 hidden sm:block flex-shrink-0">
        <Image
          src={textSrc}
          alt="Optimems"
          fill
          className="object-contain"
        />
      </div>
    </div>
  )
}
