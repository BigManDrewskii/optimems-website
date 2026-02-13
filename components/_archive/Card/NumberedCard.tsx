"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { Link } from "@/i18n/navigation"
import { BaseCard } from "../../shared/BaseCard"
import { FeatureList } from "../../shared/FeatureList"

/**
 * NumberedCard component with 3D hover effect.
 * Uses BaseCard for consistent styling while preserving the interactive 3D effect.
 *
 * Features:
 * - 3D tilt effect on mouse move
 * - Large number badge
 * - Feature list support
 * - Optional link wrapper
 */
export interface NumberedCardProps {
  number: number | string
  title: string
  subtitle?: string
  description?: string
  features?: Array<{ title: string; description: string }>
  cardClassName?: string
  href?: string
  isInView?: boolean
  index?: number
  variant?: 'standard'  // Allow choosing card variant
}

export function NumberedCard({
  number,
  title,
  subtitle,
  description,
  features,
  cardClassName,
  href,
  isInView = true,
  index = 0,
  variant = 'standard',  // Default to standard variant
}: NumberedCardProps) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  const rotateX = useTransform(mouseY, [-200, 200], [3, -3])
  const rotateY = useTransform(mouseX, [-200, 200], [-3, 3])

  const cardContent = (
    <>
      {/* Number Badge */}
      <div className="text-6xl md:text-7xl font-bold text-border/60 leading-none mb-6">
        {typeof number === 'number' && number < 10 ? `0${number}` : number}
      </div>

      {/* Content */}
      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
        {title}
      </h3>

      {subtitle && (
        <p className="text-base text-foreground/90 font-medium mb-4">{subtitle}</p>
      )}

      {description && (
        <p className="text-sm text-foreground/70 leading-relaxed">
          {description}
        </p>
      )}

      {features && (
        <FeatureList
          features={features.map((f) => f.title)}
          className="mt-4"
        />
      )}
    </>
  )

  const animatedCard = (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        mouseX.set(0)
        mouseY.set(0)
      }}
      whileHover={{ scale: 1.02 }}
    >
      <BaseCard
        variant={variant}
        rounded="2xl"
        hover={false}
        fullHeight={true}
        className={cardClassName}
        as={href ? 'a' : 'div'}
        href={href}
      >
        {cardContent}
      </BaseCard>
    </motion.div>
  )

  return animatedCard
}
