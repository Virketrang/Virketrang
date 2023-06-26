import 'server-only'

import { Locale } from '@/types'

const dictionaries = {
    da: () => import('../assets/i18n/da.json').then((module) => module.default),
    en: () => import('../assets/i18n/en.json').then((module) => module.default)
} as const

const getDictionary = async (locale: Locale) => dictionaries[locale]()

export default getDictionary
