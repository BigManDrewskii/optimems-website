import { useTranslations, useLocale } from "next-intl"

/**
 * Combined hook for translations and locale detection.
 * Eliminates repetitive locale checking pattern across components.
 *
 * @returns Object with translation function, locale, and Greek detection
 *
 * @example
 * const { t, isGreek, locale } = useTranslationWithLocale()
 * return <h1 className={isGreek ? 'greek-heading' : ''}>{t('title')}</h1>
 */
export function useTranslationWithLocale() {
  const t = useTranslations()
  const locale = useLocale()
  const isGreek = locale === "el"

  return { t, isGreek, locale }
}
