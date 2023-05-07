import 'server-only'
import Locale from './locale'

const dictionaries = {
    da: () => import('./dictionaries/da.json').then((module) => module.default),
    en: () => import('./dictionaries/en.json').then((module) => module.default)
}

const getDictionary = async (locale: Locale) => dictionaries[locale]()

export default getDictionary
