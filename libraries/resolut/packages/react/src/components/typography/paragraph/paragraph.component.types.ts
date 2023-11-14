export type ParagraphProps = Resolut.Component.Props.Typography<'p'> & {
    children: Resolut.Primitive.String
}

export type ParagraphRef = Resolut.Component.Ref<HTMLParagraphElement>

export type ParagraphComponent = Resolut.Component<ParagraphProps & ParagraphRef>

export default ParagraphComponent
