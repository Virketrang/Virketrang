import { getDictionary } from '@/liedecke-noergaard/server'

type Entry<T extends keyof Workspace.I18N.Dictionary<typeof getDictionary>> = Pick<
    Workspace.I18N.Dictionary<typeof getDictionary>,
    T
>[T]

export default Entry
