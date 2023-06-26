import { CompleteDictionary, Entry } from '.'

type Dictionary<T extends keyof CompleteDictionary> = T extends void ? CompleteDictionary : Entry<T>

export default Dictionary
