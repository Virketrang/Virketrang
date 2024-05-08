import { persistentAtom } from '@nanostores/persistent'

const $User = persistentAtom<Entity.User | undefined>('user', undefined, {
    encode: JSON.stringify,
    decode: JSON.parse
})

export default $User
