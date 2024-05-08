import { persistentAtom } from '@nanostores/persistent'

const $Company = persistentAtom<Entity.Company | undefined>('company', undefined, {
    encode: JSON.stringify,
    decode: JSON.parse
})

export default $Company
