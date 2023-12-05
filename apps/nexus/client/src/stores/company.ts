export default persistentAtom<Entity.Company | undefined>('company', undefined, {
    encode: JSON.stringify,
    decode: JSON.parse
})
