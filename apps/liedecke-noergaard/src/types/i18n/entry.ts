import { CompleteDictionary } from '@/types'

type Entry<T extends keyof CompleteDictionary> = Pick<CompleteDictionary, T>[T]

export default Entry
