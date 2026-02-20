import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Uppercase text following Greek typographic rules.
 * Strips tonos / dialytika-tonos before uppercasing so that
 * ά→Α, έ→Ε, ή→Η, ί→Ι, ό→Ο, ύ→Υ, ώ→Ω, ΐ→Ϊ, ΰ→Ϋ.
 */
export function toGreekUpper(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .normalize('NFC')
    .toUpperCase()
}
