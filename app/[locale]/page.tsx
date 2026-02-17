import { AppLayout } from "@/app/app-layout"
import { Hero } from "@/components/sections/Hero"
import { UserSegments } from "@/components/sections/UserSegments"
import dynamic from "next/dynamic"
import { Skeleton } from "@/components/ui/skeleton"
import { getAllPosts } from "@/lib/blog"

// Below-fold sections loaded dynamically to reduce initial JS bundle
const Stats = dynamic(() => import("@/components/sections/Stats").then(mod => ({ default: mod.Stats })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const GovernmentLogos = dynamic(() => import("@/components/sections/GovernmentLogos").then(mod => ({ default: mod.GovernmentLogos })), {
  loading: () => <Skeleton className="h-[120px] w-full" />,
  ssr: true
})
const Products = dynamic(() => import("@/components/sections/Products").then(mod => ({ default: mod.Products })), {
  loading: () => <Skeleton className="h-[600px] w-full" />,
  ssr: true
})
const ValuePropositions = dynamic(() => import("@/components/sections/ValuePropositions").then(mod => ({ default: mod.ValuePropositions })), {
  loading: () => <Skeleton className="h-[500px] w-full" />,
  ssr: true
})
const Testimonials = dynamic(() => import("@/components/sections/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <Skeleton className="h-[800px] w-full" />,
  ssr: true
})
const BlogPreviewWrapper = dynamic(() => import("@/components/sections/BlogPreviewWrapper").then(mod => ({ default: mod.BlogPreviewWrapper })), {
  loading: () => <Skeleton className="h-[400px] w-full" />,
  ssr: true
})
const ContactCTA = dynamic(() => import("@/components/sections/ContactCTA").then(mod => ({ default: mod.ContactCTA })), {
  loading: () => <Skeleton className="h-[300px] w-full" />,
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
