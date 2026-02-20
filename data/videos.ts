export interface VideoSource {
  webm?: string
  webmLight?: string
  webmMobile?: string
  mp4?: string
  mp4Light?: string
  mp4Mobile?: string
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
      mp4: '/videos/dark/hero-energy-command-center.mp4',
      mp4Light: '/videos/light/hero-banner-light.mp4',
      poster: '/images/sections/solar-control-hero-graphic.png',
    },
    priority: true,
    description: 'Energy Command Center demo',
  },
  footerBg: {
    src: {
      mp4: '/videos/dark/hero-energy-command-center.mp4',
      mp4Light: '/videos/light/hero-banner-light.mp4',
    },
    priority: false,
    description: 'Footer background animation',
  },
  homeOwners: {
    src: {
      mp4: '/videos/dark/homeowners-banner-dark.mp4',
      mp4Light: '/videos/light/homeowners-banner-light.mp4',
    },
    priority: false,
    description: 'Home Owners segment video',
  },
  commercialBuilding: {
    src: {
      mp4: '/videos/dark/building-banner-dark.mp4',
      mp4Light: '/videos/light/building-banner-light.mp4',
    },
    priority: false,
    description: 'Commercial Building Owners segment video',
  },
  aggregators: {
    src: {
      mp4: '/videos/dark/aggregators-banner-dark.mp4',
      mp4Light: '/videos/light/aggregators-banner-light.mp4',
    },
    priority: false,
    description: 'Aggregators segment video',
  },
  resPark: {
    src: {
      mp4: '/videos/dark/res-park-banner-dark.mp4',
      mp4Light: '/videos/light/res-park-banner-light.mp4',
    },
    priority: false,
    description: 'RES Park Owners segment video',
  },
  gridOperators: {
    src: {
      mp4: '/videos/dark/dso-tso-banner-dark.mp4',
      mp4Light: '/videos/light/dso-tso-banner-light.mp4',
    },
    priority: false,
    description: 'DSOs & TSOs segment video',
  },
  solarControl: {
    src: {
      mp4: '/videos/dark/solar-control-banner-dark.mp4',
      mp4Light: '/videos/light/solar-control-banner-light.mp4',
    },
    priority: false,
    description: '+SolarControl product demo',
  },
  solarControlHero: {
    src: {
      mp4: '/videos/dark/solar-control-hero-dark.mp4',
      mp4Light: '/videos/light/solar-control-hero-light.mp4',
    },
    priority: true,
    description: 'Solar Control hero background',
  },
  mindAiCore: {
    src: {
      mp4: '/videos/dark/mind-banner-dark.mp4',
      mp4Light: '/videos/light/mind-banner-light.mp4',
    },
    priority: false,
    description: '+Mind AI Core product demo',
  },
  logoRotate: {
    src: {
      mp4: '/videos/dark/optimems-logo-rotate.mp4',
    },
    priority: false,
    description: 'Warranty section logo animation',
  },
  consult: {
    src: {
      mp4: '/videos/consult_compressed.mp4',
      mp4Mobile: '/videos/consult_mobile.mp4',
      poster: '/images/sections/consult-hero-poster-web.jpg',
    },
    priority: true,
    description: 'Consulting services hero background',
  },
}

export function getVideoSrc(key: string, isLight: boolean = false, isMobile: boolean = false): VideoSource | null {
  const asset = videos[key]
  if (!asset?.src) return null

  const src = asset.src

  let webmSource = src.webm
  let mp4Source = src.mp4

  if (isMobile) {
    if (src.webmMobile) webmSource = src.webmMobile
    if (src.mp4Mobile) mp4Source = src.mp4Mobile
  }

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
