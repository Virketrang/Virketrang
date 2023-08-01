import { getDictionary } from '@/liedecke-noergaard/server'
import Entry from './entry'

type Dictionary<T extends keyof Workspace.I18N.Dictionary<typeof getDictionary>> = T extends void
    ? Workspace.I18N.Dictionary<typeof getDictionary>
    : Entry<T>

export default Dictionary
