/**
 * @deprecated Use BaseCard with variant="standard" instead.
 * This component will be removed in a future release.
 * All glass-effect cards have been consolidated into the standard BaseCard variant.
 */
"use client"

import { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  scale?: boolean
  rounded?: 'lg' | 'xl' | '2xl' | '3xl'
  padding?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  as?: 'div' | 'a' | 'button'
  href?: string
  ariaLabel?: string
}

export function GlassCard({
  children,
  className,
  hover = true,
  scale = true,
  rounded = '2xl',
  padding = 'lg',
  onClick,
  onMouseEnter,
  onMouseLeave,
  as = 'div',
  href,
  ariaLabel,
}: GlassCardProps) {
  const roundedClasses = {
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    '2xl': 'rounded-2xl',
    '3xl': 'rounded-3xl',
  }

  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  }

  const baseClasses = cn(
    'bg-card/60 backdrop-blur-sm border transition-all duration-300',
    hover && 'hover:border-secondary',
    hover && scale && 'hover:scale-[1.02]',
    roundedClasses[rounded],
    paddingClasses[padding],
    !hover && 'border-border/30',
    className
  )

  if (as === 'a') {
    return (
      <a href={href} className={baseClasses} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} aria-label={ariaLabel}>
        {children}
      </a>
    )
  }

  if (as === 'button') {
    return (
      <button type="button" className={baseClasses} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} aria-label={ariaLabel}>
        {children}
      </button>
    )
  }

  if (onClick || onMouseEnter || onMouseLeave) {
    return (
      <button
        type="button"
        className={cn(baseClasses, "w-full text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none")}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    )
  }

  return (
    <div className={baseClasses}>
      {children}
    </div>
  )
}
