export interface VideoSource {
  webm: string
  webmLight?: string // Optional light theme variant
  mp4?: string
  poster?: string
}

export interface VideoAsset {
  src: VideoSource
  priority?: boolean
  description?: string
}

export const videos: Record<string, VideoAsset> = {
  hero: {
    src: {
      webm: '/videos/hero-energy-command-center.webm',
      poster: '/hero-poster.jpg',
    },
    priority: true,
    description: 'Energy Command Center demo',
  },
  footerBg: {
    src: {
      webm: '/videos/footer-bg-animation.webm',
    },
    priority: false,
    description: 'Footer background animation',
  },
  homeOwners: {
    src: {
      webm: '/homeowners-banner-dark.webm',
      webmLight: '/homeowners-banner-light.webm',
    },
    priority: false,
    description: 'Home Owners segment video',
  },
  commercialBuilding: {
    src: {
      webm: '/videos/user-segment-commercial-building.webm',
    },
    priority: false,
    description: 'Commercial Building Owners segment video',
  },
  aggregators: {
    src: {
      webm: '/videos/user-segment-aggregators.webm',
    },
    priority: false,
    description: 'Aggregators segment video',
  },
  resPark: {
    src: {
      webm: '/videos/user-segment-res-park.webm',
    },
    priority: false,
    description: 'RES Park Owners segment video',
  },
  gridOperators: {
    src: {
      webm: '/videos/user-segment-grid-operators.webm',
    },
    priority: false,
    description: 'DSOs & TSOs segment video',
  },
  solarControl: {
    src: {
      webm: '/videos/product-solar-control.webm',
    },
    priority: false,
    description: '+SolarControl product demo',
  },
  mindAiCore: {
    src: {
      webm: '/videos/product-mind-ai-core.webm',
    },
    priority: false,
    description: '+Mind AI Core product demo',
  },
  logoRotate: {
    src: {
      webm: '/videos/optimems-logo-rotate.webm',
    },
    priority: false,
    description: 'Warranty section logo animation',
  },
  mindHero: {
    src: {
      webm: '/videos/mind-hero-banner.mp4',
    },
    priority: true,
    description: '+Mind product hero video',
  },
}

export function getVideoSrc(key: string, isLight: boolean = false): VideoSource | null {
  const asset = videos[key]
  if (!asset?.src) return null

  const src = asset.src
  // If there's a light theme variant and we're in light mode, use it
  if (isLight && src.webmLight) {
    return { webm: src.webmLight, mp4: src.mp4, poster: src.poster }
  }

  return { webm: src.webm, mp4: src.mp4, poster: src.poster }
}

export function isPriorityVideo(key: string): boolean {
  const asset = videos[key]
  return asset?.priority ?? false
}

export function getAllVideoKeys(): string[] {
  return Object.keys(videos)
}
