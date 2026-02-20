"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle({
  ariaLabel = "Switch theme",
  className,
}: {
  ariaLabel?: string
  className?: string
}) {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "relative flex items-center justify-center w-8 h-8 rounded-full",
          "bg-muted",
          className
        )}
        aria-label={ariaLabel}
        disabled
      />
    )
  }

  const isDark = resolvedTheme === "dark"

  const handleToggle = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "relative flex items-center justify-center w-8 h-8 rounded-full",
        "bg-muted text-primary transition-colors duration-200 hover:bg-muted/80",
        className
      )}
      aria-label={ariaLabel}
    >
      <Sun
        className={cn(
          "w-4 h-4 transition-all duration-300",
          isDark ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"
        )}
      />
      <Moon
        className={cn(
          "absolute w-4 h-4 transition-all duration-300",
          isDark ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"
        )}
      />
    </button>
  )
}
