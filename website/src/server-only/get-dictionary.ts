import 'server-only'

const dictionaries = {
    'da-DK': () => import('../assets/i18n/da.json').then((module) => module.default),
    'en-GB': () => import('../assets/i18n/en.json').then((module) => module.default)
} as const

const getDictionary = async (locale: Workspace.I18N.Locale) => dictionaries[locale]()

export default getDictionary
