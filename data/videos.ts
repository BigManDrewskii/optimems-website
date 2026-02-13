export interface VideoSource {
  webm: string
  webmLight?: string // Optional light theme variant
  webmMobile?: string // Optional mobile-optimized variant
  mp4?: string
  mp4Light?: string // Optional light theme MP4 variant
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
      webm: '/videos/dark/hero-energy-command-center.webm',
      webmLight: '/videos/light/hero-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/hero-energy-command-center.mp4',
      mp4Light: '/videos/mp4-videos/light/hero-banner-light.mp4',
      poster: '/images/sections/solar-control-hero-graphic.png',
    },
    priority: true,
    description: 'Energy Command Center demo',
  },
  footerBg: {
    src: {
      webm: '/videos/dark/hero-energy-command-center.webm',
      webmLight: '/videos/light/hero-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/hero-energy-command-center.mp4',
      mp4Light: '/videos/mp4-videos/light/hero-banner-light.mp4',
    },
    priority: false,
    description: 'Footer background animation',
  },
  homeOwners: {
    src: {
      webm: '/videos/dark/homeowners-banner-dark.webm',
      webmLight: '/videos/light/homeowners-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/homeowners-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/homeowners-banner-light.mp4',
    },
    priority: false,
    description: 'Home Owners segment video',
  },
  commercialBuilding: {
    src: {
      webm: '/videos/dark/building-banner-dark.webm',
      webmLight: '/videos/light/building-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/building-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/building-banner-light.mp4',
    },
    priority: false,
    description: 'Commercial Building Owners segment video',
  },
  aggregators: {
    src: {
      webm: '/videos/dark/aggregators-banner-dark.webm',
      webmLight: '/videos/light/aggregators-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/aggregators-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/aggregators-banner-light.mp4',
    },
    priority: false,
    description: 'Aggregators segment video',
  },
  resPark: {
    src: {
      webm: '/videos/dark/res-park-banner-dark.webm',
      webmLight: '/videos/light/res-park-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/res-park-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/res-park-banner-light.mp4',
    },
    priority: false,
    description: 'RES Park Owners segment video',
  },
  gridOperators: {
    src: {
      webm: '/videos/dark/dso-tso-banner-dark.webm',
      webmLight: '/videos/light/dso-tso-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/dso-tso-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/dso-tso-banner-light.mp4',
    },
    priority: false,
    description: 'DSOs & TSOs segment video',
  },
  solarControl: {
    src: {
      webm: '/videos/dark/solar-control-banner-dark.webm',
      webmLight: '/videos/light/solar-control-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/solar-control-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/solar-control-banner-light.mp4',
    },
    priority: false,
    description: '+SolarControl product demo',
  },
  mindAiCore: {
    src: {
      webm: '/videos/dark/mind-banner-dark.webm',
      webmLight: '/videos/light/mind-banner-light.webm',
      mp4: '/videos/mp4-videos/dark/mind-banner-dark.mp4',
      mp4Light: '/videos/mp4-videos/light/mind-banner-light.mp4',
    },
    priority: false,
    description: '+Mind AI Core product demo',
  },
  logoRotate: {
    src: {
      webm: '/videos/dark/optimems-logo-rotate.webm',
      mp4: '/videos/mp4-videos/dark/optimems-logo-rotate.mp4',
    },
    priority: false,
    description: 'Warranty section logo animation',
  },
  consult: {
    src: {
      webm: '/videos/consult_compressed.webm',
      webmMobile: '/videos/consult_mobile.webm',
      mp4: '/videos/consult_compressed.mp4',
      poster: '/images/sections/consult-hero-poster-web.jpg',
    },
    priority: true, // Priority for hero section
    description: 'Consulting services hero background',
  },
}

export function getVideoSrc(key: string, isLight: boolean = false, isMobile: boolean = false): VideoSource | null {
  const asset = videos[key]
  if (!asset?.src) return null

  const src = asset.src
  
  // Choose appropriate video source based on device and theme
  let webmSource = src.webm
  let mp4Source = src.mp4
  
  // Prioritize mobile version on small screens
  if (isMobile && src.webmMobile) {
    webmSource = src.webmMobile
  }
  
  // If there's a light theme variant and we're in light mode, use it
  if (isLight) {
    webmSource = src.webmLight || webmSource
    mp4Source = src.mp4Light || mp4Source
  }

  return { webm: webmSource, mp4: mp4Source, poster: src.poster }
}

export function isPriorityVideo(key: string): boolean {
  const asset = videos[key]
  return asset?.priority ?? false
}
