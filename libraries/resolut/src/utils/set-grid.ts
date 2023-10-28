const setGrid = (value: Resolut.Attribute.GridArea | undefined) => {
    if (!value) return undefined
    if (value === 'span-all') return '1 / -1'
    else return value
}

export default setGrid
