const setFlexDirection = ({
    vertical,
    horizontal,
    reverse
}: {
    vertical?: Resolut.Primitive.Boolean
    horizontal?: Resolut.Primitive.Boolean
    reverse?: Resolut.Primitive.Boolean
}) => {
    if (vertical) return `column${reverse ? '-reverse' : ''}`
    if (horizontal) return `row${reverse ? '-reverse' : ''}`
    return undefined
}

export default setFlexDirection
