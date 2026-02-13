"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import type { ThemeToggleStyles } from "./types"

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
          "flex items-center justify-center w-8 h-8 rounded-full",
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

  const themeToggleStyles: ThemeToggleStyles = {
    container: cn(
      "flex items-center justify-center w-8 h-8 rounded-full",
      "bg-muted"
    ),
    icon: cn(
      "w-4 h-4",
      "text-primary"
    ),
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(themeToggleStyles.container, className)}
      aria-label={ariaLabel}
    >
      {/* Sun icon - visible in light mode */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-opacity duration-300"
        style={{ opacity: isDark ? 0 : 1 }}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="6" fill="currentColor" />
        <path
          d="M12 2V4M12 20V22M4.93 4.93L6.34 6.34M17.66 17.66L19.07 19.07M2 12H4M20 12H22M4.93 19.07L6.34 17.66M17.66 6.34L19.07 4.93"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Moon icon - visible in dark mode */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute transition-opacity duration-300"
        style={{ opacity: isDark ? 1 : 0 }}
        aria-hidden="true"
      >
        <path
          d="M21 12C21 16.97 16.97 21 12 21C7.03 21 3 16.97 3 12C3 7.03 7.03 3 12 3C13.73 3 15.35 3.53 16.71 4.47C15.5 6.11 14.73 8.19 14.73 10.5C14.73 12.81 15.5 14.89 16.71 16.53C15.35 17.47 13.73 18 12 18C16.97 18 21 13.97 21 12Z"
          fill="currentColor"
        />
      </svg>
    </button>
  )
}
