export default persistentAtom<Entity.Company[] | undefined>('companies', undefined, {
    encode: JSON.stringify,
    decode: JSON.parse
})
