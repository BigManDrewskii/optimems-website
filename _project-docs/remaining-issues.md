# Remaining Issues Found

## CRITICAL (Production Blockers)

### 1. Broken Link: /project-scope (GovernmentLogos.tsx:67)
- Links to `/project-scope` which does not exist as a page
- Will result in a 404 for users

### 2. Non-localized Link imports (next/link instead of @/i18n/navigation)
These files use `next/link` instead of the i18n-aware `Link` from `@/i18n/navigation`.
When using `next/link`, the locale prefix is NOT automatically added, so links like `href="/"` 
will navigate to the root `/` instead of `/{locale}/`, breaking locale persistence.

Files affected:
- cookies/page.tsx
- error.tsx
- login/page.tsx
- not-found.tsx
- privacy/page.tsx
- signup/page.tsx
- support/page.tsx
- terms/page.tsx
- components/about-us/BlogSection.tsx
- components/about-us/ValuesSection.tsx
- components/about-us/WorkWithUsSection.tsx

## MEDIUM (Should Fix)

### 3. Console.log statements left in production code
- login/page.tsx:25 - console.log("[v0] Login attempt:", { email, password }) — SECURITY RISK
- signup/page.tsx:33,40 - console.log password mismatch and signup data

### 4. Placeholder phone number
- data/landing-page.ts:573 - phone: '+30 XXX XXX XXXX' (TODO comment says replace)

### 5. SolarHero placeholder text
- components/products/solar-control/SolarHero.tsx:98 - "SolarControl hero media placeholder" visible text

## LOW (Nice to Have)

### 6. Unused data file
- data/brand-colors.ts - not imported anywhere

### 7. Missing error boundary for some routes
- No loading.tsx for: compatibility-lists, cookies, demo, login, privacy, signup, terms
