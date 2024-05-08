import { persistentAtom } from '@nanostores/persistent'

const $Companies = persistentAtom<Entity.Company[] | undefined>('companies', undefined, {
    encode: JSON.stringify,
    decode: JSON.parse
})

export default $Companies
