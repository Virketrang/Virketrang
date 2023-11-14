export default function setAlignItems({
    alignStart,
    alignCenter,
    alignEnd,
    alignStretch,
    alignBaseline
}: {
    alignStart?: Resolut.Primitive.Boolean
    alignCenter?: Resolut.Primitive.Boolean
    alignEnd?: Resolut.Primitive.Boolean
    alignStretch?: Resolut.Primitive.Boolean
    alignBaseline?: Resolut.Primitive.Boolean
}) {
    if (alignStart) {
        return 'flex-start'
    }
    if (alignCenter) {
        return 'center'
    }
    if (alignEnd) {
        return 'flex-end'
    }
    if (alignStretch) {
        return 'stretch'
    }
    if (alignBaseline) {
        return 'baseline'
    }
    return undefined
}
