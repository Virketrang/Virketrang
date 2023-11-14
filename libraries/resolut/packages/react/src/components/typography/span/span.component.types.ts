export type SpanProps = Resolut.Component.Props.Typography<'span'> & {
    children: Resolut.Primitive.String
}

export type SpanRef = Resolut.Component.Ref<HTMLSpanElement>

export type SpanComponent = Resolut.Component<SpanProps & SpanRef>

export default SpanComponent
