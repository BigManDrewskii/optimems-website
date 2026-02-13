"use client"

import { useState, useEffect, useRef } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

declare global {
  interface Window {
    UnicornStudio?: {
      init: () => Promise<unknown>
      addScene: (options: { elementId: string; filePath: string; scale?: number; dpi?: number; lazyLoad?: boolean }) => Promise<unknown>
      destroy: () => void
      isInitialized?: boolean
    }
  }
}

interface UnicornStudioSceneProps {
  jsonFilePath: string
  fallbackImageDark: string
  fallbackImageLight: string
  className?: string
  width?: string | number
  height?: string | number
}

let scriptLoaded = false

export function UnicornStudioScene({
  jsonFilePath,
  fallbackImageDark,
  fallbackImageLight,
  className,
  width,
  height,
}: UnicornStudioSceneProps) {
  const [mounted, setMounted] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()
  const elementId = useRef(`unicorn-scene-${Math.random().toString(36).substring(2, 9)}`)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted || !containerRef.current) return

    const loadScript = () => {
      return new Promise<void>((resolve, reject) => {
        if (scriptLoaded) {
          resolve()
          return
        }

        const script = document.createElement("script")
        script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.2/dist/unicornStudio.umd.js"
        script.async = true

        script.onload = () => {
          scriptLoaded = true
          resolve()
        }

        script.onerror = () => {
          console.error("[UnicornStudio] Script load failed")
          reject(new Error("Failed to load Unicorn Studio SDK"))
        }

        document.body.appendChild(script)
      })
    }

    const initScene = async () => {
      try {
        await loadScript()

        if (window.UnicornStudio && containerRef.current) {
          containerRef.current.id = elementId.current

          await window.UnicornStudio.addScene({
            elementId: elementId.current,
            filePath: jsonFilePath,
            lazyLoad: true,
          })

          setIsLoading(false)
        }
      } catch (error) {
        console.error("[UnicornStudio] Init error:", error)
        setHasError(true)
        setIsLoading(false)
      }
    }

    initScene()

    return () => {
      if (window.UnicornStudio) {
        window.UnicornStudio.destroy()
      }
    }
  }, [mounted, jsonFilePath])

  if (!mounted) return null

  const fallbackImage = resolvedTheme === "light" ? fallbackImageLight : fallbackImageDark

  if (hasError) {
    return (
      <div className={cn("flex items-center justify-center", className)} style={{ width, height }}>
        <img src={fallbackImage} alt="Fallback" className="w-full h-full object-contain" />
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={cn("unicorn-embed", className)}
      style={{ width: width || '100%', height: height || '100%' }}
    >
      {isLoading && (
        <div className="flex items-center justify-center w-full h-full">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      )}
    </div>
  )
}
