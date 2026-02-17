import { AppLayout } from "@/app/app-layout"
import { Hero } from "@/components/sections/Hero"
import { UserSegments } from "@/components/sections/UserSegments"
import { Stats } from "@/components/sections/Stats"
import { ValuePropositions } from "@/components/sections/ValuePropositions"
import { Products } from "@/components/sections/Products"
import dynamic from "next/dynamic"
import { BlogPreviewWrapper } from "@/components/sections/BlogPreviewWrapper"
import { ContactCTA } from "@/components/sections/ContactCTA"
import { GovernmentLogos } from "@/components/sections/GovernmentLogos"
import { Skeleton } from "@/components/ui/skeleton"
import { getAllPosts } from "@/lib/blog"

const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <Skeleton className="h-[800px] w-full max-w-[1400px] mx-auto" />,
  ssr: true
})

// Featured blog posts to show on homepage
const featuredSlugs = [
  '2025-06-26-optimems-nbg-business-seeds',
  '2025-06-02-optimems-web-summit-vancouver',
  '2025-05-10-job-opening-tech-support'
]

interface HomePageProps {
  params: Promise<{ locale: string }>
}

export default async function Home({ params }: HomePageProps) {
  const resolvedParams = await params
  const { locale } = resolvedParams

  // Fetch featured posts from actual blog data (server-side)
  const allPosts = getAllPosts(locale)
  const featuredPosts = allPosts.filter(post => featuredSlugs.includes(post.slug))

  return (
    <AppLayout>
      <div className="flex flex-col min-h-screen w-full relative">

        <div className="flex-1">
          <Hero />
          <UserSegments />
          <Stats />
          <GovernmentLogos />
          <Products />
          <ValuePropositions />
          <Testimonials />
          <BlogPreviewWrapper featuredPosts={featuredPosts} />
          <ContactCTA />
        </div>
      </div>
    </AppLayout>
  )
}
