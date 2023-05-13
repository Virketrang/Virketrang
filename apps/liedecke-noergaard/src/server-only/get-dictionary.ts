import 'server-only'

import { Locale } from '@types'

const dictionaries = {
    da: () => import('../../i18n/da.json').then((module) => module.default),
    en: () => import('../../i18n/en.json').then((module) => module.default),
    de: () => import('../../i18n/de.json').then((module) => module.default)
}

const getDictionary = async (locale: Locale) => dictionaries[locale]()

export default getDictionary
