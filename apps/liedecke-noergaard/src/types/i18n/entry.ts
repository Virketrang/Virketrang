import { CompleteDictionary } from '.'

type Entry<T extends keyof CompleteDictionary> = Pick<CompleteDictionary, T>[T]

export default Entry
