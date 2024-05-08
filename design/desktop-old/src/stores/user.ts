export default persistentAtom<Entity.User | undefined>('user', undefined, {
    encode: JSON.stringify,
    decode: JSON.parse
})
