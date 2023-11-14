export default function setJustifyContent({
    justifyStart,
    justifyCenter,
    justifyEnd,
    justifyAround,
    justifyEvenly,
    justifyBetween
}: {
    justifyStart?: Resolut.Primitive.Boolean
    justifyCenter?: Resolut.Primitive.Boolean
    justifyEnd?: Resolut.Primitive.Boolean
    justifyAround?: Resolut.Primitive.Boolean
    justifyEvenly?: Resolut.Primitive.Boolean
    justifyBetween?: Resolut.Primitive.Boolean
}) {
    if (justifyStart) {
        return 'flex-start'
    }
    if (justifyCenter) {
        return 'center'
    }
    if (justifyEnd) {
        return 'flex-end'
    }
    if (justifyAround) {
        return 'space-around'
    }
    if (justifyEvenly) {
        return 'space-evenly'
    }
    if (justifyBetween) {
        return 'space-between'
    }
    return undefined
}
