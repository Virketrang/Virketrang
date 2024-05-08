export default persistentAtom<{ sidebar: 'open' | 'closed' }>(
    'app',
    { sidebar: 'open' },
    {
        encode: JSON.stringify,
        decode: JSON.parse
    }
)
