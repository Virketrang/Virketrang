import { CompleteDictionary, Entry } from '@/types'

type Dictionary<T extends keyof CompleteDictionary> = T extends void ? CompleteDictionary : Entry<T>

export default Dictionary
