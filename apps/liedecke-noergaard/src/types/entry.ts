import { getDictionary } from '@/liedecke-noergaard/server'

type Entry<T extends keyof I18N.Dictionary<typeof getDictionary>> = Pick<I18N.Dictionary<typeof getDictionary>, T>[T]

export default Entry
