export default function setTextDecoration({
    overline,
    underline,
    lineThrough,
    blink
}: {
    overline?: Resolut.Primitive.Boolean
    underline?: Resolut.Primitive.Boolean
    lineThrough?: Resolut.Primitive.Boolean
    blink?: Resolut.Primitive.Boolean
}) {
    const textDecoration = []

    if (overline) textDecoration.push('overline')
    if (underline) textDecoration.push('underline')
    if (lineThrough) textDecoration.push('line-through')
    if (blink) textDecoration.push('blink')

    return textDecoration.join(' ')
}
