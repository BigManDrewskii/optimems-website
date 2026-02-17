import { BlogPreview } from "./BlogPreview"
import type { BlogPost } from "@/lib/blog"

interface BlogPreviewWrapperProps {
  featuredPosts: BlogPost[]
}

export function BlogPreviewWrapper({ featuredPosts }: BlogPreviewWrapperProps) {
  return <BlogPreview featuredPosts={featuredPosts} />
}
