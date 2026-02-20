"use client"

import Image from "next/image"
import { useState, useEffect, useMemo, useRef } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

// Extend React types to support video loading attribute (not yet in React types)
declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    loading?: "eager" | "lazy"
  }
}

interface VideoProps {
  src: string
  format?: "webm" | "mp4"
  aspectRatio?: 'video' | 'square' | 'custom'  // NEW from VideoContainer
  maxHeight?: string  // NEW from VideoContainer
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  className?: string
  poster?: string
  controls?: boolean
  preload?: "none" | "metadata" | "auto"
  sources?: { webm?: string; webmLight?: string; mp4?: string; mp4Light?: string }
  cacheBust?: boolean
  title?: string  // Accessible description of video content
  alt?: string   // Alternative text for the video
  loading?: "eager" | "lazy"  // Enable lazy loading for below-fold videos
}

export function Video({
  src,
  format = "webm",
  aspectRatio = 'video',  // NEW from VideoContainer
  maxHeight,  // NEW from VideoContainer
  autoplay = true,
  muted = true,
  loop = true,
  playsInline = true,
  className,
  poster,
  controls = false,
  preload = "metadata",  // Changed from "auto" - only load metadata by default
  sources,
  cacheBust: _cacheBust = false,  // Changed from true - disable cache-busting to allow browser caching
  title,
  alt,
  loading = "lazy",  // Changed from "eager" - lazy load videos by default
}: VideoProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Reload video only when sources change (not on initial mount — browser handles that)
  const initialMountRef = useRef(true)
  useEffect(() => {
    if (initialMountRef.current) {
      initialMountRef.current = false
      return
    }
    if (videoRef.current) {
      videoRef.current.load()
    }
  }, [sources?.webm, sources?.mp4])

  // Imperatively play when autoplay prop transitions to true
  // (HTML autoplay attribute only works at initial parse, not on prop updates)
  useEffect(() => {
    if (autoplay && mounted && videoRef.current) {
      videoRef.current.play().catch((err: unknown) => {
        console.error("Video autoplay failed:", err)
      })
    }
  }, [autoplay, mounted])

  // Removed cache-busting code - cacheBust defaults to false for better browser caching

  const resolvedSources = useMemo(() => {
    if (!sources) return null
    const isLight = mounted && resolvedTheme === "light"
    return {
      webm: isLight && sources.webmLight ? sources.webmLight : sources.webm,
      mp4: isLight && sources.mp4Light ? sources.mp4Light : sources.mp4,
    }
  }, [mounted, resolvedTheme, sources])

  // NEW from VideoContainer: Aspect ratio classes
  const aspectRatioClasses = useMemo(() => {
    const classes = {
      video: 'aspect-video',
      square: 'aspect-square',
      custom: '',
    }
    return classes[aspectRatio]
  }, [aspectRatio])

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-muted/30 text-muted-foreground",
          className
        )}
        role="alert"
        aria-live="polite"
      >
        <p className="text-sm">
          <strong>{title || "Video unavailable"}</strong>
        </p>
      </div>
    )
  }

  // Use title or alt for accessible description, require meaningful label
  const videoLabel = title || alt

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-background/50",
        aspectRatioClasses,  // NEW from VideoContainer
        className
      )}
      style={maxHeight ? { maxHeight } : undefined}  // NEW from VideoContainer
    >
      {poster && (
        <Image
          src={poster}
          fill
          className={cn(
            "object-cover transition-opacity duration-700 ease-in-out",
            isLoaded ? "opacity-0" : "opacity-100"
          )}
          alt={alt || ""}
          priority
        />
      )}
      <video
        ref={videoRef}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        controls={controls}
        preload={preload}
        loading={loading}
        // Key changes when video source changes (theme switch), causing remount
        // This ensures correct video loads for current theme
        key={resolvedSources?.webm || resolvedSources?.mp4}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-700 ease-in-out",
          !isLoaded && poster && "opacity-0",
          isLoaded && "opacity-100"
        )}
        onError={() => setHasError(true)}
        onLoadedData={() => setIsLoaded(true)}
        aria-label={videoLabel || "Video content"}
      >
        {resolvedSources?.webm && <source src={resolvedSources.webm} type="video/webm" />}
        {resolvedSources?.mp4 && <source src={resolvedSources.mp4} type="video/mp4" />}
        {!resolvedSources && <source src={src} type={`video/${format}`} />}
      </video>
    </div>
  )
}
