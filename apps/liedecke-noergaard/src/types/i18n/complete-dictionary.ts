import { getDictionary } from '@/server'

type CompleteDictionary = Awaited<ReturnType<typeof getDictionary>>

export default CompleteDictionary
