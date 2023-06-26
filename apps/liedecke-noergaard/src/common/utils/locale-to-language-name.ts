import { Locale } from '@/types'

export default function localeToLanguageName(locale: Locale) {
    switch (locale) {
        case 'da':
            return 'Dansk'
        case 'en':
            return 'English'
        default:
            throw Error('Unknown locale: could not get language name from locale')
    }
}
