"use client"

import { cn } from "@/lib/utils"

/**
 * Theme-aware vignette overlay component.
 * Provides consistent gradient overlay across all video/image containers.
 *
 * Eliminates duplication of vignette pattern across multiple sections.
 */
export interface ThemeVignetteProps {
  className?: string
  intensity?: 'subtle' | 'medium' | 'strong'
  viaColor?: boolean
  isLight?: boolean
}

export function ThemeVignette({
  className,
  intensity = 'medium',
  viaColor = false,
  isLight = false,
}: ThemeVignetteProps) {
  // Intensity controls the middle gradient stop
  const intensityClasses = {
    subtle: 'via-background/20',
    medium: 'via-background/40',
    strong: 'via-background/60',
  }

  return (
    <div
      className={cn(
        'absolute inset-0 bg-gradient-to-t from-background/100 to-transparent pointer-events-none',
        intensityClasses[intensity],
        // Add color tint in light mode
        isLight && viaColor && 'via-primary/10',
        className
      )}
    />
  )
}
