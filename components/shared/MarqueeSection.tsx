"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export interface MarqueeItem {
  src: string
  alt: string
  href: string
  name: string
  lightThemeSrc?: string
}

export interface MarqueeSectionProps {
  items: MarqueeItem[]
  duration?: number
  className?: string
  pauseOnHover?: boolean
  speed?: "slow" | "medium" | "fast"
}

export function MarqueeSection({
  items,
  duration = 20,
  className,
  pauseOnHover = true,
  speed = "medium",
}: MarqueeSectionProps) {
  const [duplicatedItems, setDuplicatedItems] = useState<MarqueeItem[]>([])
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)

    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items])
  }, [items])

  const speedMultiplier = {
    slow: 1.5,
    medium: 1,
    fast: 0.5,
  }

  const finalDuration = duration * speedMultiplier[speed]

  const getSrc = (item: MarqueeItem) => {
    if (!mounted) return item.src
    if (resolvedTheme === "light" && item.lightThemeSrc) {
      return item.lightThemeSrc
    }
    return item.src
  }

  return (
    <div className={cn("relative overflow-hidden w-full", className)}>
      {prefersReducedMotion ? (
        <div className="flex gap-12 items-center justify-center flex-wrap py-4">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex-shrink-0"
              style={{ width: "150px" }}
              aria-label={item.name}
            >
              <Image
                src={getSrc(item)}
                alt={item.alt}
                width={150}
                height={50}
                className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                unoptimized
              />
            </a>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex gap-12 items-center"
          animate={{
            x: [0, -((items.length * 300) + (items.length - 1) * 48)],
          }}
          transition={{
            duration: finalDuration,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={pauseOnHover ? { animationPlayState: "paused" } : undefined}
        >
          {duplicatedItems.map((item, index) => (
            <a
              key={`${item.name}-${index}`}
              href={item.href}
              className="flex-shrink-0"
              style={{ width: "150px" }}
              aria-label={item.name}
            >
              <Image
                src={getSrc(item)}
                alt={item.alt}
                width={150}
                height={50}
                className="w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300"
                unoptimized
              />
            </a>
          ))}
        </motion.div>
      )}
    </div>
  )
}
