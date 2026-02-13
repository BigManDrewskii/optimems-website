"use client"

import { SectionHeader, AnimatedGrid } from "@/components/shared"
import type { BlogPost } from "@/lib/blog"
import { ArrowRight } from "lucide-react"
import { Link } from "@/i18n/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { useMemo, useState, useEffect } from "react"
import { useTranslations, useLocale } from "next-intl"

function formatBlogDate(dateString: string, locale: string): string {
  const date = new Date(dateString)

  if (locale === 'el') {
    const greekMonths = [
      'Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
      'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'
    ]
    return `${date.getDate()} ${greekMonths[date.getMonth()]} ${date.getFullYear()}`
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Derive light image from dark image path
const getLightImage = (darkPath: string): string => {
  return darkPath.replace('-dark.jpeg', '-light.jpeg')
}

// Featured blog posts to show on homepage
const featuredSlugs = [
  '2025-06-26-optimems-nbg-business-seeds',
  '2025-06-02-optimems-web-summit-vancouver',
  '2025-05-10-job-opening-tech-support'
]

interface BlogPreviewProps {
  featuredPosts?: BlogPost[]
}

export function BlogPreview({ featuredPosts: postsProp }: BlogPreviewProps) {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const t = useTranslations('blog')
  const locale = useLocale()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Use provided posts or empty array (will be populated by server component)
  const featuredPosts = postsProp || []

  // Resolve images based on theme
  const resolvedPosts = useMemo(() => {
    return featuredPosts.map((post) => {
      const lightImage = post.featured_image?.endsWith('-dark.jpeg')
        ? getLightImage(post.featured_image)
        : null
      const resolvedImage = mounted && resolvedTheme === "light" && lightImage
        ? lightImage
        : post.featured_image

      return {
        ...post,
        resolvedImage,
      }
    })
  }, [featuredPosts, mounted, resolvedTheme])

  // Don't render if no posts
  if (!featuredPosts || featuredPosts.length === 0) {
    return null
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1400px]">
        <SectionHeader
          label={t('label')}
          title={t('title')}
          description={t('subtitle')}
        />

        <AnimatedGrid columns={3} gap="lg" staggerDelay={0.1} className="grid sm:grid-cols-2 md:grid-cols-3">
          {resolvedPosts.map((post) => (
              <div key={post.slug} className="block group h-full">
                <div className="h-full rounded-xl md:rounded-2xl bg-card/60 backdrop-blur-sm border border-border/30 shadow-sm transition-all duration-300 hover:border-secondary overflow-hidden flex flex-col">
                {post.resolvedImage && (
                  <div className="relative w-full aspect-video overflow-hidden bg-foreground/20">
                    <Image
                      src={post.resolvedImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 md:top-4 md:left-4">
                      <span className="inline-block px-2.5 py-1 text-xs font-semibold bg-background/90 backdrop-blur-sm rounded-full border border-border/50">
                        {post.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-4 md:p-6 flex flex-col flex-1">
                  <div className="text-xs md:text-sm text-muted-foreground mb-2 md:mb-3">
                    {formatBlogDate(post.date, locale)}
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors mb-2 md:mb-3 flex-1 leading-relaxed">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group/btn inline-flex items-center gap-2 border border-border bg-card gap-2 h-11 md:h-[50px] px-4 md:px-5 rounded-full hover:border-secondary transition-all duration-300 text-sm font-medium text-foreground"
                    >
                      <span>{t('readArticle')}</span>
                      <div className="text-muted-foreground group-hover/btn:ml-4 ease-in-out transition-all size-[18px] md:size-[20px] flex items-center justify-center rounded-full border-2 border-border">
                        <ArrowRight className="w-[10px] h-[10px] md:w-[12px] md:h-[12px] group-hover/btn:rotate-180 ease-in-out transition-all" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </AnimatedGrid>

        <div className="text-center mt-8 md:mt-12">
          <Button variant="secondary" size="lg" asChild>
            <Link href="/blog">
              {t('viewAllArticles')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
