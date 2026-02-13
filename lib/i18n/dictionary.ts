import 'server-only';

const dictionaries = {
  el: () => import('@/messages/el.json').then((module) => module.default),
  en: () => import('@/messages/en.json').then((module) => module.default),
};

export type Locale = keyof typeof dictionaries;

export async function getTranslations(locale: Locale, namespace: string) {
  const dictionary = await dictionaries[locale]();
  
  function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = dictionary;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        console.warn(`Missing translation key: ${key}`);
        return key;
      }
    }
    
    if (typeof value === 'string') {
      return value;
    }
    
    console.warn(`Translation key is not a string: ${key}`);
    return key;
  }
  
  return { t, dictionary };
}

export function getLocaleFromPath(pathname: string): Locale {
  const segments = pathname.split('/');
  const potentialLocale = segments[1];
  
  if (potentialLocale === 'en') {
    return 'en';
  }
  
  return 'el';
}
