import { getDictionary } from '@/liedecke-noergaard/server'
import Entry from './entry'

type Dictionary<T extends keyof I18N.Dictionary<typeof getDictionary>> = T extends void
    ? I18N.Dictionary<typeof getDictionary>
    : Entry<T>

export default Dictionary
