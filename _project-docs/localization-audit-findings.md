# Localization Audit Findings

## Category 1: Entire Pages with Hardcoded English (No useTranslations at all)

These pages have ALL their content hardcoded in English with zero localization:

1. **`app/[locale]/cookies/page.tsx`** — Cookie Policy page (all text hardcoded)
2. **`app/[locale]/privacy/page.tsx`** — Privacy Policy page (all text hardcoded)
3. **`app/[locale]/terms/page.tsx`** — Terms of Service page (all text hardcoded)
4. **`app/[locale]/login/page.tsx`** — Login page (all text hardcoded)
5. **`app/[locale]/signup/page.tsx`** — Signup page (all text hardcoded)
6. **`app/[locale]/support/page.tsx`** — Support page (all text hardcoded)
7. **`app/[locale]/demo/page.tsx`** — Demo request page (partially hardcoded)

## Category 2: Components with Hardcoded English Strings

1. **`components/branding/LogoCard.tsx`** — "Download SVG", "Download PNG"
2. **`components/branding/ThemeComparisonCard.tsx`** — "Light Theme", "Dark Theme"
3. **`components/dashboard-demo-cta/components/widgets/RequestCardsDemo.tsx`** — "Recent Requests" (inside dashboard mock, may be intentional)
4. **`components/products/mind/OrbitGraphic.tsx`** — "Energy Management System Orbital Visualization"
5. **`components/sections/GovernmentLogos.tsx`** — alt text: "Digital Reform", "Hellenic Democracy", "Society Info"

## Category 3: Hardcoded Alt Text / Aria Labels (Accessibility)

These are hardcoded English strings in alt, aria-label, and title attributes:
- Footer: "Optimems home"
- Header: "Optimems Home", "Open menu", "Close menu", "Main navigation", "Language selector"
- SolarHeroDemo: "Optimems Solar Control"
- MindHero: "Optimems Mind"
- SolarTrust: "Officially Certified"
- EuropeMap: "Zoom in", "Zoom out"
- Pagination: "Blog pagination"

## Category 4: isGreek CSS class toggling (NOT issues - just styling)

Many components use `isGreek ? 'greek-text' : ''` for CSS class toggling. This is intentional
for font/typography adjustments and is NOT a localization issue.
