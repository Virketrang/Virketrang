import { persistentMap } from '@nanostores/persistent'

const $App = persistentMap<{ sidebar: 'open' | 'closed' }>(
    'app',
    { sidebar: 'open' },
    {
        encode: JSON.stringify,
        decode: JSON.parse
    }
)

export default $App
