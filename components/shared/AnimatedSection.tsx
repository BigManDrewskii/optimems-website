"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: 'fadeInUp' | 'fadeIn' | 'scaleIn'
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
  as?: 'section' | 'div'
}

export function AnimatedSection({
  children,
  className,
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.5,
  once = true,
  amount = 0.3,
  as = 'section',
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, amount })

  const animations = {
    fadeInUp: { opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 },
    fadeIn: { opacity: isInView ? 1 : 0 },
    scaleIn: { opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.95 },
  }

  const MotionComponent = motion[as]

  return (
    <MotionComponent
      ref={ref}
      initial={animations[animation]}
      animate={animations[animation]}
      transition={{ duration, delay }}
      className={cn(className)}
    >
      {children}
    </MotionComponent>
  )
}
